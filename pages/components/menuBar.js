import { useState, useEffect } from 'react';
import MenuButton from './menu';
import NavBar from './navebar';
import Link from 'next/link';
import MyDocument from './Scoll';

const MenuBar = (props) => {
	const [visible, setVisible] = useState(false);
	const [route, setRoute] = useState(null);
	const blueColor = 'nav__menu__link-mobile w-nav-link w--current w--nav-link-open';
	const blackColor = 'nav__menu__link-mobile w-nav-link w--nav-link-open';
	const setValue = () => {
		setVisible(!visible);
	};
	return (
		<>
			<MyDocument />
		</>
	);
};

export default MenuBar;
