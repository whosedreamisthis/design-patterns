// SaveButton.tsx
import { toastManager } from './NotificationManager';

export function NotifyButton() {
	const handleNotify = () => {
		// Trigger the observer
		toastManager.notify('Here is a notification');
	};

	return (
		<button
			onClick={handleNotify}
			className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
		>
			Notify
		</button>
	);
}
