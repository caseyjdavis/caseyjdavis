/* empty css                                        */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_Z_zf6cj7.mjs';
import 'kleur/colors';
import { b as getAllEntriesWithTags, T as TAGS, r as resolvePath } from '../../../chunks/utils_ysUFGKQ_.mjs';
import { $ as $$RootPageIndex } from '../../../chunks/RootPageIndex_Ch778uPD.mjs';
import { $ as $$PageNavigation } from '../../../chunks/PageNavigation_CnR_K-bi.mjs';
import { $ as $$BlogCardButton } from '../../../chunks/BlogCardButton_Cxno9FcZ.mjs';
import { $ as $$ProjectCardButton } from '../../../chunks/ProjectCardButton_B_O2Kklp.mjs';
import { $ as $$TalkCardButton } from '../../../chunks/TalkCardButton_DyFfkcID.mjs';
import { $ as $$BackToPrevious } from '../../../chunks/BackToPrevious_Ct6YhsrS.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://www.caseyjdavis.com");
async function getStaticPaths({ paginate }) {
  const { entries, tags } = await getAllEntriesWithTags();
  return tags.flatMap((tag) => {
    const tagEntries = entries.filter(
      (post) => post.data.tags?.includes(tag)
    );
    return paginate(tagEntries, {
      params: { slug: tag },
      pageSize: TAGS.pageSize
    });
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const { page } = Astro2.props;
  const entries = page.data;
  const groupedEntries = [];
  let currentCollection;
  for (const entry of entries) {
    const collection = entry.collection;
    if (collection !== currentCollection) {
      currentCollection = collection;
      groupedEntries.push({
        collection,
        entries: []
      });
    }
    groupedEntries[groupedEntries.length - 1].entries.push(entry);
  }
  return renderTemplate`${renderComponent($$result, "RootPageIndex", $$RootPageIndex, { "title": `# ${slug}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="animate"> ${renderComponent($$result2, "BackToPrevious", $$BackToPrevious, { "href": resolvePath("/tags", Astro2.url.pathname) }, { "default": ($$result3) => renderTemplate`All tags` })} </div> ${renderTemplate`<ul class="animate not-prose mb-12 flex flex-col gap-4"> ${groupedEntries.map((group) => renderTemplate`<li> <div class="mb-4 text-sm text-gray-500"> ${group.collection}:
</div> <ul class="flex flex-col gap-4"> ${group.entries.map((entry) => renderTemplate`<li> ${group.collection === "blog" ? renderTemplate`${renderComponent($$result2, "BlogCardButton", $$BlogCardButton, { "entry": entry })}` : void 0} ${group.collection === "projects" ? renderTemplate`${renderComponent($$result2, "ProjectCardButton", $$ProjectCardButton, { "entry": entry })}` : void 0} ${group.collection === "talks" ? renderTemplate`${renderComponent($$result2, "TalkCardButton", $$TalkCardButton, { "entry": entry })}` : void 0} </li>`)} </ul> </li>`)} </ul>`}${renderComponent($$result2, "PageNavigation", $$PageNavigation, { "page": page })} ` })}`;
}, "/home/casdavis/github/caseyjdavis/src/pages/tags/[...slug]/[...page].astro", void 0);

const $$file = "/home/casdavis/github/caseyjdavis/src/pages/tags/[...slug]/[...page].astro";
const $$url = "/tags/[...slug]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
