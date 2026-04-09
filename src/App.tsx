// src/App.tsx
import { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { Menu } from 'lucide-react';
import { Compound } from './components/CompoundPattern/Compound';
import { RenderProps } from './components/RenderPropsPattern/RenderProps';
import { HOC } from './components/HOCPattern/HOC';
import { Hooks } from './components/HooksPattern/Hooks';
import { Forms } from './components/FormPattern/Forms';
import { UserListContainer } from './components/ContainerPresentationPattern/UserListContainer';

function App() {
	const [activePattern, setActivePattern] = useState('compound');
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<div className="flex min-h-screen bg-slate-50">
			<Sidebar
				activePattern={activePattern}
				onSelect={setActivePattern}
				isOpen={isSidebarOpen}
				onClose={() => setIsSidebarOpen(false)}
			/>

			<main className="flex-1 lg:ml-64 min-w-0 flex flex-col">
				{/* FIXED HEADER: This always has padding so the menu/title look consistent */}
				<div className="p-6 lg:p-12 pb-0 lg:pb-0">
					<div className="flex items-center justify-between gap-4 mb-8 lg:hidden">
						<button
							onClick={() => setIsSidebarOpen(true)}
							className="p-2 bg-slate-900 text-white rounded-md shadow-md shrink-0"
						>
							<Menu size={24} />
						</button>
						<h1 className="text-xl font-bold text-slate-900">
							Pattern Lab
						</h1>
					</div>
				</div>

				{/* DYNAMIC CONTENT AREA: Padding is now applied conditionally here */}
				<div
					className={`flex-1 w-full mx-auto ${
						activePattern === 'compound'
							? 'p-0' // No padding for compound so tabs can hit the edge
							: 'p-6 lg:p-12 pt-0 lg:pt-0' // Standard padding for everything else
					}`}
				>
					<div
						className={
							activePattern === 'compound'
								? ''
								: 'max-w-4xl mx-auto'
						}
					>
						{activePattern === 'compound' && <Compound />}
						{activePattern === 'render-props' && <RenderProps />}
						{activePattern === 'hoc' && <HOC />}
						{activePattern === 'hooks' && <Hooks />}
						{activePattern === 'forms' && <Forms />}
						{activePattern === 'container-presentation' && (
							<UserListContainer />
						)}
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
