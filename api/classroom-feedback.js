// Server-only peer feedback relay. No credentials or applicant data stored in the repository.
// iCloud+ receives email at questions@loptrlab.com; Resend only relays outbound messages.
const ROLES = new Set(["artist-manager","uk-law","finance","educator","other"]);
const ANSWERS = new Set(["yes","partly","no"]);
module.exports = async function handler(req,res) {
  res.setHeader("Cache-Control","no-store");
  res.setHeader("X-Content-Type-Options","nosniff");
  if(req.method!=="POST"){res.setHeader("Allow","POST");return res.status(405).json({error:"Method not allowed"});}
  const origin=req.headers.origin||"";
  const host=req.headers.host||"";
  let originHost; try { originHost=new URL(origin).host; } catch { return res.status(403).json({error:"Invalid origin"}); }
  if(!host||originHost!==host) return res.status(403).json({error:"Invalid origin"});
  const raw=req.body;
  if(Number(req.headers["content-length"]||0)>4096) return res.status(413).json({error:"Form too large"});
  let data; try { data=typeof raw==="string"?JSON.parse(raw):raw; } catch { return res.status(400).json({error:"Invalid JSON"}); }
  if(!data||typeof data!=="object"||!ROLES.has(data.role)||!ANSWERS.has(data.usefulness)||data.agreed!==true) return res.status(400).json({error:"Invalid form"});
  for(const k of ["suggestion","email"])if(data[k]!=null&&typeof data[k]!=="string")return res.status(400).json({error:"Invalid field"});
  const suggestion=(data.suggestion||"").trim();
  const email=(data.email||"").trim();
  if(suggestion.length>1000||email.length>120||email&& !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return res.status(400).json({error:"Invalid input"});
  // Separate secret configuration from iCloud+ receiving mailbox.
  const key=process.env.RESEND_API_KEY,from=process.env.FEEDBACK_FROM_EMAIL;
  if(!key||!from)return res.status(503).json({error:"Feedback is not accepting submissions yet"});
  const body=["50 Ways synthetic classroom feedback","Perspective: "+data.role,"Useful: "+data.usefulness,"Suggestion: "+(suggestion||"(none)"),"Optional follow-up: "+(email||"(none)"),"Consent: product feedback only"].join("\n");
  try {
    const response=await fetch("https://api.resend.com/emails",{
      method:"POST",headers:{"Authorization":"Bearer "+key,"Content-Type":"application/json"},
      body:JSON.stringify({from,to:["questions@loptrlab.com"],subject:"50 Ways classroom peer feedback",text:body})
    });
    if(!response.ok){
      console.error("Classroom mail provider HTTP status:", response.status);
      const cause = response.status === 401 || response.status === 403
        ? "Email sender rejected the API key or its permissions"
        : response.status === 422
        ? "Email sender rejected the from/to configuration"
        : "Email sender rejected the request";
      return res.status(502).json({error: cause + " (provider HTTP " + response.status + ")"});
    }
    return res.status(200).json({ok:true});
  }catch{return res.status(502).json({error:"Email delivery unavailable"});}
};
