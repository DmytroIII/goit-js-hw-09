function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=r);var i=r("eWCmQ");const l=document.querySelector(".form");function u(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector("button[type=submit]").addEventListener("click",(function(t){t.preventDefault();let o=Number(document.querySelector("input[name=delay]").value);const n=Number(document.querySelector("input[name=step]").value),r=Number(document.querySelector("input[name=amount]").value);for(let t=1;t<=r;t+=1)u(t,o).then((({position:t,delay:o})=>{console.log(`✅ Fulfilled promise ${t} in ${o}ms`),e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{console.log(`❌ Rejected promise ${t} in ${o}ms`),e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),l.reset(),o+=n;setTimeout((()=>{l.reset()}),2*o)}));
//# sourceMappingURL=03-promises.2ae11280.js.map
