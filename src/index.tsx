import { h, render } from "preact";
import Popup from "./containers/Popup";

// root holds our app's root DOM Element:
let root: Element;

function init() {
  root = render(<Popup />, document.body, root);
}

init();

// example: Re-render on Webpack HMR update:
if (module.hot) {
  module.hot.accept("./Popup", init);
}
