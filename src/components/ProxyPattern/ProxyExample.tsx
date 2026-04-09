import React, { useState } from 'react';
import { toastManager } from '../ObserverPattern/NotificationManager';

export function ProxyExample() {
	// 1. Regular React State
	const [recipe, setRecipe] = useState({
		name: 'Mac and Cheese',
		servings: 4,
	});

	const updateServings = (newValue: number) => {
		const recipeCopy = { ...recipe };
		// 2. The Proxy (The Gatekeeper)
		const proxy = new Proxy(recipeCopy, {
			set(target: Record<string, unknown>, prop: string, value: unknown) {
				if (prop === 'servings') {
					// We cast value to number here for the check
					if (typeof value === 'number' && value < 1) {
						toastManager.notify('Minimum 1 serving required!');
						return true;
					}
				}

				// Use bracket notation with a safe target cast
				target[prop] = value;

				// Use a type assertion for the state update
				setRecipe({ ...target } as typeof recipe);
				return true;
			},
		});

		// 3. Calling the Proxy
		proxy.servings = newValue;
	};

	return (
		<div>
			<h2 className="text-xl font-bold mb-4 mx-auto w-full">
				Proxy Pattern
			</h2>
			<div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
				<h2 className="text-xl font-bold text-slate-900 mb-2">
					{recipe.name}
				</h2>
				<p className="text-slate-600 mb-4">
					Servings:{' '}
					<span className="font-mono font-bold">
						{recipe.servings}
					</span>
				</p>

				<div className="flex gap-2 mx-auto justify-center mt-5">
					<button
						onClick={() => updateServings(recipe.servings + 1)}
						className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
					>
						Add Serving
					</button>
					<button
						onClick={() => updateServings(recipe.servings - 1)}
						className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors text-slate-700 cursor-pointer"
					>
						Remove Serving
					</button>
				</div>
			</div>
		</div>
	);
}
