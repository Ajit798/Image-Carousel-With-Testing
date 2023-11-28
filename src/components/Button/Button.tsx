import React from 'react';

interface ButtonProps {
	title: string;
	onClick: () => void;
}

export const Button = ({ title, onClick }: ButtonProps) => {
	return (
		<div>
			<button
				style={{
					margin: '20px',
					padding: '5px',
					borderRadius: '10px',
					color: 'white',
					backgroundColor: 'black',
				}}
				onClick={onClick}
				data-testid="button-test"
			>
				{title}
			</button>
		</div>
	);
};
