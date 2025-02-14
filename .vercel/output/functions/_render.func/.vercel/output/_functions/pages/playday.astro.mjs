import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, f as renderComponent } from '../chunks/astro/server_Cscjiqaf.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CAZJZ87o.mjs';
import 'clsx';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const html = "<h2 id=\"when-we-play\">When we play</h2>\n<h4 id=\"weekly-games\">Weekly games:</h4>\n<p>We have a standing tee time of 9AM on Monday’s and Fridays.  Depending on the number of players for a given playday, we will shotgun start teams starting on holes 17, 18, and number one.<br>\nWe focus on Pace of Play keeping all rounds under 4 hours.</p>\n<h2 id=\"basic-format-of-playdays\">Basic format of playdays</h2>\n<p>In the spirit of friendly competition, we collect a players pool each playday ($5) and a closest to the pin pool that is paidd out each playday to the winners (team/teams or individual/individuals) depending on the format for that playday.<br>\n<a href=\"games\" class=\"button\">Games we play</a></p>\n<h2 id=\"signing-up-for-playday-and-playday-routine\">Signing up for playday and playday routine</h2>\n<p>The signup process differs slightly between Monday and Friday.</p>\n<h3 id=\"monday\">Monday:</h3>\n<p>Please signup by no later than Sunday 5pm using the Invited Club app or <a href=\"https://www.invitedclubs.com\">website</a>.  Our playdays are listed as “Seniors @THE HILLS COURSE” under the “My events tab” in the tee time section.    Select the event and add your name to the list of players that are planning to play.  You can manage any changes to your participation up until 5pm on Sunday.</p>\n<p>Please help us to minimize late changes as it causes a ripple effect on Monday morning if you do not show up and teams are already established.\nOn Monday’s the game day manager will arrange the teams and the game.   <a href=\"games\" class=\"button\">Games we play</a></p>\n<p>Each golfer is responsible for entering their score into the GHIN system.</p>\n<h3 id=\"friday\">Friday:</h3>\n<p>On Fridays we use golf genius and the game is planned by the staff in the pro shop.</p>\n<ul>\n<li><a href=\"games\" class=\"button\">Games we play</a></li>\n</ul>\n<p>You will recieve a email several days in advance of the Friday event inviting you to participate.  Please make sure your email is included in the SMGA golf genius list (see pro shop to verify).</p>\n<p>You must click the link in the email by 7pm on Thursday indicating your participation in the event.  You will receive a email notification confirming your intention to play.</p>\n<p>Make sure you email filters (spam, whitelist, etc.) are set such that you recieve the email.  Using golf genius, teams are balanced based on handicaps.   Your scores are entered into the Golf Genius app during play.  This enables real time scoring, leaderboard, and final results.  Golf genius will also automatically post individual scores to the GHIN handicap system.</p>\n<h4 id=\"both-days\">Both days:</h4>\n<p>Please arrive at the club no later than 30 minutes before our start time to check-in and put your prize pool money in the envelopes in the pro shop.  The pairings, scorecards, and tee assignments for that day will be in the pro shop.</p>\n<h2 id=\"after-social-and-prize-payout\">After social and prize payout:</h2>\n<p>After the round, we gather in the club house to review the results and payout any prizes for that day’s event.</p>\n<p>Fun and comradary takes place as we recall the good and bad of the day’s event.  This gives us all the opportunity to visit and laugh with the rest of the group that are present for that day.  Our focus is on friendly competition with a community of guys with a love of the game.</p>";

				const frontmatter = {};
				const file = "/Users/alvisbjones/LocalDocs/dev/astro/SMGA/src/components/playdays.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const $$Playday = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SMGA Playdays", "data-astro-cid-pxomw4df": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-pxomw4df> <svg class="astro-a" width="495" height="623" viewBox="0 0 495 623" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-astro-cid-pxomw4df> <path fill-rule="evenodd" clip-rule="evenodd" d="M167.19 364.254C83.4786 364.254 0 404.819 0 404.819C0 404.819 141.781 19.4876 142.087 18.7291C146.434 7.33701 153.027 0 162.289 0H332.441C341.703 0 348.574 7.33701 352.643 18.7291C352.92 19.5022 494.716 404.819 494.716 404.819C494.716 404.819 426.67 364.254 327.525 364.254L264.41 169.408C262.047 159.985 255.147 153.581 247.358 153.581C239.569 153.581 232.669 159.985 230.306 169.408L167.19 364.254ZM160.869 530.172C160.877 530.18 160.885 530.187 160.894 530.195L160.867 530.181C160.868 530.178 160.868 530.175 160.869 530.172ZM136.218 411.348C124.476 450.467 132.698 504.458 160.869 530.172C160.997 529.696 161.125 529.242 161.248 528.804C161.502 527.907 161.737 527.073 161.917 526.233C165.446 509.895 178.754 499.52 195.577 500.01C211.969 500.487 220.67 508.765 223.202 527.254C224.141 534.12 224.23 541.131 224.319 548.105C224.328 548.834 224.337 549.563 224.347 550.291C224.563 566.098 228.657 580.707 237.264 593.914C245.413 606.426 256.108 615.943 270.749 622.478C270.593 621.952 270.463 621.508 270.35 621.126C270.045 620.086 269.872 619.499 269.685 618.911C258.909 585.935 266.668 563.266 295.344 543.933C298.254 541.971 301.187 540.041 304.12 538.112C310.591 533.854 317.059 529.599 323.279 525.007C345.88 508.329 360.09 486.327 363.431 457.844C364.805 446.148 363.781 434.657 359.848 423.275C358.176 424.287 356.587 425.295 355.042 426.275C351.744 428.366 348.647 430.33 345.382 431.934C303.466 452.507 259.152 455.053 214.03 448.245C184.802 443.834 156.584 436.019 136.218 411.348Z" fill="url(#paint0_linear_1805_24383)" data-astro-cid-pxomw4df></path> <defs data-astro-cid-pxomw4df> <linearGradient id="paint0_linear_1805_24383" x1="247.358" y1="0" x2="247.358" y2="622.479" gradientUnits="userSpaceOnUse" data-astro-cid-pxomw4df> <stop stop-opacity="0.9" data-astro-cid-pxomw4df></stop> <stop offset="1" stop-opacity="0.2" data-astro-cid-pxomw4df></stop> </linearGradient> </defs> </svg> <h1 data-astro-cid-pxomw4df><span class="text-gradient" data-astro-cid-pxomw4df>SMGA Playdays</span></h1> <div data-astro-cid-pxomw4df> ${renderComponent($$result2, "Playdays", Content, { "data-astro-cid-pxomw4df": true })} </div> </main> ` })} `;
}, "/Users/alvisbjones/LocalDocs/dev/astro/SMGA/src/pages/playday.astro", void 0);

const $$file = "/Users/alvisbjones/LocalDocs/dev/astro/SMGA/src/pages/playday.astro";
const $$url = "/playday";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Playday,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
