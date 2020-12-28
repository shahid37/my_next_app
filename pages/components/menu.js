import { useState } from 'react';

const MenuButton = (props) => {
	const [bool, setBool] = useState(false);

	const { visible, setValue } = props;
	return (
		<>
			<div
				data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6b6"
				className="menu-button w-nav-button"
				aria-label="menue"
				role="button"
				onClick={() => {
					setValue(visible);
				}}
			>
				<div className="nav-icon">
					<div
						data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6b9"
						className="nav-icon__bar--white"
						style={{ 'will-change': 'background', 'background-color': 'rgb(255, 255, 255)' }}
					></div>
					<div
						data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6b9"
						className="nav-icon__bar--white"
						style={{ 'will-change': 'background', 'background-color': 'rgb(255, 255, 255)' }}
					></div>
					<div
						data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6b9"
						className="nav-icon__bar--white"
						style={{ 'will-change': 'background', 'background-color': 'rgb(255, 255, 255)' }}
					></div>
					<div data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6b8" className="nav-icon__bar--white" />
					<div data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6b9" className="nav-icon__bar--white" />
					<div data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6ba" className="nav-icon__bar--white" />
					<div data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6bb" className="nav-icon__bar--dark" />
					<div data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6bc" className="nav-icon__bar--dark" />
				</div>
			</div>
		</>
	);
};

export default MenuButton;
