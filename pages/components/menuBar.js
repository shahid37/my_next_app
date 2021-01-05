import React, { useState, useEffect } from 'react';
import MyDocument from './Scoll';

const MenuBar = (props) => {
	const [visible, setVisible] = useState(false);
	const [route, setRoute] = useState(null);
	// const [headerColor, setHeaderColor] = useState('rgba(0,0,0,0)');
	const [headerColor, setHeaderColor] = useState('');
	const [scroll, setScrool] = useState(0);
	const [bool, setBool] = useState(false);
	const [isHidden, setIsHidden] = React.useState(false);
	const number = '123';
	// const [headerColor, setHeaderColor] = useState('pink');
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
