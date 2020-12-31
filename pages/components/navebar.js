import Link from 'next/link';

const NavBar = (props) => {
	const { data } = props;
	// console.log('navbar', data);
	const object = {
		Cdata: data,
	};
	// console.log('nav', object);

	return (
		<nav role="navigation" className="nav__menu w-nav-menu">
			<a
				href="/"
				data-w-id="48941a4f-8c15-7a61-3715-67421ac8b69a"
				aria-current="page"
				className="nav__menu__link w-nav-link w--current"
				data-ix="nav-link-hover"
			>
				Home
			</a>
			<a
				href="/work"
				data-w-id="33e117a4-4d46-4e9f-176e-cb3d83e17f4d"
				className="nav__menu__link w-nav-link"
				data-ix="nav-link-hover"
			>
				Work
			</a>
			<a
				href="/capabilities"
				data-w-id="48941a4f-8c15-7a61-3715-67421ac8b69c"
				className="nav__menu__link w-nav-link"
				data-ix="nav-link-hover"
			>
				capabilities
			</a>
			{/* <a
				href="/company"
				data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6a0"
				className="nav__menu__link w-nav-link"
				data-ix="nav-link-hover"
			>
				company
			</a> */}
			<Link
				href={{
					pathname: '/company',
					// query: { data: JSON.stringify(object) },
				}}
			>
				<a
					aria-current="page"
					data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6a0"
					// className="nav__menu__link w-nav-link"
					className="nav__menu__link w-nav-link w--current"
					data-ix="nav-link-hover"
				>
					{'Company' || 'Unknown'}
				</a>
			</Link>
			<a
				href="/community"
				data-w-id="48941a4f-8c15-7a61-3715-67421ac8b69e"
				className="nav__menu__link w-nav-link"
				data-ix="nav-link-hover"
			>
				community
			</a>
			<a
				href="http://shift.infinite.red/"
				data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6a2"
				target="_blank"
				className="nav__menu__link w-nav-link"
				data-ix="nav-link-hover"
			>
				blog
			</a>
			<a
				href="/contact"
				data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6a6"
				className="nav__menu__link w-nav-link"
				data-ix="nav-link-hover"
			>
				contact
			</a>
			<a
				href="/"
				aria-current="page"
				className="nav__menu__link-mobile w-nav-link w--current"
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
			<a
				href="https://shift.infinite.red/"
				target="_blank"
				className="nav__menu__link-mobile w-nav-link"
				data-ix="nav-link-hover"
			>
				Blog
			</a>
			<a href="/contact" className="nav__menu__link-mobile w-nav-link" data-ix="nav-link-hover">
				Contact
			</a>
		</nav>
	);
};

export default NavBar;
