!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequire7bc7=i);var r=i("iU1Pc"),c=document.querySelector(".form");function u(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}document.querySelector("button[type=submit]").addEventListener("click",(function(n){n.preventDefault();for(var o=Number(document.querySelector("input[name=delay]").value),t=Number(document.querySelector("input[name=step]").value),i=Number(document.querySelector("input[name=amount]").value),l=1;l<=i;l+=1)u(l,o).then((function(n){var o=n.position,t=n.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms")),e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms")),e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),c.reset(),o+=t;setTimeout((function(){c.reset()}),2*o)}))}();
//# sourceMappingURL=03-promises.f171459e.js.map
