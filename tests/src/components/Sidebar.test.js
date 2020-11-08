import React from "react";
import { mount, shallow } from "enzyme";
import { MemoryRouter, Link } from "react-router-dom";
import Sidebar from "../../../src/components/Sidebar";

const wrappedSidebar = (
	<MemoryRouter>
		<Sidebar />
	</MemoryRouter>
);

describe("<Sidebar>", () => {
	test("renders correctly", () => {
		const wrapper = shallow(<Sidebar />);
		expect(wrapper).toMatchSnapshot();
	});

	test("renders correct links", () => {
		const wrapper = mount(wrappedSidebar);
		expect(wrapper.find(Link).at(0).prop("to")).toBe("/");
		expect(wrapper.find(Link).at(1).prop("to")).toBe("/canvas");
		expect(wrapper.find(Link).at(2).prop("to")).toBe("/dice");
		expect(wrapper.find(Link).at(3).prop("to")).toBe("/settings");
	});
});
