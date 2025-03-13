import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, s as spreadAttributes, e as renderSlot } from './astro/server_Z_zf6cj7.mjs';
import { $ as $$Layout, a as $$Container } from './Layout_eRSkaEVI.mjs';

const $$Astro = createAstro("https://www.caseyjdavis.com");
const $$RootPageIndex = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RootPageIndex;
  const { title, searchable } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<aside${spreadAttributes(!searchable ? { "data-pagefind-ignore": true } : {})}> <div class="space-y-10"> <h1 class="animate text-3xl font-semibold text-black dark:text-white"> ${title} </h1> <div class="space-y-4"> ${renderSlot($$result3, $$slots["default"])} </div> </div> </aside> ` })} ` })}`;
}, "/home/casdavis/github/caseyjdavis/src/components/RootPageIndex.astro", void 0);

export { $$RootPageIndex as $ };
