import { useState, useEffect } from 'react';
import MenuButton from './menu';
import NavBar from './navebar';

const MenuBar = (props) => {
	const [visible, setVisible] = useState(false);
	const [route, setRoute] = useState(null);
	const blueColor = 'nav__menu__link-mobile w-nav-link w--current w--nav-link-open';
	const blackColor = 'nav__menu__link-mobile w-nav-link w--nav-link-open';
	useEffect(() => {
		console.log('llllllllllllllllllllllllllllllllllllll');
		async function _() {
			const last = window.location.href.split('/').pop();
			console.log(last, 'lassssssssssssttttttttttttt');

			if (last) {
				setRoute(last);
			} else {
			}
		}
		_();
	}, []);
	const setValue = () => {
		setVisible(!visible);
	};

	return (
		<>
			<div
				data-collapse="medium"
				data-animation="over-right"
				data-duration={400}
				data-doc-height={1}
				data-no-scroll={1}
				data-w-id="48941a4f-8c15-7a61-3715-67421ac8b695"
				role="banner"
				className="nav w-nav"
			>
				{' '}
				{/* ::before */}
				<div className="nav__container">
					<a href="/" aria-current="page" className="nav__brand w-inline-block w--current">
						<div data-w-id="48941a4f-8c15-7a61-3715-67421ac8b698" className="html-embed w-embed">
							{/*?xml version="1.0" encoding="UTF-8"?*/}
							<svg
								width="93px"
								height="41px"
								viewBox="0 0 93 41"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
							>
								{/* Generator: Sketch 63.1 (92452) - https://sketch.com */}
								<title>logo-dark</title>
								<desc>Created with Sketch.</desc>
								<g id="Navigation" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
									<g
										id="Navigation/Top-Nav/-Transparent"
										transform="translate(-128.000000, -35.000000)"
									>
										<g id="Main-Nav">
											<rect id="bounds" x={0} y={0} width={1440} height={111} />
											<g id="Group" transform="translate(128.000000, 35.000000)">
												<g id=".nav__logo--light">
													<g id="IR-Logo">
														<path
															d="M36.0800073,0.0610119048 C42.9412217,0.0610119048 48.5033343,5.70727865 48.5033343,12.6723024 C48.5033343,19.6373262 42.9412217,25.283593 36.0800073,25.283593 C29.2187929,25.283593 23.6566802,19.6373262 23.6566802,12.6723024 C23.6566802,5.70727865 29.2187929,0.0610119048 36.0800073,0.0610119048 Z M36.0800073,6.05258288 C32.4785269,6.05258288 29.5589506,9.0163321 29.5589506,12.6723024 C29.5589506,16.3282728 32.4785269,19.292022 36.0800073,19.292022 C39.6814876,19.292022 42.601064,16.3282728 42.601064,12.6723024 C42.601064,9.0163321 39.6814876,6.05258288 36.0800073,6.05258288 Z"
															id="infinity-left-circle"
															fill="#E73536"
														/>
														<path
															d="M56.166766,0.0610119048 C63.0279804,0.0610119048 68.590093,5.70727865 68.590093,12.6723024 C68.590093,19.6373262 63.0279804,25.283593 56.166766,25.283593 C52.9181748,25.283593 49.9608105,24.0178383 47.7471521,21.9456543 C49.0744843,20.2188082 50.035948,18.189109 50.5152955,15.9759446 C51.640891,17.9578044 53.7503391,19.292022 56.166766,19.292022 C59.7682463,19.292022 62.6878227,16.3282728 62.6878227,12.6723024 C62.6878227,9.0163321 59.7682463,6.05258288 56.166766,6.05258288 C53.7340603,6.05258288 51.6124835,7.40483749 50.4916749,9.40927321 C49.997631,7.20099506 49.0222034,5.17810314 47.6836756,3.46012579 C49.9032037,1.35155427 52.8865199,0.0610119048 56.166766,0.0610119048 Z"
															id="infinity-right-circle"
															fill="#E73536"
														/>
														<polygon
															id="Path-Copy-2"
															fill="currentColor"
															points="58.9649039 31.2751639 58.9649039 33.1898292 54.2453185 33.1898292 54.2453185 35.1733672 58.4902329 35.1733672 58.4902329 37.005385 54.2453185 37.005385 54.2453185 39.0026977 59.1140862 39.0026977 59.1140862 40.9035883 52.1296423 40.9035883 52.1296423 31.2751639"
														/>
														<polygon
															id="Path-Copy-3"
															fill="currentColor"
															points="47.8422083 33.1347309 47.8422083 40.9035883 45.726532 40.9035883 45.726532 33.1347309 43.0412507 33.1347309 43.0412507 31.2751639 50.5274896 31.2751639 50.5274896 33.1347309"
														/>
														<polygon
															id="Path-Copy-4"
															fill="currentColor"
															points="39.3544503 31.2751639 41.4701265 31.2751639 41.4701265 40.9035883 39.3544503 40.9035883"
														/>
														<polygon
															id="Path-Copy-5"
															fill="currentColor"
															points="34.9258805 31.2751639 37.0415567 31.2751639 37.0415567 40.9035883 34.9258805 40.9035883 30.4097255 34.8703267 30.4097255 40.9035883 28.2940493 40.9035883 28.2940493 31.2751639 30.2741052 31.2751639 34.9258805 37.4737204"
														/>
														<polygon
															id="Path-Copy-6"
															fill="currentColor"
															points="23.835593 31.2751639 25.9512692 31.2751639 25.9512692 40.9035883 23.835593 40.9035883"
														/>
														<polygon
															id="Path-Copy-7"
															fill="currentColor"
															points="22.1143698 31.2751639 22.1143698 33.16228 17.7202731 33.16228 17.7202731 35.2422401 21.8973774 35.2422401 21.8973774 37.1293561 17.7202731 37.1293561 17.7202731 40.9035883 15.6045969 40.9035883 15.6045969 31.2751639"
														/>
														<polygon
															id="Path-Copy-8"
															fill="currentColor"
															points="11.0902875 31.2751639 13.2059637 31.2751639 13.2059637 40.9035883 11.0902875 40.9035883 6.57413246 34.8703267 6.57413246 40.9035883 4.45845625 40.9035883 4.45845625 31.2751639 6.43851219 31.2751639 11.0902875 37.4737204"
														/>
														<polygon
															id="Path-Copy-9"
															fill="currentColor"
															points="0 31.2751639 2.11567622 31.2751639 2.11567622 40.9035883 0 40.9035883"
														/>
														<path
															d="M68.5843109,31.2751639 C70.0580585,31.2751639 71.1091051,31.5276952 71.7374822,32.0327653 C72.3658592,32.5378354 72.6800431,33.3505269 72.6800431,34.4708642 C72.6800431,36.0136237 72.0787992,37.0099743 70.8762935,37.4599458 L73.2767722,40.9035883 L70.672863,40.9035883 L68.5707489,37.8318592 L67.1060499,37.8318592 L67.1060499,40.9035883 L64.9903737,40.9035883 L64.9903737,31.2751639 L68.5843109,31.2751639 Z M68.6348799,33.1039121 L67.0481228,33.1039121 L67.0481228,35.9552481 L68.5941938,35.9552481 C69.3175056,35.9552481 69.8102543,35.8358697 70.0724548,35.5971092 C70.3346553,35.3583488 70.4657536,34.979552 70.4657536,34.4607072 C70.4657536,33.9418625 70.3301347,33.586023 70.0588928,33.3931781 C69.7876509,33.2003331 69.3129847,33.1039121 68.6348799,33.1039121 Z"
															id="Path-Copy-11"
															fill="currentColor"
														/>
														<polygon
															id="Path-Copy-12"
															fill="currentColor"
															points="81.6856828 31.2751639 81.6856828 33.1898292 76.9660974 33.1898292 76.9660974 35.1733672 81.2110119 35.1733672 81.2110119 37.005385 76.9660974 37.005385 76.9660974 39.0026977 81.8348651 39.0026977 81.8348651 40.9035883 74.8504212 40.9035883 74.8504212 31.2751639"
														/>
														<path
															d="M87.0314148,31.2751639 C88.722156,31.2751639 90.0195769,31.6952841 90.9237166,32.5355371 C91.8278562,33.37579 92.2799193,34.544321 92.2799193,36.0411651 C92.2799193,37.5380092 91.8391578,38.7226104 90.9576216,39.5950042 C90.0760855,40.4673979 88.7311979,40.9035883 86.9229186,40.9035883 L83.6815941,40.9035883 L83.6815941,31.2751639 L87.0314148,31.2751639 Z M87.0049791,33.1039121 L85.8250827,33.1039121 L85.8250827,38.9581043 L87.1677234,38.9581043 C88.1351528,38.9581043 88.8787965,38.7101645 89.3986768,38.2142775 C89.9185571,37.7183905 90.1784934,36.9975286 90.1784934,36.0516701 C90.1784934,35.1058115 89.9185571,34.3780624 89.3986768,33.8684007 C88.8787965,33.3587391 88.0809053,33.1039121 87.0049791,33.1039121 Z"
															id="Path-Copy-14"
															fill="currentColor"
														/>
													</g>
												</g>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</div>
					</a>
					<NavBar />
					<MenuButton visible={visible} setValue={setValue} />
				</div>
				<div
					class="w-nav-overlay"
					data-wf-ignore=""
					id="w-nav-overlay-0"
					style={{
						display: visible ? 'block' : 'none',
						height: '10676px',
						width: '740px',
						background: 'white',
					}}
				>
					<div
						style={{
							width: 25,
							position: 'relative',
							float: 'right',
							marginTop: 18,
							marginRight: 18,
							fontSize: '24px',
							cursor: 'pointer',
						}}
						onClick={() => {
							setValue();
						}}
					>
						<div
							data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6b9"
							className="nav-icon__bar--white"
							style={{
								transform:
									'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(135deg) skew(0deg, 0deg)',
								'background-color': '#4c3e54',
							}}
						></div>
						<div
							data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6b9"
							className="nav-icon__bar--white"
							style={{
								transform:
									'translate3d(0px, -8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)',
								'background-color': '#4c3e54',
							}}
						></div>
					</div>
					<div style={{ clear: 'both', height: '100%' }}>
						<a
							href="/"
							aria-current="page"
							class={route == null ? blueColor : blackColor}
							data-ix="nav-link-hover"
							style={{ opacity: 1 }}
						>
							Home
						</a>
						<a
							href="/work"
							aria-current="page"
							class={route == 'work' ? blueColor : blackColor}
							data-ix="nav-link-hover"
							style={{ opacity: 1 }}
						>
							Work
						</a>
						<a
							href="/capabilities"
							aria-current="page"
							class={route == 'capabilities' ? blueColor : blackColor}
							data-ix="nav-link-hover"
							style={{ opacity: 1 }}
						>
							Capabilities
						</a>
						<a
							href="/community"
							aria-current="page"
							class={route == 'community' ? blueColor : blackColor}
							data-ix="nav-link-hover"
							style={{ opacity: 1 }}
						>
							Community
						</a>
						<a
							href="/company"
							aria-current="page"
							class={route == 'company' ? blueColor : blackColor}
							data-ix="nav-link-hover"
							style={{ opacity: 1 }}
						>
							Company
						</a>
						<a
							href="/contact"
							aria-current="page"
							class={route == 'contact' ? blueColor : blackColor}
							data-ix="nav-link-hover"
							style={{ opacity: 1 }}
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default MenuBar;
