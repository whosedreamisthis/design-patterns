import { DataFetcher } from './DataFetcher';
import { User, CheckCircle2, AlertCircle } from 'lucide-react';

// Types for our specific API calls
interface UserData {
	name: string;
	email: string;
	company: { name: string };
}

interface TodoData {
	id: number;
	title: string;
	completed: boolean;
}

export function RenderProps() {
	return (
		<div className="p-8 space-y-10 max-w-2xl mx-auto">
			<header>
				<h2 className="text-2xl font-bold text-gray-800">
					Render Props Pattern
				</h2>
				<p className="text-gray-500">
					Sharing logic while delegating UI to the consumer.
				</p>
			</header>

			{/* EXAMPLE 1: User Profile Card */}
			<section className="space-y-4">
				<h3 className="font-semibold text-blue-600 uppercase tracking-wider text-sm">
					User Data
				</h3>
				<DataFetcher<
					UserData
				> url="https://jsonplaceholder.typicode.com/users/1">
					{({ data, loading, error }) => {
						if (loading)
							return (
								<div className="p-6 border rounded-lg bg-gray-50 animate-pulse text-gray-400">
									Loading profile...
								</div>
							);
						if (error)
							return (
								<div className="p-4 bg-red-50 text-red-600 rounded-lg flex gap-2">
									<AlertCircle /> {error}
								</div>
							);

						return (
							<div className="p-6 border rounded-xl shadow-sm bg-white flex items-center gap-5 border-blue-100">
								<div className="bg-blue-100 p-3 rounded-full text-blue-600">
									<User size={32} />
								</div>
								<div>
									<h4 className="text-xl font-bold">
										{data?.name}
									</h4>
									<p className="text-gray-500">
										{data?.email}
									</p>
									<p className="text-xs text-blue-500 mt-1 font-medium">
										{data?.company.name}
									</p>
								</div>
							</div>
						);
					}}
				</DataFetcher>
			</section>

			{/* EXAMPLE 2: Minimal Todo List */}
			<section className="space-y-4">
				<h3 className="font-semibold text-green-600 uppercase tracking-wider text-sm">
					Tasks Preview
				</h3>
				<DataFetcher<
					TodoData[]
				> url="https://jsonplaceholder.typicode.com/todos?_limit=3">
					{({ data, loading }) => (
						<div className="bg-white border rounded-xl overflow-hidden shadow-sm">
							{loading ? (
								<div className="p-4 text-center text-gray-400">
									Fetching tasks...
								</div>
							) : (
								<ul className="divide-y">
									{data?.map((todo) => (
										<li
											key={todo.id}
											className="p-4 flex items-center gap-3"
										>
											<CheckCircle2
												size={18}
												className={
													todo.completed
														? 'text-green-500'
														: 'text-gray-300'
												}
											/>
											<span
												className={
													todo.completed
														? 'line-through text-gray-400'
														: 'text-gray-700'
												}
											>
												{todo.title}
											</span>
										</li>
									))}
								</ul>
							)}
						</div>
					)}
				</DataFetcher>
			</section>
		</div>
	);
}
