(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(t,e,r){"use strict";var n=r(0),o=r(206),d=r.n(o);r(281);n.default.use(d.a)},149:function(t,e,r){"use strict";var n=r(0),o=r(207),d=r.n(o);n.default.use(d.a)},209:function(t,e,r){r(210),t.exports=r(211)},268:function(t,e,r){var content=r(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(91).default)("9d54a558",content,!0,{sourceMap:!1})},269:function(t,e,r){var n=r(90),o=r(270),d=r(271),c=n((function(i){return i[1]})),l=o(d);c.push([t.i,'/*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}@font-face{font-family:"Sofia";src:url('+l+')}*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;}.static{position:static;}.fixed{position:fixed;}.absolute{position:absolute;}.relative{position:relative;}.top-1\\/2{top:50%;}.left-1\\/2{left:50%;}.bottom-0{bottom:0px;}.top-0{top:0px;}.right-5{right:1.25rem;}.left-5{left:1.25rem;}.z-10{z-index:10;}.col-auto{grid-column:auto;}.m-2{margin:0.5rem;}.m-auto{margin:auto;}.m-4{margin:1rem;}.m-5{margin:1.25rem;}.mx-auto{margin-left:auto;margin-right:auto;}.flex{display:flex;}.grid{display:grid;}.h-auto{height:auto;}.h-16{height:4rem;}.h-6{height:1.5rem;}.h-full{height:100%;}.h-96{height:24rem;}.h-3\\/4{height:75%;}.h-12{height:3rem;}.h-screen{height:100vh;}.h-10{height:2.5rem;}.h-72{height:18rem;}.w-screen{width:100vw;}.w-11\\/12{width:91.666667%;}.w-full{width:100%;}.w-6{width:1.5rem;}.w-auto{width:auto;}.w-1\\/2{width:50%;}.w-48{width:12rem;}.max-w-md{max-width:28rem;}.grow{flex-grow:1;}.grow-0{flex-grow:0;}.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}@keyframes bounce{0%, 100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1);}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1);}}.animate-bounce{animation:bounce 1s infinite;}@keyframes pulse{50%{opacity:.5;}}.animate-pulse{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;}.grid-flow-row{grid-auto-flow:row;}.grid-flow-col{grid-auto-flow:column;}.auto-rows-max{grid-auto-rows:max-content;}.grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr));}.grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr));}.flex-col{flex-direction:column;}.flex-wrap{flex-wrap:wrap;}.place-content-center{place-content:center;}.place-items-center{place-items:center;}.justify-center{justify-content:center;}.justify-items-center{justify-items:center;}.gap-5{gap:1.25rem;}.gap-2{gap:0.5rem;}.gap-4{gap:1rem;}.space-y-3 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.75rem * var(--tw-space-y-reverse));}.overflow-auto{overflow:auto;}.overflow-hidden{overflow:hidden;}.overflow-scroll{overflow:scroll;}.rounded-sm{border-radius:0.125rem;}.rounded-md{border-radius:0.375rem;}.rounded-lg{border-radius:0.5rem;}.rounded-b-sm{border-bottom-right-radius:0.125rem;border-bottom-left-radius:0.125rem;}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));}.bg-red-400{--tw-bg-opacity:1;background-color:rgb(248 113 113 / var(--tw-bg-opacity));}.bg-orange-200{--tw-bg-opacity:1;background-color:rgb(254 215 170 / var(--tw-bg-opacity));}.bg-white\\/75{background-color:rgb(255 255 255 / 0.75);}.bg-slate-100\\/20{background-color:rgb(241 245 249 / 0.2);}.bg-slate-900\\/50{background-color:rgb(15 23 42 / 0.5);}.bg-slate-100\\/10{background-color:rgb(241 245 249 / 0.1);}.bg-white\\/20{background-color:rgb(255 255 255 / 0.2);}.bg-yellow-300{--tw-bg-opacity:1;background-color:rgb(253 224 71 / var(--tw-bg-opacity));}.bg-slate-100{--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity));}.bg-hero{background-image:url(\'/image02.jpg\');}.bg-gradient-to-b{background-image:linear-gradient(to bottom, var(--tw-gradient-stops));}.from-amber-200{--tw-gradient-from:#fde68a;--tw-gradient-to:rgb(253 230 138 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);}.to-purple-300{--tw-gradient-to:#d8b4fe;}.bg-cover{background-size:cover;}.bg-fixed{background-attachment:fixed;}.bg-center{background-position:center;}.bg-no-repeat{background-repeat:no-repeat;}.fill-slate-300\\/50{fill:rgb(203 213 225 / 0.5);}.stroke-\\[2px\\]{stroke-width:2px;}.stroke-\\[8px\\]{stroke-width:8px;}.object-cover{-o-object-fit:cover;object-fit:cover;}.object-center{-o-object-position:center;object-position:center;}.object-top{-o-object-position:top;object-position:top;}.p-5{padding:1.25rem;}.p-2{padding:0.5rem;}.p-3{padding:0.75rem;}.pt-10{padding-top:2.5rem;}.text-center{text-align:center;}.font-sofia{font-family:Sofia, sans-serif;}.font-mono{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;}.font-serif{font-family:ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;}.font-sans{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";}.text-2xl{font-size:1.5rem;line-height:2rem;}.text-xl{font-size:1.25rem;line-height:1.75rem;}.text-4xl{font-size:2.25rem;line-height:2.5rem;}.text-3xl{font-size:1.875rem;line-height:2.25rem;}.text-5xl{font-size:3rem;line-height:1;}.text-sm{font-size:0.875rem;line-height:1.25rem;}.text-lg{font-size:1.125rem;line-height:1.75rem;}.font-bold{font-weight:700;}.font-semibold{font-weight:600;}.font-thin{font-weight:100;}.font-extralight{font-weight:200;}.font-normal{font-weight:400;}.uppercase{text-transform:uppercase;}.tracking-wide{letter-spacing:0.025em;}.tracking-wider{letter-spacing:0.05em;}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81 / var(--tw-text-opacity));}.text-black{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68 / var(--tw-text-opacity));}.text-slate-600{--tw-text-opacity:1;color:rgb(71 85 105 / var(--tw-text-opacity));}.text-black\\/75{color:rgb(0 0 0 / 0.75);}.underline{text-decoration-line:underline;}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.caret-blue-500{caret-color:#3b82f6;}.shadow-md{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);}.drop-shadow-\\[0_1px_1px_rgba\\(0\\2c 0\\2c 0\\2c 1\\)\\]{--tw-drop-shadow:drop-shadow(0 1px 1px rgba(0,0,0,1));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.drop-shadow-\\[0_1px_1px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.8\\)\\]{--tw-drop-shadow:drop-shadow(0 1px 1px rgba(0,0,0,0.8));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.drop-shadow-\\[0_1px_2px_rgba\\(0\\2c 0\\2c 0\\2c 1\\)\\]{--tw-drop-shadow:drop-shadow(0 1px 2px rgba(0,0,0,1));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.drop-shadow-\\[0_2px_2px_rgba\\(0\\2c 0\\2c 0\\2c 1\\)\\]{--tw-drop-shadow:drop-shadow(0 2px 2px rgba(0,0,0,1));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.drop-shadow-\\[0_1px_10px_rgba\\(248\\2c 113\\2c 113\\2c 1\\)\\]{--tw-drop-shadow:drop-shadow(0 1px 10px rgba(248,113,113,1));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.drop-shadow-xl{--tw-drop-shadow:drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.drop-shadow-\\[0_1px_3px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.8\\)\\]{--tw-drop-shadow:drop-shadow(0 1px 3px rgba(0,0,0,0.8));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.drop-shadow-\\[0_1px_5px_rgba\\(0\\2c 0\\2c 0\\2c 1\\)\\]{--tw-drop-shadow:drop-shadow(0 1px 5px rgba(0,0,0,1));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);}.backdrop-blur-\\[1px\\]{--tw-backdrop-blur:blur(1px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);}.backdrop-blur-\\[2px\\]{--tw-backdrop-blur:blur(2px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);}.transition{transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}.hover\\:scale-125:hover{--tw-scale-x:1.25;--tw-scale-y:1.25;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));}.hover\\:bg-slate-100\\/50:hover{background-color:rgb(241 245 249 / 0.5);}.hover\\:text-red-500:hover{--tw-text-opacity:1;color:rgb(239 68 68 / var(--tw-text-opacity));}.focus\\:caret-indigo-500:focus{caret-color:#6366f1;}@media (min-width: 768px){.md\\:right-0{right:0px;}.md\\:-bottom-10{bottom:-2.5rem;}.md\\:h-screen{height:100vh;}.md\\:h-full{height:100%;}.md\\:w-3\\/4{width:75%;}.md\\:w-11\\/12{width:91.666667%;}.md\\:w-1\\/4{width:25%;}.md\\:w-12{width:3rem;}.md\\:max-w-2xl{max-width:42rem;}.md\\:grid-cols-4{grid-template-columns:repeat(4, minmax(0, 1fr));}.md\\:flex-row{flex-direction:row;}.md\\:overflow-auto{overflow:auto;}.md\\:overflow-hidden{overflow:hidden;}.md\\:text-5xl{font-size:3rem;line-height:1;}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem;}}@media (min-width: 1024px){.lg\\:text-6xl{font-size:3.75rem;line-height:1;}.lg\\:text-lg{font-size:1.125rem;line-height:1.75rem;}.lg\\:text-xl{font-size:1.25rem;line-height:1.75rem;}}@media (min-width: 1280px){.xl\\:text-xl{font-size:1.25rem;line-height:1.75rem;}}',""]),c.locals={},t.exports=c},271:function(t,e,r){t.exports=r.p+"fonts/Sofia-Regular.eb3c638.ttf"}},[[209,16,1,17]]]);