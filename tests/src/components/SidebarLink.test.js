import React from "react";
import { shallow } from "enzyme";
import SidebarLink from "../../../src/components/SidebarLink";

const props = {
	to: "/test",
	Icon: () => <svg></svg>,
	name: "Test",
};

describe("<SidebarLink>", () => {
	test("renders correctly", () => {
		const wrapper = shallow(<SidebarLink {...props} />);
		expect(wrapper).toMatchSnapshot();
	});
});
