const generateItem = ({
	title = "Test title",
	description = "Test description",
	type,
	value = "",
	onChange,
	options,
	errors,
	to,
} = {}) => {
	const item = {
		title,
		description,
		type,
		value,
	};
	if (errors) {
		item.errors = errors;
	}
	switch (type) {
		case "link": {
			return {
				...item,
				to,
			};
		}
		case "select": {
			return {
				...item,
				onChange,
				options,
			};
		}
		case "number": {
			return {
				...item,
				onChange,
			};
		}
		case "password": {
			return {
				...item,
				onChange,
			};
		}
		case "text": {
			return {
				...item,
				onChange,
			};
		}
	}
};

const generateForm = ({ items, isCard = false, submit } = {}) => {
	const form = {
		sections: [
			{
				header: "Test header",
				items,
			},
		],
		isCard,
	};
	if (submit) {
		form.submit = submit;
	}
	return form;
};

export { generateItem, generateForm };
