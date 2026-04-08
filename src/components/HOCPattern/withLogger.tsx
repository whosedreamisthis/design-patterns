import React, { useEffect } from 'react';

// This function takes a Component and returns a new Component
export function withLogger<T extends object>(
	WrappedComponent: React.ComponentType<T>,
) {
	return (props: T) => {
		useEffect(() => {
			console.log(
				`🚀 Component ${WrappedComponent.name || 'Component'} mounted`,
			);

			return () => console.log(`©️ Component unmounted`);
		}, []);

		const handleClick = () => {
			console.log(
				`🖱️ Clicked on ${WrappedComponent.name || 'Component'}`,
			);
		};

		return (
			<div onClick={handleClick} className="cursor-pointer">
				{/* We pass all original props through to the wrapped component */}
				<WrappedComponent {...props} />
			</div>
		);
	};
}
