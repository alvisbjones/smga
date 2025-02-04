import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Bd6aZWNU.mjs';
import { manifest } from './manifest_0P3q48mS.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/communication.astro.mjs');
const _page2 = () => import('./pages/games.astro.mjs');
const _page3 = () => import('./pages/join.astro.mjs');
const _page4 = () => import('./pages/playday.astro.mjs');
const _page5 = () => import('./pages/raceforcup.astro.mjs');
const _page6 = () => import('./pages/rules.astro.mjs');
const _page7 = () => import('./pages/schedule.astro.mjs');
const _page8 = () => import('./pages/smga.astro.mjs');
const _page9 = () => import('./pages/weekly.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/communication.astro", _page1],
    ["src/pages/games.astro", _page2],
    ["src/pages/join.astro", _page3],
    ["src/pages/playday.astro", _page4],
    ["src/pages/raceforcup.astro", _page5],
    ["src/pages/rules.astro", _page6],
    ["src/pages/schedule.astro", _page7],
    ["src/pages/SMGA.md", _page8],
    ["src/pages/weekly.astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0b0134e8-b28f-4355-a851-9b4cd6cd0def",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
