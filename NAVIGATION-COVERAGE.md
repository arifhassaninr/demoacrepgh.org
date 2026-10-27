# Original ACRE navigation coverage — 27 October 2026

The original menu is preserved as 55 entries (including repeated destination labels and nested menus). Existing Home, Events, Community, Listings, Property Detail, Contact and Login routes remain. Added routes use App Router static generation in `app/[...section]/page.js`; this shared renderer avoids dozens of duplicate files. The full navigation source is `components/navigation.js`.

## Scope and behavior

- About: redesigned mission overview with authentic meeting photography and original mission/code-of-ethics link.
- Join, Membership and Benefits: redesigned overview, three reference membership options, links to original registration and current benefits.
- Sponsors and Products: selected real names/titles with original directory/catalog links. This is not synchronized inventory.
- Resources: all eight original collections have local overview pages and original collection links; source article/document bodies have not been migrated.
- Videos and all account tools: redesigned access/overview pages. Existing official authentication, member permissions and private account data stay on the original platform.
- Cart: connection state and link to official cart, not a fake empty session or simulated checkout.
- Financial calculators: working standalone fixed-rate principal-and-interest estimator plus original calculator collection link.
- Single-family and multi-family: local category gateways to verified official inventory filters. The existing fictional commercial demo inventory and API logic are unchanged.
- FAQ: redesign-specific navigation answers plus original website FAQ link.
- `/sitemap`: all original groups and nested links, accessible from the footer.

Public information is summarized, not a full content migration. Live auth, checkout, product downloads, private files, account tools and source collections remain on the existing backend website. No HTTP API endpoint was added or guessed. All menu items have a destination; not all original backend functions have a local implementation.

## Complete mapping

| Original label | Local destination | Original official path |
| --- | --- | --- |
| Home | `/` | `Default.aspx` |
| About Us | `/about` | `Page.aspx?ID=About-Us` |
| Join Now | `/join` | `MembershipInfo.aspx` |
| Property List | `/listings` | `PropertyList.aspx?search=all` |
| Property List (All) | `/listings` | `PropertyList.aspx?search=all` |
| Property List (Single Family) | `/properties/single-family` | `PropertyList.aspx?search=searchsfall` |
| Property List (Multi Family) | `/properties/multi-family` | `PropertyList.aspx?search=searchmfall` |
| Calendar of Events | `/events` | `Calendar.aspx` |
| Membership Info | `/membership` | `MembershipInfo.aspx` |
| Join | `/join` | `MembershipInfo.aspx` |
| Member Benefits | `/membership/benefits` | `MemberBenefits.aspx` |
| Join Email List | `/membership/email-list` | `MyAccount/MyAccount.aspx` |
| Terms & Conditions | `/membership/terms` | `TermsConditions.aspx` |
| Videos | `/videos` | `Page.aspx?ID=Event-Videos` |
| Other Resources | `/resources` | `(menu group)` |
| Legal News | `/resources/legal-news` | `Page.aspx?ID=Legal-News` |
| Real Estate Articles | `/resources/articles` | `ArticleList.aspx` |
| Plain Language Lease | `/resources/plain-language-lease` | `Page.aspx?ID=Plain-Language-Lease` |
| Real Estate Glossary | `/resources/glossary` | `Glossary.aspx` |
| Event Archives | `/resources/event-archives` | `EventArchives.aspx` |
| Testimonials | `/resources/testimonials` | `Page.aspx?ID=Testimonials` |
| Financial Calculators | `/resources/calculators` | `Calculators/Default.aspx` |
| Newsletters | `/resources/newsletters` | `Page.aspx?ID=Newsletters` |
| My Account | `/account` | `MyAccount/Dashboard.aspx` |
| My Dashboard | `/account` | `MyAccount/Dashboard.aspx` |
| Membership Card | `/account/membership-card` | `MembershipCard/Front.aspx` |
| My Website | `/account/my-website` | `MyAccount/Dashboard.aspx?view=MyInfo-MyWebsite` |
| Edit Website | `/account/edit-website` | `MyAccount/Dashboard.aspx?view=MyInfo-MyWebsite` |
| My Properties | `/account/my-properties` | `MyAccount/MyPropertyList.aspx` |
| Buyer Leads | `/account/buyer-leads` | `MyAccount/MyWebsiteLeads.aspx?Type=Buyer` |
| Seller Leads | `/account/seller-leads` | `MyAccount/MyWebsiteLeads.aspx` |
| Special Report Leads | `/account/special-report-leads` | `MyAccount/MyWebsiteLeads.aspx?Type=Report` |
| Properties RSS Feed | `/account/properties-rss-feed` | `PropertyRss.aspx` |
| FAQ (Website) | `/faq` | `FAQ.aspx` |
| My Downloads | `/account/my-downloads` | `MyAccount/MyDownloads.aspx` |
| Members Directory | `/account/members-directory` | `MyAccount/MembersDirectory.aspx` |
| How To Videos | `/account/how-to-videos` | `MyAccount/HowToVideos/Default.aspx` |
| Premium Features | `/account/premium-features` | `MyAccount/MyWebsiteMain.aspx` |
| Repair Estimates | `/account/repair-estimates` | `MyAccount/MyWebsiteLeads.aspx` |
| Training Videos | `/account/training-videos` | `MyAccount/Training/Default.aspx` |
| Seller Net Sheet | `/account/seller-net-sheet` | `MyAccount/PropertyAnalyzer/SellerNetSheet.aspx` |
| Co-Marketing | `/account/co-marketing` | `MyAccount/CoMarketerList.aspx` |
| More Info | `/account/more-info` | `MyAccount/MyWebsiteMain.aspx` |
| My Profile | `/account/my-profile` | `MyAccount/Dashboard.aspx?view=MyInfo-AboutMe` |
| Edit Profile | `/account/edit-profile` | `MyAccount/Dashboard.aspx?view=MyInfo-AboutMe` |
| Events Attended | `/account/events-attended` | `MyAccount/Dashboard.aspx?view=MyInfo-EventsAttended` |
| Account History | `/account/account-history` | `MyAccount/Dashboard.aspx?view=MyInfo-AccountDetails` |
| Sign In | `/login` | `Authenticate/Login.aspx` |
| Member Advantages | `/member-advantages` | `Page.aspx?ID=REI-BlackBook` |
| ACRE Sponsors | `/sponsors` | `VendorListings.aspx` |
| Products and Downloads | `/products` | `ProductList.aspx` |
| User FAQ | `/faq` | `FAQ.aspx` |
| View Cart | `/cart` | `SecureCart/ViewCart.aspx` |
| Sign In | `/login` | `Authenticate/Login.aspx` |
| Register | `/membership/email-list` | `MyAccount/MyAccount.aspx` |

## Source pages

- https://www.acrepgh.org/ (original menu structure)
- https://www.acrepgh.org/Page.aspx?ID=About-Us
- https://www.acrepgh.org/MembershipInfo.aspx
- https://www.acrepgh.org/MemberBenefits.aspx
- https://www.acrepgh.org/VendorListings.aspx
- https://www.acrepgh.org/ProductList.aspx
- https://www.acrepgh.org/Page.aspx?ID=Event-Videos (redirects to sign-in)

Links are existing HTML destinations, not JSON APIs. Exact original label/destination mappings were preserved, including aliases and nested account links.

## Files added or updated

- components/Header.js (complete navigation, keyboard/mobile menu)
- components/navigation.js (new; complete original navigation mapping)
- components/AssociationPages.js (new; section layouts)
- components/MortgageCalculator.js (new; interactive estimator)
- app/[...section]/page.js (new; static section routes and metadata)
- app/layout.js (expanded footer directory)
- app/globals.css (scoped section layouts and responsive navigation)
- next.config.mjs (single page-data worker)
- package.json (Webpack production build)

Keep the existing app/layout.js and every existing route. Do not replace only app/page.js. Project A and lib/mocks are unchanged.

## Run on Windows

```powershell
cd project-b
npm ci
npm run dev -- --port 3002
```

Open http://localhost:3002. For production, stop dev with Ctrl+C, then:

```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run build
```

Only after build finishes successfully:

```powershell
npm run start -- --port 3002
```

The default build now uses Webpack and one page-data worker to reduce build concurrency. This is not a guarantee against an unrelated Windows native-process crash. The delivered production build is validated in the Linux environment; no Windows build can be executed here.
