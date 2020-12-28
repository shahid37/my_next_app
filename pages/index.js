import Footer from './components/footer';
import NavBar from './components/navebar';
var React = require('react');

const fetchData = async () =>
	await axios
		// .get('https://jsonplaceholder.typicode.com/users')
		.get('https://pikes.prismic.io/api/v1/documents/search?ref=X-L8ZhAAACQAY2TU#format=json')
		.then((res) => ({
			error: false,
			data: res.data,
		}))
		.catch(() => ({
			error: true,
			data: null,
		}));

const App = ({ data, error }) => {
	return (
		<div>
			{/* Last Published: Thu Dec 03 2020 16:57:12 GMT+0000 (Coordinated Universal Time) */}
			{/* Mirrored from infinite.red/ by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 23 Dec 2020 11:35:41 GMT */}
			<meta charSet="utf-8" />
			<title>Infinite Red: Designers and Developers in the US</title>
			<meta
				content="We design & build native mobile apps & websites. React Native, React.js, & Rails"
				name="description"
			/>
			<meta content="Infinite Red: Designers and Developers in the US" property="og:title" />
			<meta
				content="We design & build native mobile apps & websites. React Native, React.js, & Rails"
				property="og:description"
			/>
			<meta
				content="https://assets.website-files.com/5e67db0c1e7a468249544a75/5f80cc1fe7e52347ee9eb300_graph-ir.jpg"
				property="og:image"
			/>
			<meta content="Infinite Red: Designers and Developers in the US" property="twitter:title" />
			<meta
				content="We design & build native mobile apps & websites. React Native, React.js, & Rails"
				property="twitter:description"
			/>
			<meta
				content="https://assets.website-files.com/5e67db0c1e7a468249544a75/5f80cc1fe7e52347ee9eb300_graph-ir.jpg"
				property="twitter:image"
			/>
			<meta property="og:type" content="website" />
			<meta content="summary_large_image" name="twitter:card" />
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			{/* <link
					href="https://assets.website-files.com/5e67db0c1e7a468249544a75/css/infinite-red-website.f19641911.min.css"
					rel="stylesheet"
					type="text/css"
				/> */}
			{/*[if lt IE 9]><![endif]*/}
			<link
				href="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e96204b6085211e0c7f48f2_favicon.png"
				rel="shortcut icon"
				type="image/x-icon"
			/>
			<link
				href="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e96204d92bbee4276b5761c_webclip.png"
				rel="apple-touch-icon"
			/>
			<style
				dangerouslySetInnerHTML={{
					__html:
						'\n  \n     .container-scroll {\n\t\tscrollbar-width: none; /* Firefox 64 */\n        -ms-overflow-style: none; /* Internet Explorer 11 */\n    }\n  \n    .container-scroll::-webkit-scrollbar { /** WebKit */\n      display: none;\n    }\n  \n',
				}}
			/>
			<meta property="og:image:width" content={1200} />
			<meta property="og:image:height" content={630} />
			{/* Begin Inspectlet Asynchronous Code */}
			{/* End Inspectlet Asynchronous Code */}
			<meta name="google-site-verification" content="PziDawbND-UbE8RPHIApiyKHqLwhQqNCzyAYEmFW-Tc" />
			{/* Global site tag (gtag.js) - Google Analytics */}
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
					<div
						data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6b6"
						className="menu-button w-nav-button"
						aria-label="menue"
						role="button"
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
				</div>
			</div>

			<div className="hero-home">
				<div className="container">
					<div className="hero-home__overview">
						<div className="hero-home__overview__content">
							<h1 className="h1--reversed">
								We're developers and designers who build apps and websites&nbsp;for you
							</h1>
							<p className="p--large p--reversed">
								A friendly group of experts in the US who build impactful products and relationships
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="clients-featured">
				<div className="container">
					<div className="clients-featured__collection-wrapper w-dyn-list">
						<div role="list" className="clients-featured__collection w-dyn-items w-row">
							<div
								role="listitem"
								className="clients-featured__collection__item w-dyn-item w-col w-col-4"
							>
								<div
									style={{
										backgroundImage:
											'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5e696ca86810061d659d79a8_microsoft.html)',
									}}
									className="clients-featured__collection__item__img"
								/>
							</div>
							<div
								role="listitem"
								className="clients-featured__collection__item w-dyn-item w-col w-col-4"
							>
								<div
									style={{
										backgroundImage:
											'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5e696d25681006100a9d7acc_bluejeans.html)',
									}}
									className="clients-featured__collection__item__img"
								/>
							</div>
							<div
								role="listitem"
								className="clients-featured__collection__item w-dyn-item w-col w-col-4"
							>
								<div
									style={{
										backgroundImage:
											'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5e696d85157c8c11856f45d0_fandor.html)',
									}}
									className="clients-featured__collection__item__img"
								/>
							</div>
							<div
								role="listitem"
								className="clients-featured__collection__item w-dyn-item w-col w-col-4"
							>
								<div
									style={{
										backgroundImage:
											'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5e6fd30639a59734dc598b06_logo-arcade-city.html)',
									}}
									className="clients-featured__collection__item__img"
								/>
							</div>
							<div
								role="listitem"
								className="clients-featured__collection__item w-dyn-item w-col w-col-4"
							>
								<div
									style={{
										backgroundImage:
											'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5e696e1e681006f6419d81ec_ucberkley.html)',
									}}
									className="clients-featured__collection__item__img"
								/>
							</div>
							<div
								role="listitem"
								className="clients-featured__collection__item w-dyn-item w-col w-col-4"
							>
								<div
									style={{
										backgroundImage:
											'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5e696e83157c8c24846f4964_chain%20react.html)',
									}}
									className="clients-featured__collection__item__img"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="cta-capabilities">
				<div className="container">
					<div className="cta__intro">
						<h2>
							We're reliable, <br />
							we over-communicate, <br />
							and ... we over-communicate
						</h2>
						<p className="p--large">
							We only have senior software engineers and designers. They have been helping businesses like
							yours for over ten years. Our thorough network and knowledge lets us build the right
							solution. We take pride in reliable, reusable, and readable works. <br />
							Did we mention we over-communicate?
						</p>
						<a href="capabilities.html" className="bttn bttn--outlined bttn--spacing-top-lg w-button">
							What we offer
						</a>
					</div>
					<div className="cta-capabilities__tech">
						<div className="capabilities__collection-wrapper w-dyn-list">
							<div role="list" className="capabilities__collection w-dyn-items">
								<div role="listitem" className="capabilities__collection__item w-dyn-item">
									<a
										href="technologies/react-native.html"
										className="cta-capabilities__tech__link w-inline-block"
									>
										<img
											src="https://assets.website-files.com/5e696c156810060ef59d768e/5e700a6fbfeebf79fe21790f_s-react-native.svg"
											alt="React Native"
											className="capabilities__icon"
										/>
										<h5 className="h5--link">React Native</h5>
									</a>
								</div>
								<div role="listitem" className="capabilities__collection__item w-dyn-item">
									<a href="design.html" className="cta-capabilities__tech__link w-inline-block">
										<img
											src="https://assets.website-files.com/5e696c156810060ef59d768e/5e700a2cff2c95d8c91c588a_s-design.svg"
											alt="Design"
											className="capabilities__icon"
										/>
										<h5 className="h5--link">Design</h5>
									</a>
								</div>
								<div role="listitem" className="capabilities__collection__item w-dyn-item">
									<a href="websites.html" className="cta-capabilities__tech__link w-inline-block">
										<img
											src="https://assets.website-files.com/5e696c156810060ef59d768e/5e700a4e5ff238eb00682bb1_s-react-js.svg"
											alt="ReactJS"
											className="capabilities__icon"
										/>
										<h5 className="h5--link">ReactJS</h5>
									</a>
								</div>
								<div role="listitem" className="capabilities__collection__item w-dyn-item">
									<a
										href="technologies/ruby-on-rails.html"
										className="cta-capabilities__tech__link w-inline-block"
									>
										<img
											src="https://assets.website-files.com/5e696c156810060ef59d768e/5e700a4208830f673ff1e946_s-ruby.svg"
											alt="Ruby on Rails"
											className="capabilities__icon"
										/>
										<h5 className="h5--link">Ruby on Rails</h5>
									</a>
								</div>
								<div role="listitem" className="capabilities__collection__item w-dyn-item">
									<a href="mobile-apps.html" className="cta-capabilities__tech__link w-inline-block">
										<img
											src="https://assets.website-files.com/5e696c156810060ef59d768e/5e700a0f067b43914cd50ff6_s-ios.svg"
											alt="iOS"
											className="capabilities__icon"
										/>
										<h5 className="h5--link">iOS</h5>
									</a>
								</div>
								<div role="listitem" className="capabilities__collection__item w-dyn-item">
									<a href="mobile-apps.html" className="cta-capabilities__tech__link w-inline-block">
										<img
											src="https://assets.website-files.com/5e696c156810060ef59d768e/5e700a1c6ec5c332aff7069b_s-android.svg"
											alt="Android"
											className="capabilities__icon"
										/>
										<h5 className="h5--link">Android</h5>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="cta-img cta-img--react">
				<div className="container">
					<div className="cta__intro">
						<h2 className="h2--reversed">React + React Native Experts</h2>
						<p className="p--large p--reversed">
							When it comes to mobile and web technologies, we are second to none. Our software engineers
							have worked with React.JS and React Native to build web and mobile apps for over five years.
							We maintain some of the most popular React/React Native open source software. We also host
							the USA’s only React Native conference.
							<br />
							<a href="technologies/react-native.html" className="p--reversed-link p--link">
								Learn more
							</a>
						</p>
						<div className="cta__intro__bttns">
							<a href="contact.html" className="bttn bttn-spacing-top-md w-button">
								Schedule a video call
							</a>
						</div>
					</div>
				</div>
				<div className="container-scroll">
					<a
						data-w-id="ddfaf30e-01d4-fcee-ec44-0857e2093bb8"
						href="https://cr.infinite.red/"
						target="_blank"
						className="cta__card cta-card--scroll w-inline-block"
					>
						<div className="cta__card__img card__home">
							<img
								src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5ec829caa489f5d3d257b3f7_cr_mark_accent-orange.svg"
								alt="Ignite logo "
								className="cta-card__img cta-card__img--cr"
							/>
						</div>
						<div className="cta__card__content">
							<h4 className="heading">Chain React</h4>
							<p>The U.S. React Native conference hosted in Portland, Oregon</p>
							<div className="cta__card__content__link">
								<img
									src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5ec8298fe3e7af78adb19fa2_i-link-red.svg"
									alt="link icon"
									className="cta__link__icon icon--link"
								/>
								<div className="icon-link">View website</div>
							</div>
						</div>
					</a>
					<a
						data-w-id="ba57f7da-0d81-61c0-0f5b-f2d2ed458908"
						href="https://github.com/infinitered/ignite"
						target="_blank"
						className="cta__card cta-card--scroll w-inline-block"
					>
						<div className="cta__card__img card__home">
							<img
								src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e753462d0097c5229f0d3b5_ignite-logo.svg"
								alt="Ignite logo "
								className="cta-card__img"
							/>
						</div>
						<div className="cta__card__content">
							<h4 className="heading">30+ Open Source Projects</h4>
							<p>View some of our popular open source projects, like Ignite.</p>
							<div className="cta__card__content__link">
								<img
									src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e753769351b76cf7cf58492_icon-github.svg"
									alt="github icon"
									className="cta__link__icon"
								/>
								<div className="icon-link">View on github</div>
							</div>
						</div>
					</a>
					<a
						data-w-id="e854f674-41a7-8b54-3034-ae2d2ad0884e"
						href="https://academy.infinite.red/"
						target="_blank"
						className="cta__card cta-card--scroll w-inline-block"
					>
						<div className="cta__card__img card__home">
							<img
								src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5ec82a5e2b50b60fd4062da5_iracademy-mark.svg"
								alt="Ignite logo "
								className="cta-card__img cta-card__img--academy"
							/>
						</div>
						<div className="cta__card__content">
							<h4 className="heading">Infinite Red Academy</h4>
							<p>Online training with experienced React Native engineers. </p>
							<div className="cta__card__content__link">
								<img
									src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5ec8298fe3e7af78adb19fa2_i-link-red.svg"
									alt="github icon"
									className="cta__link__icon"
								/>
								<div className="icon-link">View our courses</div>
							</div>
						</div>
					</a>
				</div>
			</div>
			<div className="client-list">
				<div className="container">
					<h2 className="section-intro">Some of the companies we've worked with</h2>
					<div className="client-list__logos">
						<div className="client-list__collection-wrapper w-dyn-list">
							<div role="list" className="client-list__collection w-dyn-items w-row">
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{ backgroundImage: 'none' }}
										href="https://cr.infinite.red/"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5e696e83157c8c24846f4964_chain%20react.html)',
										}}
										href="https://cr.infinite.red/"
										className="client-list__collection__item__img w-inline-block"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{ backgroundImage: 'none' }}
										href="https://www.berkeley.edu/"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5e696e1e681006f6419d81ec_ucberkley.html)',
										}}
										href="https://www.berkeley.edu/"
										className="client-list__collection__item__img w-inline-block"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{ backgroundImage: 'none' }}
										href="work/arcade-city.html"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5e6fd30639a59734dc598b06_logo-arcade-city.html)',
										}}
										href="work/arcade-city.html"
										className="client-list__collection__item__img w-inline-block"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{ backgroundImage: 'none' }}
										href="work/fandor.html"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5e696d85157c8c11856f45d0_fandor.html)',
										}}
										href="work/fandor.html"
										className="client-list__collection__item__img w-inline-block"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{ backgroundImage: 'none' }}
										href="https://www.bluejeans.com/"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5e696d25681006100a9d7acc_bluejeans.html)',
										}}
										href="https://www.bluejeans.com/"
										className="client-list__collection__item__img w-inline-block"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{ backgroundImage: 'none' }}
										href="https://www.microsoft.com/en-us/"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5e696ca86810061d659d79a8_microsoft.html)',
										}}
										href="https://www.microsoft.com/en-us/"
										className="client-list__collection__item__img w-inline-block"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5ebd8d4ccc8f81014a1a1430_logo-fortis.html)',
										}}
										href="work/fortis-riders.html"
										className="client-list__collection__item__img w-inline-block"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5ebd8f447cf3f334c379f2ba_logo-fortis.html)',
										}}
										href="work/fortis-riders.html"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5eb1f75f880c3ea915829296_tes-teach.html)',
										}}
										href="work/blendspace.html"
										className="client-list__collection__item__img w-inline-block"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5eb1f75f880c3ea915829296_tes-teach.html)',
										}}
										href="work/blendspace.html"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{ backgroundImage: 'none' }}
										href="https://www.pipelinedeals.com/"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5ea366b05186cf7177ff10d0_logo-pipeline-deals.html)',
										}}
										href="https://www.pipelinedeals.com/"
										className="client-list__collection__item__img w-inline-block"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{ backgroundImage: 'none' }}
										href="https://crossoverhealth.com/"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5ebd8ef34e6fd6698a4193cd_logo-crossover.html)',
										}}
										href="https://crossoverhealth.com/"
										className="client-list__collection__item__img w-inline-block"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{ backgroundImage: 'none' }}
										href="work/bukowskis-market.html"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5ebd8d29bd7e3c3d9b62df0f_logo-bukowskis.html)',
										}}
										href="work/bukowskis-market.html"
										className="client-list__collection__item__img w-inline-block"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{ backgroundImage: 'none' }}
										href="https://eoslightmedia.com/"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5ebd8f2fb900e009b98951c7_logo-eos.html)',
										}}
										href="https://eoslightmedia.com/"
										className="client-list__collection__item__img w-inline-block"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{ backgroundImage: 'none' }}
										href="http://www.inventist.com/"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5ebd8f7a44a96e261b16c980_logo-inventist.html)',
										}}
										href="http://www.inventist.com/"
										className="client-list__collection__item__img w-inline-block"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5eb33077e506f587e72b4074_winmore--logo%402x.html)',
										}}
										href="https://winmore.app/lanetix-winmore.html"
										className="client-list__collection__item__img w-inline-block"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5eb33077e506f587e72b4074_winmore--logo%402x.html)',
										}}
										href="https://winmore.app/lanetix-winmore.html"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{ backgroundImage: 'none' }}
										href="https://outstand.com/"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5eac5d1f487e56b7904ec581_logo-outstand.html)',
										}}
										href="https://outstand.com/"
										className="client-list__collection__item__img w-inline-block"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{ backgroundImage: 'none' }}
										href="https://www.panago.com/"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5ebd8f928d147a6c3d9ba74c_logo-panago.html)',
										}}
										href="https://www.panago.com/"
										className="client-list__collection__item__img w-inline-block"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{ backgroundImage: 'none' }}
										href="https://www.realtor.com/"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5ebd8fc93b6cf2cb18dc0760_logo-realtor.html)',
										}}
										href="https://www.realtor.com/"
										className="client-list__collection__item__img w-inline-block"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{ backgroundImage: 'none' }}
										href="https://www.shirtspace.com/"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5ebd8d5a05b120d8f71b30f9_logo-shirtspace.html)',
										}}
										href="https://www.shirtspace.com/"
										className="client-list__collection__item__img w-inline-block"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{ backgroundImage: 'none' }}
										href="https://shopraise.com/"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5ebd8d641d36322cf8b1d6e4_logo-shopraise.html)',
										}}
										href="https://shopraise.com/"
										className="client-list__collection__item__img w-inline-block"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{ backgroundImage: 'none' }}
										href="https://www.protread.com/"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5ebd8fb7cf9d1ea70a1c8c8b_logo-pro-tread.html)',
										}}
										href="https://www.protread.com/"
										className="client-list__collection__item__img w-inline-block"
									/>
								</div>
								<div role="listitem" className="client-list__collection__item w-dyn-item w-col w-col-4">
									<a
										style={{ backgroundImage: 'none' }}
										href="https://ti.to/home"
										className="client-list__collection__item__img w-inline-block w-condition-invisible"
									/>
									<a
										style={{
											backgroundImage:
												'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5eac5d86487e5603c84ec81c_logo-tito.html)',
										}}
										href="https://ti.to/home"
										className="client-list__collection__item__img w-inline-block"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="client-testimonials">
				<div className="container">
					<div
						data-animation="slide"
						data-duration={500}
						data-infinite={1}
						className="client-testimonails__slider w-slider"
					>
						<div className="work-list__slider__mask w-slider-mask">
							<div className="client-testimonials__slider__slide1 w-slide">
								<div className="client-testimonial__slide-container">
									<div className="client-testimonial__collection-wrapper w-dyn-list">
										<div role="list" className="client-testimonial__collection w-dyn-items">
											<div
												role="listitem"
												className="client-testimonial__collection__item w-dyn-item"
											>
												<p className="p--quote">
													“The team at Infinite Red brought me from an idea, to reality. They
													worked with me and added a unique perspective to my project and
													created something beyond what I had imagined. They took the time to
													listen to what I needed and quickly made it something beautiful and
													cohesive! My experience with this design team was unparalleled!”
												</p>
												<div
													style={{ backgroundImage: 'none' }}
													className="client-testimonial__img"
												/>
												<h4 className="testimonial__client">Deby Aho</h4>
												<p className="testimonail__company">Sellebrate</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="client-testimonials__slider__slide1 w-slide">
								<div className="client-testimonial__slide-container">
									<div className="client-testimonial__collection-wrapper w-dyn-list">
										<div role="list" className="client-testimonial__collection w-dyn-items">
											<div
												role="listitem"
												className="client-testimonial__collection__item w-dyn-item"
											>
												<p className="p--quote">
													"We're building high visibility medical software for some of the
													world's leading firms. Infinite Red has been an invaluable and
													trusted partner with deep development expertise, excellent product
													vision, and the muscle to get the job done."
												</p>
												<div
													style={{ backgroundImage: 'none' }}
													className="client-testimonial__img"
												/>
												<h4 className="testimonial__client">Steve Shreve</h4>
												<p className="testimonail__company">Crossover Health</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="client-testimonials__slider__slide1 w-slide">
								<div className="client-testimonial__slide-container">
									<div className="client-testimonial__collection-wrapper w-dyn-list">
										<div role="list" className="client-testimonial__collection w-dyn-items">
											<div
												role="listitem"
												className="client-testimonial__collection__item w-dyn-item"
											>
												<p className="p--quote">
													"They took our prototype and built it into a working production MVP,
													and quickly adapted to changes as we did customer development."
												</p>
												<div
													style={{
														backgroundImage:
															'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5eab6f37f839525eb81a4d16_avatar-elemeno.html)',
													}}
													className="client-testimonial__img"
												/>
												<h4 className="testimonial__client">Ed Nanale</h4>
												<p className="testimonail__company">Elemeno</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="client-testimonials__slider__slide1 w-slide">
								<div className="client-testimonial__slide-container">
									<div className="client-testimonial__collection-wrapper w-dyn-list">
										<div role="list" className="client-testimonial__collection w-dyn-items">
											<div
												role="listitem"
												className="client-testimonial__collection__item w-dyn-item"
											>
												<p className="p--quote">
													"We really appreciate all the help Infinite Red provided to us
													building the app. They were always available, always professional,
													and a real pleasure to work with."
												</p>
												<div
													style={{ backgroundImage: 'none' }}
													className="client-testimonial__img"
												/>
												<h4 className="testimonial__client">Dan Aronson</h4>
												<p className="testimonail__company">Fandor</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="previousbutton w-slider-arrow-left">
							<img
								src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e6adcce03eb1a028fffb55b_circle-arrow-left.svg"
								alt=""
								className="image"
							/>
						</div>
						<div className="nextbutton w-slider-arrow-right">
							<img
								src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e6adcce03eb1a6378ffb55c_circle-arrow-right.svg"
								alt=""
								className="image-2"
							/>
						</div>
						<div className="work-list__slider__nav w-slider-nav w-slider-nav-invert w-round" />
					</div>
				</div>
			</div>
			<div className="work-list">
				<div className="container">
					<div className="section-intro-symbol">
						<h2>Some of our work</h2>
						<p className="p--large p--large__spacer--24">
							We blog about our process, and we showcase some along the way.&nbsp;&nbsp;Let's showcase
							your project next!
						</p>
						<a
							href="https://shift.infinite.red/behind-the-scenes-with-infinite-red-452a0df603ef"
							className="section-intro-link icon-link"
						>
							Learn more about our process
						</a>
					</div>
					<div className="work-list__featured">
						<div className="work-list__featured__collection-wrapper w-dyn-list">
							<div role="list" className="work-list__featured__collection w-dyn-items">
								<div role="listitem" className="work-list__featured__collection__item w-dyn-item">
									<a
										data-w-id="24dd5d76-4ef9-4304-b95f-b3e308b9d757"
										href="work/sellebrate.html"
										className="work-list__project__featured w-inline-block"
									>
										<div
											style={{
												backgroundImage:
													'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5f8914a7175a715314e3ab88_sellebrate-header.html)',
											}}
											className="work-list__project__featured__img"
										>
											<div className="work-list__slider__title">
												<h5 className="h5--reversed">Sellebrate</h5>
												<h2 className="h2--reversed">
													A place to buy, sell, and find inspiration for your event
												</h2>
												<div className="work-list__slider__title__categories">
													<h5 className="h5--reversed">Android&nbsp; |&nbsp; iOS</h5>
												</div>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="work-list__cards">
						<div className="work-list__cards__collection-wrapper w-dyn-list">
							<div role="list" className="work-list__cards__collection w-dyn-items w-row">
								<div
									role="listitem"
									className="work-list__cards__collection__item w-dyn-item w-col w-col-4"
								>
									<a
										data-w-id="9faa8e80-2410-9c49-9a18-e82ce5a556e7"
										href="work/arcade-city.html"
										className="project__card w-inline-block"
									>
										<div
											style={{
												backgroundImage:
													'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5e6feccebfeebf7acb20ce94_thumb.html)',
											}}
											className="work-list__project__card__img"
										/>
										<div className="work-list__project__card__info">
											<h4>Arcade City</h4>
											<div className="work-list__slider__title__categories">
												<h5>Android&nbsp; |&nbsp; iOS</h5>
											</div>
											<div className="work-list__project__card__icon">
												<img
													src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e6fe919bfeebf469720b8e3_arrow-r.svg"
													alt="arrow pointing right"
													width={256}
												/>
											</div>
										</div>
									</a>
								</div>
								<div
									role="listitem"
									className="work-list__cards__collection__item w-dyn-item w-col w-col-4"
								>
									<a
										data-w-id="9faa8e80-2410-9c49-9a18-e82ce5a556e7"
										href="work/docibr.html"
										className="project__card w-inline-block"
									>
										<div
											style={{
												backgroundImage:
													'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5e6feaa25e9c8334dcf86e05_docibr__thumb.html)',
											}}
											className="work-list__project__card__img"
										/>
										<div className="work-list__project__card__info">
											<h4>Docibr</h4>
											<div className="work-list__slider__title__categories">
												<h5>Web</h5>
											</div>
											<div className="work-list__project__card__icon">
												<img
													src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e6fe919bfeebf469720b8e3_arrow-r.svg"
													alt="arrow pointing right"
													width={256}
												/>
											</div>
										</div>
									</a>
								</div>
								<div
									role="listitem"
									className="work-list__cards__collection__item w-dyn-item w-col w-col-4"
								>
									<a
										data-w-id="9faa8e80-2410-9c49-9a18-e82ce5a556e7"
										href="work/fortis-riders.html"
										className="project__card w-inline-block"
									>
										<div
											style={{
												backgroundImage:
													'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5e6ff02bbfeebf0d1e20e10e_fortis__thumb.html)',
											}}
											className="work-list__project__card__img"
										/>
										<div className="work-list__project__card__info">
											<h4>Fortis Riders</h4>
											<div className="work-list__slider__title__categories">
												<h5>Android&nbsp; |&nbsp; iOS</h5>
											</div>
											<div className="work-list__project__card__icon">
												<img
													src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e6fe919bfeebf469720b8e3_arrow-r.svg"
													alt="arrow pointing right"
													width={256}
												/>
											</div>
										</div>
									</a>
								</div>
								<div
									role="listitem"
									className="work-list__cards__collection__item w-dyn-item w-col w-col-4"
								>
									<a
										data-w-id="9faa8e80-2410-9c49-9a18-e82ce5a556e7"
										href="work/elemeno.html"
										className="project__card w-inline-block"
									>
										<div
											style={{
												backgroundImage:
													'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5e6ff200067b43829ad48267_elemeno__thumb.html)',
											}}
											className="work-list__project__card__img"
										/>
										<div className="work-list__project__card__info">
											<h4>Elemeno</h4>
											<div className="work-list__slider__title__categories">
												<h5>Web&nbsp; |&nbsp; Android&nbsp; | iOS</h5>
											</div>
											<div className="work-list__project__card__icon">
												<img
													src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e6fe919bfeebf469720b8e3_arrow-r.svg"
													alt="arrow pointing right"
													width={256}
												/>
											</div>
										</div>
									</a>
								</div>
								<div
									role="listitem"
									className="work-list__cards__collection__item w-dyn-item w-col w-col-4"
								>
									<a
										data-w-id="9faa8e80-2410-9c49-9a18-e82ce5a556e7"
										href="work/blendspace.html"
										className="project__card w-inline-block"
									>
										<div
											style={{
												backgroundImage:
													'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5e979c1535e37ac26d9d39eb_work-small-blendspace%402x-4c7e3c39bf88d8d160af8ffb3a973502.html)',
											}}
											className="work-list__project__card__img"
										/>
										<div className="work-list__project__card__info">
											<h4>Blendspace</h4>
											<div className="work-list__slider__title__categories">
												<h5>iOS</h5>
											</div>
											<div className="work-list__project__card__icon">
												<img
													src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e6fe919bfeebf469720b8e3_arrow-r.svg"
													alt="arrow pointing right"
													width={256}
												/>
											</div>
										</div>
									</a>
								</div>
								<div
									role="listitem"
									className="work-list__cards__collection__item w-dyn-item w-col w-col-4"
								>
									<a
										data-w-id="9faa8e80-2410-9c49-9a18-e82ce5a556e7"
										href="work/fandor.html"
										className="project__card w-inline-block"
									>
										<div
											style={{
												backgroundImage:
													'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5ebd8a01b10ada76bb29c277_tile-fandor.html)',
											}}
											className="work-list__project__card__img"
										/>
										<div className="work-list__project__card__info">
											<h4>Fandor</h4>
											<div className="work-list__slider__title__categories">
												<h5>iOS</h5>
											</div>
											<div className="work-list__project__card__icon">
												<img
													src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e6fe919bfeebf469720b8e3_arrow-r.svg"
													alt="arrow pointing right"
													width={256}
												/>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="cta-img cta-img--community">
				<div className="container">
					<div className="cta__intro">
						<h2 className="h2--reversed">Community leaders</h2>
						<p className="p--large p--reversed">
							With over 30 open source projects, a screencast series, multiple books and published
							articles, and heavy involvement in the React Native and Rails communities, our team is
							leading the way. We've organized meetups and conferences as well as participated in many
							others as speakers and attendees. If it's relevant to the technologies we love, we'll
							probably be involved in some capacity.
						</p>
						<div className="cta__intro__bttns">
							<a href="community.html" className="bttn bttn--outlined bttn--outlined-reversed w-button">
								Learn more
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="bottom-cta">
				<div className="container">
					<div className="bottom-cta__intro">
						<h2 className="h2--crimson">Let's do this thing</h2>
						<p className="p--center">
							Ready to get to work? We’re your experts, your muscle, and your partner in building an
							impactful and professional product.
						</p>
					</div>
					<a href="contact.html" className="bttn bttn--outlined w-button">
						Contact us
					</a>
				</div>
			</div>
			<Footer />
			{/*[if lte IE 9]><![endif]*/}
			{/* Mirrored from infinite.red/ by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 23 Dec 2020 11:36:29 GMT */}
		</div>
	);
};

export const getStaticProps = async () => {
	// const data = await fetchData();
	// console.log('fffffffffffffffffffffffff');
	// console.log(data.data.results[0]);
	// console.log(data.data.results.length);
	return {
		// props: data,
		props: { data: 'helo' },
	};
};

export default App;
