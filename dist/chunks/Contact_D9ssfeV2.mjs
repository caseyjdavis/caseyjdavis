import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, F as Fragment } from './astro/server_Z_zf6cj7.mjs';
import 'kleur/colors';
import 'clsx';
import { C as CONTACT } from './utils_ysUFGKQ_.mjs';

const $$Astro$1 = createAstro("https://www.caseyjdavis.com");
const $$Bio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Bio;
  const { small } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(small ? "font-size: 0.875rem" : "", "style")}> <p>
I am a Systems Engineer that loves solving problems with technology. I have worked in technology for over 20 years and use modern tools and methodologies to deploy and maintain systems. I am passionate about learning and sharing knowledge with others.
</p> </div>`;
}, "/home/casdavis/github/caseyjdavis/src/components/Bio.astro", void 0);

const $$Astro = createAstro("https://www.caseyjdavis.com");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const { small } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="mb-0"${addAttribute(small ? "font-size: 0.875rem" : "", "style")}> ${CONTACT.map((c, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(c.href, "href")} target="_blank"> ${c.displayAs ?? c.type} </a> <span class="mx-2">${index < CONTACT.length - 1 && " | "}</span> ` })}`)} </p>`;
}, "/home/casdavis/github/caseyjdavis/src/components/Contact.astro", void 0);

export { $$Bio as $, $$Contact as a };
