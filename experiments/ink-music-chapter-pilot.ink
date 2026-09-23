// 50 Ways to Leave Another — fictional chapter pilot.
// Public-safe educational scenario. No sponsor, artist, song, or release is represented as attached.
// Music URLs and sponsor disclosures belong in the host page, never in this story source.

VAR evidence = false
VAR permission = false
VAR sponsor_control = false

-> restart

=== restart ===
~ evidence = false
~ permission = false
~ sponsor_control = false
-> opening

=== opening ===
# chapter:THE OFFER
# type:fictional
A fictional song is proposed for a private listening test. A brand offers to fund the chapter page.
The offer mentions a logo, an early listen, and a say in the ending.
You are the independent producer. Which part do you examine first?

* [Follow the money.] -> funding
* [Follow the song.] -> song
* [Skip to the decision record.] -> record

=== funding ===
# chapter:WHO PAYS
A budget can pay for design, captions, accessibility testing, and contributors.
It does not automatically buy the composition, master, or the right to change the story.

* [Ask for an itemized scope and written terms.]
    ~ evidence = true
    -> sponsor_terms
* [Promise creative control to secure the money.]
    ~ sponsor_control = true
    -> consequence

=== song ===
# chapter:WHO CAN RELEASE
A streaming link can point to a recording only after its contributors, source elements,
splits, master owner, performer permissions, metadata, and distributor delivery are checked.

* [Record each right and ask each contributor for the required permission.]
    ~ permission = true
    -> listening
* [Publish the demo because the link is easy to share.] -> consequence

=== sponsor_terms ===
# chapter:THE BOUNDARY
The proposed sponsor may fund a clearly disclosed chapter.
Their name cannot appear as a partner or endorser until a written agreement says so.
Editorial review can check factual claims; it cannot silently rewrite the ending.

* [Keep final creative approval with the artist and disclose the relationship.] -> listening
* [Let the sponsor choose the ending.]
    ~ sponsor_control = true
    -> consequence

=== listening ===
# chapter:LISTEN OR READ
The listener may use a service link, an authorized preview, or the text-only route.
A subscription, account, email address, or stream is never required to continue.

* [Continue with the story text and approved credits.] -> record
* [Return to the rights questions.] -> song

=== consequence ===
# chapter:THE COST OF A SHORTCUT
An attractive offer or a working player does not resolve permission.
Record what changed, who is affected, and which decision must pause.

* [Write down the unresolved issue.] -> record

=== record ===
# chapter:DECISION RECORD
{ evidence:
    Funding terms have been requested in writing.
- else:
    Funding scope and sponsor authority are still unknown.
}
{ permission:
    Rights evidence has been requested for the recording; this is not clearance.
- else:
    Recording permission has not been established.
}
{ sponsor_control:
    A proposed sponsor would control creative content; revise or decline that term.
- else:
    Final creative approval has not been promised away in this path.
}
A public recap can show this fictional choice and its consequences.
It must not expose private agreements or claim that a real sponsor or collaborator agreed.

* [Restart and examine another path.] -> restart
* [Finish the pilot.] -> END
