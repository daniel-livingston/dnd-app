import React from "react";
import { shallow } from "enzyme";
import FormItemInfo from "../../../src/components/FormItemInfo";

const props = {
	title: "Test title",
	description: "Test description",
};

describe("<FormItemInfo>", () => {
	test("renders correctly", () => {
		const wrapper = shallow(<FormItemInfo {...props} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("p")).toHaveLength(1);
	});

	test("renders correctly when no description provided", () => {
		const wrapper = shallow(<FormItemInfo title={props.title} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("p")).toHaveLength(0);
	});
});
