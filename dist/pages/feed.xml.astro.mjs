import rss from '@astrojs/rss';
import { g as getFilteredCollectionEntries, s as sortByLastUpdateDate, G as GLOBAL, r as resolvePath } from '../chunks/utils_ysUFGKQ_.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const blog = (await getFilteredCollectionEntries("blog")).entries;
  const projects = (await getFilteredCollectionEntries("projects")).entries;
  const talks = (await getFilteredCollectionEntries("talks")).entries;

  const items = [...blog, ...projects, ...talks].sort(
    sortByLastUpdateDate,
  );

  return rss({
    title: GLOBAL.title,
    description: GLOBAL.description,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: resolvePath(`/${item.collection}/${item.slug}/`),
    })),
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
