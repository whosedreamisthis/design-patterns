// SaveButton.tsx
import { Divide } from 'lucide-react';
import { toastManager } from './NotificationManager';

export function NotifyButton() {
	const handleNotify = () => {
		// Trigger the observer
		toastManager.notify('Here is a notification');
	};

	return (
		<div>
			<h2 className="text-xl font-bold mb-4 mx-auto w-full">
				Observer Pattern
			</h2>
			<button
				onClick={handleNotify}
				className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
			>
				Notify
			</button>
		</div>
	);
}
