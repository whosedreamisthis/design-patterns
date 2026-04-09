import React, { createContext, useState, useContext } from 'react';

// 1. Define the shape
interface ThemeContextType {
	theme: 'light' | 'dark';
	toggleTheme: () => void;
}

// 2. Create the Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. The Provider Component
export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div
				className={
					theme === 'dark'
						? 'bg-gray-900 text-white'
						: 'bg-white text-black'
				}
			>
				{children}
			</div>
		</ThemeContext.Provider>
	);
}

// 4. Custom Hook for easy consumption
export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context)
		throw new Error('useTheme must be used within a ThemeProvider');
	return context;
}
