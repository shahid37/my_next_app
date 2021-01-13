import Footer from './footer';
import MenuBar from './menuBar';

const PageLayout = (props) => {
	// console.log('props', props, 'props');
	return (
		<>
			{/* Last Published: Thu Dec 03 2020 16:57:12 GMT+0000 (Coordinated Universal Time) */}
			{/* Mirrored from infinite.red/ by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 23 Dec 2020 11:35:41 GMT */}
			<meta charSet="utf-8" />
			<title>PikesSoft : Designers and Developers in the Pakistan</title>
			<meta
				content="We design & build native mobile apps & websites. React Native, React.js, & Rails"
				name="description"
			/>
			<meta content="PikesSoft: Designers and Developers in the Pakistan" property="og:title" />
			<meta
				content="We design & build native mobile apps & websites. React Native, React.js, & Rails"
				property="og:description"
			/>
			<meta
				content="https://assets.website-files.com/5e67db0c1e7a468249544a75/5f80cc1fe7e52347ee9eb300_graph-ir.jpg"
				property="og:image"
			/>
			<meta content="PikesSoft: Designers and Developers in the Pakistan" property="twitter:title" />
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
			<MenuBar />
			{props.children}
			<Footer />
		</>
	);
};

export default PageLayout;
