import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, f as renderComponent } from '../chunks/astro/server_Cscjiqaf.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CAZJZ87o.mjs';
import { $ as $$Card } from '../chunks/Card_DjfaVw_D.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const html = "<h2 id=\"the-clubs-of-prestonwood---hills-course\">The Clubs of Prestonwood - Hills Course</h2>\n<h3 id=\"senior-hills-mens-golf-assocation-shmga\">Senior Hills Men’s Golf Assocation (SHMGA)</h3>\n<p>Ranging from 55 to 80+ in age, this group offers:</p>\n<ul>\n<li>Friendly handicapped weekly golf games (Individual and team events based on established GHIN index)</li>\n<li>Ease of standing tee times (signup, showup, get teamed up and play)</li>\n<li>Annual tournaments (individual &#x26; team events)</li>\n<li>Social events (Lunches, Darts, etc.)</li>\n<li>“Race for the cup” for regular participation in playdays and tournaments.</li>\n</ul>";

				const frontmatter = {};
				const file = "/Users/alvisbjones/LocalDocs/dev/astro/SMGA/src/components/whoweare.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome the Hills SHMGA", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <svg class="astro-a" width="495" height="623" viewBox="0 0 495 623" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-astro-cid-j7pv25f6> <path fill-rule="evenodd" clip-rule="evenodd" d="M167.19 364.254C83.4786 364.254 0 404.819 0 404.819C0 404.819 141.781 19.4876 142.087 18.7291C146.434 7.33701 153.027 0 162.289 0H332.441C341.703 0 348.574 7.33701 352.643 18.7291C352.92 19.5022 494.716 404.819 494.716 404.819C494.716 404.819 426.67 364.254 327.525 364.254L264.41 169.408C262.047 159.985 255.147 153.581 247.358 153.581C239.569 153.581 232.669 159.985 230.306 169.408L167.19 364.254ZM160.869 530.172C160.877 530.18 160.885 530.187 160.894 530.195L160.867 530.181C160.868 530.178 160.868 530.175 160.869 530.172ZM136.218 411.348C124.476 450.467 132.698 504.458 160.869 530.172C160.997 529.696 161.125 529.242 161.248 528.804C161.502 527.907 161.737 527.073 161.917 526.233C165.446 509.895 178.754 499.52 195.577 500.01C211.969 500.487 220.67 508.765 223.202 527.254C224.141 534.12 224.23 541.131 224.319 548.105C224.328 548.834 224.337 549.563 224.347 550.291C224.563 566.098 228.657 580.707 237.264 593.914C245.413 606.426 256.108 615.943 270.749 622.478C270.593 621.952 270.463 621.508 270.35 621.126C270.045 620.086 269.872 619.499 269.685 618.911C258.909 585.935 266.668 563.266 295.344 543.933C298.254 541.971 301.187 540.041 304.12 538.112C310.591 533.854 317.059 529.599 323.279 525.007C345.88 508.329 360.09 486.327 363.431 457.844C364.805 446.148 363.781 434.657 359.848 423.275C358.176 424.287 356.587 425.295 355.042 426.275C351.744 428.366 348.647 430.33 345.382 431.934C303.466 452.507 259.152 455.053 214.03 448.245C184.802 443.834 156.584 436.019 136.218 411.348Z" fill="url(#paint0_linear_1805_24383)" data-astro-cid-j7pv25f6></path> <defs data-astro-cid-j7pv25f6> <linearGradient id="paint0_linear_1805_24383" x1="247.358" y1="0" x2="247.358" y2="622.479" gradientUnits="userSpaceOnUse" data-astro-cid-j7pv25f6> <stop stop-opacity="0.9" data-astro-cid-j7pv25f6></stop> <stop offset="1" stop-opacity="0.2" data-astro-cid-j7pv25f6></stop> </linearGradient> </defs> </svg> <h1 data-astro-cid-j7pv25f6>Welcome to <span class="text-gradient" data-astro-cid-j7pv25f6>the Hills Senior Men's Golf Association</span></h1> <div class="instructions" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Whoweare", Content, { "data-astro-cid-j7pv25f6": true })}
For information on joining the assocation:
<a href="join" class="button" data-astro-cid-j7pv25f6>Join our Group</a> </div> <ul role="list" class="link-card-grid" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Card", $$Card, { "href": "playday", "title": "When we play", "body": "Playdays, Signup, Routine", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "schedule", "title": "Tournaments & Participation", "body": "Calendar of events / Race for the Cup", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "weekly", "title": "Weekly results", "body": "2025 weekly results", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "rules", "title": "Rules Summary", "body": "Association uses USGA rules", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "communication", "title": "Communication", "body": "Instructions for association communication", "data-astro-cid-j7pv25f6": true })} </ul> </main> ` })} `;
}, "/Users/alvisbjones/LocalDocs/dev/astro/SMGA/src/pages/index.astro", void 0);

const $$file = "/Users/alvisbjones/LocalDocs/dev/astro/SMGA/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
