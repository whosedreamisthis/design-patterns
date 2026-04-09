import React, { useState, useEffect } from 'react';
import { UserList } from './UserList';

// Purely Logic: Manages the lifecycle and data.
export const UserListContainer = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((data) => {
				setUsers(data);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<h2 className="text-xl font-bold mb-4 mx-auto w-full">
				Provider Pattern
			</h2>
			<UserList users={users} loading={loading} />
		</div>
	);
};
