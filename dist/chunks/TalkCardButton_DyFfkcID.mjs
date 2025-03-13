import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from './astro/server_Z_zf6cj7.mjs';
import 'kleur/colors';
import { $ as $$ArrowCardButton } from './ArrowCardButton_Bck_I8l9.mjs';
import { f as formatDateWithLastUpdateDate, r as resolvePath } from './utils_ysUFGKQ_.mjs';

const $$Astro = createAstro("https://www.caseyjdavis.com");
const $$TalkCardButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TalkCardButton;
  const { entry } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ArrowCardButton", $$ArrowCardButton, { "href": resolvePath(`/${entry.collection}/${entry.slug}`, Astro2.url.pathname), "textAbove": formatDateWithLastUpdateDate(
    entry.data.date,
    entry.data.lastUpdateDate
  ), "text": entry.data.title, "textBelow": entry.data.description })}`;
}, "/home/casdavis/github/caseyjdavis/src/components/TalkCardButton.astro", void 0);

export { $$TalkCardButton as $ };
