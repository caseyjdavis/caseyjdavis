/* empty css                                  */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Z_zf6cj7.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Container, b as $$TextLink } from '../chunks/Layout_eRSkaEVI.mjs';
import { g as getFilteredCollectionEntries, H as HOME, G as GLOBAL, r as resolvePath } from '../chunks/utils_ysUFGKQ_.mjs';
import { $ as $$BlogCardButton } from '../chunks/BlogCardButton_Cxno9FcZ.mjs';
import { $ as $$ProjectCardButton } from '../chunks/ProjectCardButton_B_O2Kklp.mjs';
import { $ as $$Bio, a as $$Contact } from '../chunks/Contact_D9ssfeV2.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.caseyjdavis.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  async function getCollectionEntries(collectionName, maxItems) {
    const { entries } = await getFilteredCollectionEntries(collectionName);
    return entries.slice(0, maxItems);
  }
  const blog = await getCollectionEntries("blog", HOME.blogEntries);
  const projects = await getCollectionEntries(
    "projects",
    HOME.projectEntries
  );
  await getCollectionEntries("talks", HOME.talkEntries);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<aside data-pagefind-ignore> <div class="animate mb-8 flex items-center justify-center"> <img${addAttribute(resolvePath(GLOBAL.authorPhotoSrc, Astro2.url.pathname), "src")}${addAttribute(GLOBAL.author, "alt")} class="h-48 w-48 rounded-full"> </div> <h1 class="animate text-3xl font-semibold text-[#282828] dark:text-[#ebdbb2]">
Hi, I'm ${GLOBAL.author} </h1> <div class="space-y-16"> <section> <article class="animate space-y-4"> ${renderComponent($$result3, "Bio", $$Bio, {})} <h2 class="font-semibold text-[#282828] dark:text-[#ebdbb2]">
Contact me:
</h2> ${renderComponent($$result3, "Contact", $$Contact, {})} </article> </section> ${blog.length > 0 && renderTemplate`<section class="animate space-y-6"> <div class="flex flex-wrap items-center justify-between gap-y-2"> <h2 class="font-semibold text-[#282828] dark:text-[#ebdbb2]">
Recent blog posts
</h2> ${renderComponent($$result3, "TextLink", $$TextLink, { "href": "blog" }, { "default": ($$result4) => renderTemplate`all blog posts ` })} </div> <ul class="not-prose flex flex-col gap-4"> ${blog.map((post) => renderTemplate`<li> ${renderComponent($$result3, "BlogCardButton", $$BlogCardButton, { "entry": post })} </li>`)} </ul> </section>`} ${projects.length > 0 && renderTemplate`<section class="animate space-y-6"> <div class="flex flex-wrap items-center justify-between gap-y-2"> <h2 class="font-semibold text-[#282828] dark:text-[#ebdbb2]">
Recent projects
</h2> ${renderComponent($$result3, "TextLink", $$TextLink, { "href": "projects" }, { "default": ($$result4) => renderTemplate`all projects ` })} </div> <ul class="not-prose flex flex-col gap-4"> ${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "ProjectCardButton", $$ProjectCardButton, { "entry": project })} </li>`)} </ul> </section>`} </div> </aside> ` })} ` })}`;
}, "/home/casdavis/github/caseyjdavis/src/pages/index.astro", void 0);

const $$file = "/home/casdavis/github/caseyjdavis/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
