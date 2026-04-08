import { useState, useRef } from 'react';
import { Pencil, Zap } from 'lucide-react';

export function Forms() {
	// 1. Controlled State
	const [name, setName] = useState('');

	// 2. Uncontrolled Ref
	const emailRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const uncontrolledValue = emailRef.current?.value;
		alert(
			`Controlled Name: ${name}\nUncontrolled Email: ${uncontrolledValue}`,
		);
	};

	return (
		<div className="space-y-8">
			<h2 className="text-2xl font-bold">Form Patterns</h2>

			<form
				onSubmit={handleSubmit}
				className="space-y-6 bg-white p-6 rounded-xl shadow-sm border"
			>
				{/* Controlled Input */}
				<div className="space-y-2">
					<label className="text-sm font-medium flex items-center gap-2">
						<Pencil size={14} className="text-blue-500" />
						Controlled (State):
					</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
						placeholder="Updates state on every key..."
					/>
					<p className="text-xs text-gray-400 italic">
						Current State: {name}
					</p>
				</div>

				{/* Uncontrolled Input */}
				<div className="space-y-2">
					<label className="text-sm font-medium flex items-center gap-2">
						<Zap size={14} className="text-yellow-500" />
						Uncontrolled (Ref):
					</label>
					<input
						type="email"
						ref={emailRef}
						className="w-full p-2 border rounded-md focus:ring-2 focus:ring-yellow-500 outline-none"
						placeholder="DOM holds this value..."
					/>
				</div>

				<button
					type="submit"
					className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors"
				>
					Submit Form
				</button>
			</form>
		</div>
	);
}
