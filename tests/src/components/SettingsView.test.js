import React from "react";
import { shallow } from "enzyme";
import SettingsView from "../../../src/components/SettingsView";

describe("<SettingsView>", () => {
	test("renders correctly", () => {
		const wrapper = shallow(<SettingsView />);
		expect(wrapper).toMatchSnapshot();
	});
});
