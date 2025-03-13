/* empty css                                     */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../../chunks/astro/server_Z_zf6cj7.mjs';
import 'kleur/colors';
import { b as $$TextLink, $ as $$Layout, a as $$Container } from '../../chunks/Layout_eRSkaEVI.mjs';
import { r as resolvePath, B as BLOG, G as GLOBAL, a as getNavigationEntries, g as getFilteredCollectionEntries } from '../../chunks/utils_ysUFGKQ_.mjs';
import { $ as $$BackToPrevious } from '../../chunks/BackToPrevious_Ct6YhsrS.mjs';
import 'clsx';
import { $ as $$EntryHeader, a as $$TableOfContents } from '../../chunks/EntryHeader_C1ww_W9p.mjs';
import { $ as $$Bio, a as $$Contact } from '../../chunks/Contact_D9ssfeV2.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://www.caseyjdavis.com");
const $$PostNavigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PostNavigation;
  const { prevPost, nextPost } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 gap-1.5 sm:gap-3"> ${prevPost?.slug ? renderTemplate`<a${addAttribute(resolvePath(`/blog/${prevPost?.slug}`, Astro2.url.pathname), "href")} class="group relative flex flex-nowrap rounded-lg border border-black/15 px-4 py-3 pl-10 no-underline transition-colors duration-300 ease-in-out hover:bg-black/5 hover:text-black focus-visible:bg-black/5 focus-visible:text-black dark:border-white/20 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:bg-white/5 dark:focus-visible:text-white"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="absolute left-2 top-1/2 size-5 -translate-y-1/2 fill-none stroke-current stroke-2"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-3 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100 group-focus-visible:translate-x-0 group-focus-visible:scale-x-100"></line> <polyline points="12 5 5 12 12 19" class="translate-x-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus-visible:translate-x-0"></polyline> </svg> <div class="flex items-center text-sm">${prevPost?.data.title}</div> </a>` : renderTemplate`<div class="invisible"></div>`} ${nextPost?.slug ? renderTemplate`<a${addAttribute(resolvePath(`/blog/${nextPost?.slug}`, Astro2.url.pathname), "href")} class="group relative flex flex-grow flex-row-reverse flex-nowrap rounded-lg border border-black/15 px-4 py-4 pr-10 no-underline transition-colors duration-300 ease-in-out hover:bg-black/5 hover:text-black focus-visible:bg-black/5 focus-visible:text-black dark:border-white/20 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:bg-white/5 dark:focus-visible:text-white"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="absolute right-2 top-1/2 size-5 -translate-y-1/2 fill-none stroke-current stroke-2"> <line x1="5" y1="12" x2="19" y2="12" class="translate-x-3 scale-x-0 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100 group-focus-visible:translate-x-0 group-focus-visible:scale-x-100"></line> <polyline points="12 5 19 12 12 19" class="-translate-x-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-focus-visible:translate-x-0"></polyline> </svg> <div class="flex items-center text-sm">${nextPost?.data.title}</div> </a>` : renderTemplate`<div class="invisible"></div>`} </div>`;
}, "/home/casdavis/github/caseyjdavis/src/components/PostNavigation.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Giscus = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="giscus"></div> <script src="https://giscus.app/client.js" data-repo="bartoszlenar/astro-milidev" data-repo-id="R_kgDONiccDA" data-category="Announcements" data-category-id="DIC_kwDONiccDM4Cl5CN" data-mapping="pathname" data-strict="1" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="top" data-theme="preferred_color_scheme" data-lang="en" data-loading="lazy" crossorigin="anonymous" async><\/script>'])), maybeRenderHead());
}, "/home/casdavis/github/caseyjdavis/src/components/Giscus.astro", void 0);

const $$BlogLicenseInfo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div data-pagefind-ignore style="display: flex; justify-content: center; align-items: center; "> <span style="font-size: 0.875rem">Content licenced under ${renderComponent($$result, "TextLink", $$TextLink, { "href": BLOG.license.href, "external": true }, { "default": ($$result2) => renderTemplate`${BLOG.license.name}` })}</span> </div>`;
}, "/home/casdavis/github/caseyjdavis/src/components/BlogLicenseInfo.astro", void 0);

const $$Astro$1 = createAstro("https://www.caseyjdavis.com");
const $$BlogAuthor = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogAuthor;
  return renderTemplate`${maybeRenderHead()}<div class="start mt-4 flex items-center"> <img${addAttribute(resolvePath(GLOBAL.authorPhotoSrc, Astro2.url.pathname), "src")}${addAttribute(GLOBAL.author, "alt")} class="mr-8 h-24 w-24 rounded-full"> <div class="flex-grow"> <div> <strong>Hi, I'm ${GLOBAL.author}</strong> </div> ${renderComponent($$result, "Bio", $$Bio, { "small": true })} <p> <strong>Contact me:</strong> </p> ${renderComponent($$result, "Contact", $$Contact, { "small": true })} </div> </div>`;
}, "/home/casdavis/github/caseyjdavis/src/components/BlogAuthor.astro", void 0);

const $$Astro = createAstro("https://www.caseyjdavis.com");
async function getStaticPaths() {
  const { entries } = await getFilteredCollectionEntries("blog");
  return entries.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { prevPost, nextPost } = await getNavigationEntries(
    "blog",
    Astro2.params.slug
  );
  const entry = Astro2.props;
  const { Content, headings } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "description": entry.data.description, "ogImage": entry.data.ogImage }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result3, "BackToPrevious", $$BackToPrevious, { "href": resolvePath("/blog", Astro2.url.pathname) }, { "default": ($$result4) => renderTemplate`
All blog posts
` })} </div> ${renderComponent($$result3, "EntryHeader", $$EntryHeader, { ...entry.data, "body": entry.body })} ${headings.length > 0 && renderTemplate`${renderComponent($$result3, "TableOfContents", $$TableOfContents, { "headings": headings })}`}<article class="animate"> ${renderComponent($$result3, "Content", Content, {})} <hr class="my-4"> <div class="my-12">${renderComponent($$result3, "BlogAuthor", $$BlogAuthor, {})}</div> <hr class="my-4"> <div class="my-4"> ${renderComponent($$result3, "PostNavigation", $$PostNavigation, { "prevPost": prevPost, "nextPost": nextPost })} </div> ${renderComponent($$result3, "BlogLicenceInfo", $$BlogLicenseInfo, {})} <div class="mt-8"> ${renderComponent($$result3, "Giscus", $$Giscus, {})} </div> </article> ` })} ` })}`;
}, "/home/casdavis/github/caseyjdavis/src/pages/blog/[...slug].astro", void 0);

const $$file = "/home/casdavis/github/caseyjdavis/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
