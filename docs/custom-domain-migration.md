# 50 Ways custom domain migration

Target: https://50ways.loptrlab.com/
Hosting remains GitHub Pages in ibloud/50-ways-to-leave-another.

## Prepared changes

Canonical URL, Open Graph URL and image, structured data, sitemap, and README listening link use the new host. WebSite metadata supplies the project name at the new subdomain root. Relative asset, document, and PIXIE links remain unchanged. CNAME supports branch-based GitHub Pages publishing; robots.txt advertises the sitemap at the new domain root.

## Activation status

On October 6, 2026, initial public DNS lookup returned NXDOMAIN. The owner then configured Pages and DNS: subsequent public DNS resolved 50ways.loptrlab.com as a CNAME to ibloud.github.io, and the HTTPS homepage and sitemap returned HTTP 200. The main-branch CNAME file is preserved exactly. The previously served canonical URL and sitemap still pointed to the old GitHub address; this migration corrects them. Post-deployment metadata, redirect, and asset verification remains required.

1. Verify the existing GitHub Pages publishing source in repository Settings > Pages. Set Custom domain to `50ways.loptrlab.com`. If GitHub creates a CNAME commit, reconcile the matching CNAME file before merging this migration.
2. In Porkbun DNS for loptrlab.com, add exactly this record: type CNAME, host `50ways`, answer `ibloud.github.io`, TTL 600 (or provider default). Use the hostname only, with no protocol or repository path. Do not change root, mail, or other subdomain records.
3. Merge the migration pull request after confirming Pages is bound to the new hostname and DNS resolves correctly. Do not publish new canonical URLs before the hostname is ready.
4. When the certificate is available, enable Enforce HTTPS in Pages. Check HTTPS homepage, social image, stylesheet, sitemap, robots.txt, and PIXIE demo.
5. Verify the old project URL redirects to the new homepage and old deep links preserve their paths. Keep the repository and old GitHub Pages address in place.
6. Add the new URL-prefix property to Google Search Console; inspect the homepage, request indexing, and submit sitemap.xml. Update public profile links after HTTPS is confirmed.

A DNS or certificate delay is not a completed migration. CNAME files do not configure Porkbun DNS. For custom Actions publishing, the Pages custom-domain setting is authoritative and CNAME is ignored.

If activation fails, restore the previous canonical URLs and sitemap, remove this repository's Pages custom-domain setting, and remove only the newly added 50ways DNS record. Never modify unrelated domains or records.

References:
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://developers.google.com/search/docs/appearance/site-names
