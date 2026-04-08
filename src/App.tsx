// src/App.tsx
import { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { Menu } from 'lucide-react';
import { Compound } from './components/CompoundPattern/Compound';
import { RenderProps } from './components/RenderPropsPattern/RenderProps';
import { HOC } from './components/HOCPattern/HOC';
import { Hooks } from './components/HooksPattern/Hooks';
import { Forms } from './components/FormPattern/Forms';

function App() {
	const [activePattern, setActivePattern] = useState('compound');
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div className="flex min-h-screen bg-slate-50">
			{/* Sidebar - Fixed on the left */}
			<Sidebar
				activePattern={activePattern}
				onSelect={setActivePattern}
				isOpen={isSidebarOpen}
				onClose={() => setIsSidebarOpen(false)}
			/>

			{/* Main Content Area - Margined to the right of the sidebar */}
			<main className="flex-1 lg:ml-64 p-6 lg:p-12">
				{/* Mobile Header */}
				<div className="flex items-center gap-4 mb-8 lg:hidden">
					<button
						onClick={() => setIsSidebarOpen(true)}
						className="p-2 bg-slate-900 text-white rounded-md shadow-md shrink-0"
					>
						<Menu size={24} />
					</button>
					{/* Added truncate and min-w-0 to prevent pushing off screen */}
					<h1 className="text-xl font-bold text-slate-900">
						Pattern Lab
					</h1>
				</div>

				<div className="max-w-4xl mx-auto w-full">
					{activePattern === 'compound' && <Compound />}
					{activePattern === 'render-props' && <RenderProps />}
					{activePattern === 'hoc' && <HOC />}
					{activePattern === 'hooks' && <Hooks />}
					{activePattern === 'forms' && <Forms />}
				</div>
			</main>
		</div>
	);
}

export default App;
