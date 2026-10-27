# Validation — 23 October 2026

## Passed

- Both standalone Next.js production builds completed successfully, including every requested route and the dynamic property route.
- API tests passed in both projects: demo data lookup; missing detail; explicit empty/error states; live-mode configuration failure without mock fallback; HTTP failures; invalid response envelope; 404 response; valid empty live response; request cancellation and schema validation. Test network transport is stubbed; no invented endpoint is called on an actual server.
- Both desktop home layouts were visually inspected in the browser using the bundled logo and architecture assets.
- In production preview: property type filter narrowed to Retail; a nonsense search showed the empty state; clear filters reset inputs; price sort selection and a $700,000 cap narrowed to the $685,000 demo property; its detail link rendered the correct details.
- In production preview: event category filter narrowed to Education; member search narrowed to the lending sample; Contact rendered supplied details and labeled email-draft form; unknown property displayed the 404 screen.
- API/config/mock modules are identical across both variants. Local assets and lockfiles are included.

## Limits

- No real backend API URL, endpoints, auth model or response contract was supplied. Real integration, actual inventory, membership access and authenticated requests were not tested.
- Dev preview in this sandbox encountered an ENOENT `uv_resident_set_memory` error. Browser checks therefore used the successful production builds. Standard development and production-preview scripts are provided; production preview requires `npm run build` first.
- Responsive CSS was implemented at 700px and 1050px; a separate mobile viewport/device interaction pass was not available in the browser interface used for this delivery.
- Email sending, external map navigation and third-party registration were not performed. Contact opens an editable email draft; no sending service is implemented.
- No Vercel deployment or change to the existing ACRE website was performed. The package includes complete deployment and backend CORS instructions.

## Latest modern visual refresh

- Production build passed with Space Grotesk and Inter from next/font/google.
- Desktop browser inspection verified the floating sticky header, full-image panoramic hero, asymmetrical photo cards, bento community layout and event cards.
- Protected-source hashes verified that all Project A files, all page routes/content, lib modules, mocks, package configuration and existing component behavior were unchanged.
- Property photographs remain explicitly illustrative demo content, embedded in the original asset paths.
- A separate mobile-device browser pass was not available; responsive styles remain implemented.

## Latest ACRE branding and homepage hierarchy

- The standard npm run build completed successfully with the revised homepage, layout, header, CSS and authentic photo assets.
- Static build output was inspected for the new title and heading, event-first content, official membership links and local community images.
- Project A and every lib/mock source file were compared by SHA-256 and remain byte-identical. Non-home routes were retained.
- Latest visual browser QA could not complete: the managed preview showed stale production output, and rebuilding inside that preview environment failed with ENOENT uv_resident_set_memory. The normal local build passed. This is a preview-environment limitation; no fabricated successful screenshot is supplied.
- No real membership signup, payment, event registration or external message was submitted. The buttons link to verified official pages.

## Member-access implementation

- `npm run build` passed with the new static `/login` route and all previous routes retained.
- Built HTML checked for the member-access heading, sample-only notice, official sign-in/account links, local photo, input labels and sample password toggle accessibility attributes.
- SHA-256 comparison confirmed every Project A file and all existing lib/mock modules remain unchanged.
- This is a design preview. No real credentials, authentication request, account creation or external submission was performed.
- The managed preview limitation described above still prevents a reliable latest browser/device interaction pass. Build and static output checks passed; interactive behavior is implemented but not browser-verified in this environment.

## Complete original menu coverage — 27 October 2026

- `npm run build` passed with Webpack and one page-data worker; 55 static generation outputs, including 46 added section routes.
- All 55 original navigation entries are mapped to local destinations; all 52 distinct menu/contact/community/sitemap routes are present in the prerender manifest.
- Built HTML was checked for previously missing top-level and nested navigation labels and About content.
- Production HTTP smoke checks passed for every menu destination, Contact, Community and sitemap. Unknown general routes returned HTTP 404. The existing streamed property route renders the not-found screen for unknown IDs with HTTP 200; that pre-existing behavior is unchanged.
- SHA-256 checks confirmed all Project A files and every existing lib/mock module remain byte-identical.
- The initial Turbopack attempt encountered a persistence database/cache error. The delivered default now uses Webpack; its clean production build passed.
- Latest browser visual/device interaction checks remain unavailable in the managed preview. HTTP and static output checks are not a substitute for visual inspection on the user's device.
- Public collections are overview/access pages with verified original links, not full article/document migrations. Private data, video permissions, leads, membership management and checkout were neither simulated nor connected. No transactions were performed.
- Windows production build was not run here; reduced build concurrency addresses resource pressure but does not establish the cause of the user's native-worker crash.
