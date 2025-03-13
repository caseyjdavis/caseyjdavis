import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute } from './astro/server_Z_zf6cj7.mjs';
import 'kleur/colors';
import { b as $$TextLink } from './Layout_eRSkaEVI.mjs';
/* empty css                          */
import 'clsx';
import { d as formatDate, e as readingTime } from './utils_ysUFGKQ_.mjs';
import { $ as $$Tag } from './Tag_C0udpvRD.mjs';

const $$Astro$3 = createAstro("https://www.caseyjdavis.com");
const $$TableOfContentsHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TableOfContentsHeading;
  const { heading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="list-inside list-disc px-6 py-1.5 text-sm"> ${renderComponent($$result, "TextLink", $$TextLink, { "href": "#" + heading.slug, "underline": true }, { "default": ($$result2) => renderTemplate`${heading.text}` })} ${heading.subheadings.length > 0 && renderTemplate`<ul class="translate-x-3"> ${heading.subheadings.map((subheading) => renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "heading": subheading })}`)} </ul>`} </li>`;
}, "/home/casdavis/github/caseyjdavis/src/components/TableOfContentsHeading.astro", void 0);

const $$Astro$2 = createAstro("https://www.caseyjdavis.com");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { headings } = Astro2.props;
  const toc = buildToc(headings);
  function buildToc(headings2) {
    const toc2 = [];
    const parentHeadings = /* @__PURE__ */ new Map();
    headings2.forEach((h) => {
      const heading = { ...h, subheadings: [] };
      parentHeadings.set(heading.depth, heading);
      if (heading.depth === 2) {
        toc2.push(heading);
      } else {
        parentHeadings.get(heading.depth - 1).subheadings.push(heading);
      }
    });
    return toc2;
  }
  return renderTemplate`${maybeRenderHead()}<details open class="animate rounded-lg border border-black/15 dark:border-white/20" data-astro-cid-xvrfupwn> <summary data-astro-cid-xvrfupwn>Table of Contents</summary> <nav class="" data-astro-cid-xvrfupwn> <ul class="py-3" data-astro-cid-xvrfupwn> ${toc.map((heading) => renderTemplate`${renderComponent($$result, "TableOfContentsHeading", $$TableOfContentsHeading, { "heading": heading, "data-astro-cid-xvrfupwn": true })}`)} </ul> </nav> </details> `;
}, "/home/casdavis/github/caseyjdavis/src/components/TableOfContents.astro", void 0);

const $$Astro$1 = createAstro("https://www.caseyjdavis.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${formatDate(date)} </time>`;
}, "/home/casdavis/github/caseyjdavis/src/components/FormattedDate.astro", void 0);

const $$Astro = createAstro("https://www.caseyjdavis.com");
const $$EntryHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EntryHeader;
  const { title, date, lastUpdateDate, description, body, tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="animate my-10 space-y-1"> <div class="flex items-center gap-1.5"> <div class="font-base text-sm"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": date })} ${lastUpdateDate && renderTemplate`<span> ${" "}
(updated: ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": lastUpdateDate })})
</span>`} </div>
&bull;
<div class="font-base text-sm"> ${readingTime(body)} </div> </div> <h1 class="text-3xl font-semibold text-[#282828] dark:text-[#ebdbb2]"> ${title} </h1> ${description && renderTemplate`<p class="text-[#458588] dark:text-[#458588]">${description}</p>`} ${tags && tags?.length > 0 ? renderTemplate`<div class="flex gap-2 pt-1"> ${tags.map((tag) => renderTemplate`${renderComponent($$result, "Tag", $$Tag, { "tag": tag })}`)} </div>` : null} </div>`;
}, "/home/casdavis/github/caseyjdavis/src/components/EntryHeader.astro", void 0);

export { $$EntryHeader as $, $$TableOfContents as a };
