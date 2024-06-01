"use server";

export const registerUser = async (data: Record<string, any>) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/register`, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json",
		},
		cache: "no-store",
	});

	const userInfo = await res.json();

	return userInfo;
};
