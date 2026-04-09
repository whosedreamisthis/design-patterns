import { useTheme } from './ThemeContext';

export function ThemeToggleButton() {
	// Pulling the state and the updater function from context
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className={`p-2 border rounded-md  ${
				theme === 'light'
					? 'text-black bg-white'
					: 'text-white bg-slate-800'
			}`}
		>
			Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
		</button>
	);
}
