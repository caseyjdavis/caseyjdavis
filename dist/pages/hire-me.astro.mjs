/* empty css                                  */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Z_zf6cj7.mjs';
import 'kleur/colors';
import { $ as $$ArrowCardButton } from '../chunks/ArrowCardButton_Bck_I8l9.mjs';
import { $ as $$RootPageIndex } from '../chunks/RootPageIndex_Ch778uPD.mjs';
import { C as CONTACT, r as resolvePath } from '../chunks/utils_ysUFGKQ_.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.caseyjdavis.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const linkedInContact = CONTACT.find((contact) => contact.type === "LinkedIn");
  return renderTemplate`${renderComponent($$result, "RootPageIndex", $$RootPageIndex, { "title": "Hire me", "searchable": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="animate mb-4"> <p class="mb-1">My PDF resume:</p> <section> ${renderComponent($$result2, "ArrowCardButton", $$ArrowCardButton, { "href": resolvePath("/hire-me/caseydavis_resume.pdf", Astro2.url.pathname), "text": "Download PDF", "openInNewTab": true })} </section> </div> <div class="animate mb-4"> <p class="mb-1">My TXT resume:</p> <section> ${renderComponent($$result2, "ArrowCardButton", $$ArrowCardButton, { "href": resolvePath("/hire-me/caseyjdavis_resume.txt", Astro2.url.pathname), "text": "Download TXT", "openInNewTab": true })} </section> </div> ${linkedInContact && renderTemplate`<div class="animate mb-4"> <p class="mb-1">Or you can check my LinkedIn profile:</p> <section> ${renderComponent($$result2, "ArrowCardButton", $$ArrowCardButton, { "href": linkedInContact.href, "text": "Navigate to LinkedIn", "openInNewTab": true })} </section> </div>`}` })}`;
}, "/home/casdavis/github/caseyjdavis/src/pages/hire-me/index.astro", void 0);

const $$file = "/home/casdavis/github/caseyjdavis/src/pages/hire-me/index.astro";
const $$url = "/hire-me";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
