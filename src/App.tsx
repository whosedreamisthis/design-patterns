// src/App.tsx
import { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { Compound } from './components/CompoundPattern/Compound';
import { RenderProps } from './components/RenderPropsPattern/RenderProps';
import { HOC } from './components/HOCPattern/HOC';
import { Hooks } from './components/HooksPattern/Hooks';
import { Forms } from './components/FormPattern/Forms';

function App() {
	const [activePattern, setActivePattern] = useState('compound');

	return (
		<div className="flex min-h-screen bg-slate-50">
			{/* Sidebar - Fixed on the left */}
			<Sidebar
				activePattern={activePattern}
				onSelect={setActivePattern}
			/>

			{/* Main Content Area - Margined to the right of the sidebar */}
			<main className="flex-1 ml-64 p-12">
				<div className="max-w-4xl mx-auto">
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
