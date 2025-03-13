/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Z_zf6cj7.mjs';
import 'kleur/colors';
import { b as getAllEntriesWithTags } from '../chunks/utils_ysUFGKQ_.mjs';
import { $ as $$RootPageIndex } from '../chunks/RootPageIndex_Ch778uPD.mjs';
import { $ as $$Tag } from '../chunks/Tag_C0udpvRD.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { entries, tags } = await getAllEntriesWithTags();
  return renderTemplate`${renderComponent($$result, "RootPageIndex", $$RootPageIndex, { "title": "Tags" }, { "default": ($$result2) => renderTemplate`${renderTemplate`${maybeRenderHead()}<div class="animate flex flex-wrap gap-2"> ${tags.map((tag) => renderTemplate`${renderComponent($$result2, "Tag", $$Tag, { "tag": tag, "entriesCount": entries.filter(
    (post) => post.data.tags?.includes(tag)
  ).length })}`)} </div>`}` })}`;
}, "/home/casdavis/github/caseyjdavis/src/pages/tags/index.astro", void 0);

const $$file = "/home/casdavis/github/caseyjdavis/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
