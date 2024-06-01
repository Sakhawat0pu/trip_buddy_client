import { FieldValues } from "react-hook-form";

export const convertToFormData = (payload: FieldValues) => {
	const data = { ...payload };
	const files = data["files"];
	delete data["files"];
	const stringifiedData = JSON.stringify(data);
	const formData = new FormData();
	formData.append("data", stringifiedData);

	if (files && files.length) {
		Array.from(files).forEach((file) => {
			formData.append("files", file as Blob);
		});
	}
	// console.log(Array.from(formData.entries()));
	return formData;
};
