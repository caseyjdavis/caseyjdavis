/* empty css                                     */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_Z_zf6cj7.mjs';
import 'kleur/colors';
import { g as getFilteredCollectionEntries, P as PROJECTS } from '../../chunks/utils_ysUFGKQ_.mjs';
import { $ as $$RootPageIndex } from '../../chunks/RootPageIndex_Ch778uPD.mjs';
import { $ as $$PageNavigation } from '../../chunks/PageNavigation_CnR_K-bi.mjs';
import { $ as $$ProjectCardButton } from '../../chunks/ProjectCardButton_B_O2Kklp.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.caseyjdavis.com");
async function getStaticPaths({ paginate }) {
  const { entries } = await getFilteredCollectionEntries("projects");
  const posts = entries.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
  return paginate(posts, { pageSize: PROJECTS.pageSize });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const entries = page.data.map((pageEntry) => ({
    ...pageEntry.props
  }));
  return renderTemplate`${renderComponent($$result, "RootPageIndex", $$RootPageIndex, { "title": "Projects" }, { "default": ($$result2) => renderTemplate`${renderTemplate`${maybeRenderHead()}<ul class="animate not-prose mb-12 flex flex-col gap-4"> ${entries.map((entry) => renderTemplate`<li> ${renderComponent($$result2, "ProjectCardButton", $$ProjectCardButton, { "entry": entry })} </li>`)} </ul>`}${renderComponent($$result2, "PageNavigation", $$PageNavigation, { "page": page })} ` })}`;
}, "/home/casdavis/github/caseyjdavis/src/pages/projects/[...page].astro", void 0);

const $$file = "/home/casdavis/github/caseyjdavis/src/pages/projects/[...page].astro";
const $$url = "/projects/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
