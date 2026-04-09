import React from 'react';

interface User {
	name: string;
	id: string;
}
// Purely UI: No fetch, no state logic.
export const UserList = ({
	users,
	loading,
}: {
	users: User[];
	loading: boolean;
}) => {
	if (loading) return <div className="animate-pulse">Loading users...</div>;

	return (
		<ul className="space-y-2">
			{users.map((user) => (
				<li key={user.id} className="p-3 border rounded shadow-sm">
					{user.name}
				</li>
			))}
		</ul>
	);
};
