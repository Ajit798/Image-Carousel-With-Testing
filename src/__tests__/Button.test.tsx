import { render, screen } from '@testing-library/react';
import { Button } from '../components/Button/Button';

describe('button-test', () => {
	it('should render button', () => {
		render(<Button title="prev" onClick={jest.fn()} />);

		expect(screen.getByText('prev')).toBeInTheDocument();
	});
});
