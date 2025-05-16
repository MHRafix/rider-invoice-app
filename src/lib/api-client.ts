export const gqlRequest = async <T>(payload: {
	query: string;
	variables?: { [key: string]: any };
}) => {
	const api = `${import.meta.env.VITE_APP_RIDER_API_URL}/graphql`;
	const apiResponse = await fetch(api, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			// Authorization: `Bearer ${StorageUtil.getItem('accessToken')}`,
		},
		body: JSON.stringify({
			query: payload.query,
			variables: payload.variables,
		}),
	});

	if (!apiResponse.ok) {
		throw new Error('Failed to fetch data');
	}

	const { data, errors } = await apiResponse.json();

	if (errors) {
		throw new Error(errors.map((e: any) => e.message).join(', '));
	}

	return data as T;
};
