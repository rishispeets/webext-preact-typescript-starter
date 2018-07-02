import { h } from "preact";
// tslint:disable-next-line
import { Map } from "immutable";
import { shallow } from "preact-render-spy";
import MainTab from "../../src/components/MainTab";

describe("components/MainTab", () => {
  it("should render", () => {
    // Arrange
    const fakeProp = Map({ test: true });
    // Act
    const rendered = shallow(<MainTab settings={fakeProp} />);
    // Assert
    expect(rendered.find("div").exists()).toBeTruthy();
  });
});
