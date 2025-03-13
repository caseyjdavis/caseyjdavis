/* empty css                                     */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_Z_zf6cj7.mjs';
import 'kleur/colors';
import { g as getFilteredCollectionEntries, c as TALKS } from '../../chunks/utils_ysUFGKQ_.mjs';
import { $ as $$RootPageIndex } from '../../chunks/RootPageIndex_Ch778uPD.mjs';
import { $ as $$PageNavigation } from '../../chunks/PageNavigation_CnR_K-bi.mjs';
import { $ as $$TalkCardButton } from '../../chunks/TalkCardButton_DyFfkcID.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.caseyjdavis.com");
async function getStaticPaths({ paginate }) {
  const { entries } = await getFilteredCollectionEntries("talks");
  const posts = entries.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
  return paginate(posts, { pageSize: TALKS.pageSize });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  const entries = page.data.map((pageEntry) => ({
    ...pageEntry.props
  }));
  return renderTemplate`${renderComponent($$result, "RootPageIndex", $$RootPageIndex, { "title": "Talks" }, { "default": ($$result2) => renderTemplate`${renderTemplate`${maybeRenderHead()}<ul class="animate not-prose mb-12 flex flex-col gap-4"> ${entries.map((entry) => renderTemplate`<li> ${renderComponent($$result2, "TalkCardButton", $$TalkCardButton, { "entry": entry })} </li>`)} </ul>`}${renderComponent($$result2, "PageNavigation", $$PageNavigation, { "page": page })} ` })}`;
}, "/home/casdavis/github/caseyjdavis/src/pages/talks/[...page].astro", void 0);

const $$file = "/home/casdavis/github/caseyjdavis/src/pages/talks/[...page].astro";
const $$url = "/talks/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
