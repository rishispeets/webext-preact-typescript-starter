import { h } from "preact";
import IPopupState from "../types";

const MainTab = ({ settings }: { settings: IPopupState["settings"] }) => (
  <div>
    <h1>React Component</h1>
    <p>This is an example of a popup UI in React.</p>
    <ul>{Object.keys(settings).map(el => <li key={el}>{el}</li>)}</ul>
  </div>
);

export default MainTab;
