# ACRE Pittsburgh — Two frontend design directions

1. Next.js App Router + React + Tailwind CSS v4, standalone Vercel projects.
2. `app/` routes, `components/` UI, `lib/` API/config, `mocks/` fictional records, `public/` local images.
3. Home and Listings call `getListings()`; Property detail calls `getProperty(id)`.
4. Events calls `getEvents()`; Members calls `getMembers()`; Contact uses email links, no HTTP endpoint.
5. No backend contract was supplied. Verified endpoint map is intentionally empty; clearly labeled demo mode runs immediately.

## Choose a direction

| Project | Direction | Visual treatment |
| --- | --- | --- |
| `project-a` | Clean / corporate | Navy, off-white, generous spacing, serif accent, rounded cards |
| `project-b` | Modern / bold | Black, ACRE yellow and off-white; Space Grotesk / Inter; panoramic rounded hero, asymmetric image cards and bento sections |

Both are complete standalone projects. Their `lib/api.js`, adapters, endpoint configuration and mock data are byte-identical. No backend was modified. There is no authentication, registration or checkout backend integration because no corresponding contract was supplied. The /login page is a clearly labeled design preview linking to official ACRE account pages. This is an independent design concept, not the official association website.

## Run on Windows (PowerShell)

Install Node.js 20.9 or newer (Node 22/24 LTS recommended). Extract this ZIP first. From the extracted `acre-redesign` directory:

```powershell
cd project-b
Copy-Item .env.example .env.local
npm ci
npm run dev
```

Visit http://localhost:3000. To see Project B alongside it, open a second terminal:

```powershell
cd project-b
Copy-Item .env.example .env.local
npm ci
npm run dev -- --port 3001
```

Visit http://localhost:3001. On macOS/Linux use `cp .env.example .env.local`. Do not open page.js or the project folder directly in a browser; Next.js needs the dev server.

## Included pages and API mapping

| URL | Data function in `lib/api.js` | HTTP method | Verified path |
| --- | --- | --- | --- |
| `/` | `getListings`, `getEvents` | GET when configured | Not supplied |
| `/listings` | `getListings` | GET when configured | Not supplied |
| `/listings/[id]` | `getProperty(id)` | GET when configured | Not supplied |
| `/events` | `getEvents` | GET when configured | Not supplied |
| `/members` | `getMembers` | GET when configured | Not supplied |
| `/contact` | No HTTP request | None | No endpoint assumed |

GET is this scaffold's read-only transport choice, not a claim about the old backend. If its contract uses another method, adapt the centralized request function to that contract. The visible `.aspx` website pages are HTML pages, not verified JSON APIs.

## Connect the real backend

The old backend URL, API paths, auth model and request/response examples were placeholders in the brief. Connecting real data requires those details. Until then the default `.env.example` intentionally uses mocks.

1. Obtain the exact backend base URL, operation methods/paths, query names, response examples, pagination, authentication and image host. Ask the backend owner for the API contract or OpenAPI document.
2. Enter the verified base in `NEXT_PUBLIC_API_URL`. If it has a path prefix, endpoint paths without a leading slash retain that prefix; paths beginning `/` resolve from the host root.
3. In `lib/endpoints.js`, replace the relevant `null` values with functions returning the actual supplied paths. Encode property IDs with `encodeURIComponent` when interpolating them. No guessed example URL is included.
4. Map the actual response envelope and field names in `lib/adapters.js`. Its required fields describe the frontend view model, not the existing backend schema. Normalize numbers here. Do not pass secret or private member fields into the frontend.
5. Add only the verified HTTPS image host/path to `next.config.mjs` `images.remotePatterns`, or serve backend-approved images locally. `Media` renders a local illustration if an image fails.
6. Set `NEXT_PUBLIC_USE_MOCKS=false`, restart dev or rebuild on Vercel, and verify each page. Missing config, HTTP failures and invalid schemas produce an error, never an automatic mock fallback.
7. Current filters apply locally to the returned array. If the backend paginates, add its documented filters/pagination to `getListings` and the collection UI before using a large live catalog. A first page must not be presented as the full inventory.

`NEXT_PUBLIC_*` values are public and compiled into the client bundle. Never put API secrets there. Requests currently use `credentials: 'omit'`. Cookie-based authentication, private member access, CSRF handling and authorized writes must follow the real contract before enabling them; they are not simulated here. If the existing backend offers only HTML and no usable API, a frontend cannot create that missing API without additional integration work.

### Frontend view models (not claims about the existing API)

- Property: `id`, `title`, `city`, optional `district`, `type`, numeric `price`, numeric `area`, `image`, `description`.
- Event: `id`, `title`, `category`, `dateLabel`, `location`, `description`.
- Member: `id`, `name`, `role`, `specialty`. These are public directory fields only.

Contact opens the visitor's email app with an editable draft to Amy. No message is sent by this app. There is no fake success response or fabricated contact endpoint.

## Loading, error and empty states

Route-level `loading.js`, `error.js`, `not-found.js` plus collection skeletons, retry buttons and filtered empty states are included. Unknown property IDs return a real 404. To exercise collection states, keep mocks enabled and set one value, then restart/rebuild:

```dotenv
NEXT_PUBLIC_DEMO_STATE=loading
```

`loading` delays demo data by 4 seconds then resolves. `error` shows a retryable failure; `empty` returns no records and a 404 for detail; `ready` is normal. Returning to ready requires a restart/rebuild. Search a nonsense term to see filtered empty results immediately. Live requests have a 12-second timeout and unmount cancellation. Live failures do not silently show demo records.

## SEO, accessibility and images

App Router titles, descriptions, Open Graph metadata and robots controls are included. Demo builds are `noindex,nofollow` and disallow crawlers. Set `NEXT_PUBLIC_SITE_URL` to the real frontend origin before a production build. Per-page canonicals use this origin. Demo labels should be replaced only after content and authorization are verified. Next Image serves the bundled JPEG through Next.js optimization; local SVG illustrations are vector assets and do not need raster optimization. Keyboard focus, skip link, labeled fields, active navigation, reduced motion and a mobile navigation menu are included.

## Vercel deployment (no account deployment performed)

1. Push the extracted source to your own GitHub repository. Keep both project folders in the repository, or use separate repositories.
2. In Vercel, Add New → Project → import that repository.
3. Set Root Directory to `project-a` (or `acre-redesign/project-a` if you committed the outer folder). For the second deployment select `project-b`. Choose Next.js preset.
4. Use `npm ci` for installation and `npm run build` for build. Leave Output Directory at the Next.js default. Use Node.js 22 or 24.
5. Add `.env.example` values to the corresponding Vercel Preview and Production environments. For design review leave mocks true; for live data configure the verified endpoints and set mocks false. Set `NEXT_PUBLIC_SITE_URL` to that deployment's actual frontend origin, then redeploy to apply it.
6. Deploy. Check Home, filters, a property detail, unknown-ID 404, events, members, mobile menu and contact draft. Repeat for the other project.
7. Map the final custom domain only when the association approves the design and real integration. This package does not change the existing association's production website.

Official references: https://vercel.com/docs/frameworks/full-stack/nextjs and https://nextjs.org/docs/app/api-reference/components/image

## Backend CORS configuration — configuration guidance only

No backend code was changed. CORS is enforced by browsers, not solved by adding `Access-Control-Allow-Origin` to frontend requests. This frontend's collection requests run in the browser and require backend permission for cross-origin calls. The server-rendered property request does not use browser CORS; server egress/auth requirements still apply.

For this read-only scaffold, the backend owner should:

- Allow the exact approved frontend origins (e.g. local development `http://localhost:3000` and `http://localhost:3001`, then the actual Vercel/custom-domain origins). Maintain a deliberate preview-origin allowlist rather than allowing every vercel.app site.
- Return `Access-Control-Allow-Origin: <the matched allowed origin>` and `Vary: Origin` on success AND error responses.
- Permit GET and OPTIONS for these read operations. For preflight OPTIONS, validate Origin, requested method and requested headers, then return 204 with allow-methods and the allowed requested headers.
- The current GET sends only `Accept: application/json` and no cookies, so normally it does not trigger a preflight. If the real contract adds Authorization or non-simple requests, explicitly allow the actual required headers/methods and handle preflight.
- If real authentication uses cookies, explicitly enable credentialed requests on BOTH ends, set `Access-Control-Allow-Credentials: true`, use an explicit origin (never `*`), and review secure SameSite cookie and CSRF requirements. Do not enable credentials merely to fix a public read request.

These settings belong on the existing API server, gateway or reverse proxy. Exact code depends on its unprovided backend stack. CORS is not authorization; keep server authorization intact. If no configuration change at all is permitted, the owner must provide an already allowed API origin or approve a same-origin server proxy; no proxy or server change has been invented here.

Reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS

## Content and assets

- Meeting location, first-Tuesday recurrence and Amy's contact details come from the user's supplied brief. No meeting start time was supplied. The design asks visitors to confirm before attending.
- Listings, events and members in `mocks/data.js` are entirely fictional and visibly marked. They are not scraped inventory or real member identities.
- ACRE supplied logo is retained as `public/acre-logo.png` if successfully downloaded. The header uses the supplied logo on a white backing; the original lettering and colors are preserved.
- Architecture photograph: https://images.unsplash.com/photo-1486406146926-c627a92ad1ab (illustrative commercial building, not a Pittsburgh or ACRE property). Downloaded locally for stable previews.
- Project B property imagery is illustrative stock photography embedded in the existing SVG asset paths. It does not show actual ACRE listings. No mock records or image paths were changed.
  - Retail: https://images.unsplash.com/photo-1441986300917-64674bd600d8
  - Industrial: https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d
  - Residential: https://images.unsplash.com/photo-1600596542815-ffad4c1539a9

## Checks

Run `npm test` and `npm run build` inside either project. See `VALIDATION.md` for what was actually verified during delivery. No real backend end-to-end test is possible without the contract and access.

For a local production preview after building, use `npm run preview` (or `npm run preview -- --port 3001` for the second project). `npm run dev` uses Webpack for stable development behavior; production build uses the Next.js default bundler.

## Latest Project B visual refresh

Space Grotesk headings and Inter body are loaded with next/font/google. The floating navigation, asymmetric gallery, glass price badges, photo assets, bento community section, paired event cards and large wordmark footer replace the previous serif/gold presentation. The site retains its exact routes, page text, props, data, API modules and folder/file names. Project A is untouched.

## Latest ACRE brand alignment

The modern Project B layout is retained. ACRE's black/yellow identity now replaces the previous cobalt/mint concept. Home is ordered around events, membership, real community photographs, education, then properties. Existing lib modules, mock data and API behavior were not changed; registration and payment are handled only by the association's verified official membership page.

### Replace/copy these files inside project-b

- app/page.js
- app/layout.js
- app/globals.css
- components/Header.js
- components/Media.js
- public/acre-logo.png
- public/acre-meeting.jpg (new)
- public/acre-community.jpg (new)
- public/acre-speaker.jpg (new)

Copy the new image files as well as replacing the existing files. Do not delete the app directory. Keep your own .env.local. Stop the running dev server before replacing files, then restart with npm run dev -- --port 3001 and refresh localhost:3001.

### Verified source links and authentic association assets

- Association purpose, meeting gallery and homepage: https://www.acrepgh.org/default.aspx
- Membership application: https://www.acrepgh.org/MembershipInfo.aspx
- Event calendar: https://www.acrepgh.org/Calendar.aspx
- Official logo, linked from ACRE's joining site: https://assets.cdn.filesafe.space/Mmk2HFZmG8fazRzyXiD1/media/69a86d174b6c775ceb0b4962.png
- Hero and first gallery photo: https://www.acrepgh.org/Images/WEBSITE/PXL_20251203_011539208.jpg
- Community photo: https://www.acrepgh.org/Images/Header/IMG_7471.jpg
- Education speaker photo: https://www.acrepgh.org/Images/WEBSITE/PXL_20251104_232600860.jpg

The downloaded association photos are authentic site assets, not stock or generated meeting pictures. They are used for this independent redesign concept. The existing stock property images remain illustrative demo content. No attendance statistics, membership prices, participant identities or testimonials were invented. Event cards and inventory still use the labeled mocks until a real API contract is supplied.

## Member-access page update

Open `/login` or choose **Sign in** in the navigation. The split-screen design uses an authentic meeting photo, dark overlay, community badges, a rounded member-access panel and a compact footer. On mobile the access panel appears first.

Copy these complete source files into your existing Project B, preserving their paths:

- `app/login/page.js` (new route)
- `components/LoginPanel.js` (new component)
- `components/Header.js`
- `app/globals.css`

This page also needs the previously supplied `public/acre-meeting.jpg` and `public/acre-logo.png`, included in this ZIP. Keep the existing root `app/layout.js` and all other routes. Restart with `npm run dev -- --port 3001`, then visit `http://localhost:3001/login`.

The email and password are read-only sample values. The eye button toggles sample password visibility; Remember me is a local UI demonstration only and does not persist or affect official sign-in. No credentials are accepted, stored or sent. Sign in and Forgot password open the official `https://www.acrepgh.org/Authenticate/Login.aspx`; account creation opens `https://www.acrepgh.org/MyAccount/MyAccount.aspx`. No authentication API or endpoint was invented. Project A, lib and mocks remain unchanged.

## Complete original navigation update — 27 October 2026

See `NAVIGATION-COVERAGE.md` for every original menu label, local route and original destination. The header now includes all original top-level categories and nested account/resource menus. Public section layouts and account access gateways were added; original content collections and live backend functions stay on the official platform. This expands the previously limited demo scope; existing pages were retained. The default production build now uses Webpack and a single page-data worker. Project A, lib and mocks remain unchanged.
