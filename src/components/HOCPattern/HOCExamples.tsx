import { withLogger } from './withLogger';
import { Bell, ShieldCheck } from 'lucide-react';

// A simple Button
const RawButton = ({ label }: { label: string }) => (
	<button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
		<Bell size={18} /> {label}
	</button>
);

// A simple Card
const RawInfoCard = ({ title }: { title: string }) => (
	<div className="p-4 border rounded-xl bg-white shadow-sm flex items-center gap-3">
		<ShieldCheck className="text-green-500" />
		<span className="font-medium">{title}</span>
	</div>
);

// ENHANCE THEM!
export const LoggedButton = withLogger(RawButton);
export const LoggedCard = withLogger(RawInfoCard);
