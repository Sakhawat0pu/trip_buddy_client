import { FieldValues } from "react-hook-form";

export const convertToFormData = (payload: FieldValues) => {
	const data = { ...payload };
	const files = data["files"];
	delete data["file"];
	const stringifiedData = JSON.stringify(data);
	const formData = new FormData();
	formData.append("data", stringifiedData);

	if (files && files.length) {
		files.forEach((file: File) => {
			formData.append("files", file as Blob);
		});
	}
	return formData;
};
