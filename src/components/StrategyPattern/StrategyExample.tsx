import React, { useState } from 'react';
import {
	type ConversionStrategy,
	GramsToOunces,
	CelsiusToFahrenheit,
} from './ConverterStrategies';

export function StrategyExample() {
	const [inputValue, setInputValue] = useState<number>(0);
	// We store the current strategy in state
	const [strategy, setStrategy] = useState<ConversionStrategy>(GramsToOunces);

	return (
		<div>
			<h2 className="text-2xl font-bold text-gray-800">
				Strategy Pattern
			</h2>
			<div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
				<h2 className="text-xl font-bold text-slate-900 mb-4">
					Unit Converter
				</h2>

				<div className="flex gap-2 mb-6">
					<button
						onClick={() => setStrategy(GramsToOunces)}
						className={`px-3 py-1 rounded-md text-sm ${
							strategy.label === 'Grams to Ounces'
								? 'bg-slate-900 text-white'
								: 'bg-slate-100'
						}`}
					>
						Weight
					</button>
					<button
						onClick={() => setStrategy(CelsiusToFahrenheit)}
						className={`px-3 py-1 rounded-md text-sm ${
							strategy.label === 'Celsius to Fahrenheit'
								? 'bg-slate-900 text-white'
								: 'bg-slate-100'
						}`}
					>
						Temp
					</button>
				</div>

				<div className="space-y-4">
					<div>
						<label className="block text-xs font-semibold text-slate-500 uppercase mb-1">
							Input Value
						</label>
						<input
							type="number"
							value={inputValue}
							onChange={(e) =>
								setInputValue(Number(e.target.value))
							}
							className="w-full p-2 border border-slate-300 rounded-lg"
						/>
					</div>

					<div className="p-4 bg-slate-50 rounded-lg border border-dashed border-slate-300">
						<p className="text-sm text-slate-500 mb-1">
							{strategy.label} Result:
						</p>
						<p className="text-2xl font-mono font-bold text-slate-900">
							{strategy.convert(inputValue).toFixed(2)}{' '}
							{strategy.unit}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
