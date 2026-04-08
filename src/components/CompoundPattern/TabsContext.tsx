import { createContext, useContext } from 'react';

// Define what our context will hold
export interface TabsContextType {
	activeTab: string;
	setActiveTab: (value: string) => void;
}

// Create context with undefined as default
export const TabsContext = createContext<TabsContextType | undefined>(
	undefined,
);

// Custom hook for safety and cleaner code in child components
export function useTabs() {
	const context = useContext(TabsContext);
	if (!context) {
		throw new Error(
			'Tabs child components must be wrapped in a <Tabs /> provider',
		);
	}
	return context;
}
