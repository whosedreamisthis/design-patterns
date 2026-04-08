import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TabsProvider } from '../../../components/CompoundPattern/TabsProvider';
import { Tab, TabPanel } from '../../../components/CompoundPattern/Tab';

describe('Compound Component: Tabs', () => {
	it('should sync active tab state with the correct panel', () => {
		render(
			<TabsProvider defaultValue="home">
				<div>
					<Tab value="home">Home</Tab>
					<Tab value="settings">Settings</Tab>
				</div>
				<div>
					<TabPanel value="home">Welcome Home</TabPanel>
					<TabPanel value="settings">Settings Page</TabPanel>
				</div>
			</TabsProvider>,
		);

		// 1. Verify Initial State
		expect(screen.getByText('Welcome Home')).toBeInTheDocument();
		expect(screen.queryByText('Settings Page')).not.toBeInTheDocument();

		// 2. Action: Click the "Settings" tab
		const settingsTab = screen.getByRole('button', { name: /settings/i });
		fireEvent.click(settingsTab);

		// 3. Verify Updated State
		expect(screen.getByText('Settings Page')).toBeInTheDocument();
		expect(screen.queryByText('Welcome Home')).not.toBeInTheDocument();
	});
});

describe('Compound Pattern Safety', () => {
	it('should throw an error when child components are used without a provider', () => {
		// Suppress console.error for this test to keep the terminal clean
		const consoleSpy = vi
			.spyOn(console, 'error')
			.mockImplementation(() => {});

		expect(() => render(<Tab value="test">Fail</Tab>)).toThrow(
			'Tabs child components must be wrapped in a <Tabs /> provider',
		);

		consoleSpy.mockRestore();
	});
});

describe('Compound Pattern: Accessibility', () => {
	it('should apply active styling to the default tab', () => {
		render(
			<TabsProvider defaultValue="home">
				<Tab value="home">Home</Tab>
				<Tab value="settings">Settings</Tab>
			</TabsProvider>,
		);

		const homeTab = screen.getByRole('button', { name: /home/i });
		const settingsTab = screen.getByRole('button', { name: /settings/i });

		// Based on your Tab.tsx: isActive applies 'border-blue-500 text-blue-600'
		expect(homeTab).toHaveClass('border-blue-500');
		expect(homeTab).toHaveClass('text-blue-600');

		// Settings should have the inactive classes
		expect(settingsTab).toHaveClass('border-transparent');
		expect(settingsTab).toHaveClass('text-gray-500');
	});
});

describe('Compound Pattern: Composition', () => {
	it('should work even when children are nested in other elements', () => {
		render(
			<TabsProvider defaultValue="home">
				<header className="custom-wrapper">
					<Tab value="home">Home</Tab>
				</header>
				<main>
					<section>
						<TabPanel value="home">Deeply Nested Content</TabPanel>
					</section>
				</main>
			</TabsProvider>,
		);

		// This proves the Context API is doing the heavy lifting
		// rather than relying on direct parent-child relationships.
		expect(screen.getByText('Deeply Nested Content')).toBeInTheDocument();
	});
});
