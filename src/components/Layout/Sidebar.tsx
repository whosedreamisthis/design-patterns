import {
	Box,
	MousePointer2,
	GraduationCap,
	Anchor,
	Pencil,
	LayoutDashboard,
	User,
	X, // Import X to close the menu
} from 'lucide-react';

interface SidebarProps {
	activePattern: string;
	onSelect: (id: string) => void;
	isOpen: boolean; // New prop
	onClose: () => void; // New prop
}

export function Sidebar({
	activePattern,
	onSelect,
	isOpen,
	onClose,
}: SidebarProps) {
	const patterns = [
		{ id: 'compound', label: 'Compound Pattern', icon: Box },
		{ id: 'render-props', label: 'Render Props', icon: MousePointer2 },
		{ id: 'hoc', label: 'HOC Pattern', icon: GraduationCap },
		{ id: 'hooks', label: 'Custom Hooks', icon: Anchor },
		{ id: 'forms', label: 'Form Pattern', icon: Pencil },
		{
			id: 'container-presentation',
			label: 'Container/Presentation Pattern',
			icon: User,
		},
	];

	return (
		<>
			{/* Overlay for mobile: clicking outside the sidebar closes it */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/50 z-40 lg:hidden"
					onClick={onClose}
				/>
			)}

			<aside
				className={`
        fixed left-0 top-0 h-screen w-64 bg-slate-900 text-slate-300 flex flex-col z-50 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 
      `}
			>
				<div className="p-6 border-b border-slate-800 flex items-center justify-between text-white">
					<div className="flex items-center gap-3">
						<LayoutDashboard className="text-blue-400" />
						<span className="font-bold tracking-tight">
							Pattern Lab
						</span>
					</div>
					{/* Close button only visible on mobile */}
					<button
						onClick={onClose}
						className="lg:hidden text-slate-400 hover:text-white"
					>
						<X size={20} />
					</button>
				</div>

				<nav className="flex-1 p-4 space-y-2">
					{patterns.map((pattern) => {
						const Icon = pattern.icon;
						const isActive = activePattern === pattern.id;

						return (
							<button
								key={pattern.id}
								onClick={() => {
									onSelect(pattern.id);
									onClose(); // Close sidebar after selecting on mobile
								}}
								className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
									isActive
										? 'bg-blue-600 text-white'
										: 'hover:bg-slate-800 hover:text-slate-100'
								}`}
							>
								<Icon size={18} />
								<span className="font-medium text-sm">
									{pattern.label}
								</span>
							</button>
						);
					})}
				</nav>
			</aside>
		</>
	);
}
