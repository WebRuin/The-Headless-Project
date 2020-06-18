(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["$slug"],{

/***/ "./src/routes/[slug].svelte":
/*!**********************************!*\
  !*** ./src/routes/[slug].svelte ***!
  \**********************************/
/*! exports provided: default, preload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _sanityClient_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sanityClient.js */ "./src/routes/sanityClient.js");
/* src/routes/[slug].svelte generated by Svelte v3.23.2 */


const { console: console_1 } = svelte_internal__WEBPACK_IMPORTED_MODULE_0__["globals"];

const file = "src/routes/[slug].svelte";

function add_css() {
	var style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("style");
	style.id = "svelte-eltd4x-style";
	style.textContent = ".content.svelte-eltd4x pre{padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-eltd4x pre code{background-color:transparent;padding:0}.content.svelte-eltd4x ul{line-height:1.5}.content.svelte-eltd4x li{margin:0 0 0.5em 0}.pricing.svelte-eltd4x,.usedBy.svelte-eltd4x{display:grid;grid-gap:1rem;grid-template-columns:1fr 1fr 1fr}.pricing>div.svelte-eltd4x{padding:1rem}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLnN2ZWx0ZSIsInNvdXJjZXMiOlsiW3NsdWddLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgaW1wb3J0IGNsaWVudCBmcm9tIFwiLi9zYW5pdHlDbGllbnQuanNcIjtcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMgfSkge1xuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcGFyYW1zO1xuICAgIGNvbnN0IFNFUlZJQ0VfUVVFUlkgPSBgKltfdHlwZSA9PSBcImNtc1wiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17Li4ufWA7XG4gICAgY29uc3QgRkVBVFVSRVNfUVVFUlkgPSBgKltfdHlwZSA9PSBcImNtc1wiICYmIGZlYXR1cmVzLl9yZWYgaW4gKltfdHlwZT09XCJmZWF0dXJlc1wiXS5faWQgXXsuLi59YDtcbiAgICBjb25zdCBzZXJ2aWNlID0gYXdhaXQgY2xpZW50XG4gICAgICAuZmV0Y2goU0VSVklDRV9RVUVSWSwgeyBzbHVnIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHRoaXMuZXJyb3IoNTAwLCBlcnIpKTtcbiAgICByZXR1cm4geyBzZXJ2aWNlIH07XG4gIH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAvLyBleHBvcnQgbGV0IGluZGV4ID0gXCIuXCI7XG4gIGV4cG9ydCBsZXQgc2VydmljZTtcbiAgY29uc29sZS5sb2coc2VydmljZSk7ICBcbiAgLy8gZXhwb3J0IGxldCBwcmljZXMgPSBBcnJheS5mcm9tKHNlcnZpY2UucHJpY2luZyk7XG4gIC8vIGNvbnNvbGUubG9nKHByaWNlcyk7XG4gIC8vIGV4cG9ydCBsZXQgZmVhdHVyZXMgPSBBcnJheS5mcm9tKHByaWNlcyk7XG4gIC8vIGNvbnNvbGUubG9nKGZlYXR1cmVzKTtcbiAgLy8gZXhwb3J0IGxldCB1c2VkQnlzID0gQXJyYXkuZnJvbShzZXJ2aWNlLnVzZWRCeSk7XG4gIC8vIGNvbnNvbGUubG9nKHVzZWRCeXMpO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAuY29udGVudCA6Z2xvYmFsKHByZSkge1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICB9XG5cbiAgLmNvbnRlbnQgOmdsb2JhbChwcmUpIDpnbG9iYWwoY29kZSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuY29udGVudCA6Z2xvYmFsKHVsKSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuXG4gIC5jb250ZW50IDpnbG9iYWwobGkpIHtcbiAgICBtYXJnaW46IDAgMCAwLjVlbSAwO1xuICB9XG5cbiAgLnByaWNpbmcsXG4gIC51c2VkQnkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDFyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgfVxuXG4gIC5wcmljaW5nID4gZGl2IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIC51c2VkQnkgPiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgLnVzZWRCeSA+IGEgPiBkaXYge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMxODFmMjIsICMxNDFhMWQpO1xuICAgIGJveC1zaGFkb3c6ICA4cHggOHB4IDE2cHggIzEyMTcxYSwgXG4gICAgICAgICAgICAgLThweCAtOHB4IDE2cHggIzFhMjMyNjtcbiAgICBjb2xvcjogI0EwODhGRjtcbiAgfVxuICAudXNlZEJ5ID4gYSA+IGRpdjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgIzE0MWExZCwgIzE4MWYyMik7XG4gICAgYm94LXNoYWRvdzogIDhweCA4cHggMTZweCAjMTIxNzFhLCBcbiAgICAgICAgICAgICAtOHB4IC04cHggMTZweCAjMWEyMzI2O1xuICAgIGNvbG9yOiAjMzczQTZFO1xuICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT57c2VydmljZS5uYW1lfSB8IFRoZSBIZWFkbGVzcyBQcm9qZWN0PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gIDxoMT48YSByZWw9XCJwcmVmZXRjaFwiIGhyZWY9e3NlcnZpY2UudXJsfT57c2VydmljZS5uYW1lfTwvYT48L2gxPlxuICA8aDI+e3NlcnZpY2UuaGVhZGluZ308L2gyPlxuICA8aDM+e3NlcnZpY2UuZGVzY3JpcHRpb259PC9oMz5cblxuICA8aDIgY2xhc3M9XCJvcmFuZ2UgY2VudGVyZWRcIj5QcmljaW5nPC9oMj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJpbmxhaWQgcHJpY2luZ1wiPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYmlsbGluZ1wiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGg0PkJpbGxpbmcgQ3ljbGU6IDxzcGFuPntzZXJ2aWNlLmJpbGxpbmd9PC9zcGFuPjwvaDQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoND5DcmVkaXQgQ2FyZCBOZWVkZWQ6IDxzcGFuPntzZXJ2aWNlLmNyZWRpdENhcmROZWVkZWQgPyBcIlllc1wiIDogXCJOb1wifTwvc3Bhbj48L2g0PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDwhLS0geyNlYWNoIHByaWNlcyBhcyBwcmljZX1cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz57cHJpY2UudGllcn08L2gzPlxuICAgICAgICA8cD57cHJpY2UuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8cD4ke3ByaWNlLnByaWNlfTwvcD5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHsjZWFjaCBmZWF0dXJlcyBhcyBmZWF0dXJlfVxuICAgICAgICAgICAgPGxpPntmZWF0dXJlfTwvbGk+XG4gICAgICAgICAgey9lYWNofVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgey9lYWNofSAtLT5cbiAgPC9zZWN0aW9uPlxuXG4gIDxoMiBjbGFzcz1cIm9yYW5nZSBjZW50ZXJlZFwiPlRydXN0ZWQgQnk8L2gyPlxuICA8c2VjdGlvbiBjbGFzcz1cInVzZWRCeVwiPlxuICAgIDwhLS0geyNlYWNoIHVzZWRCeXMgYXMgdXNlZEJ5fVxuICAgICAgPGEgcmVsPSdleHRlcm5hbCcgaHJlZj17dXNlZEJ5LnVybCB8fCBpbmRleH0+PGRpdj57dXNlZEJ5Lm5hbWV9PC9kaXY+PC9hPlxuICAgIHsvZWFjaH0gLS0+XG4gIDwvc2VjdGlvbj5cbjwvZGl2PiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQkUsc0JBQVEsQ0FBQyxBQUFRLEdBQUcsQUFBRSxDQUFDLEFBQ3JCLE9BQU8sQ0FBRSxLQUFLLENBQ2QsYUFBYSxDQUFFLEdBQUcsQ0FDbEIsVUFBVSxDQUFFLElBQUksQUFDbEIsQ0FBQyxBQUVELHNCQUFRLENBQUMsQUFBUSxHQUFHLEFBQUMsQ0FBQyxBQUFRLElBQUksQUFBRSxDQUFDLEFBQ25DLGdCQUFnQixDQUFFLFdBQVcsQ0FDN0IsT0FBTyxDQUFFLENBQUMsQUFDWixDQUFDLEFBRUQsc0JBQVEsQ0FBQyxBQUFRLEVBQUUsQUFBRSxDQUFDLEFBQ3BCLFdBQVcsQ0FBRSxHQUFHLEFBQ2xCLENBQUMsQUFFRCxzQkFBUSxDQUFDLEFBQVEsRUFBRSxBQUFFLENBQUMsQUFDcEIsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQUFDckIsQ0FBQyxBQUVELHNCQUFRLENBQ1IsT0FBTyxjQUFDLENBQUMsQUFDUCxPQUFPLENBQUUsSUFBSSxDQUNiLFFBQVEsQ0FBRSxJQUFJLENBQ2QscUJBQXFCLENBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEFBQ3BDLENBQUMsQUFFRCxRQUFRLENBQUcsR0FBRyxjQUFDLENBQUMsQUFDZCxPQUFPLENBQUUsSUFBSSxBQUNmLENBQUMifQ== */";
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(document.head, style);
}

function create_fragment(ctx) {
	let title_value;
	let t0;
	let div2;
	let h1;
	let a;
	let t1_value = /*service*/ ctx[0].name + "";
	let t1;
	let a_href_value;
	let t2;
	let h20;
	let t3_value = /*service*/ ctx[0].heading + "";
	let t3;
	let t4;
	let h3;
	let t5_value = /*service*/ ctx[0].description + "";
	let t5;
	let t6;
	let h21;
	let t7;
	let t8;
	let section1;
	let section0;
	let div0;
	let h40;
	let t9;
	let span0;
	let t10_value = /*service*/ ctx[0].billing + "";
	let t10;
	let t11;
	let div1;
	let h41;
	let t12;
	let span1;
	let t13_value = (/*service*/ ctx[0].creditCardNeeded ? "Yes" : "No") + "";
	let t13;
	let t14;
	let h22;
	let t15;
	let t16;
	let section2;
	document.title = title_value = "" + (/*service*/ ctx[0].name + " | The Headless Project");

	const block = {
		c: function create() {
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h1");
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("a");
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t1_value);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h20 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h2");
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t3_value);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h3");
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t5_value);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h21 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h2");
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Pricing");
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			section1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("section");
			section0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("section");
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h40 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h4");
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Billing Cycle: ");
			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t10_value);
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("div");
			h41 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h4");
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Credit Card Needed: ");
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("span");
			t13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])(t13_value);
			t14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			h22 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("h2");
			t15 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["text"])("Trusted By");
			t16 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["space"])();
			section2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["element"])("section");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["query_selector_all"])("[data-svelte=\"svelte-1a4e9fy\"]", document.head);
			head_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(nodes);
			div2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(nodes, "DIV", { class: true });
			var div2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div2);
			h1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "H1", {});
			var h1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);
			a = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(h1_nodes, "A", { rel: true, href: true });
			var a_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(a);
			t1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(a_nodes, t1_value);
			a_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			h1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div2_nodes);
			h20 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "H2", {});
			var h20_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h20);
			t3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h20_nodes, t3_value);
			h20_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div2_nodes);
			h3 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "H3", {});
			var h3_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h3);
			t5 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h3_nodes, t5_value);
			h3_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t6 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div2_nodes);
			h21 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "H2", { class: true });
			var h21_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h21);
			t7 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h21_nodes, "Pricing");
			h21_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t8 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div2_nodes);
			section1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "SECTION", { class: true });
			var section1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(section1);
			section0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section1_nodes, "SECTION", { class: true });
			var section0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(section0);
			div0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section0_nodes, "DIV", {});
			var div0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div0);
			h40 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div0_nodes, "H4", {});
			var h40_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h40);
			t9 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h40_nodes, "Billing Cycle: ");
			span0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(h40_nodes, "SPAN", {});
			var span0_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span0);
			t10 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span0_nodes, t10_value);
			span0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			h40_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t11 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(section0_nodes);
			div1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(section0_nodes, "DIV", {});
			var div1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(div1);
			h41 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div1_nodes, "H4", {});
			var h41_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h41);
			t12 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h41_nodes, "Credit Card Needed: ");
			span1 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(h41_nodes, "SPAN", {});
			var span1_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(span1);
			t13 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(span1_nodes, t13_value);
			span1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			h41_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			section0_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			section1_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t14 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div2_nodes);
			h22 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "H2", { class: true });
			var h22_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(h22);
			t15 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_text"])(h22_nodes, "Trusted By");
			h22_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			t16 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_space"])(div2_nodes);
			section2 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["claim_element"])(div2_nodes, "SECTION", { class: true });
			var section2_nodes = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["children"])(section2);
			section2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			div2_nodes.forEach(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"]);
			this.h();
		},
		h: function hydrate() {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "rel", "prefetch");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "href", a_href_value = /*service*/ ctx[0].url);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(a, file, 80, 6, 1850);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h1, file, 80, 2, 1846);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h20, file, 81, 2, 1913);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h3, file, 82, 2, 1942);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h21, "class", "orange centered");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h21, file, 84, 2, 1976);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span0, file, 88, 27, 2121);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h40, file, 88, 8, 2102);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div0, file, 87, 6, 2088);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(span1, file, 91, 32, 2214);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h41, file, 91, 8, 2190);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div1, file, 90, 6, 2176);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(section0, "class", "billing");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(section0, file, 86, 4, 2056);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(section1, "class", "inlaid pricing svelte-eltd4x");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(section1, file, 85, 2, 2019);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(h22, "class", "orange centered");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(h22, file, 108, 2, 2601);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(section2, "class", "usedBy svelte-eltd4x");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(section2, file, 109, 2, 2647);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(div2, "class", "content svelte-eltd4x");
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["add_location"])(div2, file, 79, 0, 1822);
		},
		m: function mount(target, anchor) {
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, t0, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["insert_dev"])(target, div2, anchor);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, h1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h1, a);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(a, t1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, t2);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, h20);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h20, t3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, t4);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, h3);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h3, t5);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, t6);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, h21);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h21, t7);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, t8);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, section1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section1, section0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section0, div0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div0, h40);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h40, t9);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h40, span0);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span0, t10);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section0, t11);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(section0, div1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div1, h41);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h41, t12);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h41, span1);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(span1, t13);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, t14);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, h22);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(h22, t15);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, t16);
			Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["append_dev"])(div2, section2);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*service*/ 1 && title_value !== (title_value = "" + (/*service*/ ctx[0].name + " | The Headless Project"))) {
				document.title = title_value;
			}

			if (dirty & /*service*/ 1 && t1_value !== (t1_value = /*service*/ ctx[0].name + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t1, t1_value);

			if (dirty & /*service*/ 1 && a_href_value !== (a_href_value = /*service*/ ctx[0].url)) {
				Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["attr_dev"])(a, "href", a_href_value);
			}

			if (dirty & /*service*/ 1 && t3_value !== (t3_value = /*service*/ ctx[0].heading + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t3, t3_value);
			if (dirty & /*service*/ 1 && t5_value !== (t5_value = /*service*/ ctx[0].description + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t5, t5_value);
			if (dirty & /*service*/ 1 && t10_value !== (t10_value = /*service*/ ctx[0].billing + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t10, t10_value);
			if (dirty & /*service*/ 1 && t13_value !== (t13_value = (/*service*/ ctx[0].creditCardNeeded ? "Yes" : "No") + "")) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["set_data_dev"])(t13, t13_value);
		},
		i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__["noop"],
		d: function destroy(detaching) {
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(t0);
			if (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["detach_dev"])(div2);
		}
	};

	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload({ params }) {
	const { slug } = params;
	const SERVICE_QUERY = `*[_type == "cms" && slug.current == $slug][0]{...}`;
	const FEATURES_QUERY = `*[_type == "cms" && features._ref in *[_type=="features"]._id ]{...}`;
	const service = await _sanityClient_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetch(SERVICE_QUERY, { slug }).catch(err => this.error(500, err));
	return { service };
}

function instance($$self, $$props, $$invalidate) {
	let { service } = $$props;
	console.log(service);
	const writable_props = ["service"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["validate_slots"])("U5Bslugu5D", $$slots, []);

	$$self.$set = $$props => {
		if ("service" in $$props) $$invalidate(0, service = $$props.service);
	};

	$$self.$capture_state = () => ({ client: _sanityClient_js__WEBPACK_IMPORTED_MODULE_1__["default"], preload, service });

	$$self.$inject_state = $$props => {
		if ("service" in $$props) $$invalidate(0, service = $$props.service);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [service];
}

class U5Bslugu5D extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__["SvelteComponentDev"] {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-eltd4x-style")) add_css();
		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__["safe_not_equal"], { service: 0 });

		Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__["dispatch_dev"])("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*service*/ ctx[0] === undefined && !("service" in props)) {
			console_1.warn("<U5Bslugu5D> was created without expected prop 'service'");
		}
	}

	get service() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set service(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* harmony default export */ __webpack_exports__["default"] = (U5Bslugu5D);


/***/ }),

/***/ "./src/routes/sanityClient.js":
/*!************************************!*\
  !*** ./src/routes/sanityClient.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ "./node_modules/@sanity/client/lib/sanityClient.js");
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: 'mic2nn80', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
}));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLy4vc3JjL3JvdXRlcy9bc2x1Z10uc3ZlbHRlIiwid2VicGFjazovLy8vLi9zcmMvcm91dGVzL3Nhbml0eUNsaWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeUM7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBK0VHLEdBQU8sSUFBQyxJQUFJOzs7Ozs0QkFDakQsR0FBTyxJQUFDLE9BQU87Ozs7NEJBQ2YsR0FBTyxJQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs2QkFNUSxHQUFPLElBQUMsT0FBTzs7Ozs7Ozs4QkFHVixHQUFPLElBQUMsZ0JBQWdCLEdBQUcsS0FBSyxHQUFHLElBQUk7Ozs7Ozs7a0RBZnBFLEdBQU8sSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEdBSVEsR0FBTyxJQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpRkFKL0IsR0FBTyxJQUFDLElBQUk7Ozs7cUVBSXNCLEdBQU8sSUFBQyxJQUFJOzs2RUFBMUIsR0FBTyxJQUFDLEdBQUc7Ozs7cUVBQ2xDLEdBQU8sSUFBQyxPQUFPO3FFQUNmLEdBQU8sSUFBQyxXQUFXO3VFQU1RLEdBQU8sSUFBQyxPQUFPO3dFQUdWLEdBQU8sSUFBQyxnQkFBZ0IsR0FBRyxLQUFLLEdBQUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBekZ0RCxPQUFPLEdBQUcsTUFBTTtTQUM1QixJQUFJLEtBQUssTUFBTTtPQUNqQixhQUFhO09BQ2IsY0FBYztPQUNkLE9BQU8sU0FBUyx3REFBTSxDQUN6QixLQUFLLENBQUMsYUFBYSxJQUFJLElBQUksSUFDM0IsS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHO1VBQzFCLE9BQU87Ozs7T0FNUCxPQUFPO0NBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCckI7QUFBQTtBQUFBO0FBQXlDOztBQUUxQixvSEFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJmaWxlIjoiOTZkOTMzMTNmNzBkYjQ0Y2EyMmMvJHNsdWcuJHNsdWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgaW1wb3J0IGNsaWVudCBmcm9tIFwiLi9zYW5pdHlDbGllbnQuanNcIjtcbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMgfSkge1xuICAgIGNvbnN0IHsgc2x1ZyB9ID0gcGFyYW1zO1xuICAgIGNvbnN0IFNFUlZJQ0VfUVVFUlkgPSBgKltfdHlwZSA9PSBcImNtc1wiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17Li4ufWA7XG4gICAgY29uc3QgRkVBVFVSRVNfUVVFUlkgPSBgKltfdHlwZSA9PSBcImNtc1wiICYmIGZlYXR1cmVzLl9yZWYgaW4gKltfdHlwZT09XCJmZWF0dXJlc1wiXS5faWQgXXsuLi59YDtcbiAgICBjb25zdCBzZXJ2aWNlID0gYXdhaXQgY2xpZW50XG4gICAgICAuZmV0Y2goU0VSVklDRV9RVUVSWSwgeyBzbHVnIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHRoaXMuZXJyb3IoNTAwLCBlcnIpKTtcbiAgICByZXR1cm4geyBzZXJ2aWNlIH07XG4gIH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAvLyBleHBvcnQgbGV0IGluZGV4ID0gXCIuXCI7XG4gIGV4cG9ydCBsZXQgc2VydmljZTtcbiAgY29uc29sZS5sb2coc2VydmljZSk7ICBcbiAgLy8gZXhwb3J0IGxldCBwcmljZXMgPSBBcnJheS5mcm9tKHNlcnZpY2UucHJpY2luZyk7XG4gIC8vIGNvbnNvbGUubG9nKHByaWNlcyk7XG4gIC8vIGV4cG9ydCBsZXQgZmVhdHVyZXMgPSBBcnJheS5mcm9tKHByaWNlcyk7XG4gIC8vIGNvbnNvbGUubG9nKGZlYXR1cmVzKTtcbiAgLy8gZXhwb3J0IGxldCB1c2VkQnlzID0gQXJyYXkuZnJvbShzZXJ2aWNlLnVzZWRCeSk7XG4gIC8vIGNvbnNvbGUubG9nKHVzZWRCeXMpO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAuY29udGVudCA6Z2xvYmFsKHByZSkge1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICB9XG5cbiAgLmNvbnRlbnQgOmdsb2JhbChwcmUpIDpnbG9iYWwoY29kZSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuY29udGVudCA6Z2xvYmFsKHVsKSB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxuXG4gIC5jb250ZW50IDpnbG9iYWwobGkpIHtcbiAgICBtYXJnaW46IDAgMCAwLjVlbSAwO1xuICB9XG5cbiAgLnByaWNpbmcsXG4gIC51c2VkQnkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDFyZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgfVxuXG4gIC5wcmljaW5nID4gZGl2IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIC51c2VkQnkgPiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgLnVzZWRCeSA+IGEgPiBkaXYge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMxODFmMjIsICMxNDFhMWQpO1xuICAgIGJveC1zaGFkb3c6ICA4cHggOHB4IDE2cHggIzEyMTcxYSwgXG4gICAgICAgICAgICAgLThweCAtOHB4IDE2cHggIzFhMjMyNjtcbiAgICBjb2xvcjogI0EwODhGRjtcbiAgfVxuICAudXNlZEJ5ID4gYSA+IGRpdjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgIzE0MWExZCwgIzE4MWYyMik7XG4gICAgYm94LXNoYWRvdzogIDhweCA4cHggMTZweCAjMTIxNzFhLCBcbiAgICAgICAgICAgICAtOHB4IC04cHggMTZweCAjMWEyMzI2O1xuICAgIGNvbG9yOiAjMzczQTZFO1xuICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT57c2VydmljZS5uYW1lfSB8IFRoZSBIZWFkbGVzcyBQcm9qZWN0PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gIDxoMT48YSByZWw9XCJwcmVmZXRjaFwiIGhyZWY9e3NlcnZpY2UudXJsfT57c2VydmljZS5uYW1lfTwvYT48L2gxPlxuICA8aDI+e3NlcnZpY2UuaGVhZGluZ308L2gyPlxuICA8aDM+e3NlcnZpY2UuZGVzY3JpcHRpb259PC9oMz5cblxuICA8aDIgY2xhc3M9XCJvcmFuZ2UgY2VudGVyZWRcIj5QcmljaW5nPC9oMj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJpbmxhaWQgcHJpY2luZ1wiPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYmlsbGluZ1wiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGg0PkJpbGxpbmcgQ3ljbGU6IDxzcGFuPntzZXJ2aWNlLmJpbGxpbmd9PC9zcGFuPjwvaDQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoND5DcmVkaXQgQ2FyZCBOZWVkZWQ6IDxzcGFuPntzZXJ2aWNlLmNyZWRpdENhcmROZWVkZWQgPyBcIlllc1wiIDogXCJOb1wifTwvc3Bhbj48L2g0PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDwhLS0geyNlYWNoIHByaWNlcyBhcyBwcmljZX1cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz57cHJpY2UudGllcn08L2gzPlxuICAgICAgICA8cD57cHJpY2UuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8cD4ke3ByaWNlLnByaWNlfTwvcD5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHsjZWFjaCBmZWF0dXJlcyBhcyBmZWF0dXJlfVxuICAgICAgICAgICAgPGxpPntmZWF0dXJlfTwvbGk+XG4gICAgICAgICAgey9lYWNofVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgey9lYWNofSAtLT5cbiAgPC9zZWN0aW9uPlxuXG4gIDxoMiBjbGFzcz1cIm9yYW5nZSBjZW50ZXJlZFwiPlRydXN0ZWQgQnk8L2gyPlxuICA8c2VjdGlvbiBjbGFzcz1cInVzZWRCeVwiPlxuICAgIDwhLS0geyNlYWNoIHVzZWRCeXMgYXMgdXNlZEJ5fVxuICAgICAgPGEgcmVsPSdleHRlcm5hbCcgaHJlZj17dXNlZEJ5LnVybCB8fCBpbmRleH0+PGRpdj57dXNlZEJ5Lm5hbWV9PC9kaXY+PC9hPlxuICAgIHsvZWFjaH0gLS0+XG4gIDwvc2VjdGlvbj5cbjwvZGl2PiIsImltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSAnQHNhbml0eS9jbGllbnQnXG5cbmV4cG9ydCBkZWZhdWx0IHNhbml0eUNsaWVudCh7XG4gIHByb2plY3RJZDogJ21pYzJubjgwJywgLy8geW91IGNhbiBmaW5kIHRoaXMgaW4gc2FuaXR5Lmpzb25cbiAgZGF0YXNldDogJ3Byb2R1Y3Rpb24nLCAvLyBvciB0aGUgbmFtZSB5b3UgY2hvc2UgaW4gc3RlcCAxXG4gIHVzZUNkbjogdHJ1ZSAvLyBgZmFsc2VgIGlmIHlvdSB3YW50IHRvIGVuc3VyZSBmcmVzaCBkYXRhXG59KSJdLCJzb3VyY2VSb290IjoiIn0=