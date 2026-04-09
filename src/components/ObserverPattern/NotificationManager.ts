// NotificationManager.ts
type Listener = (message: string) => void;

class NotificationManager {
	private static instance: NotificationManager;
	private listeners: Listener[] = [];

	private constructor() {}

	public static getInstance(): NotificationManager {
		if (!NotificationManager.instance) {
			NotificationManager.instance = new NotificationManager();
		}
		return NotificationManager.instance;
	}

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

export const toastManager = NotificationManager.getInstance();
