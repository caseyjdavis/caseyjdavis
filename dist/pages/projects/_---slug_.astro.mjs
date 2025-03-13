/* empty css                                     */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_Z_zf6cj7.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Container } from '../../chunks/Layout_eRSkaEVI.mjs';
import { g as getFilteredCollectionEntries, r as resolvePath } from '../../chunks/utils_ysUFGKQ_.mjs';
import { $ as $$BackToPrevious } from '../../chunks/BackToPrevious_Ct6YhsrS.mjs';
import { $ as $$EntryHeader, a as $$TableOfContents } from '../../chunks/EntryHeader_C1ww_W9p.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.caseyjdavis.com");
async function getStaticPaths() {
  const { entries } = await getFilteredCollectionEntries("projects");
  return entries.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const entry = Astro2.props;
  const { Content, headings } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "description": entry.data.description, "ogImage": entry.data.ogImage }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result3, "BackToPrevious", $$BackToPrevious, { "href": resolvePath("/projects", Astro2.url.pathname) }, { "default": ($$result4) => renderTemplate`All projects` })} </div> ${renderComponent($$result3, "EntryHeader", $$EntryHeader, { ...entry.data, "body": entry.body })} ${headings?.length ? renderTemplate`${renderComponent($$result3, "TableOfContents", $$TableOfContents, { "headings": headings })}` : void 0}<article class="animate"> <hr> ${renderComponent($$result3, "Content", Content, {})} </article> ` })} ` })}`;
}, "/home/casdavis/github/caseyjdavis/src/pages/projects/[...slug].astro", void 0);

const $$file = "/home/casdavis/github/caseyjdavis/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
