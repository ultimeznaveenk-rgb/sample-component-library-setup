import { jsx as e } from "react/jsx-runtime";
import './assets/button.css';var t = { button: "_button_11bo7_1" };
//#endregion
//#region lib/components/button/index.tsx
function n(n) {
	let { className: r, ...i } = n;
	return /* @__PURE__ */ e("button", {
		className: `${r} ${t.button}`,
		...i
	});
}
//#endregion
export { n as t };
