import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_DR-jaD5k.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Cwy8O7PE.mjs';
import * as contentful from 'contentful';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const contentfulClient = contentful.createClient({
  space: "bafdkkbom5p2",
  accessToken: "rN2K72wEoKvDtsLGHowgbpzOujDm-rOeo_ogN4Rg9uM",
  host: "cdn.contentful.com"
});

const $$Play = createComponent(async ($$result, $$props, $$slots) => {
  const section = await contentfulClient.getEntry("2G0KAoURqZZpNRWWlaYSB4");
  section.fields.body;
  const body = "testing";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Playing" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<body style="background-color:rgb(244, 246, 236);">${renderComponent($$result2, "Fragment", Fragment, { "class": "text-gradient" }, { "default": ($$result3) => renderTemplate`${unescapeHTML(body)}` })}</body>` })}`;
}, "/Users/alvisbjones/LocalDocs/dev/astro/SMGA/src/pages/play.astro", void 0);

const $$file = "/Users/alvisbjones/LocalDocs/dev/astro/SMGA/src/pages/play.astro";
const $$url = "/play";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Play,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
