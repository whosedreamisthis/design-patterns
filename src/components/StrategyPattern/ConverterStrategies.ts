// The "Interface" - every strategy must have a 'convert' method
export interface ConversionStrategy {
	label: string;
	unit: string;
	convert: (value: number) => number;
}

// Concrete Strategy: Grams to Ounces
export const GramsToOunces: ConversionStrategy = {
	label: 'Grams to Ounces',
	unit: 'oz',
	convert: (grams) => grams * 0.035274,
};

// Concrete Strategy: Celsius to Fahrenheit
export const CelsiusToFahrenheit: ConversionStrategy = {
	label: 'Celsius to Fahrenheit',
	unit: '°F',
	convert: (celsius) => (celsius * 9) / 5 + 32,
};
