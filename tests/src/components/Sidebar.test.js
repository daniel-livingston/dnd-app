import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount, shallow } from "enzyme";
import Sidebar from "../../../src/components/Sidebar";
import SidebarLink from "../../../src/components/SidebarLink";

describe("<Sidebar>", () => {
	test("renders correctly", () => {
		const wrapper = shallow(<Sidebar />);
		expect(wrapper).toMatchSnapshot();
	});

	test("renders correct links", () => {
		const wrapper = mount(
			<MemoryRouter>
				<Sidebar />
			</MemoryRouter>
		);
		expect(wrapper.find(SidebarLink)).toHaveLength(4);
		expect(wrapper.find(SidebarLink).at(0).props()).toMatchObject({
			to: "/",
			Icon: expect.any(Function),
			name: "Home",
			exact: true,
		});
		expect(wrapper.find(SidebarLink).at(1).props()).toMatchObject({
			to: "/canvas",
			Icon: expect.any(Function),
			name: "Canvas",
		});
		expect(wrapper.find(SidebarLink).at(2).props()).toMatchObject({
			to: "/dice",
			Icon: expect.any(Function),
			name: "Dice",
		});
		expect(wrapper.find(SidebarLink).at(3).props()).toMatchObject({
			to: "/settings",
			Icon: expect.any(Function),
			name: "Settings",
		});
	});
});
