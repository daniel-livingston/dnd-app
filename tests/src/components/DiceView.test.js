import React from "react";
import { shallow } from "enzyme";
import DiceView from "../../../src/components/DiceView";

describe("<DiceView>", () => {
	test("renders correctly", () => {
		const wrapper = shallow(<DiceView />);
		expect(wrapper).toMatchSnapshot();
	});
});
