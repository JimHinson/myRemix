import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// browser-route-module:/home/jhinson/src/my-remix/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();
var React = __toModule(require_react());
function App() {
  const [count, setCount] = React.useState(0);
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "myRemix")), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("p", null, "myRemix@sodeog.ai"), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setCount((c) => c + 1)
  }, count)));
}
var root_default = App;
export {
  root_default as default
};
//# sourceMappingURL=/build/root-SUHAM3FJ.js.map
