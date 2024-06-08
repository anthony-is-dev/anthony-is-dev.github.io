import { g as getContext, c as create_ssr_component, s as subscribe, e as escape } from "../../chunks/ssr.js";
import "../../chunks/exports.js";
import "devalue";
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `  <main><h1>Ошибка: ${escape($page.status)}</h1> <a href="/" data-svelte-h="svelte-1g5k33f">Вернуться на главную</a> <button data-svelte-h="svelte-10jqqi5">Перезагрузить страницу</button></main>`;
});
export {
  Error$1 as default
};