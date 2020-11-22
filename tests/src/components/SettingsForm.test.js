import React from "react";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import Form from "../../../src/components/Form";
import SettingsForm, {
	SettingsForm as DisconnectedSettingsForm,
} from "../../../src/components/SettingsForm";
import store from "../../../src/store/configureStore";

const props = {
	theme: {
		name: "Test",
	},
	setTheme: jest.fn(),
};

describe("<SettingsForm>", () => {
	test("renders correctly", () => {
		const wrapper = shallow(<DisconnectedSettingsForm {...props} />);
		expect(wrapper).toMatchSnapshot();
	});

	test("changes theme on setting change", () => {
		const wrapper = mount(
			<Provider store={store}>
				<SettingsForm />
			</Provider>
		);

		const onThemeChange = wrapper.find(Form).props().items[0].inputOnChange;
		const values = wrapper.find(Form).props().items[0].selectOptions;

		onThemeChange({ target: { value: values[1] } });
		expect(store.getState().theme.name).toEqual(values[1]);

		onThemeChange({ target: { value: values[0] } });
		expect(store.getState().theme.name).toEqual(values[0]);
	});
});
