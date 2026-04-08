import React, { useState, useEffect } from 'react';

// Define the shape of the state we share with the UI
interface FetchState<T> {
	data: T | null;
	loading: boolean;
	error: string | null;
}

interface FetcherProps<T> {
	url: string;
	// This is the "Render Prop" function
	children: (state: FetchState<T>) => React.ReactNode;
}

export function DataFetcher<T>({ url, children }: FetcherProps<T>) {
	const [state, setState] = useState<FetchState<T>>({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		const fetchData = async () => {
			setState({ data: null, loading: true, error: null });
			try {
				const response = await fetch(url);
				if (!response.ok)
					throw new Error(`HTTP error! status: ${response.status}`);
				const data = await response.json();
				setState({ data, loading: false, error: null });
			} catch (err) {
				setState({
					data: null,
					loading: false,
					error: (err as Error).message,
				});
			}
		};

		fetchData();
	}, [url]);

	// Execute the children function and pass the state
	return <>{children(state)}</>;
}
