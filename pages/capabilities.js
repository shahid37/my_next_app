import { useState } from 'react';
import Footer from './components/footer';
import MenuButton from './components/menu';
import MenuBar from './components/menuBar';
import NavBar from './components/navebar';
var React = require('react');

const Capabilities = ({ data, error }) => {
	const [visible, setVisible] = useState(false);
	const setValue = () => {
		setVisible(!visible);
	};

	return (
		<>
			{/* Last Published: Thu Dec 03 2020 16:57:12 GMT+0000 (Coordinated Universal Time) */}
			{/* Mirrored from infinite.red/capabilities by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 23 Dec 2020 11:36:33 GMT */}
			<meta charSet="utf-8" />
			<title>Capabilities - Design, iOS/Android Apps, Web</title>
			<meta
				content="We provide custom app and web design, as well as React Native iOS/Android app development, and Elixir/Phoenix and Ruby on Rails web development."
				name="description"
			/>
			<meta content="Capabilities - Design, iOS/Android Apps, Web" property="og:title" />
			<meta
				content="We provide custom app and web design, as well as React Native iOS/Android app development, and Elixir/Phoenix and Ruby on Rails web development."
				property="og:description"
			/>
			<meta content="/5f80cc1fe7e52347ee9eb300_graph-ir.jpg" property="og:image" />
			<meta content="Capabilities - Design, iOS/Android Apps, Web" property="twitter:title" />
			<meta
				content="We provide custom app and web design, as well as React Native iOS/Android app development, and Elixir/Phoenix and Ruby on Rails web development."
				property="twitter:description"
			/>
			<meta content="/5f80cc1fe7e52347ee9eb300_graph-ir.jpg" property="twitter:image" />
			<meta property="og:type" content="website" />
			<meta content="summary_large_image" name="twitter:card" />
			<meta content="width=device-width, initial-scale=1" name="viewport" />
			{/* <link
					href="/css/infinite-red-website.f19641911.min.css"
					rel="stylesheet"
					type="text/css"
				/> */}
			{/*[if lt IE 9]><![endif]*/}
			<link href="/5e96204b6085211e0c7f48f2_favicon.png" rel="shortcut icon" type="image/x-icon" />
			<link href="/5e96204d92bbee4276b5761c_webclip.png" rel="apple-touch-icon" />
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
			<MenuBar />
			<div className="hero-sub hero-img--capabilities">
				<div className="container">
					<div className="hero-sub__content">
						<h1 className="h1--reversed">What We Do for You</h1>
						<p className="p--large p--reversed">
							Our vast experience and expertise let us build the best dynamic apps and partnerships. You
							can trust our tested process and our engineering prowess to see your product <br />
							from start to finish.
						</p>
					</div>
				</div>
			</div>
			<div className="cta-capabilities">
				<div className="container">
					<div className="cta__intro">
						<h2>Tech Stack</h2>
						<p className="p--large">
							Our senior software engineers have been building and shipping apps for over ten years. We
							are one of the best React Native teams in the world. We are on the core team and we've
							helped Microsoft get React Native working in Windows.
							<br />
						</p>
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
			<div className="sub-intro">
				<div className="container">
					<div className="section-intro">
						<h2>Your friendly experts</h2>
					</div>
				</div>
			</div>
			<div className="grid-overview">
				<div className="container">
					<div className="grid-overview__content">
						<h3>UX&nbsp;+ Design</h3>
						<p>
							Our design process builds the ideal UI and UX for your market. A customized experience for
							your business and brand that leaves a lasting impression. &nbsp;
							<br />
							<br />
							Our entire design process is polished and guaranteed to delight, just like your product.
						</p>
						<a href="design.html" className="bttn bttn--outlined bttn--spacing-top-lg w-button">
							See our design process
						</a>
						<div className="grid-overview__links">
							<h5>Featured projects</h5>
							<div className="grid-overview__links__collection-wrapper w-dyn-list">
								<div role="list" className="grid-overview__collection-projects w-dyn-items">
									<div
										role="listitem"
										className="grid-overview__collection-projects__item w-dyn-item"
									>
										<a href="work/elemeno.html" className="text-link w-inline-block">
											<div>Elemeno</div>
										</a>
									</div>
									<div
										role="listitem"
										className="grid-overview__collection-projects__item w-dyn-item"
									>
										<a href="work/fortis-riders.html" className="text-link w-inline-block">
											<div>Fortis Riders</div>
										</a>
									</div>
									<div
										role="listitem"
										className="grid-overview__collection-projects__item w-dyn-item"
									>
										<a href="work/docibr.html" className="text-link w-inline-block">
											<div>Docibr</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="grid-overview__img grid__img-design" />
			</div>
			<div className="grid-overview">
				<div className="container w-clearfix">
					<div className="grid-overview__content-r">
						<h3>Mobile Apps</h3>
						<p>
							We're true mobile experts who understand the challenges of designing and delivering quality
							mobile apps. <br />
							<br />
							We use React Native as well as fully native development to optimize your project and share
							logic across platforms. Translation: you pay to build your app once, and it works on both
							iOS and Android.
						</p>
						<a href="mobile-apps.html" className="bttn bttn--outlined bttn--spacing-top-lg w-button">
							See our mobile process
						</a>
						<div className="grid-overview__links">
							<h5>Featured projects</h5>
							<div className="grid-overview__links__collection-wrapper w-dyn-list">
								<div role="list" className="grid-overview__collection-projects w-dyn-items">
									<div
										role="listitem"
										className="grid-overview__collection-projects__item w-dyn-item"
									>
										<a href="work/elemeno.html" className="text-link w-inline-block">
											<div>Elemeno</div>
										</a>
									</div>
									<div
										role="listitem"
										className="grid-overview__collection-projects__item w-dyn-item"
									>
										<a href="work/fortis-riders.html" className="text-link w-inline-block">
											<div>Fortis Riders</div>
										</a>
									</div>
									<div
										role="listitem"
										className="grid-overview__collection-projects__item w-dyn-item"
									>
										<a href="work/arcade-city.html" className="text-link w-inline-block">
											<div>Arcade City</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="grid-overview__img-left grid__img-mobile" />
			</div>
			<div className="grid-overview">
				<div className="container">
					<div className="grid-overview__content">
						<h3>Website + Web Apps</h3>
						<p>
							Your website connects the world to you and your product. We build effective sites and web
							apps that bring your customers the right content, quickly. &nbsp;
							<br />
							<br />
							Our friendly team gives you confidence in your message and tooling so you can trust that
							everyone who sees your product will enjoy it.
							<br />
						</p>
						<a href="websites.html" className="bttn bttn--outlined bttn--spacing-top-lg w-button">
							See our web process
						</a>
						<div className="grid-overview__links">
							<h5>Featured projects</h5>
							<div className="grid-overview__links__collection-wrapper w-dyn-list">
								<div role="list" className="grid-overview__collection-projects w-dyn-items">
									<div
										role="listitem"
										className="grid-overview__collection-projects__item w-dyn-item"
									>
										<a href="work/sellebrate.html" className="text-link w-inline-block">
											<div>Sellebrate</div>
										</a>
									</div>
									<div
										role="listitem"
										className="grid-overview__collection-projects__item w-dyn-item"
									>
										<a href="work/elemeno.html" className="text-link w-inline-block">
											<div>Elemeno</div>
										</a>
									</div>
									<div
										role="listitem"
										className="grid-overview__collection-projects__item w-dyn-item"
									>
										<a href="work/fortis-riders.html" className="text-link w-inline-block">
											<div>Fortis Riders</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="grid-overview__img grid__img-web" />
			</div>
			<div className="col-icon">
				<div className="container">
					<div className="col-icon-3 w-row">
						<div className="col-icon__col w-col w-col-4">
							<div className="col-icon__heading">
								<img
									src="/5e75005077d2fb4a746c2f88_icon-responsive.svg"
									alt="icon with desktop, phone, and tablet inside a circle"
									className="col-icon__col__icon"
								/>
								<h4>Responsive Websites</h4>
							</div>
							<p>
								The web is as important and dynamic as ever, and we live and breathe it every day.
								Adapting it to the needs of all the different screens users expect — from tiny wearables
								to giant TVs — is vital to reaching your customers, and not only do we have years of
								experience making that happen, we do it by default.
							</p>
						</div>
						<div className="col-icon__col w-col w-col-4">
							<div className="col-icon__heading">
								<img
									src="/5e75012fdbb70b455face123_icon-wearable.svg"
									alt="icon with apple watch inside of a circle"
									className="col-icon__col__icon"
								/>
								<h4>Wearable Interface</h4>
							</div>
							<p>
								Wearable technology is in its infancy, but we are well ahead of the curve. We can help
								you write the future, whether you are looking to the wrist with Android Wear or Apple
								Watch, or even farther to Virtual Reality and beyond.
							</p>
						</div>
						<div className="col-icon__col col--last w-col w-col-4">
							<div className="col-icon__heading">
								<img
									src="/5e750143e856fa54d83dbd6e_icon-virtual.svg"
									alt="Icon with documents, forms, and graphs representing strategy in a circle"
									className="col-icon__col__icon"
								/>
								<h4>Virtual CTO</h4>
							</div>
							<p>
								Not ready to hire technical leadership full-time? We can act as your "Virtual CTO" to
								drive strategy, hiring, and more. You get a tight team of experienced technologists with
								complementary skills available on-demand.
							</p>
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
			{/* Mirrored from infinite.red/capabilities by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 23 Dec 2020 11:36:33 GMT */}
		</>
	);
};
export default Capabilities;
