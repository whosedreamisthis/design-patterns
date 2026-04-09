import { useTheme } from './ThemeContext';
import { ThemeToggleButton } from './ThemeToggleButton';
import { ThemeCard } from './ThemeCard';

export function ThemePage() {
	const { theme } = useTheme();
	return (
		// 1. The Provider wraps the section of the app that needs the theme
		<div className="min-h-screen p-8 transition-colors duration-300">
			<header className="flex flex-col justify-between items-center mb-10">
				<h2 className="text-xl font-bold mb-4 mx-auto w-full">
					Provider Pattern
				</h2>

				{/* 2. The ToggleButton can live here in the header */}
				<ThemeToggleButton />
			</header>

			<main className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* 3. The Card can live deep inside the main content */}
				<ThemeCard />
				<ThemeCard />
			</main>
		</div>
	);
}
