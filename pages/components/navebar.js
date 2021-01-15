import { useEffect, useState } from 'react';

const NavBar = (props) => {
	const { headerColor, textColor } = props;
	const [color2, setColor] = useState('');

	useEffect(() => {
		if (textColor) {
			setColor(textColor);
		} else {
			setColor(headerColor === 'rgba(0, 0, 0, 0)' ? '' : 'rgb(76, 62, 84)');
		}
	});
	return (
		<nav role="navigation" className="nav__menu w-nav-menu">
			<a
				href="/"
				data-w-id="48941a4f-8c15-7a61-3715-67421ac8b69a"
				aria-current="page"
				className="nav__menu__link w-nav-link"
				style={{ color: color2 }}
				data-ix="nav-link-hover"
			>
				Home
			</a>
			<a
				href="/startUp"
				data-w-id="48941a4f-8c15-7a61-3715-67421ac8b69a"
				aria-current="page"
				className="nav__menu__link w-nav-link"
				style={{ color: color2 }}
				data-ix="nav-link-hover"
			>
				Start Up
			</a>
			<a
				href="/work"
				data-w-id="33e117a4-4d46-4e9f-176e-cb3d83e17f4d"
				className="nav__menu__link w-nav-link"
				style={{ color: color2 }}
				data-ix="nav-link-hover"
			>
				Work
			</a>
			<a
				href="/capabilities"
				data-w-id="48941a4f-8c15-7a61-3715-67421ac8b69c"
				className="nav__menu__link w-nav-link"
				style={{ color: color2 }}
				data-ix="nav-link-hover"
			>
				capabilities
			</a>
			<a
				href="/company"
				data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6a0"
				className="nav__menu__link w-nav-link"
				style={{ color: color2 }}
				data-ix="nav-link-hover"
			>
				company
			</a>

			<a
				href="/blog"
				data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6a6"
				className="nav__menu__link w-nav-link"
				style={{ color: color2 }}
				data-ix="nav-link-hover"
			>
				blog
			</a>
			<a
				href="/contact"
				data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6a6"
				className="nav__menu__link w-nav-link"
				style={{ color: color2 }}
				data-ix="nav-link-hover"
			>
				contact
			</a>
			<a
				href="/"
				aria-current="page"
				className="nav__menu__link-mobile w-nav-link w--current"
				style={{ color: color2 }}
				data-ix="nav-link-hover"
			>
				Home
			</a>
			<a href="/work" className="nav__menu__link-mobile w-nav-link" data-ix="nav-link-hover">
				Work
			</a>
			<a href="/capabilities" className="nav__menu__link-mobile w-nav-link" data-ix="nav-link-hover">
				Capabilities
			</a>
			<a href="/community" className="nav__menu__link-mobile w-nav-link" data-ix="nav-link-hover">
				Community
			</a>
			<a href="/company" className="nav__menu__link-mobile w-nav-link" data-ix="nav-link-hover">
				Company
			</a>
			<a href="/blog" target="_blank" className="nav__menu__link-mobile w-nav-link" data-ix="nav-link-hover">
				Blog
			</a>
			<a href="/contact" className="nav__menu__link-mobile w-nav-link" data-ix="nav-link-hover">
				Contactttttttttttt
			</a>
		</nav>
	);
};

export default NavBar;
