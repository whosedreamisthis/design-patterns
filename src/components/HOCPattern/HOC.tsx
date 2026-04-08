import React from 'react';
import { LoggedButton, LoggedCard } from './HOCExamples';

export function HOC() {
	return (
		<div className="space-y-6">
			<h2 className="text-2xl font-bold">HOC Pattern</h2>
			<p className="text-gray-500 italic text-sm">
				Check your console to see the logs!
			</p>
			<LoggedButton label="Click for Log" />
			<LoggedCard title="Protected Security Card" />
		</div>
	);
}
