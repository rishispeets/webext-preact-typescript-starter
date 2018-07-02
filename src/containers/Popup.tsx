import { Component, h } from "preact";
import MainTab from "../components/MainTab";
import SETTINGS from "../constants";
import PopupState from "../types";

/**
 * Top-level container.
 *
 * @class Popup
 * @extends {Component<{}, PopupState>}
 */
class Popup extends Component<{}, PopupState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      // Initialize with all settings set to null
      settings: SETTINGS.reduce((acc, v) => ({ ...acc, [v]: null }), {})
    };
  }

  componentDidMount() {
    // Do some stuff here!
  }

  render() {
    const { settings } = this.state;

    return <MainTab settings={settings} />;
  }
}

export default Popup;
