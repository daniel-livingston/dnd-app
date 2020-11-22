import React from "react";
import { shallow } from "enzyme";
import FormItem from "../../../src/components/FormItem";
import FormItemInfo from "../../../src/components/FormItemInfo";
import FormItemInput from "../../../src/components/FormItemInput";

const formItemInfoProps = {
	title: "Test title",
	description: "Test description",
};

const formItemInputProps = {
	inputType: "text",
	inputValue: "Test value",
	inputOnChange: jest.fn(),
	inputPlaceholder: "Test placeholder",
};

describe("<FormItem>", () => {
	test("renders correctly", () => {
		const wrapper = shallow(<FormItem {...formItemInfoProps} {...formItemInputProps} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find(FormItemInfo).props()).toEqual(formItemInfoProps);
		expect(wrapper.find(FormItemInput).props()).toEqual({
			type: formItemInputProps.inputType,
			value: formItemInputProps.inputValue,
			onChange: formItemInputProps.inputOnChange,
			placeholder: formItemInputProps.inputPlaceholder,
			options: undefined,
		});
	});
});
