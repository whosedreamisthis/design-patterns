import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { RenderProps } from '../../../components/RenderPropsPattern/RenderProps';

// Mocking the global fetch API
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('RenderProps Component', () => {
	beforeEach(() => {
		mockFetch.mockClear();
	});

	it('renders loading states initially', () => {
		// Provide a promise that doesn't resolve immediately
		mockFetch.mockReturnValue(new Promise(() => {}));

		render(<RenderProps />);

		expect(screen.getByText(/Loading profile.../i)).toBeInTheDocument();
		expect(screen.getByText(/Fetching tasks.../i)).toBeInTheDocument();
	});

	it('renders user data and tasks after successful fetch', async () => {
		// Setup mock responses for both calls in RenderProps
		mockFetch
			.mockResolvedValueOnce({
				ok: true,
				json: async () => ({
					name: 'Leanne Graham',
					email: 'Sincere@april.biz',
					company: { name: 'Romaguera-Crona' },
				}),
			})
			.mockResolvedValueOnce({
				ok: true,
				json: async () => [
					{ id: 1, title: 'delectus aut autem', completed: false },
				],
			});

		render(<RenderProps />);

		// Check for User Data
		await waitFor(() => {
			expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
			expect(screen.getByText('Sincere@april.biz')).toBeInTheDocument();
		});

		// Check for Todo Data
		expect(screen.getByText('delectus aut autem')).toBeInTheDocument();
	});

	it('renders error state when fetch fails', async () => {
		// Mock a failure for the first call (User Data)
		mockFetch.mockResolvedValueOnce({
			ok: false,
			status: 404,
		});
		// Mock success for the second call
		mockFetch.mockResolvedValueOnce({
			ok: true,
			json: async () => [],
		});

		render(<RenderProps />);

		await waitFor(() => {
			expect(
				screen.getByText(/HTTP error! status: 404/i),
			).toBeInTheDocument();
		});
	});
});
