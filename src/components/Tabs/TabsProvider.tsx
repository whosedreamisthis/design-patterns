import React, { useState } from 'react';
import { TabsContext } from './TabsContext';

interface TabsProps {
	children: React.ReactNode;
	defaultValue: string;
}

export function TabsProvider({ children, defaultValue }: TabsProps) {
	const [activeTab, setActiveTab] = useState(defaultValue);

	return (
		<TabsContext.Provider value={{ activeTab, setActiveTab }}>
			<div className="w-full flex flex-col">{children}</div>
		</TabsContext.Provider>
	);
}
