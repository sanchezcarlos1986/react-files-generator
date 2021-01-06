import React from "react";
import { shallow } from "enzyme";
import COMPONENT_NAME from "./COMPONENT_NAME";

describe("COMPONENT_NAME", () => {
  let component;
  const props = {};

  beforeEach(() => {
    component = shallow(<COMPONENT_NAME {...props} />);
  });

  it("renders COMPONENT_NAME", () => {
    expect(component).toBeTruthy();
  });
});
