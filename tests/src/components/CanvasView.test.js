import React from "react";
import { shallow } from "enzyme";
import CanvasView from "../../../src/components/CanvasView";

describe("<CanvasView>", () => {
	test("renders correctly", () => {
		const wrapper = shallow(<CanvasView />);
		expect(wrapper).toMatchSnapshot();
	});
});
