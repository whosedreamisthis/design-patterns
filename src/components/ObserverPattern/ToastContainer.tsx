import React, { useEffect, useState, useRef } from 'react';
import { toastManager } from './NotificationManager';

export function ToastContainer() {
	const [notification, setNotification] = useState<string | null>(null);
	// Use a Ref to keep track of the timer across renders
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		const unsubscribe = toastManager.subscribe((message) => {
			// 1. Clear any existing timer
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}

			setNotification(message);

			// 2. Start a new timer and store it in the Ref
			timerRef.current = setTimeout(() => {
				setNotification(null);
				timerRef.current = null;
			}, 2000);
		});

		return () => {
			unsubscribe();
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, []); // Empty array ensures this only runs ONCE on mount

	if (!notification) return null;

	return (
		<div className="fixed bottom-5 right-5 bg-slate-900 text-white px-6 py-3 rounded-lg shadow-2xl animate-bounce">
			{notification}
		</div>
	);
}
