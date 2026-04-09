import React, { useEffect, useState, useRef } from 'react';
import { toastManager } from './NotificationManager';

export function ToastContainer() {
	const [notification, setNotification] = useState<string | null>(null);
	// 1. Keep track of the message even after it's "cleared"
	const [displayMessage, setDisplayMessage] = useState<string>('');
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		const unsubscribe = toastManager.subscribe((message) => {
			if (timerRef.current) clearTimeout(timerRef.current);

			setNotification(message);
			setDisplayMessage(message); // Update the text being shown

			timerRef.current = setTimeout(() => {
				setNotification(null); // This triggers the slide-down CSS
				timerRef.current = null;
			}, 3000);
		});

		return () => {
			unsubscribe();
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, []);

	return (
		<div
			className={`fixed bottom-5 right-5 z-50 transition-all duration-500 ease-in-out transform ${
				notification
					? 'translate-y-0 opacity-100'
					: 'translate-y-10 opacity-0 pointer-events-none'
			}`}
		>
			<div className="bg-slate-900 text-white px-6 py-3 rounded-lg shadow-2xl animate-bounce">
				{/* 2. Use displayMessage so the box doesn't collapse while sliding */}
				{displayMessage}
			</div>
		</div>
	);
}
