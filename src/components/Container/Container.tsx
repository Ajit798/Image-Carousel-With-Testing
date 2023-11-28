import React from 'react';
import { useImagesApi } from '../hooks/useImagesHookApi';
import { Button } from '../Button/Button';

export const Container = () => {
	const imagesData = useImagesApi();

	const [activeImage, setActiveImage] = React.useState<number>(1);

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div>
				<Button
					title="Prev"
					onClick={() => {
						if (activeImage >= 1) {
							setActiveImage((prev) => prev - 1);
						}
					}}
				/>
			</div>
			{imagesData.map((image, imageIndex) => {
				return (
					imageIndex === activeImage && (
						<div data-testid="image-list" key={image.id}>
							<img src={image.url as string} alt={image.title as string} />
							<h3>{image.description}</h3>
						</div>
					)
				);
			})}
			<div>
				<Button
					title="Next"
					onClick={() => {
						if (activeImage < imagesData.length) {
							setActiveImage((prev) => prev + 1);
						}
					}}
				/>
			</div>
		</div>
	);
};
