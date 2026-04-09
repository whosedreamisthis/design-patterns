// NotificationManager.ts
type Listener = (message: string) => void;

class NotificationManager {
	private listeners: Listener[] = [];

	// Components use this to "Subscribe"
	subscribe(fn: Listener) {
		this.listeners.push(fn);
		return () => {
			this.listeners = this.listeners.filter((l) => l !== fn);
		};
	}

	// Components use this to "Notify" everyone
	notify(message: string) {
		this.listeners.forEach((listener) => listener(message));
	}
}

export const toastManager = new NotificationManager();
