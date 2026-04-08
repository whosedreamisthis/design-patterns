import { ReactNode } from 'react';
import { useTabs } from './TabsContext';

interface TabProps {
	value: string;
	children: ReactNode;
}

export function Tab({ value, children }: TabProps) {
	const { activeTab, setActiveTab } = useTabs();
	const isActive = activeTab === value;

	return (
		<button
			onClick={() => setActiveTab(value)}
			className={`px-4 py-2 text-sm font-medium transition-all border-b-2 ${
				isActive
					? 'border-blue-500 text-blue-600'
					: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
			}`}
		>
			{children}
		</button>
	);
}

export function TabPanel({ value, children }: TabProps) {
	const { activeTab } = useTabs();

	// If this isn't the active tab, render nothing
	if (activeTab !== value) return null;

	return (
		<div className="p-4 mt-2 animate-in fade-in duration-300">
			{children}
		</div>
	);
}
