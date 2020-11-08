import React from "react";
import { mount, shallow } from "enzyme";
import { Link, MemoryRouter } from "react-router-dom";
import Form from "../../../src/components/Form";
import { generateItem, generateForm } from "../../fixtures/Form";

// Possible other things to test:
// 1. Displaying headers and titles correctly
// 2. Changing class to reflect being a card or not

describe("submit options", () => {
	const textInput = generateItem({ type: "text", onChange: jest.fn() });
	const textInputForm = generateForm({
		items: [textInput],
		submit: {
			onSubmit: jest.fn(),
			buttonName: "Submit",
			buttonId: "test-button-id",
		},
	});

	test("renders button correctly", () => {
		const wrapper = shallow(<Form {...textInputForm} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("button and form function correctly", () => {
		const wrapper = mount(<Form {...textInputForm} />);
		const button = wrapper.find("button");
		expect(button.prop("id")).toEqual(textInputForm.submit.buttonId);
		expect(button.text()).toEqual(textInputForm.submit.buttonName);
		wrapper.find("form").simulate("submit");
		expect(textInputForm.submit.onSubmit).toHaveBeenCalledTimes(1);
	});
});

// Input types
describe("link input", () => {
	const linkInput = generateItem({ type: "link", to: "/test", value: "Test Link" });
	const linkInputForm = generateForm({ items: [linkInput] });

	test("renders link input correctly", () => {
		const wrapper = shallow(<Form {...linkInputForm} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("link options function correctly", () => {
		const wrapper = mount(
			<MemoryRouter>
				<Form {...linkInputForm} />
			</MemoryRouter>
		);
		const link = wrapper.find(Link);
		expect(link.prop("to")).toEqual(linkInput.to);
		expect(link.text()).toEqual(linkInput.value);
	});
});

describe("number input", () => {
	const numberInput = generateItem({ type: "number", onChange: jest.fn() });
	const numberInputForm = generateForm({ items: [numberInput] });

	test("renders number input correctly", () => {
		const wrapper = shallow(<Form {...numberInputForm} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("number options function correctly", () => {
		const wrapper = mount(<Form {...numberInputForm} />);

		const number = wrapper.find("input");
		expect(number.prop("type")).toEqual(numberInput.type);
		expect(number.prop("value")).toEqual(numberInput.value);
		number.simulate("change");
		expect(numberInput.onChange).toHaveBeenCalledTimes(1);
	});
});

describe("password input", () => {
	const passwordInput = generateItem({ type: "password", onChange: jest.fn() });
	const passwordInputForm = generateForm({ items: [passwordInput] });

	test("renders text input correctly", () => {
		const wrapper = shallow(<Form {...passwordInputForm} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("input options function correctly", () => {
		const wrapper = mount(<Form {...passwordInputForm} />);
		const input = wrapper.find("input");
		expect(input.prop("type")).toEqual(passwordInput.type);
		expect(input.prop("value")).toEqual(passwordInput.value);
		input.simulate("change");
		expect(passwordInput.onChange).toHaveBeenCalledTimes(1);
	});
});

describe("select input", () => {
	const selectInput = generateItem({
		type: "select",
		onChange: jest.fn(),
		value: "test1",
		options: ["test1", "test2", "test3"],
	});
	const selectForm = generateForm({ items: [selectInput] });

	test("renders select correctly", () => {
		const wrapper = shallow(<Form {...selectForm} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("select options function correctly", () => {
		const wrapper = mount(<Form {...selectForm} />);
		const select = wrapper.find("select");
		const options = wrapper.find("option");
		expect(options).toHaveLength(selectInput.options.length);
		expect(select.prop("value")).toEqual(selectInput.value);
		select.simulate("change");
		expect(selectInput.onChange).toHaveBeenCalledTimes(1);
	});
});

describe("text input", () => {
	const textInput = generateItem({ type: "text", onChange: jest.fn() });
	const textInputForm = generateForm({ items: [textInput] });

	test("renders text input correctly", () => {
		const wrapper = shallow(<Form {...textInputForm} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("input options function correctly", () => {
		const wrapper = mount(<Form {...textInputForm} />);
		const input = wrapper.find("input");
		expect(input.prop("type")).toEqual(textInput.type);
		expect(input.prop("value")).toEqual(textInput.value);
		input.simulate("change");
		expect(textInput.onChange).toHaveBeenCalledTimes(1);
	});
});
