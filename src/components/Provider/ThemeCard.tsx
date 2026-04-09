import { useTheme } from './ThemeContext';

export function ThemeCard() {
	const { theme } = useTheme();

	return (
		<div
			className={`p-6 rounded-lg ${
				theme === 'dark'
					? 'bg-slate-800 text-white border-slate-700'
					: 'bg-white text-slate-900 border-gray-200'
			} border shadow-sm`}
		>
			<h3 className="text-lg font-bold">Themed Card</h3>
			<p>This card responds to the global theme context.</p>
		</div>
	);
}
