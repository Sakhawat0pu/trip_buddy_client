// "use server";

export const loginUser = async (payload: Record<string, string>) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_URL as string}/auth/login`,
		{
			method: "POST",
			body: JSON.stringify(payload),
			headers: {
				"Content-type": "application/json",
			},
			// cache: "no-store",
			credentials: "include",
		}
	);
	const loginInfo = await res.json();
	return loginInfo;
};
