// src/components/Layout/Sidebar.tsx
import {
	LayoutPanelLeft,
	MousePointer2,
	Box,
	GraduationCap,
} from 'lucide-react';

const patterns = [
	{ id: 'compound', label: 'Compound Pattern', icon: Box },
	{ id: 'render-props', label: 'Render Props', icon: MousePointer2 },
	{ id: 'hoc', label: 'HOC Pattern', icon: GraduationCap },
];

export function Sidebar({ activePattern, onSelect }) {
	return (
		<aside className="w-64 h-screen bg-slate-900 text-slate-300 flex flex-col fixed left-0 top-0">
			<div className="p-6 border-b border-slate-800 flex items-center gap-3 text-white">
				<GraduationCap className="text-blue-400" />
				<span className="font-bold tracking-tight">Pattern Lab</span>
			</div>

			<nav className="flex-1 p-4 space-y-2">
				{patterns.map((pattern) => {
					const Icon = pattern.icon;
					const isActive = activePattern === pattern.id;

					return (
						<button
							key={pattern.id}
							onClick={() => onSelect(pattern.id)}
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

			<div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
				v1.0.0 - Design Patterns
			</div>
		</aside>
	);
}
