import React from "react";
import { shallow } from "enzyme";
import FormItemInput from "../../../src/components/FormItemInput";

const props = {
	type: "text",
	value: "Test value",
	onChange: jest.fn(),
	placeholder: "Test placeholder",
};

describe("<FormItemInput>", () => {
	test("renders number input correctly", () => {
		const wrapper = shallow(<FormItemInput {...props} type={"number"} value={1} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("renders password input correctly", () => {
		const wrapper = shallow(<FormItemInput {...props} type={"password"} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("renders select element correctly", () => {
		const wrapper = shallow(
			<FormItemInput
				{...props}
				type={"select"}
				value='Test option 1'
				options={["Test option 1", "Test option 2"]}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test("renders text input correctly", () => {
		const wrapper = shallow(<FormItemInput {...props} />);
		expect(wrapper).toMatchSnapshot();
	});
});
