import { useEffect } from "react";

const useTitle = (title) => {
	useEffect(() => {
		document.title = `DnD App | ${title}`;
	});
};

export default useTitle;
