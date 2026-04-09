import { useFetch } from '../../hooks/useFetch';
import { User, Loader2 } from 'lucide-react';

interface UserData {
	name: string;
	email: string;
}

export function Hooks() {
	// We just "call" the logic into our component
	const { data, loading, error } = useFetch<UserData>(
		'https://jsonplaceholder.typicode.com/users/1',
	);

	if (loading)
		return (
			<div className="flex gap-2 animate-spin">
				<Loader2 /> Loading...
			</div>
		);
	if (error) return <div className="text-red-500">Error: {error}</div>;

	return (
		<div>
			<h2 className="text-xl font-bold mb-4 mx-auto w-full">
				Custom Hook Pattern
			</h2>
			<div className="p-6 border rounded-xl bg-white shadow-sm flex items-center gap-4">
				<div className="bg-purple-100 p-3 rounded-full text-purple-600">
					<User size={24} />
				</div>
				<div>
					<h3 className="font-bold text-lg">{data?.name}</h3>
					<p className="text-gray-500">{data?.email}</p>
				</div>
			</div>
		</div>
	);
}
