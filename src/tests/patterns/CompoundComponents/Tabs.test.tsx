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
