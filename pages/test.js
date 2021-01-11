import React from 'react';
import PageLayout from './components/pageLayout';
import axios from 'axios';
import { constants } from '../constants';
export const getStaticProps = async () => {
	// console.log('lllllllllllllllllllllllll', webflow - icons);
	const data = await fetchData();
	const companyPortfolioData = [];
	if (data) {
		for (let i = 0; i < data.data.results.length; i++) {
			console.log(data.data.results[i]);
			if (data.data.results[i].type === 'portfolio') {
				companyPortfolioData.push(data.data.results[i]);
			}
		}
	}
	return {
		// props: data,
		props: { portfolio: companyPortfolioData },
	};
};

const fetchData = async () =>
	await axios
		.get(`${constants.base_url}`)
		.then((res) => ({
			error: false,
			data: res.data,
		}))
		.catch(() => ({
			error: true,
			data: null,
		}));

const Blog = ({ portfolio, error }) => {
	return (
		<>
			{/* <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=contain" />
			<title>Red Shift</title>
			<link rel="canonical" href="https://shift.infinite.red/" /> */}
			{/* <link
				id="feedLink"
				rel="alternate"
				type="application/rss+xml"
				title="RSS"
				href="https://shift.infinite.red/feed"
			/>
			<meta name="robots" content="index, follow" />
			<meta name="title" content="Red Shift" />
			<meta name="referrer" content="always" /> */}
			<meta
				name="description"
				content="The official Infinite Red publication for web & app design, iOS & Android development, React Native, Elixir, JavaScript, and remote work. We’re a fully distributed team building world-class apps for over 20 years for clients all around the world."
			/>
			<meta name="keywords" content="REACT NATIVE, REMOTE WORKING, DESIGN, DEVELOPMENT, REACT" />
			<meta name="theme-color" content="#000000" />
			<meta property="og:title" content="Red Shift" />
			<meta property="twitter:title" content="Red Shift" />
			<meta property="og:url" content="https://shift.infinite.red/" />
			<meta property="og:image" content="https://cdn-images-1.medium.com/max/1200/1*nAbrvMgKbbxwu8JHDKIYkw.png" />
			<meta property="fb:app_id" content={542599432471018} />
			<meta
				property="og:description"
				content="The official Infinite Red publication for web & app design, iOS & Android development, React Native, Elixir, JavaScript, and remote work. We’re a fully distributed team building world-class apps for over 20 years for clients all around the world."
			/>
			<meta
				name="twitter:description"
				content="The official Infinite Red publication for web & app design, iOS & Android development, React Native, Elixir, JavaScript, and remote work. We’re a fully distributed team building world-class apps for over 20 years for clients all around the world."
			/>
			<meta
				name="twitter:image:src"
				content="https://cdn-images-1.medium.com/max/1200/1*nAbrvMgKbbxwu8JHDKIYkw.png"
			/>
			<meta property="og:type" content="website" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta property="medium-com:creator" content="https://shift.infinite.red/@jamonholmgren" />
			<meta name="twitter:site" content="@infinite_red" />
			<meta property="og:site_name" content="Red Shift" />
			<meta name="twitter:app:name:iphone" content="Medium" />
			<meta name="twitter:app:id:iphone" content={828256236} />
			<meta name="twitter:app:url:iphone" content="medium://infinite-red" />
			<meta property="al:ios:app_name" content="Medium" />
			<meta property="al:ios:app_store_id" content={828256236} />
			<meta property="al:android:package" content="com.medium.reader" />
			<meta property="al:android:app_name" content="Medium" />
			<meta property="al:ios:url" content="medium://infinite-red" />
			<meta property="al:android:url" content="medium://infinite-red" />
			<meta property="al:web:url" content="https://shift.infinite.red/" />
			<link rel="search" type="application/opensearchdescription+xml" title="Medium" href="/osd.xml" />
			<link rel="alternate" href="android-app://com.medium.reader/https/medium.com/infinite-red" />
			<meta name="parsely-link" content="https://shift.infinite.red/" />
			<link
				rel="stylesheet"
				type="text/css"
				className="js-glyph-"
				id="glyph-8"
				href="https://glyph.medium.com/css/e/sr/latin/e/ssr/latin/e/ssb/latin/m2-unbound.css"
			/>
			<link
				rel="stylesheet"
				href="https://cdn-static-1.medium.com/_/fp/css/main-branding-base.xoKbyYHR7oLUMzaNNbChHg.css"
			/>
			{/*[if lt IE 9]><![endif]*/}
			<link
				rel="icon"
				href="https://cdn-images-1.medium.com/fit/c/128/128/1*5pafh1yr5ktw2_3Ke6mT0g.png"
				className="js-favicon"
			/>
			<link
				rel="apple-touch-icon"
				sizes="152x152"
				href="https://cdn-images-1.medium.com/fit/c/152/152/1*nAbrvMgKbbxwu8JHDKIYkw.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="120x120"
				href="https://cdn-images-1.medium.com/fit/c/120/120/1*nAbrvMgKbbxwu8JHDKIYkw.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="76x76"
				href="https://cdn-images-1.medium.com/fit/c/76/76/1*nAbrvMgKbbxwu8JHDKIYkw.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="60x60"
				href="https://cdn-images-1.medium.com/fit/c/60/60/1*nAbrvMgKbbxwu8JHDKIYkw.png"
			/>
			<link
				rel="mask-icon"
				href="https://cdn-static-1.medium.com/_/fp/icons/monogram-mask.KPLCSFEZviQN0jQ7veN2RQ.svg"
				color="#171717"
			/>
			<div className="site-main surface-container" id="container">
				<div className="butterBar butterBar--error" data-action-scope="_actionscope_1" />
				<div
					className="surface"
					id="_obv.shell._surface_1610359060321"
					style={{ display: 'block', visibility: 'visible' }}
				>
					<div className="screenContent surface-content" data-used="true" data-action-scope="_actionscope_2">
						<div className="metabar u-clearfix u-textColorTransparentWhiteDarker u-tintBgColor u-tintSpectrum js-metabar metabar--affixed is-maximized">
							<div className="branch-journeys-top" />
							<div className="js-metabarMiddle metabar-inner u-marginAuto u-maxWidth1032 u-flexCenter u-justifyContentSpaceBetween u-height65 u-xs-height56 u-paddingHorizontal20">
								<div className="metabar-block u-flex1 u-flexCenter">
									<div className="js-metabarLogoLeft">
										<a
											href="https://medium.com/"
											data-log-event="home"
											className="siteNav-logo u-fillBlack u-flex0 u-flexCenter u-paddingTop0"
										>
											<span className="svgIcon svgIcon--logoMonogram svgIcon--25px">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													height="25px"
													viewBox="0 0 1043.63 592.71"
												>
													<g data-name="Layer 2">
														<g data-name="Layer 1">
															<path d="M588.67,296.36c0,163.67-131.78,296.35-294.33,296.35S0,460,0,296.36,131.78,0,294.34,0,588.67,132.69,588.67,296.36" />
															<path d="M911.56,296.36c0,154.06-65.89,279-147.17,279s-147.17-124.94-147.17-279,65.88-279,147.16-279,147.17,124.9,147.17,279" />
															<path d="M1043.63,296.36c0,138-23.17,249.94-51.76,249.94s-51.75-111.91-51.75-249.94S963.29,46.42,991.87,46.42s51.76,111.9,51.76,249.94" />
														</g>
													</g>
												</svg>
											</span>
											<span className="u-textScreenReader">Homepage</span>
										</a>
									</div>
									<div className="u-paddingLeft10 u-sm-show r-paddingRight10">
										<a href="https://rsci.app.link/?%24canonical_url=https%3A%2F%2Fmedium.com/infinite-red%3F~feature=LiMobileNavBar&~channel=ShowCollectionHome&~stage=m2">
											Open in app
										</a>
									</div>
								</div>
								<div className="metabar-block u-flex0 u-flexCenter">
									<div className="u-flexCenter u-height65 u-xs-height56">
										<div className="buttonSet buttonSet--wide u-lineHeightInherit">
											<label
												className="button button--small button--chromeless button--withIcon button--withSvgIcon inputGroup u-sm-hide metabar-predictiveSearch u-baseColor--buttonNormal u-baseColor--placeholderNormal"
												title="Search Red Shift"
											>
												<span className="svgIcon svgIcon--search svgIcon--25px u-baseColor--iconLight">
													<svg className="svgIcon-use" width={25} height={25}>
														<path d="M20.067 18.933l-4.157-4.157a6 6 0 10-.884.884l4.157 4.157a.624.624 0 10.884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z" />
													</svg>
												</span>
												<input
													className="js-predictiveSearchInput textInput textInput--rounded textInput--darkText u-baseColor--textNormal textInput--transparent"
													type="search"
													placeholder="Search Red Shift"
													required="true"
													data-collection-id="fb597d020d1c"
												/>
											</label>
											<a
												className="button button--small button--chromeless u-sm-show is-inSiteNavBar u-baseColor--buttonNormal button--withIcon button--withSvgIcon button--chromeless u-xs-top1"
												href="https://shift.infinite.red/search"
												title="Search"
												aria-label="Search"
											>
												<span className="button-defaultState">
													<span className="svgIcon svgIcon--search svgIcon--25px">
														<svg className="svgIcon-use" width={25} height={25}>
															<path d="M20.067 18.933l-4.157-4.157a6 6 0 10-.884.884l4.157 4.157a.624.624 0 10.884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z" />
														</svg>
													</span>
												</span>
											</a>
											<a
												className="button button--small button--light button--chromeless is-inSiteNavBar u-baseColor--buttonLight button--withIcon button--withSvgIcon button--chromeless u-xs-hide"
												href="https://medium.com/me/list/queue"
												title="Bookmarks"
												aria-label="Bookmarks"
											>
												<span className="button-defaultState">
													<span className="svgIcon svgIcon--bookmarkStack svgIcon--25px">
														<svg className="svgIcon-use" width={25} height={25}>
															<path d="M16 6c1.1 0 2 .9 2 2v13.661h-.012a.5.5 0 01-.118.285.508.508 0 01-.708.03L11.5 17.85l-5.662 4.125a.5.5 0 01-.706-.03.478.478 0 01-.12-.285H5V8c0-1.1.9-2 2-2h9zM6 8v12.636l5.162-3.667a.49.49 0 01.676 0L17 20.637V8c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1z" />
															<path d="M21 5v13.661h-.012a.5.5 0 01-.118.285.508.508 0 01-.708.03L20 18.858V5c0-.55-.45-1-1-1h-9c-.55 0-1 .45-1 1H8c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2z" />
														</svg>
													</span>
												</span>
											</a>
											<button
												className="button button--small button--chromeless is-inSiteNavBar u-baseColor--buttonNormal button--withIcon button--withSvgIcon button--activity js-notificationsButton u-marginRight16 u-xs-marginRight10 u-lineHeight0 u-size25x25 is-styleLight"
												title="Notifications"
												aria-label="Notifications"
												data-action="open-notifications"
											>
												<span className="svgIcon svgIcon--bell svgIcon--25px">
													<svg
														className="svgIcon-use"
														width={25}
														height={25}
														viewBox="-293 409 25 25"
													>
														<path d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 00-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 001 1h3.49a3.079 3.079 0 003.01 2.45 3.08 3.08 0 003.01-2.45h3.49a1 1 0 001-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 01-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 014.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z" />
													</svg>
												</span>
											</button>
											<button
												className="button button--chromeless u-baseColor--buttonNormal is-inSiteNavBar js-userActions"
												aria-haspopup="true"
												data-action="open-userActions"
											>
												<div className="avatar">
													<img
														src="https://cdn-images-1.medium.com/fit/c/32/32/0*dzIp9I-fYUGf47Aw.jpg"
														className="avatar-image avatar-image--icon"
														alt="Shahidhumeed"
													/>
												</div>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="metabar metabar--spacer js-metabarSpacer u-tintBgColor u-height65 u-xs-height56" />
						<div className="collectionHeader js-collectionHeaderContainer u-relative collectionHeader--layoutLarge collectionHeader--alignmentLeft collectionHeader--withLogo collectionHeader--withoutBackground collectionHeader--colorBehaviorBold collectionHeader--withNavigation collectionHeader--editorLayoutTitleAndLogo is-modeView u-tintBgColor">
							<div className="collectionHeader-aspectRatioTable">
								<div className="collectionHeader-aspectRatioContent u-backgroundSizeCover js-collectionHeaderBackground">
									<div className="collectionHeader-overlayBackground u-height100vh" />
									<header className="collectionHeader-heroAndInlineNav u-borderBox u-maxWidth1072 u-paddingLeft20 u-paddingRight20 u-marginAuto u-foreground js-collectionHeader">
										<div className="collectionHeader-hero js-collectionHeaderHero u-clearfix u-tintSpectrum">
											<div className="collectionHeader-heroInner">
												<div
													className="collectionHeader-logo js-collectionHeaderLogo"
													style={{ maxWidth: 64 }}
												>
													<a
														className="link u-baseColor--link"
														href="https://shift.infinite.red"
														title="Go to Red Shift"
														aria-label="Go to Red Shift"
														data-collection-slug="infinite-red"
													>
														<div className="u-relative u-marginAuto">
															<div style={{ paddingBottom: '100%' }} />
															<img
																className="collectionHeader-logoImage js-collectionHeaderLogoImage"
																src="https://cdn-images-1.medium.com/max/64/1*rvw4nIKelSPxYYItLDPy_g@2x.png"
																data-image-id="1*rvw4nIKelSPxYYItLDPy_g@2x.png"
																data-width={128}
																data-height={128}
															/>
														</div>
													</a>
												</div>
												<div className="collectionHeader-nameAndDescription">
													<a
														className="link link--noUnderline u-baseColor--link"
														href="https://shift.infinite.red"
														title="Go to Red Shift"
														aria-label="Go to Red Shift"
														data-collection-slug="infinite-red"
													>
														<h1 className="collectionHeader-name js-collectionName u-foreground u-baseColor--textDark u-paddingBottom4 u-lineHeightTightest u-contentSansBold u-fontSize40 u-xs-fontSize32">
															Red Shift
														</h1>
													</a>
													<h2 className="collectionHeader-description js-collectionDescription u-foreground u-baseColor--textNormal u-contentSansRegular u-fontSize24 u-xs-fontSize18">
														Sharing thoughts &amp; experiences about design, development,
														and remote work at Infinite Red. From the desks of a fully
														distributed team across the U.S.
													</h2>
												</div>
											</div>
										</div>
									</header>
								</div>
								<div className="collectionHeader-aspectRatioCell">
									<div className="collectionHeader-aspectRatioFullWidth" />
								</div>
							</div>
							<div className="collectionHeader-blockNav">
								<div className="u-borderBox u-maxWidth1072 u-paddingLeft20 u-paddingRight20 u-marginAuto">
									<nav className="collectionHeader-nav u-clearfix js-collectionHeaderNav u-lineHeight40 u-overflowHiddenY u-tintSpectrum">
										<div className="buttonSet u-flex1 u-noWrap u-overflowX u-paddingBottom100 u-xs-marginRight15">
											<li className="collectionHeader-navItem js-collectionNavItem u-inlineBlock u-fontSize13 u-textUppercase u-letterSpacing1px u-textColorNormal u-xs-paddingRight12 u-xs-marginRight0">
												<a
													className="link link--darken u-accentColor--textDarken link--noUnderline u-baseColor--link js-navItemLink"
													href="https://shift.infinite.red/development/home"
												>
													Development
												</a>
											</li>
											<li className="collectionHeader-navItem js-collectionNavItem u-inlineBlock u-fontSize13 u-textUppercase u-letterSpacing1px u-textColorNormal u-xs-paddingRight12 u-xs-marginRight0">
												<a
													className="link link--darken u-accentColor--textDarken link--noUnderline u-baseColor--link js-navItemLink"
													href="https://shift.infinite.red/ir-design/home"
												>
													Design
												</a>
											</li>
											<li className="collectionHeader-navItem js-collectionNavItem u-inlineBlock u-fontSize13 u-textUppercase u-letterSpacing1px u-textColorNormal u-xs-paddingRight12 u-xs-marginRight0">
												<a
													className="link link--darken u-accentColor--textDarken link--noUnderline u-baseColor--link js-navItemLink"
													href="https://shift.infinite.red/remote-work/home"
												>
													Remote Work
												</a>
											</li>
											<li className="collectionHeader-navItem js-collectionNavItem u-inlineBlock u-fontSize13 u-textUppercase u-letterSpacing1px u-textColorNormal u-xs-paddingRight12 u-xs-marginRight0">
												<a
													className="link link--darken u-accentColor--textDarken link--noUnderline u-baseColor--link js-navItemLink"
													href="https://shift.infinite.red/archive"
												>
													All Stories
												</a>
											</li>
											<span className="u-borderLeft1 u-paddingLeft22 u-xs-paddingLeft12 u-baseColor--borderLight" />
											<li className="collectionHeader-navItem js-collectionNavItem u-inlineBlock u-fontSize13 u-textUppercase u-letterSpacing1px u-textColorNormal u-xs-paddingRight12 u-xs-marginRight0 is-external">
												<a
													className="link link--darkenOnHover u-accentColor--textDarken link--noUnderline u-baseColor--link js-navItemLink"
													href="https://infinite.red/contact"
													rel="nofollow noopener"
													target="_blank"
												>
													Got a project? Reach out
												</a>
											</li>
										</div>
										<div className="buttonSet u-textAlignRight u-marginLeft18 u-flex0 u-noWrap">
											<a
												className="button button--light button--chromeless is-touchIconBlackPulse u-baseColor--buttonLight button--withIcon button--withSvgIcon button--chromeless u-verticalAlignMiddle"
												href="https://twitter.com/infinite_red"
												title="Visit “Red Shift” on Twitter"
												aria-label="Visit “Red Shift” on Twitter"
												rel="me"
												target="_blank"
											>
												<span className="button-defaultState">
													<span className="svgIcon svgIcon--twitterFilled svgIcon--25px">
														<svg className="svgIcon-use" width={25} height={25}>
															<path d="M22.31 4.305a8.48 8.48 0 01-2.684 1.073A4.245 4.245 0 0016.486 4a4.293 4.293 0 00-4.293 4.29c0 .34.037.669.077.997a12.199 12.199 0 01-8.814-4.521 4.805 4.805 0 00-.613 2.141c.033 1.514.79 2.83 1.916 3.594a4.13 4.13 0 01-1.913-.542.185.185 0 000 .074c-.005 2.055 1.476 3.79 3.446 4.21-.37.073-.746.122-1.15.147-.266-.025-.535-.05-.767-.074.517 1.686 2.101 2.917 3.988 2.99a9.028 9.028 0 01-5.366 1.834L2 19.08A12.258 12.258 0 008.59 21c7.886 0 12.203-6.547 12.185-12.184a4.103 4.103 0 000-.616 8.057 8.057 0 002.147-2.227 7.612 7.612 0 01-2.451.69 4.092 4.092 0 001.838-2.376" />
														</svg>
													</span>
												</span>
											</a>
											<a
												className="button button--light button--chromeless is-touchIconBlackPulse u-baseColor--buttonLight button--withIcon button--withSvgIcon button--chromeless u-verticalAlignMiddle"
												href="//facebook.com/infiniteredinc"
												title="Visit “Red Shift” on Facebook"
												aria-label="Visit “Red Shift” on Facebook"
												rel="me"
												target="_blank"
											>
												<span className="button-defaultState">
													<span className="svgIcon svgIcon--facebookFilled svgIcon--25px">
														<svg className="svgIcon-use" width={25} height={25}>
															<path d="M21 12.646C21 7.65 16.97 3.6 12 3.6s-9 4.05-9 9.046a9.026 9.026 0 007.59 8.924v-6.376H8.395V12.64h2.193v-1.88c0-2.186 1.328-3.375 3.267-3.375.93 0 1.728.07 1.96.1V9.77H14.47c-1.055 0-1.26.503-1.26 1.242v1.63h2.517l-.33 2.554H13.21V21.6c4.398-.597 7.79-4.373 7.79-8.954" />
														</svg>
													</span>
												</span>
											</a>
											<button
												className="button button--primary button--smallest u-noUserSelect button--withChrome u-accentColor--buttonNormal js-relationshipButton is-smallPill"
												data-action="toggle-follow-collection"
												data-action-source="pub_header----fb597d020d1c----------------------follow_pub"
												data-collection-id="fb597d020d1c"
											>
												<span className="button-label  js-buttonLabel">Follow</span>
											</button>
										</div>
									</nav>
								</div>
							</div>
						</div>
						<div className="u-marginBottom40 js-collectionStream">
							<div
								className="streamItem streamItem--section js-streamItem"
								data-action-scope="_actionscope_3"
							>
								<section className="u-marginTop30 u-xs-margin0 u-marginBottom15 u-maxWidth1032 u-sm-paddingLeft20 u-sm-paddingRight20 u-borderBox u-marginAuto">
									<div className="row u-marginTop30 u-marginLeftNegative12 u-marginRightNegative12">
										<div
											className="col u-xs-size12of12 js-trackPostPresentation u-paddingLeft12 u-marginBottom15 u-paddingRight15 u-size8of12"
											data-source="collection_home---4------0-----------------------"
											data-post-id="1dfc891f9966"
											data-index={0}
											data-scroll="native"
										>
											<div className="u-lineHeightBase postItem u-marginRight3">
												<a
													href="https://shift.infinite.red/introducing-ignite-4-0-flame-1dfc891f9966?source=collection_home---4------0-----------------------"
													data-action="open-post"
													data-action-value="https://shift.infinite.red/introducing-ignite-4-0-flame-1dfc891f9966?source=collection_home---4------0-----------------------"
													className="u-block u-xs-height170 u-height350 u-width100pct u-floatLeft  u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-borderLighter"
													style={{
														backgroundImage:
															'url("https://cdn-images-1.medium.com/max/1000/1*p8yOEXIkfZItBHdT2Bv-NQ.png")',
														backgroundPosition: '50% 50% !important',
													}}
												>
													<span className="u-textScreenReader">
														Introducing Ignite 6.0: “Flame”
													</span>
												</a>
											</div>
										</div>
										<div className="col u-xs-marginBottom10 u-paddingLeft9 u-paddingRight12 u-paddingTop0 u-sm-paddingTop20 u-paddingBottom25 u-size4of12 u-xs-size12of12 u-marginBottom30">
											<a
												className
												href="https://shift.infinite.red/introducing-ignite-4-0-flame-1dfc891f9966?source=collection_home---4------0-----------------------"
												data-action-source="collection_home---4------0-----------------------"
												data-post-id="1dfc891f9966"
											>
												<h3 className="u-contentSansBold u-lineHeightTightest u-xs-fontSize24 u-paddingBottom2 u-paddingTop5 u-fontSize32">
													<div className="u-letterSpacingTight u-lineHeightTighter u-breakWord u-textOverflowEllipsis u-lineClamp4 u-fontSize30 u-size12of12 u-xs-size12of12 u-xs-fontSize24">
														Introducing Ignite 6.0:&nbsp;“Flame”
													</div>
												</h3>
												<div className="u-contentSansThin u-lineHeightBaseSans u-fontSize24 u-xs-fontSize18 u-textColorNormal u-baseColor--textNormal">
													<div className="u-fontSize18 u-letterSpacingTight u-lineHeightTight u-marginTop7 u-textColorNormal u-baseColor--textNormal">
														A slimmed-down, much easier to maintain version of the world’s
														most popular React Native boilerplate
													</div>
												</div>
											</a>
											<div className="u-clearfix u-marginTop20">
												<div className="u-flexCenter">
													<div className="postMetaInline-avatar u-flex0">
														<a
															className="link u-baseColor--link avatar"
															href="https://shift.infinite.red/@jamonholmgren"
															data-action="show-user-card"
															data-action-value="4a1ccb16af26"
															data-action-type="hover"
															data-user-id="4a1ccb16af26"
															data-collection-slug="infinite-red"
															dir="auto"
														>
															<img
																src="https://cdn-images-1.medium.com/fit/c/36/36/1*YKPVVMQyo5AbHSlpq2TPGw.jpeg"
																className="avatar-image u-size36x36 u-xs-size32x32"
																alt="Go to the profile of Jamon Holmgren"
															/>
														</a>
													</div>
													<div className="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
														<a
															className="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
															href="https://shift.infinite.red/@jamonholmgren"
															data-action="show-user-card"
															data-action-value="4a1ccb16af26"
															data-action-type="hover"
															data-user-id="4a1ccb16af26"
															data-collection-slug="infinite-red"
															dir="auto"
														>
															Jamon Holmgren
														</a>
														<div className="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
															<time dateTime="2020-12-23T19:39:12.850Z">
																Dec 24, 2020
															</time>
															<span className="middotDivider u-fontSize12" />
															<span className="readingTime" title="5 min read" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
							<div
								className="streamItem streamItem--section js-streamItem"
								data-action-scope="_actionscope_4"
							>
								<section className="u-marginTop30 u-xs-margin0 u-marginBottom15 u-maxWidth1032 u-sm-paddingLeft20 u-sm-paddingRight20 u-borderBox u-marginAuto">
									<div className="row u-marginTop30 u-marginLeftNegative12 u-marginRightNegative12">
										<div
											className="col u-xs-size12of12 js-trackPostPresentation u-paddingLeft12 u-marginBottom15 u-paddingRight12 u-size4of12"
											data-source="collection_home---4------0-----------------------"
											data-post-id="404950de4303"
											data-index={0}
											data-scroll="native"
										>
											<div className="u-lineHeightBase postItem">
												<a
													href="https://shift.infinite.red/xmas-dice-mathematics-404950de4303?source=collection_home---4------0-----------------------"
													data-action="open-post"
													data-action-value="https://shift.infinite.red/xmas-dice-mathematics-404950de4303?source=collection_home---4------0-----------------------"
													className="u-block u-xs-height170 u-height172 u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-borderLighter"
													style={{
														backgroundImage:
															'url("https://cdn-images-1.medium.com/max/400/1*QFTq4F4W8fmX26URT4gpDQ.jpeg")',
														backgroundPosition: '50% 50% !important',
													}}
												>
													<span className="u-textScreenReader">Xmas Dice Mathematics</span>
												</a>
											</div>
											<div className="col u-xs-marginBottom10 u-paddingLeft0 u-paddingRight0 u-paddingTop15 u-marginBottom30">
												<a
													className
													href="https://shift.infinite.red/xmas-dice-mathematics-404950de4303?source=collection_home---4------0-----------------------"
													data-action-source="collection_home---4------0-----------------------"
													data-post-id="404950de4303"
												>
													<h3 className="u-contentSansBold u-lineHeightTightest u-xs-fontSize24 u-paddingBottom2 u-paddingTop5 u-fontSize32">
														<div className="u-letterSpacingTight u-lineHeightTighter u-breakWord u-textOverflowEllipsis u-lineClamp3 u-fontSize24">
															Xmas Dice Mathematics
														</div>
													</h3>
													<div className="u-contentSansThin u-lineHeightBaseSans u-fontSize24 u-xs-fontSize18 u-textColorNormal u-baseColor--textNormal">
														<div className="u-fontSize18 u-letterSpacingTight u-lineHeightTight u-marginTop7 u-textColorNormal u-baseColor--textNormal">
															A Nerdtastic adventure through a common holiday&nbsp;prop
														</div>
													</div>
												</a>
												<div className="u-clearfix u-marginTop20">
													<div className="u-flexCenter">
														<div className="postMetaInline-avatar u-flex0">
															<a
																className="link u-baseColor--link avatar"
																href="https://shift.infinite.red/@gantlaborde"
																data-action="show-user-card"
																data-action-value="6ca0fe37eac1"
																data-action-type="hover"
																data-user-id="6ca0fe37eac1"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																<img
																	src="https://cdn-images-1.medium.com/fit/c/36/36/1*gnkCSbW1lhpdf6ZvaLEXHQ.png"
																	className="avatar-image u-size36x36 u-xs-size32x32"
																	alt="Go to the profile of Gant Laborde"
																/>
															</a>
														</div>
														<div className="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
															<a
																className="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
																href="https://shift.infinite.red/@gantlaborde"
																data-action="show-user-card"
																data-action-value="6ca0fe37eac1"
																data-action-type="hover"
																data-user-id="6ca0fe37eac1"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																Gant Laborde
															</a>
															<div className="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
																<time dateTime="2020-11-20T20:33:08.370Z">
																	Nov 21, 2020
																</time>
																<span className="middotDivider u-fontSize12" />
																<span className="readingTime" title="4 min read" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="col u-xs-size12of12 js-trackPostPresentation u-paddingLeft12 u-marginBottom15 u-paddingRight12 u-size4of12"
											data-source="collection_home---4------1-----------------------"
											data-post-id="716aa5f9310e"
											data-index={1}
											data-scroll="native"
										>
											<div className="u-lineHeightBase postItem">
												<a
													href="https://shift.infinite.red/relaunching-the-react-native-radio-podcast-716aa5f9310e?source=collection_home---4------1-----------------------"
													data-action="open-post"
													data-action-value="https://shift.infinite.red/relaunching-the-react-native-radio-podcast-716aa5f9310e?source=collection_home---4------1-----------------------"
													className="u-block u-xs-height170 u-height172 u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-borderLighter"
													style={{
														backgroundImage:
															'url("https://cdn-images-1.medium.com/max/400/1*VktG9mBCq-Pd8KMT85c6_Q@2x.jpeg")',
														backgroundPosition: '50% 50% !important',
													}}
												>
													<span className="u-textScreenReader">
														Relaunching the React Native Radio podcast
													</span>
												</a>
											</div>
											<div className="col u-xs-marginBottom10 u-paddingLeft0 u-paddingRight0 u-paddingTop15 u-marginBottom30">
												<a
													className
													href="https://shift.infinite.red/relaunching-the-react-native-radio-podcast-716aa5f9310e?source=collection_home---4------1-----------------------"
													data-action-source="collection_home---4------1-----------------------"
													data-post-id="716aa5f9310e"
												>
													<h3 className="u-contentSansBold u-lineHeightTightest u-xs-fontSize24 u-paddingBottom2 u-paddingTop5 u-fontSize32">
														<div className="u-letterSpacingTight u-lineHeightTighter u-breakWord u-textOverflowEllipsis u-lineClamp3 u-fontSize24">
															Relaunching the React Native Radio&nbsp;podcast
														</div>
													</h3>
													<div className="u-contentSansThin u-lineHeightBaseSans u-fontSize24 u-xs-fontSize18 u-textColorNormal u-baseColor--textNormal">
														<div className="u-fontSize18 u-letterSpacingTight u-lineHeightTight u-marginTop7 u-textColorNormal u-baseColor--textNormal">
															React Native Radio is now brought to you by
															Infinite&nbsp;Red!
														</div>
													</div>
												</a>
												<div className="u-clearfix u-marginTop20">
													<div className="u-flexCenter">
														<div className="postMetaInline-avatar u-flex0">
															<a
																className="link u-baseColor--link avatar"
																href="https://shift.infinite.red/@jamonholmgren"
																data-action="show-user-card"
																data-action-value="4a1ccb16af26"
																data-action-type="hover"
																data-user-id="4a1ccb16af26"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																<img
																	src="https://cdn-images-1.medium.com/fit/c/36/36/1*YKPVVMQyo5AbHSlpq2TPGw.jpeg"
																	className="avatar-image u-size36x36 u-xs-size32x32"
																	alt="Go to the profile of Jamon Holmgren"
																/>
															</a>
														</div>
														<div className="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
															<a
																className="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
																href="https://shift.infinite.red/@jamonholmgren"
																data-action="show-user-card"
																data-action-value="4a1ccb16af26"
																data-action-type="hover"
																data-user-id="4a1ccb16af26"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																Jamon Holmgren
															</a>
															<div className="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
																<time dateTime="2020-10-05T20:24:36.382Z">
																	Oct 6, 2020
																</time>
																<span className="middotDivider u-fontSize12" />
																<span className="readingTime" title="5 min read" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="col u-xs-size12of12 js-trackPostPresentation u-paddingLeft12 u-marginBottom15 u-paddingRight12 u-size4of12"
											data-source="collection_home---4------2-----------------------"
											data-post-id="e08a14fd995"
											data-index={2}
											data-scroll="native"
										>
											<div className="u-lineHeightBase postItem">
												<a
													href="https://shift.infinite.red/tensorflow-js-aws-amplify-e08a14fd995?source=collection_home---4------2-----------------------"
													data-action="open-post"
													data-action-value="https://shift.infinite.red/tensorflow-js-aws-amplify-e08a14fd995?source=collection_home---4------2-----------------------"
													className="u-block u-xs-height170 u-height172 u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-borderLighter"
													style={{
														backgroundImage:
															'url("https://cdn-images-1.medium.com/max/400/1*WZEIsgBEOwUBkZYpl4r3VA.jpeg")',
														backgroundPosition: '50% 50% !important',
													}}
												>
													<span className="u-textScreenReader">
														TensorFlow.js + AWS Amplify
													</span>
												</a>
											</div>
											<div className="col u-xs-marginBottom10 u-paddingLeft0 u-paddingRight0 u-paddingTop15 u-marginBottom30">
												<a
													className
													href="https://shift.infinite.red/tensorflow-js-aws-amplify-e08a14fd995?source=collection_home---4------2-----------------------"
													data-action-source="collection_home---4------2-----------------------"
													data-post-id="e08a14fd995"
												>
													<h3 className="u-contentSansBold u-lineHeightTightest u-xs-fontSize24 u-paddingBottom2 u-paddingTop5 u-fontSize32">
														<div className="u-letterSpacingTight u-lineHeightTighter u-breakWord u-textOverflowEllipsis u-lineClamp3 u-fontSize24">
															TensorFlow.js + AWS&nbsp;Amplify
														</div>
													</h3>
													<div className="u-contentSansThin u-lineHeightBaseSans u-fontSize24 u-xs-fontSize18 u-textColorNormal u-baseColor--textNormal">
														<div className="u-fontSize18 u-letterSpacingTight u-lineHeightTight u-marginTop7 u-textColorNormal u-baseColor--textNormal">
															Building EnjoyingTheShow.com for Real-time Feedback
														</div>
													</div>
												</a>
												<div className="u-clearfix u-marginTop20">
													<div className="u-flexCenter">
														<div className="postMetaInline-avatar u-flex0">
															<a
																className="link u-baseColor--link avatar"
																href="https://shift.infinite.red/@gantlaborde"
																data-action="show-user-card"
																data-action-value="6ca0fe37eac1"
																data-action-type="hover"
																data-user-id="6ca0fe37eac1"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																<img
																	src="https://cdn-images-1.medium.com/fit/c/36/36/1*gnkCSbW1lhpdf6ZvaLEXHQ.png"
																	className="avatar-image u-size36x36 u-xs-size32x32"
																	alt="Go to the profile of Gant Laborde"
																/>
															</a>
														</div>
														<div className="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
															<a
																className="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
																href="https://shift.infinite.red/@gantlaborde"
																data-action="show-user-card"
																data-action-value="6ca0fe37eac1"
																data-action-type="hover"
																data-user-id="6ca0fe37eac1"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																Gant Laborde
															</a>
															<div className="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
																<time dateTime="2020-09-01T16:01:01.130Z">
																	Sep 1, 2020
																</time>
																<span className="middotDivider u-fontSize12" />
																<span className="readingTime" title="4 min read" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
							<div
								className="streamItem streamItem--section js-streamItem"
								data-action-scope="_actionscope_5"
							>
								<div className="u-marginTop30 u-xs-marginTop0 u-marginBottom15 u-maxWidth1032 u-marginAuto">
									<div
										className="u-paddingTop35 u-paddingBottom20 u-paddingLeft20 u-paddingRight20 u-maxWidth1000 u-marginAuto u-textAlignCenter js-trackedPromo"
										style={{ backgroundColor: '#E93636' }}
										data-action="open-promo-link"
										data-promo-id="95053d0cabc"
										data-collection-id="fb597d020d1c"
										data-scroll="native"
									>
										<a
											className="link u-baseColor--link"
											href="http://newsletter.infinite.red/"
											rel="nofollow noopener"
											target="_blank"
											data-action-source="collection_home---2------0-----------------------"
										>
											<div className="u-marginAuto u-marginBottom20" style={{ maxWidth: 46 }}>
												<div className="u-relative u-marginAuto">
													<div style={{ paddingBottom: '72.82608695652173%' }} />
													<img
														className="collectionHeader-logoImage js-collectionHeaderLogoImage"
														src="https://cdn-images-1.medium.com/max/46/1*xw-ZjJaGsMoTtxKeayBVeQ@2x.png"
														alt="Sign up for our newsletter — we promise no spam, just good stuff once a month."
														data-image-id="1*xw-ZjJaGsMoTtxKeayBVeQ@2x.png"
														data-width={92}
														data-height={67}
													/>
												</div>
											</div>
										</a>
										<div className="u-textColorNormal u-contentSansRegular u-fontSize28 u-xs-fontSize24 u-lineHeightBaseSans u-marginBottom20 u-maxWidth700 u-marginAuto u-textColorTransparentWhiteDarker">
											Sign up for our newsletter — we promise no spam, just good stuff once a
											month.
										</div>
										<div className="u-marginBottom20">
											<a
												className="button button--large button--light button--withChrome u-baseColor--buttonLight"
												href="http://newsletter.infinite.red/"
												rel="nofollow noopener"
												target="_blank"
												data-action-source="collection_home---2------0-----------------------"
											>
												Sign Up Now
											</a>
										</div>
									</div>
								</div>
							</div>
							<div
								className="streamItem streamItem--section js-streamItem"
								data-action-scope="_actionscope_6"
							>
								<section className="u-marginTop30 u-xs-margin0 u-marginBottom15 u-maxWidth1032 u-sm-paddingLeft20 u-sm-paddingRight20 u-borderBox u-marginAuto">
									<div className="row u-marginTop30 u-marginLeftNegative12 u-marginRightNegative12">
										<div
											className="col u-xs-size12of12 js-trackPostPresentation u-paddingLeft12 u-marginBottom15 u-paddingRight12 u-size4of12"
											data-source="collection_home---4------0-----------------------"
											data-post-id="691a01f9d895"
											data-index={0}
											data-scroll="native"
										>
											<div className="u-lineHeightBase postItem">
												<a
													href="https://shift.infinite.red/react-native-final-steps-691a01f9d895?source=collection_home---4------0-----------------------"
													data-action="open-post"
													data-action-value="https://shift.infinite.red/react-native-final-steps-691a01f9d895?source=collection_home---4------0-----------------------"
													className="u-block u-xs-height170 u-height172 u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-borderLighter"
													style={{
														backgroundImage:
															'url("https://cdn-images-1.medium.com/max/400/1*EGXz49BqzkKs6drt8oCtGA.jpeg")',
														backgroundPosition: '50% 50% !important',
													}}
												>
													<span className="u-textScreenReader">React Native Final Steps</span>
												</a>
											</div>
											<div className="col u-xs-marginBottom10 u-paddingLeft0 u-paddingRight0 u-paddingTop15 u-marginBottom30">
												<a
													className
													href="https://shift.infinite.red/react-native-final-steps-691a01f9d895?source=collection_home---4------0-----------------------"
													data-action-source="collection_home---4------0-----------------------"
													data-post-id="691a01f9d895"
												>
													<h3 className="u-contentSansBold u-lineHeightTightest u-xs-fontSize24 u-paddingBottom2 u-paddingTop5 u-fontSize32">
														<div className="u-letterSpacingTight u-lineHeightTighter u-breakWord u-textOverflowEllipsis u-lineClamp3 u-fontSize24">
															React Native Final&nbsp;Steps
														</div>
													</h3>
													<div className="u-contentSansThin u-lineHeightBaseSans u-fontSize24 u-xs-fontSize18 u-textColorNormal u-baseColor--textNormal">
														<div className="u-fontSize18 u-letterSpacingTight u-lineHeightTight u-marginTop7 u-textColorNormal u-baseColor--textNormal">
															A Checklist before you ship your React Native app
															in&nbsp;2020
														</div>
													</div>
												</a>
												<div className="u-clearfix u-marginTop20">
													<div className="u-flexCenter">
														<div className="postMetaInline-avatar u-flex0">
															<a
																className="link u-baseColor--link avatar"
																href="https://shift.infinite.red/@gantlaborde"
																data-action="show-user-card"
																data-action-value="6ca0fe37eac1"
																data-action-type="hover"
																data-user-id="6ca0fe37eac1"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																<img
																	src="https://cdn-images-1.medium.com/fit/c/36/36/1*gnkCSbW1lhpdf6ZvaLEXHQ.png"
																	className="avatar-image u-size36x36 u-xs-size32x32"
																	alt="Go to the profile of Gant Laborde"
																/>
															</a>
														</div>
														<div className="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
															<a
																className="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
																href="https://shift.infinite.red/@gantlaborde"
																data-action="show-user-card"
																data-action-value="6ca0fe37eac1"
																data-action-type="hover"
																data-user-id="6ca0fe37eac1"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																Gant Laborde
															</a>
															<div className="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
																<time dateTime="2020-08-25T16:34:07.676Z">
																	Aug 25, 2020
																</time>
																<span className="middotDivider u-fontSize12" />
																<span className="readingTime" title="15 min read" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="col u-xs-size12of12 js-trackPostPresentation u-paddingLeft12 u-marginBottom15 u-paddingRight12 u-size4of12"
											data-source="collection_home---4------1-----------------------"
											data-post-id="575b736c707b"
											data-index={1}
											data-scroll="native"
										>
											<div className="u-lineHeightBase postItem">
												<a
													href="https://shift.infinite.red/why-your-company-should-consider-remote-work-permanently-575b736c707b?source=collection_home---4------1-----------------------"
													data-action="open-post"
													data-action-value="https://shift.infinite.red/why-your-company-should-consider-remote-work-permanently-575b736c707b?source=collection_home---4------1-----------------------"
													className="u-block u-xs-height170 u-height172 u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-borderLighter"
													style={{
														backgroundImage:
															'url("https://cdn-images-1.medium.com/max/400/1*bKJ2C6ncms2wLnzEumF8cw.jpeg")',
														backgroundPosition: '50% 50% !important',
													}}
												>
													<span className="u-textScreenReader">
														Why Your Company Should Consider Remote Work Permanently
													</span>
												</a>
											</div>
											<div className="col u-xs-marginBottom10 u-paddingLeft0 u-paddingRight0 u-paddingTop15 u-marginBottom30">
												<a
													className
													href="https://shift.infinite.red/why-your-company-should-consider-remote-work-permanently-575b736c707b?source=collection_home---4------1-----------------------"
													data-action-source="collection_home---4------1-----------------------"
													data-post-id="575b736c707b"
												>
													<h3 className="u-contentSansBold u-lineHeightTightest u-xs-fontSize24 u-paddingBottom2 u-paddingTop5 u-fontSize32">
														<div className="u-letterSpacingTight u-lineHeightTighter u-breakWord u-textOverflowEllipsis u-lineClamp3 u-fontSize24">
															Why Your Company Should Consider Remote Work Permanently
														</div>
													</h3>
													<div className="u-contentSansThin u-lineHeightBaseSans u-fontSize24 u-xs-fontSize18 u-textColorNormal u-baseColor--textNormal">
														<div className="u-fontSize18 u-letterSpacingTight u-lineHeightTight u-marginTop7 u-textColorNormal u-baseColor--textNormal">
															During this strange new normal some people refer to as the
															Covid Era, lots of companies like Twitter, Google, Zillow
															and Square&nbsp;have…
														</div>
													</div>
												</a>
												<div className="u-clearfix u-marginTop20">
													<div className="u-flexCenter">
														<div className="postMetaInline-avatar u-flex0">
															<a
																className="link u-baseColor--link avatar"
																href="https://shift.infinite.red/@shawni07"
																data-action="show-user-card"
																data-action-value="c38e08e74f49"
																data-action-type="hover"
																data-user-id="c38e08e74f49"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																<img
																	src="https://cdn-images-1.medium.com/fit/c/36/36/1*BgVNgQYmwvJtcQ5xU4ao8Q.jpeg"
																	className="avatar-image u-size36x36 u-xs-size32x32"
																	alt="Go to the profile of Shawni Danner"
																/>
															</a>
														</div>
														<div className="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
															<a
																className="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
																href="https://shift.infinite.red/@shawni07"
																data-action="show-user-card"
																data-action-value="c38e08e74f49"
																data-action-type="hover"
																data-user-id="c38e08e74f49"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																Shawni Danner
															</a>
															<div className="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
																<time dateTime="2020-08-18T20:47:47.014Z">
																	Aug 19, 2020
																</time>
																<span className="middotDivider u-fontSize12" />
																<span className="readingTime" title="2 min read" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="col u-xs-size12of12 js-trackPostPresentation u-paddingLeft12 u-marginBottom15 u-paddingRight12 u-size4of12"
											data-source="collection_home---4------2-----------------------"
											data-post-id="c2374220c944"
											data-index={2}
											data-scroll="native"
										>
											<div className="u-lineHeightBase postItem">
												<a
													href="https://shift.infinite.red/react-native-faq-2020-c2374220c944?source=collection_home---4------2-----------------------"
													data-action="open-post"
													data-action-value="https://shift.infinite.red/react-native-faq-2020-c2374220c944?source=collection_home---4------2-----------------------"
													className="u-block u-xs-height170 u-height172 u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-borderLighter"
													style={{
														backgroundImage:
															'url("https://cdn-images-1.medium.com/max/400/1*YjnADyvnFIvvRhbDfyBC5Q.jpeg")',
														backgroundPosition: '50% 50% !important',
													}}
												>
													<span className="u-textScreenReader">React Native FAQ 2020</span>
												</a>
											</div>
											<div className="col u-xs-marginBottom10 u-paddingLeft0 u-paddingRight0 u-paddingTop15 u-marginBottom30">
												<a
													className
													href="https://shift.infinite.red/react-native-faq-2020-c2374220c944?source=collection_home---4------2-----------------------"
													data-action-source="collection_home---4------2-----------------------"
													data-post-id="c2374220c944"
												>
													<h3 className="u-contentSansBold u-lineHeightTightest u-xs-fontSize24 u-paddingBottom2 u-paddingTop5 u-fontSize32">
														<div className="u-letterSpacingTight u-lineHeightTighter u-breakWord u-textOverflowEllipsis u-lineClamp3 u-fontSize24">
															React Native FAQ&nbsp;2020
														</div>
													</h3>
													<div className="u-contentSansThin u-lineHeightBaseSans u-fontSize24 u-xs-fontSize18 u-textColorNormal u-baseColor--textNormal">
														<div className="u-fontSize18 u-letterSpacingTight u-lineHeightTight u-marginTop7 u-textColorNormal u-baseColor--textNormal">
															We answer some of your most frequently asked questions about
															React Native in&nbsp;2020!
														</div>
													</div>
												</a>
												<div className="u-clearfix u-marginTop20">
													<div className="u-flexCenter">
														<div className="postMetaInline-avatar u-flex0">
															<a
																className="link u-baseColor--link avatar"
																href="https://shift.infinite.red/@jamonholmgren"
																data-action="show-user-card"
																data-action-value="4a1ccb16af26"
																data-action-type="hover"
																data-user-id="4a1ccb16af26"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																<img
																	src="https://cdn-images-1.medium.com/fit/c/36/36/1*YKPVVMQyo5AbHSlpq2TPGw.jpeg"
																	className="avatar-image u-size36x36 u-xs-size32x32"
																	alt="Go to the profile of Jamon Holmgren"
																/>
															</a>
														</div>
														<div className="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
															<a
																className="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
																href="https://shift.infinite.red/@jamonholmgren"
																data-action="show-user-card"
																data-action-value="4a1ccb16af26"
																data-action-type="hover"
																data-user-id="4a1ccb16af26"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																Jamon Holmgren
															</a>
															<div className="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
																<time dateTime="2020-08-18T18:31:43.137Z">
																	Aug 18, 2020
																</time>
																<span className="middotDivider u-fontSize12" />
																<span className="readingTime" title="7 min read" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="row u-marginTop30 u-marginLeftNegative12 u-marginRightNegative12">
										<div
											className="col u-xs-size12of12 js-trackPostPresentation u-paddingLeft12 u-marginBottom15 u-paddingRight12 u-size4of12"
											data-source="collection_home---4------3-----------------------"
											data-post-id="452a0df603ef"
											data-index={3}
											data-scroll="native"
										>
											<div className="u-lineHeightBase postItem">
												<a
													href="https://shift.infinite.red/behind-the-scenes-with-infinite-red-452a0df603ef?source=collection_home---4------3-----------------------"
													data-action="open-post"
													data-action-value="https://shift.infinite.red/behind-the-scenes-with-infinite-red-452a0df603ef?source=collection_home---4------3-----------------------"
													className="u-block u-xs-height170 u-height172 u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-borderLighter"
													style={{
														backgroundImage:
															'url("https://cdn-images-1.medium.com/max/400/1*15PR5-rJGj0_aPz1uvzFqg.jpeg")',
														backgroundPosition: '50% 50% !important',
													}}
												>
													<span className="u-textScreenReader">
														Behind the Scenes with Infinite Red
													</span>
												</a>
											</div>
											<div className="col u-xs-marginBottom10 u-paddingLeft0 u-paddingRight0 u-paddingTop15 u-marginBottom30">
												<a
													className
													href="https://shift.infinite.red/behind-the-scenes-with-infinite-red-452a0df603ef?source=collection_home---4------3-----------------------"
													data-action-source="collection_home---4------3-----------------------"
													data-post-id="452a0df603ef"
												>
													<h3 className="u-contentSansBold u-lineHeightTightest u-xs-fontSize24 u-paddingBottom2 u-paddingTop5 u-fontSize32">
														<div className="u-letterSpacingTight u-lineHeightTighter u-breakWord u-textOverflowEllipsis u-lineClamp3 u-fontSize24">
															Behind the Scenes with Infinite&nbsp;Red
														</div>
													</h3>
													<div className="u-contentSansThin u-lineHeightBaseSans u-fontSize24 u-xs-fontSize18 u-textColorNormal u-baseColor--textNormal">
														<div className="u-fontSize18 u-letterSpacingTight u-lineHeightTight u-marginTop7 u-textColorNormal u-baseColor--textNormal">
															What it’s like to be an Infinite Red&nbsp;client
														</div>
													</div>
												</a>
												<div className="u-clearfix u-marginTop20">
													<div className="u-flexCenter">
														<div className="postMetaInline-avatar u-flex0">
															<a
																className="link u-baseColor--link avatar"
																href="https://shift.infinite.red/@jamonholmgren"
																data-action="show-user-card"
																data-action-value="4a1ccb16af26"
																data-action-type="hover"
																data-user-id="4a1ccb16af26"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																<img
																	src="https://cdn-images-1.medium.com/fit/c/36/36/1*YKPVVMQyo5AbHSlpq2TPGw.jpeg"
																	className="avatar-image u-size36x36 u-xs-size32x32"
																	alt="Go to the profile of Jamon Holmgren"
																/>
															</a>
														</div>
														<div className="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
															<a
																className="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
																href="https://shift.infinite.red/@jamonholmgren"
																data-action="show-user-card"
																data-action-value="4a1ccb16af26"
																data-action-type="hover"
																data-user-id="4a1ccb16af26"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																Jamon Holmgren
															</a>
															<div className="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
																<time dateTime="2020-08-11T15:59:21.763Z">
																	Aug 11, 2020
																</time>
																<span className="middotDivider u-fontSize12" />
																<span className="readingTime" title="8 min read" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="col u-xs-size12of12 js-trackPostPresentation u-paddingLeft12 u-marginBottom15 u-paddingRight12 u-size4of12"
											data-source="collection_home---4------4-----------------------"
											data-post-id="ef6b50b4ccb8"
											data-index={4}
											data-scroll="native"
										>
											<div className="u-lineHeightBase postItem">
												<a
													href="https://shift.infinite.red/ai-face-off-fawkes-vs-nicornot-ef6b50b4ccb8?source=collection_home---4------4-----------------------"
													data-action="open-post"
													data-action-value="https://shift.infinite.red/ai-face-off-fawkes-vs-nicornot-ef6b50b4ccb8?source=collection_home---4------4-----------------------"
													className="u-block u-xs-height170 u-height172 u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-borderLighter"
													style={{
														backgroundImage:
															'url("https://cdn-images-1.medium.com/max/400/1*avDbvrlUb_2WI7j3PNhkkQ.jpeg")',
														backgroundPosition: '50% 50% !important',
													}}
												>
													<span className="u-textScreenReader">
														AI Face/Off — Fawkes vs. NicOrNot
													</span>
												</a>
											</div>
											<div className="col u-xs-marginBottom10 u-paddingLeft0 u-paddingRight0 u-paddingTop15 u-marginBottom30">
												<a
													className
													href="https://shift.infinite.red/ai-face-off-fawkes-vs-nicornot-ef6b50b4ccb8?source=collection_home---4------4-----------------------"
													data-action-source="collection_home---4------4-----------------------"
													data-post-id="ef6b50b4ccb8"
												>
													<h3 className="u-contentSansBold u-lineHeightTightest u-xs-fontSize24 u-paddingBottom2 u-paddingTop5 u-fontSize32">
														<div className="u-letterSpacingTight u-lineHeightTighter u-breakWord u-textOverflowEllipsis u-lineClamp3 u-fontSize24">
															AI Face/Off — Fawkes vs.&nbsp;NicOrNot
														</div>
													</h3>
													<div className="u-contentSansThin u-lineHeightBaseSans u-fontSize24 u-xs-fontSize18 u-textColorNormal u-baseColor--textNormal">
														<div className="u-fontSize18 u-letterSpacingTight u-lineHeightTight u-marginTop7 u-textColorNormal u-baseColor--textNormal">
															Testing Facial Recognition Evasion on Nic&nbsp;Cage
														</div>
													</div>
												</a>
												<div className="u-clearfix u-marginTop20">
													<div className="u-flexCenter">
														<div className="postMetaInline-avatar u-flex0">
															<a
																className="link u-baseColor--link avatar"
																href="https://shift.infinite.red/@gantlaborde"
																data-action="show-user-card"
																data-action-value="6ca0fe37eac1"
																data-action-type="hover"
																data-user-id="6ca0fe37eac1"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																<img
																	src="https://cdn-images-1.medium.com/fit/c/36/36/1*gnkCSbW1lhpdf6ZvaLEXHQ.png"
																	className="avatar-image u-size36x36 u-xs-size32x32"
																	alt="Go to the profile of Gant Laborde"
																/>
															</a>
														</div>
														<div className="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
															<a
																className="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
																href="https://shift.infinite.red/@gantlaborde"
																data-action="show-user-card"
																data-action-value="6ca0fe37eac1"
																data-action-type="hover"
																data-user-id="6ca0fe37eac1"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																Gant Laborde
															</a>
															<div className="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
																<time dateTime="2020-08-04T16:24:47.831Z">
																	Aug 4, 2020
																</time>
																<span className="middotDivider u-fontSize12" />
																<span className="readingTime" title="6 min read" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="col u-xs-size12of12 js-trackPostPresentation u-paddingLeft12 u-marginBottom15 u-paddingRight12 u-size4of12"
											data-source="collection_home---4------5-----------------------"
											data-post-id="4b08c771788e"
											data-index={5}
											data-scroll="native"
										>
											<div className="u-lineHeightBase postItem">
												<a
													href="https://shift.infinite.red/7-reasons-react-native-is-going-to-be-big-in-2021-4b08c771788e?source=collection_home---4------5-----------------------"
													data-action="open-post"
													data-action-value="https://shift.infinite.red/7-reasons-react-native-is-going-to-be-big-in-2021-4b08c771788e?source=collection_home---4------5-----------------------"
													className="u-block u-xs-height170 u-height172 u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-borderLighter"
													style={{
														backgroundImage:
															'url("https://cdn-images-1.medium.com/max/400/1*Zx2CGcN8VYT3CH0ibLeXUg.png")',
														backgroundPosition: '50% 50% !important',
													}}
												>
													<span className="u-textScreenReader">
														7 Reasons React Native is Going to Be BIG in 2021
													</span>
												</a>
											</div>
											<div className="col u-xs-marginBottom10 u-paddingLeft0 u-paddingRight0 u-paddingTop15 u-marginBottom30">
												<a
													className
													href="https://shift.infinite.red/7-reasons-react-native-is-going-to-be-big-in-2021-4b08c771788e?source=collection_home---4------5-----------------------"
													data-action-source="collection_home---4------5-----------------------"
													data-post-id="4b08c771788e"
												>
													<h3 className="u-contentSansBold u-lineHeightTightest u-xs-fontSize24 u-paddingBottom2 u-paddingTop5 u-fontSize32">
														<div className="u-letterSpacingTight u-lineHeightTighter u-breakWord u-textOverflowEllipsis u-lineClamp3 u-fontSize24">
															7 Reasons React Native is Going to Be BIG in&nbsp;2021
														</div>
													</h3>
													<div className="u-contentSansThin u-lineHeightBaseSans u-fontSize24 u-xs-fontSize18 u-textColorNormal u-baseColor--textNormal">
														<div className="u-fontSize18 u-letterSpacingTight u-lineHeightTight u-marginTop7 u-textColorNormal u-baseColor--textNormal">
															When you plan to invest in mobile app development, the very
															first question is usually the platform and tooling. More
															exceptional…
														</div>
													</div>
												</a>
												<div className="u-clearfix u-marginTop20">
													<div className="u-flexCenter">
														<div className="postMetaInline-avatar u-flex0">
															<a
																className="link u-baseColor--link avatar"
																href="https://shift.infinite.red/@gantlaborde"
																data-action="show-user-card"
																data-action-value="6ca0fe37eac1"
																data-action-type="hover"
																data-user-id="6ca0fe37eac1"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																<img
																	src="https://cdn-images-1.medium.com/fit/c/36/36/1*gnkCSbW1lhpdf6ZvaLEXHQ.png"
																	className="avatar-image u-size36x36 u-xs-size32x32"
																	alt="Go to the profile of Gant Laborde"
																/>
															</a>
														</div>
														<div className="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
															<a
																className="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
																href="https://shift.infinite.red/@gantlaborde"
																data-action="show-user-card"
																data-action-value="6ca0fe37eac1"
																data-action-type="hover"
																data-user-id="6ca0fe37eac1"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																Gant Laborde
															</a>
															<div className="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
																<time dateTime="2020-07-16T15:08:43.654Z">
																	Jul 16, 2020
																</time>
																<span className="middotDivider u-fontSize12" />
																<span className="readingTime" title="6 min read" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="row u-marginTop30 u-marginLeftNegative12 u-marginRightNegative12">
										<div
											className="col u-xs-size12of12 js-trackPostPresentation u-paddingLeft12 u-marginBottom15 u-paddingRight12 u-size4of12"
											data-source="collection_home---4------6-----------------------"
											data-post-id="9ac6db671b6"
											data-index={6}
											data-scroll="native"
										>
											<div className="u-lineHeightBase postItem">
												<a
													href="https://shift.infinite.red/get-started-in-ai-cheat-sheet-9ac6db671b6?source=collection_home---4------6-----------------------"
													data-action="open-post"
													data-action-value="https://shift.infinite.red/get-started-in-ai-cheat-sheet-9ac6db671b6?source=collection_home---4------6-----------------------"
													className="u-block u-xs-height170 u-height172 u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-borderLighter"
													style={{
														backgroundImage:
															'url("https://cdn-images-1.medium.com/max/400/1*F3ApX5B15bHwgjGFs4KBEQ.jpeg")',
														backgroundPosition: '50% 50% !important',
													}}
												>
													<span className="u-textScreenReader">
														Get Started in AI Cheat Sheet
													</span>
												</a>
											</div>
											<div className="col u-xs-marginBottom10 u-paddingLeft0 u-paddingRight0 u-paddingTop15 u-marginBottom30">
												<a
													className
													href="https://shift.infinite.red/get-started-in-ai-cheat-sheet-9ac6db671b6?source=collection_home---4------6-----------------------"
													data-action-source="collection_home---4------6-----------------------"
													data-post-id="9ac6db671b6"
												>
													<h3 className="u-contentSansBold u-lineHeightTightest u-xs-fontSize24 u-paddingBottom2 u-paddingTop5 u-fontSize32">
														<div className="u-letterSpacingTight u-lineHeightTighter u-breakWord u-textOverflowEllipsis u-lineClamp3 u-fontSize24">
															Get Started in AI Cheat&nbsp;Sheet
														</div>
													</h3>
													<div className="u-contentSansThin u-lineHeightBaseSans u-fontSize24 u-xs-fontSize18 u-textColorNormal u-baseColor--textNormal">
														<div className="u-fontSize18 u-letterSpacingTight u-lineHeightTight u-marginTop7 u-textColorNormal u-baseColor--textNormal">
															A Free Quick Start&nbsp;Guide
														</div>
													</div>
												</a>
												<div className="u-clearfix u-marginTop20">
													<div className="u-flexCenter">
														<div className="postMetaInline-avatar u-flex0">
															<a
																className="link u-baseColor--link avatar"
																href="https://shift.infinite.red/@gantlaborde"
																data-action="show-user-card"
																data-action-value="6ca0fe37eac1"
																data-action-type="hover"
																data-user-id="6ca0fe37eac1"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																<img
																	src="https://cdn-images-1.medium.com/fit/c/36/36/1*gnkCSbW1lhpdf6ZvaLEXHQ.png"
																	className="avatar-image u-size36x36 u-xs-size32x32"
																	alt="Go to the profile of Gant Laborde"
																/>
															</a>
														</div>
														<div className="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
															<a
																className="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
																href="https://shift.infinite.red/@gantlaborde"
																data-action="show-user-card"
																data-action-value="6ca0fe37eac1"
																data-action-type="hover"
																data-user-id="6ca0fe37eac1"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																Gant Laborde
															</a>
															<div className="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
																<time dateTime="2020-07-02T15:11:00.902Z">
																	Jul 2, 2020
																</time>
																<span className="middotDivider u-fontSize12" />
																<span className="readingTime" title="3 min read" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="col u-xs-size12of12 js-trackPostPresentation u-paddingLeft12 u-marginBottom15 u-paddingRight12 u-size4of12"
											data-source="collection_home---4------7-----------------------"
											data-post-id="d6c1407dead"
											data-index={7}
											data-scroll="native"
										>
											<div className="u-lineHeightBase postItem">
												<a
													href="https://shift.infinite.red/why-infinite-red-uses-mobx-state-tree-instead-of-redux-d6c1407dead?source=collection_home---4------7-----------------------"
													data-action="open-post"
													data-action-value="https://shift.infinite.red/why-infinite-red-uses-mobx-state-tree-instead-of-redux-d6c1407dead?source=collection_home---4------7-----------------------"
													className="u-block u-xs-height170 u-height172 u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-borderLighter"
													style={{
														backgroundImage:
															'url("https://cdn-images-1.medium.com/max/400/1*mqU6VYLxwwEYr__4ncJx_w.jpeg")',
														backgroundPosition: '50% 50% !important',
													}}
												>
													<span className="u-textScreenReader">
														Why Infinite Red uses MobX-State-Tree instead of Redux
													</span>
												</a>
											</div>
											<div className="col u-xs-marginBottom10 u-paddingLeft0 u-paddingRight0 u-paddingTop15 u-marginBottom30">
												<a
													className
													href="https://shift.infinite.red/why-infinite-red-uses-mobx-state-tree-instead-of-redux-d6c1407dead?source=collection_home---4------7-----------------------"
													data-action-source="collection_home---4------7-----------------------"
													data-post-id="d6c1407dead"
												>
													<h3 className="u-contentSansBold u-lineHeightTightest u-xs-fontSize24 u-paddingBottom2 u-paddingTop5 u-fontSize32">
														<div className="u-letterSpacingTight u-lineHeightTighter u-breakWord u-textOverflowEllipsis u-lineClamp3 u-fontSize24">
															Why Infinite Red uses MobX-State-Tree instead of&nbsp;Redux
														</div>
													</h3>
													<div className="u-contentSansThin u-lineHeightBaseSans u-fontSize24 u-xs-fontSize18 u-textColorNormal u-baseColor--textNormal">
														<div className="u-fontSize18 u-letterSpacingTight u-lineHeightTight u-marginTop7 u-textColorNormal u-baseColor--textNormal">
															Is Redux the best choice for React apps&nbsp;today?
														</div>
													</div>
												</a>
												<div className="u-clearfix u-marginTop20">
													<div className="u-flexCenter">
														<div className="postMetaInline-avatar u-flex0">
															<a
																className="link u-baseColor--link avatar"
																href="https://shift.infinite.red/@jamonholmgren"
																data-action="show-user-card"
																data-action-value="4a1ccb16af26"
																data-action-type="hover"
																data-user-id="4a1ccb16af26"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																<img
																	src="https://cdn-images-1.medium.com/fit/c/36/36/1*YKPVVMQyo5AbHSlpq2TPGw.jpeg"
																	className="avatar-image u-size36x36 u-xs-size32x32"
																	alt="Go to the profile of Jamon Holmgren"
																/>
															</a>
														</div>
														<div className="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
															<a
																className="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
																href="https://shift.infinite.red/@jamonholmgren"
																data-action="show-user-card"
																data-action-value="4a1ccb16af26"
																data-action-type="hover"
																data-user-id="4a1ccb16af26"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																Jamon Holmgren
															</a>
															<div className="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
																<time dateTime="2020-06-16T16:01:01.056Z">
																	Jun 16, 2020
																</time>
																<span className="middotDivider u-fontSize12" />
																<span className="readingTime" title="11 min read" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="col u-xs-size12of12 js-trackPostPresentation u-paddingLeft12 u-marginBottom15 u-paddingRight12 u-size4of12"
											data-source="collection_home---4------8-----------------------"
											data-post-id="7efb8f88c86a"
											data-index={8}
											data-scroll="native"
										>
											<div className="u-lineHeightBase postItem">
												<a
													href="https://shift.infinite.red/using-react-native-elements-with-the-ignite-bowser-boilerplate-7efb8f88c86a?source=collection_home---4------8-----------------------"
													data-action="open-post"
													data-action-value="https://shift.infinite.red/using-react-native-elements-with-the-ignite-bowser-boilerplate-7efb8f88c86a?source=collection_home---4------8-----------------------"
													className="u-block u-xs-height170 u-height172 u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-borderLighter"
													style={{
														backgroundImage:
															'url("https://cdn-images-1.medium.com/max/400/1*KXJsXoxCg_0BhtDKHRi41Q.jpeg")',
														backgroundPosition: '50% 50% !important',
													}}
												>
													<span className="u-textScreenReader">
														Using React Native Elements with the Ignite Bowser boilerplate
													</span>
												</a>
											</div>
											<div className="col u-xs-marginBottom10 u-paddingLeft0 u-paddingRight0 u-paddingTop15 u-marginBottom30">
												<a
													className
													href="https://shift.infinite.red/using-react-native-elements-with-the-ignite-bowser-boilerplate-7efb8f88c86a?source=collection_home---4------8-----------------------"
													data-action-source="collection_home---4------8-----------------------"
													data-post-id="7efb8f88c86a"
												>
													<h3 className="u-contentSansBold u-lineHeightTightest u-xs-fontSize24 u-paddingBottom2 u-paddingTop5 u-fontSize32">
														<div className="u-letterSpacingTight u-lineHeightTighter u-breakWord u-textOverflowEllipsis u-lineClamp3 u-fontSize24">
															Using React Native Elements with the Ignite Bowser
															boilerplate
														</div>
													</h3>
													<div className="u-contentSansThin u-lineHeightBaseSans u-fontSize24 u-xs-fontSize18 u-textColorNormal u-baseColor--textNormal">
														<div className="u-fontSize18 u-letterSpacingTight u-lineHeightTight u-marginTop7 u-textColorNormal u-baseColor--textNormal">
															Ignite Bowser is the most popular React Native boilerplate,
															and React Native Elements (originally created by Nader
															Dabit) is the&nbsp;most…
														</div>
													</div>
												</a>
												<div className="u-clearfix u-marginTop20">
													<div className="u-flexCenter">
														<div className="postMetaInline-avatar u-flex0">
															<a
																className="link u-baseColor--link avatar"
																href="https://shift.infinite.red/@jamonholmgren"
																data-action="show-user-card"
																data-action-value="4a1ccb16af26"
																data-action-type="hover"
																data-user-id="4a1ccb16af26"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																<img
																	src="https://cdn-images-1.medium.com/fit/c/36/36/1*YKPVVMQyo5AbHSlpq2TPGw.jpeg"
																	className="avatar-image u-size36x36 u-xs-size32x32"
																	alt="Go to the profile of Jamon Holmgren"
																/>
															</a>
														</div>
														<div className="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
															<a
																className="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
																href="https://shift.infinite.red/@jamonholmgren"
																data-action="show-user-card"
																data-action-value="4a1ccb16af26"
																data-action-type="hover"
																data-user-id="4a1ccb16af26"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																Jamon Holmgren
															</a>
															<div className="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
																<time dateTime="2020-05-21T15:58:53.551Z">
																	May 21, 2020
																</time>
																<span className="middotDivider u-fontSize12" />
																<span className="readingTime" title="5 min read" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="row u-marginTop30 u-marginLeftNegative12 u-marginRightNegative12">
										<div
											className="col u-xs-size12of12 js-trackPostPresentation u-paddingLeft12 u-marginBottom15 u-paddingRight12 u-size4of12"
											data-source="collection_home---4------9-----------------------"
											data-post-id="31fb4a57f2b9"
											data-index={9}
											data-scroll="native"
										>
											<div className="u-lineHeightBase postItem">
												<a
													href="https://shift.infinite.red/getting-started-with-the-new-react-navigation-v5-and-ignite-bowser-v5-31fb4a57f2b9?source=collection_home---4------9-----------------------"
													data-action="open-post"
													data-action-value="https://shift.infinite.red/getting-started-with-the-new-react-navigation-v5-and-ignite-bowser-v5-31fb4a57f2b9?source=collection_home---4------9-----------------------"
													className="u-block u-xs-height170 u-height172 u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-borderLighter"
													style={{
														backgroundImage:
															'url("https://cdn-images-1.medium.com/max/400/1*fU4rJ6oIoKS1GeMzoQpM_w.jpeg")',
														backgroundPosition: '50% 50% !important',
													}}
												>
													<span className="u-textScreenReader">
														Getting Started with the New React Navigation v5 and Ignite
														Bowser v5
													</span>
												</a>
											</div>
											<div className="col u-xs-marginBottom10 u-paddingLeft0 u-paddingRight0 u-paddingTop15 u-marginBottom30">
												<a
													className
													href="https://shift.infinite.red/getting-started-with-the-new-react-navigation-v5-and-ignite-bowser-v5-31fb4a57f2b9?source=collection_home---4------9-----------------------"
													data-action-source="collection_home---4------9-----------------------"
													data-post-id="31fb4a57f2b9"
												>
													<h3 className="u-contentSansBold u-lineHeightTightest u-xs-fontSize24 u-paddingBottom2 u-paddingTop5 u-fontSize32">
														<div className="u-letterSpacingTight u-lineHeightTighter u-breakWord u-textOverflowEllipsis u-lineClamp3 u-fontSize24">
															Getting Started with the New React Navigation v5 and Ignite
															Bowser&nbsp;v5
														</div>
													</h3>
													<div className="u-contentSansThin u-lineHeightBaseSans u-fontSize24 u-xs-fontSize18 u-textColorNormal u-baseColor--textNormal">
														<div className="u-fontSize18 u-letterSpacingTight u-lineHeightTight u-marginTop7 u-textColorNormal u-baseColor--textNormal">
															React Navigation v5 is a big release that completely changes
															how your navigation is configured. That being said, it is
															understandable that…
														</div>
													</div>
												</a>
												<div className="u-clearfix u-marginTop20">
													<div className="u-flexCenter">
														<div className="postMetaInline-avatar u-flex0">
															<a
																className="link u-baseColor--link avatar"
																href="https://shift.infinite.red/@harrisrobin"
																data-action="show-user-card"
																data-action-value="cc923365de1a"
																data-action-type="hover"
																data-user-id="cc923365de1a"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																<img
																	src="https://cdn-images-1.medium.com/fit/c/36/36/1*U8fWt2OiYL_ClqG0RCSzFA.jpeg"
																	className="avatar-image u-size36x36 u-xs-size32x32"
																	alt="Go to the profile of Harris Robin"
																/>
															</a>
														</div>
														<div className="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
															<a
																className="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
																href="https://shift.infinite.red/@harrisrobin"
																data-action="show-user-card"
																data-action-value="cc923365de1a"
																data-action-type="hover"
																data-user-id="cc923365de1a"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																Harris Robin
															</a>
															<div className="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
																<time dateTime="2020-05-14T16:37:41.167Z">
																	May 14, 2020
																</time>
																<span className="middotDivider u-fontSize12" />
																<span className="readingTime" title="7 min read" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="col u-xs-size12of12 js-trackPostPresentation u-paddingLeft12 u-marginBottom15 u-paddingRight12 u-size4of12"
											data-source="collection_home---4------10-----------------------"
											data-post-id="ce9f7e820c58"
											data-index={10}
											data-scroll="native"
										>
											<div className="u-lineHeightBase postItem">
												<a
													href="https://shift.infinite.red/getting-started-with-react-native-windows-edition-ce9f7e820c58?source=collection_home---4------10-----------------------"
													data-action="open-post"
													data-action-value="https://shift.infinite.red/getting-started-with-react-native-windows-edition-ce9f7e820c58?source=collection_home---4------10-----------------------"
													className="u-block u-xs-height170 u-height172 u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-borderLighter"
													style={{
														backgroundImage:
															'url("https://cdn-images-1.medium.com/max/400/0*6oiQTXmw7QVF5wlE")',
														backgroundPosition: '50% 50% !important',
													}}
												>
													<span className="u-textScreenReader">
														Getting Started With React Native: Windows Edition
													</span>
												</a>
											</div>
											<div className="col u-xs-marginBottom10 u-paddingLeft0 u-paddingRight0 u-paddingTop15 u-marginBottom30">
												<a
													className
													href="https://shift.infinite.red/getting-started-with-react-native-windows-edition-ce9f7e820c58?source=collection_home---4------10-----------------------"
													data-action-source="collection_home---4------10-----------------------"
													data-post-id="ce9f7e820c58"
												>
													<h3 className="u-contentSansBold u-lineHeightTightest u-xs-fontSize24 u-paddingBottom2 u-paddingTop5 u-fontSize32">
														<div className="u-letterSpacingTight u-lineHeightTighter u-breakWord u-textOverflowEllipsis u-lineClamp3 u-fontSize24">
															Getting Started With React Native: Windows&nbsp;Edition
														</div>
													</h3>
													<div className="u-contentSansThin u-lineHeightBaseSans u-fontSize24 u-xs-fontSize18 u-textColorNormal u-baseColor--textNormal">
														<div className="u-fontSize18 u-letterSpacingTight u-lineHeightTight u-marginTop7 u-textColorNormal u-baseColor--textNormal">
															Announcing a new free Infinite Red Academy&nbsp;course!
														</div>
													</div>
												</a>
												<div className="u-clearfix u-marginTop20">
													<div className="u-flexCenter">
														<div className="postMetaInline-avatar u-flex0">
															<a
																className="link u-baseColor--link avatar"
																href="https://shift.infinite.red/@jamonholmgren"
																data-action="show-user-card"
																data-action-value="4a1ccb16af26"
																data-action-type="hover"
																data-user-id="4a1ccb16af26"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																<img
																	src="https://cdn-images-1.medium.com/fit/c/36/36/1*YKPVVMQyo5AbHSlpq2TPGw.jpeg"
																	className="avatar-image u-size36x36 u-xs-size32x32"
																	alt="Go to the profile of Jamon Holmgren"
																/>
															</a>
														</div>
														<div className="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
															<a
																className="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
																href="https://shift.infinite.red/@jamonholmgren"
																data-action="show-user-card"
																data-action-value="4a1ccb16af26"
																data-action-type="hover"
																data-user-id="4a1ccb16af26"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																Jamon Holmgren
															</a>
															<div className="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
																<time dateTime="2020-05-04T17:46:18.652Z">
																	May 4, 2020
																</time>
																<span className="middotDivider u-fontSize12" />
																<span className="readingTime" title="2 min read" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="col u-xs-size12of12 js-trackPostPresentation u-paddingLeft12 u-marginBottom15 u-paddingRight12 u-size4of12"
											data-source="collection_home---4------11-----------------------"
											data-post-id="6b823af29220"
											data-index={11}
											data-scroll="native"
										>
											<div className="u-lineHeightBase postItem">
												<a
													href="https://shift.infinite.red/better-react-native-debugging-with-reactotron-in-flipper-6b823af29220?source=collection_home---4------11-----------------------"
													data-action="open-post"
													data-action-value="https://shift.infinite.red/better-react-native-debugging-with-reactotron-in-flipper-6b823af29220?source=collection_home---4------11-----------------------"
													className="u-block u-xs-height170 u-height172 u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-borderLighter"
													style={{
														backgroundImage:
															'url("https://cdn-images-1.medium.com/max/400/1*1KOgr01EobiZbmVkGKD6sQ.jpeg")',
														backgroundPosition: '50% 50% !important',
													}}
												>
													<span className="u-textScreenReader">
														Better React Native Debugging with Reactotron in Flipper
													</span>
												</a>
											</div>
											<div className="col u-xs-marginBottom10 u-paddingLeft0 u-paddingRight0 u-paddingTop15 u-marginBottom30">
												<a
													className
													href="https://shift.infinite.red/better-react-native-debugging-with-reactotron-in-flipper-6b823af29220?source=collection_home---4------11-----------------------"
													data-action-source="collection_home---4------11-----------------------"
													data-post-id="6b823af29220"
												>
													<h3 className="u-contentSansBold u-lineHeightTightest u-xs-fontSize24 u-paddingBottom2 u-paddingTop5 u-fontSize32">
														<div className="u-letterSpacingTight u-lineHeightTighter u-breakWord u-textOverflowEllipsis u-lineClamp3 u-fontSize24">
															Better React Native Debugging with Reactotron
															in&nbsp;Flipper
														</div>
													</h3>
													<div className="u-contentSansThin u-lineHeightBaseSans u-fontSize24 u-xs-fontSize18 u-textColorNormal u-baseColor--textNormal">
														<div className="u-fontSize18 u-letterSpacingTight u-lineHeightTight u-marginTop7 u-textColorNormal u-baseColor--textNormal">
															React Native debugging can be done with Flipper and with
															Reactotron. But why not&nbsp;…&nbsp;both?
														</div>
													</div>
												</a>
												<div className="u-clearfix u-marginTop20">
													<div className="u-flexCenter">
														<div className="postMetaInline-avatar u-flex0">
															<a
																className="link u-baseColor--link avatar"
																href="https://shift.infinite.red/@jamonholmgren"
																data-action="show-user-card"
																data-action-value="4a1ccb16af26"
																data-action-type="hover"
																data-user-id="4a1ccb16af26"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																<img
																	src="https://cdn-images-1.medium.com/fit/c/36/36/1*YKPVVMQyo5AbHSlpq2TPGw.jpeg"
																	className="avatar-image u-size36x36 u-xs-size32x32"
																	alt="Go to the profile of Jamon Holmgren"
																/>
															</a>
														</div>
														<div className="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
															<a
																className="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
																href="https://shift.infinite.red/@jamonholmgren"
																data-action="show-user-card"
																data-action-value="4a1ccb16af26"
																data-action-type="hover"
																data-user-id="4a1ccb16af26"
																data-collection-slug="infinite-red"
																dir="auto"
															>
																Jamon Holmgren
															</a>
															<div className="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
																<time dateTime="2020-04-14T18:48:05.696Z">
																	Apr 14, 2020
																</time>
																<span className="middotDivider u-fontSize12" />
																<span className="readingTime" title="4 min read" />
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
						<style
							className="js-collectionStyle"
							dangerouslySetInnerHTML={{
								__html:
									'\n.u-accentColor--borderLight {border-color: #E83535 !important;}\n.u-accentColor--borderNormal {border-color: #E83535 !important;}\n.u-accentColor--borderDark {border-color: #C43431 !important;}\n.u-accentColor--iconLight .svgIcon,.u-accentColor--iconLight.svgIcon {fill: #E83535 !important;}\n.u-accentColor--iconNormal .svgIcon,.u-accentColor--iconNormal.svgIcon {fill: #E83535 !important;}\n.u-accentColor--iconDark .svgIcon,.u-accentColor--iconDark.svgIcon {fill: #C43431 !important;}\n.u-accentColor--textNormal {color: #C43431 !important;}\n.u-accentColor--hoverTextNormal:hover {color: #C43431 !important;}\n.u-accentColor--textNormal.u-accentColor--textDarken:hover {color: #B3332F !important;}\n.u-accentColor--textDark {color: #B3332F !important;}\n.u-accentColor--backgroundLight {background-color: #E83535 !important;}\n.u-accentColor--backgroundNormal {background-color: #E83535 !important;}\n.u-accentColor--backgroundDark {background-color: #C43431 !important;}\n.u-accentColor--buttonDark {border-color: #C43431 !important; color: #B3332F !important;}\n.u-accentColor--buttonDark:hover {border-color: #B3332F !important;}\n.u-accentColor--buttonDark .icon:before,.u-accentColor--buttonDark .svgIcon{color: #C43431 !important; fill: #C43431 !important;}\n.u-accentColor--buttonNormal:not(.clapButton--largePill) {border-color: #E83535 !important; color: #C43431 !important;}\n.u-accentColor--buttonNormal:hover {border-color: #C43431 !important;}\n.u-accentColor--buttonNormal .icon:before,.u-accentColor--buttonNormal .svgIcon{color: #E83535 !important; fill: #E83535 !important;}\n.u-accentColor--buttonNormal.button--filled .icon:before,.u-accentColor--buttonNormal.button--filled .svgIcon{color: rgba(255, 255, 255, 1) !important; fill: rgba(255, 255, 255, 1) !important;}\n.u-accentColor--buttonDark.button--filled,.u-accentColor--buttonDark.button--withChrome.is-active,.u-accentColor--fillWhenActive.is-active {background-color: #C43431 !important; border-color: #C43431 !important; color: rgba(255, 255, 255, 1) !important; fill: rgba(255, 255, 255, 1) !important;}\n.u-accentColor--buttonNormal.button--filled:not(.clapButton--largePill),.u-accentColor--buttonNormal.button--withChrome.is-active:not(.clapButton--largePill) {background-color: #E83535 !important; border-color: #E83535 !important; color: rgba(255, 255, 255, 1) !important; fill: rgba(255, 255, 255, 1) !important;}\n.postArticle.is-withAccentColors .markup--user,.postArticle.is-withAccentColors .markup--query {color: #C43431 !important;}.u-tintBgColor {background-color: rgba(233, 54, 54, 1) !important;}.u-tintBgColor .u-fadeLeft:before {background-image: linear-gradient(to right, rgba(233, 54, 54, 1) 0%, rgba(233, 54, 54, 0) 100%) !important;}.u-tintBgColor .u-fadeRight:after {background-image: linear-gradient(to right, rgba(233, 54, 54, 0) 0%, rgba(233, 54, 54, 1) 100%) !important;}\n.u-tintSpectrum .u-baseColor--borderLight {border-color: #FF988C !important;}\n.u-tintSpectrum .u-baseColor--borderNormal {border-color: #FFBBB0 !important;}\n.u-tintSpectrum .u-baseColor--borderDark {border-color: #FFDDD4 !important;}\n.u-tintSpectrum .u-baseColor--iconLight .svgIcon,.u-tintSpectrum .u-baseColor--iconLight.svgIcon {fill: #FF988C !important;}\n.u-tintSpectrum .u-baseColor--iconNormal .svgIcon,.u-tintSpectrum .u-baseColor--iconNormal.svgIcon {fill: #FFBBB0 !important;}\n.u-tintSpectrum .u-baseColor--iconDark .svgIcon,.u-tintSpectrum .u-baseColor--iconDark.svgIcon {fill: #FFDDD4 !important;}\n.u-tintSpectrum .u-baseColor--textNormal {color: #FFBBB0 !important;}\n.u-tintSpectrum .u-baseColor--textNormal.u-baseColor--textDarken:hover {color: #FFEEE7 !important;}\n.u-tintSpectrum .u-baseColor--textDark {color: #FFEEE7 !important;}\n.u-tintSpectrum .u-baseColor--textDarker {color: #FFEEE7 !important;}\n.u-tintSpectrum .u-baseColor--backgroundLight {background-color: #FF988C !important;}\n.u-tintSpectrum .u-baseColor--backgroundNormal {background-color: #FFBBB0 !important;}\n.u-tintSpectrum .u-baseColor--backgroundDark {background-color: #FFDDD4 !important;}\n.u-tintSpectrum .u-baseColor--buttonLight {border-color: #FF988C !important; color: #FF988C !important;}\n.u-tintSpectrum .u-baseColor--buttonLight:hover {border-color: #FF988C !important;}\n.u-tintSpectrum .u-baseColor--buttonLight .icon:before,.u-tintSpectrum .u-baseColor--buttonLight .svgIcon {color: #FF988C !important; fill: #FF988C !important;}\n.u-tintSpectrum .u-baseColor--buttonDark {border-color: #FFDDD4 !important; color: #FFEEE7 !important;}\n.u-tintSpectrum .u-baseColor--buttonDark:hover {border-color: #FFEEE7 !important;}\n.u-tintSpectrum .u-baseColor--buttonDark .icon:before,.u-tintSpectrum .u-baseColor--buttonDark .svgIcon {color: #FFDDD4 !important; fill: #FFDDD4 !important;}\n.u-tintSpectrum .u-baseColor--buttonNormal {border-color: #FFBBB0 !important; color: #FFBBB0 !important;}\n.u-tintSpectrum .u-baseColor--buttonNormal:hover {border-color: #FFDDD4 !important;}\n.u-tintSpectrum .u-baseColor--buttonNormal .icon:before,.u-tintSpectrum .u-baseColor--buttonNormal .svgIcon {color: #FFBBB0 !important; fill: #FFBBB0 !important;}\n.u-tintSpectrum .u-baseColor--buttonDark.button--filled,.u-tintSpectrum .u-baseColor--buttonDark.button--withChrome.is-active {background-color: #FFDDD4 !important; border-color: #FFDDD4 !important; color: rgba(233, 54, 54, 1) !important; fill: rgba(233, 54, 54, 1) !important;}\n.u-tintSpectrum .u-baseColor--buttonNormal.button--filled,.u-tintSpectrum .u-baseColor--buttonNormal.button--withChrome.is-active {background-color: #FFBBB0 !important; border-color: #FFBBB0 !important; color: rgba(233, 54, 54, 1) !important; fill: rgba(233, 54, 54, 1) !important;}\n.u-tintSpectrum .u-baseColor--link {color: #FFBBB0 !important;}\n.u-tintSpectrum .u-baseColor--link.link--darkenOnHover:hover {color: #FFEEE7 !important;}\n.u-tintSpectrum .u-baseColor--link.link--darken:hover,.u-tintSpectrum .u-baseColor--link.link--darken:focus,.u-tintSpectrum .u-baseColor--link.link--darken:active {color: #FFEEE7 !important;}\n.u-tintSpectrum .u-baseColor--link.link--dark {color: #FFEEE7 !important;}\n.u-tintSpectrum .u-baseColor--link.link--dark.link--darken:hover,.u-tintSpectrum .u-baseColor--link.link--dark.link--darken:focus,.u-tintSpectrum .u-baseColor--link.link--dark.link--darken:active {color: #FFEEE7 !important;}\n.u-tintSpectrum .u-baseColor--link.link--darker {color: #FFEEE7 !important;}\n.u-tintSpectrum .u-baseColor--placeholderNormal ::-webkit-input-placeholder {color: #FF988C;}\n.u-tintSpectrum .u-baseColor--placeholderNormal ::-moz-placeholder {color: #FF988C;}\n.u-tintSpectrum .u-baseColor--placeholderNormal :-ms-input-placeholder {color: #FF988C;}\n.u-tintSpectrum .svgIcon--logoWordmark {stroke: none !important; fill: #FFEEE7 !important;}\n.u-tintSpectrum .svgIcon--logoMonogram {stroke: none !important; fill: #FFEEE7 !important;}\n.u-tintSpectrum  .ui-h1,.u-tintSpectrum  .ui-h2,.u-tintSpectrum  .ui-h3,.u-tintSpectrum  .ui-h4,.u-tintSpectrum  .ui-brand1,.u-tintSpectrum  .ui-brand2,.u-tintSpectrum  .ui-captionStrong {color: #FFEEE7 !important; fill: #FFEEE7 !important;}\n.u-tintSpectrum  .ui-body,.u-tintSpectrum  .ui-caps {color: #FFEEE7 !important; fill: #FFEEE7 !important;}\n.u-tintSpectrum  .ui-summary,.u-tintSpectrum  .ui-caption {color: #FF988C !important; fill: #FF988C !important;}\n.u-tintSpectrum .u-accentColor--borderLight {border-color: #FF988C !important;}\n.u-tintSpectrum .u-accentColor--borderNormal {border-color: #FFBBB0 !important;}\n.u-tintSpectrum .u-accentColor--borderDark {border-color: #FFDDD4 !important;}\n.u-tintSpectrum .u-accentColor--iconLight .svgIcon,.u-tintSpectrum .u-accentColor--iconLight.svgIcon {fill: #FF988C !important;}\n.u-tintSpectrum .u-accentColor--iconNormal .svgIcon,.u-tintSpectrum .u-accentColor--iconNormal.svgIcon {fill: #FFBBB0 !important;}\n.u-tintSpectrum .u-accentColor--iconDark .svgIcon,.u-tintSpectrum .u-accentColor--iconDark.svgIcon {fill: #FFDDD4 !important;}\n.u-tintSpectrum .u-accentColor--textNormal {color: #FFBBB0 !important;}\n.u-tintSpectrum .u-accentColor--hoverTextNormal:hover {color: #FFBBB0 !important;}\n.u-tintSpectrum .u-accentColor--textNormal.u-accentColor--textDarken:hover {color: #FFEEE7 !important;}\n.u-tintSpectrum .u-accentColor--textDark {color: #FFEEE7 !important;}\n.u-tintSpectrum .u-accentColor--backgroundLight {background-color: #FF988C !important;}\n.u-tintSpectrum .u-accentColor--backgroundNormal {background-color: #FFBBB0 !important;}\n.u-tintSpectrum .u-accentColor--backgroundDark {background-color: #FFDDD4 !important;}\n.u-tintSpectrum .u-accentColor--buttonDark {border-color: #FFDDD4 !important; color: #FFEEE7 !important;}\n.u-tintSpectrum .u-accentColor--buttonDark:hover {border-color: #FFEEE7 !important;}\n.u-tintSpectrum .u-accentColor--buttonDark .icon:before,.u-tintSpectrum .u-accentColor--buttonDark .svgIcon{color: #FFDDD4 !important; fill: #FFDDD4 !important;}\n.u-tintSpectrum .u-accentColor--buttonNormal:not(.clapButton--largePill) {border-color: #FFBBB0 !important; color: #FFBBB0 !important;}\n.u-tintSpectrum .u-accentColor--buttonNormal:hover {border-color: #FFDDD4 !important;}\n.u-tintSpectrum .u-accentColor--buttonNormal .icon:before,.u-tintSpectrum .u-accentColor--buttonNormal .svgIcon{color: #FFBBB0 !important; fill: #FFBBB0 !important;}\n.u-tintSpectrum .u-accentColor--buttonNormal.button--filled .icon:before,.u-tintSpectrum .u-accentColor--buttonNormal.button--filled .svgIcon{color: rgba(233, 54, 54, 1) !important; fill: rgba(233, 54, 54, 1) !important;}\n.u-tintSpectrum .u-accentColor--buttonDark.button--filled,.u-tintSpectrum .u-accentColor--buttonDark.button--withChrome.is-active,.u-tintSpectrum .u-accentColor--fillWhenActive.is-active {background-color: #FFDDD4 !important; border-color: #FFDDD4 !important; color: rgba(233, 54, 54, 1) !important; fill: rgba(233, 54, 54, 1) !important;}\n.u-tintSpectrum .u-accentColor--buttonNormal.button--filled:not(.clapButton--largePill),.u-tintSpectrum .u-accentColor--buttonNormal.button--withChrome.is-active:not(.clapButton--largePill) {background-color: #FFBBB0 !important; border-color: #FFBBB0 !important; color: rgba(233, 54, 54, 1) !important; fill: rgba(233, 54, 54, 1) !important;}\n.u-tintSpectrum .postArticle.is-withAccentColors .markup--user,.u-tintSpectrum .postArticle.is-withAccentColors .markup--query {color: #FFBBB0 !important;}\n.u-accentColor--highlightFaint {background-color: rgba(255, 216, 207, 1) !important;}\n.u-accentColor--highlightStrong.is-active .svgIcon {fill: rgba(255, 162, 148, 1) !important;}\n.postArticle.is-withAccentColors .markup--quote.is-other {background-color: rgba(255, 216, 207, 1) !important;}\nbody.is-withMagicUnderlines .postArticle.is-withAccentColors .markup--quote.is-other {background-color: transparent !important; background-image: linear-gradient(to bottom, rgba(255, 216, 207, 1), rgba(255, 216, 207, 1));}\n.postArticle.is-withAccentColors .markup--quote.is-me {background-color: rgba(255, 187, 174, 1) !important;}\nbody.is-withMagicUnderlines .postArticle.is-withAccentColors .markup--quote.is-me {background-color: transparent !important; background-image: linear-gradient(to bottom, rgba(255, 187, 174, 1), rgba(255, 187, 174, 1));}\n.postArticle.is-withAccentColors .markup--quote.is-targeted {background-color: rgba(255, 162, 148, 1) !important;}\nbody.is-withMagicUnderlines .postArticle.is-withAccentColors .markup--quote.is-targeted {background-color: transparent !important; background-image: linear-gradient(to bottom, rgba(255, 162, 148, 1), rgba(255, 162, 148, 1));}\n.postArticle.is-withAccentColors .markup--quote.is-selected {background-color: rgba(255, 162, 148, 1) !important;}\nbody.is-withMagicUnderlines .postArticle.is-withAccentColors .markup--quote.is-selected {background-color: transparent !important; background-image: linear-gradient(to bottom, rgba(255, 162, 148, 1), rgba(255, 162, 148, 1));}\n.postArticle.is-withAccentColors .markup--highlight {background-color: rgba(255, 162, 148, 1) !important;}\nbody.is-withMagicUnderlines .postArticle.is-withAccentColors .markup--highlight {background-color: transparent !important; background-image: linear-gradient(to bottom, rgba(255, 162, 148, 1), rgba(255, 162, 148, 1));}.u-baseColor--iconNormal.avatar-halo {fill: rgba(0, 0, 0, 0.4980392156862745) !important;}',
							}}
						/>
						<style
							className="js-collectionStyleConstant"
							dangerouslySetInnerHTML={{
								__html:
									'.u-imageBgColor {background-color: rgba(0, 0, 0, 0.24705882352941178);}\n.u-imageSpectrum .u-baseColor--borderLight {border-color: rgba(255, 255, 255, 0.6980392156862745) !important;}\n.u-imageSpectrum .u-baseColor--borderNormal {border-color: rgba(255, 255, 255, 0.8980392156862745) !important;}\n.u-imageSpectrum .u-baseColor--borderDark {border-color: rgba(255, 255, 255, 0.9490196078431372) !important;}\n.u-imageSpectrum .u-baseColor--iconLight .svgIcon,.u-imageSpectrum .u-baseColor--iconLight.svgIcon {fill: rgba(255, 255, 255, 0.8) !important;}\n.u-imageSpectrum .u-baseColor--iconNormal .svgIcon,.u-imageSpectrum .u-baseColor--iconNormal.svgIcon {fill: rgba(255, 255, 255, 0.9490196078431372) !important;}\n.u-imageSpectrum .u-baseColor--iconDark .svgIcon,.u-imageSpectrum .u-baseColor--iconDark.svgIcon {fill: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-baseColor--textNormal {color: rgba(255, 255, 255, 0.9490196078431372) !important;}\n.u-imageSpectrum .u-baseColor--textNormal.u-baseColor--textDarken:hover {color: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-baseColor--textDark {color: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-baseColor--textDarker {color: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-baseColor--backgroundLight {background-color: rgba(255, 255, 255, 0.8980392156862745) !important;}\n.u-imageSpectrum .u-baseColor--backgroundNormal {background-color: rgba(255, 255, 255, 0.9490196078431372) !important;}\n.u-imageSpectrum .u-baseColor--backgroundDark {background-color: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-baseColor--buttonLight {border-color: rgba(255, 255, 255, 0.6980392156862745) !important; color: rgba(255, 255, 255, 0.8) !important;}\n.u-imageSpectrum .u-baseColor--buttonLight:hover {border-color: rgba(255, 255, 255, 0.6980392156862745) !important;}\n.u-imageSpectrum .u-baseColor--buttonLight .icon:before,.u-imageSpectrum .u-baseColor--buttonLight .svgIcon {color: rgba(255, 255, 255, 0.8) !important; fill: rgba(255, 255, 255, 0.8) !important;}\n.u-imageSpectrum .u-baseColor--buttonDark {border-color: rgba(255, 255, 255, 0.9490196078431372) !important; color: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-baseColor--buttonDark:hover {border-color: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-baseColor--buttonDark .icon:before,.u-imageSpectrum .u-baseColor--buttonDark .svgIcon {color: rgba(255, 255, 255, 1) !important; fill: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-baseColor--buttonNormal {border-color: rgba(255, 255, 255, 0.8980392156862745) !important; color: rgba(255, 255, 255, 0.9490196078431372) !important;}\n.u-imageSpectrum .u-baseColor--buttonNormal:hover {border-color: rgba(255, 255, 255, 0.9490196078431372) !important;}\n.u-imageSpectrum .u-baseColor--buttonNormal .icon:before,.u-imageSpectrum .u-baseColor--buttonNormal .svgIcon {color: rgba(255, 255, 255, 0.9490196078431372) !important; fill: rgba(255, 255, 255, 0.9490196078431372) !important;}\n.u-imageSpectrum .u-baseColor--buttonDark.button--filled,.u-imageSpectrum .u-baseColor--buttonDark.button--withChrome.is-active {background-color: rgba(255, 255, 255, 1) !important; border-color: rgba(255, 255, 255, 1) !important; color: rgba(0, 0, 0, 0.24705882352941178) !important; fill: rgba(0, 0, 0, 0.24705882352941178) !important;}\n.u-imageSpectrum .u-baseColor--buttonNormal.button--filled,.u-imageSpectrum .u-baseColor--buttonNormal.button--withChrome.is-active {background-color: rgba(255, 255, 255, 0.9490196078431372) !important; border-color: rgba(255, 255, 255, 0.9490196078431372) !important; color: rgba(0, 0, 0, 0.24705882352941178) !important; fill: rgba(0, 0, 0, 0.24705882352941178) !important;}\n.u-imageSpectrum .u-baseColor--link {color: rgba(255, 255, 255, 0.9490196078431372) !important;}\n.u-imageSpectrum .u-baseColor--link.link--darkenOnHover:hover {color: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-baseColor--link.link--darken:hover,.u-imageSpectrum .u-baseColor--link.link--darken:focus,.u-imageSpectrum .u-baseColor--link.link--darken:active {color: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-baseColor--link.link--dark {color: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-baseColor--link.link--dark.link--darken:hover,.u-imageSpectrum .u-baseColor--link.link--dark.link--darken:focus,.u-imageSpectrum .u-baseColor--link.link--dark.link--darken:active {color: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-baseColor--link.link--darker {color: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-baseColor--placeholderNormal ::-webkit-input-placeholder {color: rgba(255, 255, 255, 0.8);}\n.u-imageSpectrum .u-baseColor--placeholderNormal ::-moz-placeholder {color: rgba(255, 255, 255, 0.8);}\n.u-imageSpectrum .u-baseColor--placeholderNormal :-ms-input-placeholder {color: rgba(255, 255, 255, 0.8);}\n.u-imageSpectrum .svgIcon--logoWordmark {stroke: none !important; fill: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .svgIcon--logoMonogram {stroke: none !important; fill: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum  .ui-h1,.u-imageSpectrum  .ui-h2,.u-imageSpectrum  .ui-h3,.u-imageSpectrum  .ui-h4,.u-imageSpectrum  .ui-brand1,.u-imageSpectrum  .ui-brand2,.u-imageSpectrum  .ui-captionStrong {color: rgba(255, 255, 255, 1) !important; fill: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum  .ui-body,.u-imageSpectrum  .ui-caps {color: rgba(255, 255, 255, 1) !important; fill: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum  .ui-summary,.u-imageSpectrum  .ui-caption {color: rgba(255, 255, 255, 0.8) !important; fill: rgba(255, 255, 255, 0.8) !important;}\n.u-imageSpectrum .u-accentColor--borderLight {border-color: rgba(255, 255, 255, 0.6980392156862745) !important;}\n.u-imageSpectrum .u-accentColor--borderNormal {border-color: rgba(255, 255, 255, 0.8980392156862745) !important;}\n.u-imageSpectrum .u-accentColor--borderDark {border-color: rgba(255, 255, 255, 0.9490196078431372) !important;}\n.u-imageSpectrum .u-accentColor--iconLight .svgIcon,.u-imageSpectrum .u-accentColor--iconLight.svgIcon {fill: rgba(255, 255, 255, 0.8) !important;}\n.u-imageSpectrum .u-accentColor--iconNormal .svgIcon,.u-imageSpectrum .u-accentColor--iconNormal.svgIcon {fill: rgba(255, 255, 255, 0.9490196078431372) !important;}\n.u-imageSpectrum .u-accentColor--iconDark .svgIcon,.u-imageSpectrum .u-accentColor--iconDark.svgIcon {fill: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-accentColor--textNormal {color: rgba(255, 255, 255, 0.9490196078431372) !important;}\n.u-imageSpectrum .u-accentColor--hoverTextNormal:hover {color: rgba(255, 255, 255, 0.9490196078431372) !important;}\n.u-imageSpectrum .u-accentColor--textNormal.u-accentColor--textDarken:hover {color: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-accentColor--textDark {color: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-accentColor--backgroundLight {background-color: rgba(255, 255, 255, 0.8980392156862745) !important;}\n.u-imageSpectrum .u-accentColor--backgroundNormal {background-color: rgba(255, 255, 255, 0.9490196078431372) !important;}\n.u-imageSpectrum .u-accentColor--backgroundDark {background-color: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-accentColor--buttonDark {border-color: rgba(255, 255, 255, 0.9490196078431372) !important; color: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-accentColor--buttonDark:hover {border-color: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-accentColor--buttonDark .icon:before,.u-imageSpectrum .u-accentColor--buttonDark .svgIcon{color: rgba(255, 255, 255, 1) !important; fill: rgba(255, 255, 255, 1) !important;}\n.u-imageSpectrum .u-accentColor--buttonNormal:not(.clapButton--largePill) {border-color: rgba(255, 255, 255, 0.8980392156862745) !important; color: rgba(255, 255, 255, 0.9490196078431372) !important;}\n.u-imageSpectrum .u-accentColor--buttonNormal:hover {border-color: rgba(255, 255, 255, 0.9490196078431372) !important;}\n.u-imageSpectrum .u-accentColor--buttonNormal .icon:before,.u-imageSpectrum .u-accentColor--buttonNormal .svgIcon{color: rgba(255, 255, 255, 0.9490196078431372) !important; fill: rgba(255, 255, 255, 0.9490196078431372) !important;}\n.u-imageSpectrum .u-accentColor--buttonNormal.button--filled .icon:before,.u-imageSpectrum .u-accentColor--buttonNormal.button--filled .svgIcon{color: rgba(0, 0, 0, 0.24705882352941178) !important; fill: rgba(0, 0, 0, 0.24705882352941178) !important;}\n.u-imageSpectrum .u-accentColor--buttonDark.button--filled,.u-imageSpectrum .u-accentColor--buttonDark.button--withChrome.is-active,.u-imageSpectrum .u-accentColor--fillWhenActive.is-active {background-color: rgba(255, 255, 255, 1) !important; border-color: rgba(255, 255, 255, 1) !important; color: rgba(0, 0, 0, 0.24705882352941178) !important; fill: rgba(0, 0, 0, 0.24705882352941178) !important;}\n.u-imageSpectrum .u-accentColor--buttonNormal.button--filled:not(.clapButton--largePill),.u-imageSpectrum .u-accentColor--buttonNormal.button--withChrome.is-active:not(.clapButton--largePill) {background-color: rgba(255, 255, 255, 0.9490196078431372) !important; border-color: rgba(255, 255, 255, 0.9490196078431372) !important; color: rgba(0, 0, 0, 0.24705882352941178) !important; fill: rgba(0, 0, 0, 0.24705882352941178) !important;}\n.u-imageSpectrum .postArticle.is-withAccentColors .markup--user,.u-imageSpectrum .postArticle.is-withAccentColors .markup--query {color: rgba(255, 255, 255, 0.9490196078431372) !important;}\n.u-imageSpectrum .u-accentColor--highlightFaint {background-color: rgba(255, 255, 255, 0.2) !important;}\n.u-imageSpectrum .u-accentColor--highlightStrong.is-active .svgIcon {fill: rgba(255, 255, 255, 0.6) !important;}\n.postArticle.is-withAccentColors .u-imageSpectrum .markup--quote.is-other {background-color: rgba(255, 255, 255, 0.2) !important;}\nbody.is-withMagicUnderlines .postArticle.is-withAccentColors .u-imageSpectrum .markup--quote.is-other {background-color: transparent !important; background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));}\n.postArticle.is-withAccentColors .u-imageSpectrum .markup--quote.is-me {background-color: rgba(255, 255, 255, 0.4) !important;}\nbody.is-withMagicUnderlines .postArticle.is-withAccentColors .u-imageSpectrum .markup--quote.is-me {background-color: transparent !important; background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));}\n.postArticle.is-withAccentColors .u-imageSpectrum .markup--quote.is-targeted {background-color: rgba(255, 255, 255, 0.6) !important;}\nbody.is-withMagicUnderlines .postArticle.is-withAccentColors .u-imageSpectrum .markup--quote.is-targeted {background-color: transparent !important; background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6));}\n.postArticle.is-withAccentColors .u-imageSpectrum .markup--quote.is-selected {background-color: rgba(255, 255, 255, 0.6) !important;}\nbody.is-withMagicUnderlines .postArticle.is-withAccentColors .u-imageSpectrum .markup--quote.is-selected {background-color: transparent !important; background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6));}\n.postArticle.is-withAccentColors .u-imageSpectrum .markup--highlight {background-color: rgba(255, 255, 255, 0.6) !important;}\nbody.is-withMagicUnderlines .postArticle.is-withAccentColors .u-imageSpectrum .markup--highlight {background-color: transparent !important; background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6));}.u-resetSpectrum .u-tintBgColor {background-color: rgba(255, 255, 255, 1) !important;}.u-resetSpectrum .u-tintBgColor .u-fadeLeft:before {background-image: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%) !important;}.u-resetSpectrum .u-tintBgColor .u-fadeRight:after {background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%) !important;}\n.u-resetSpectrum .u-baseColor--borderLight {border-color: rgba(0, 0, 0, 0.2980392156862745) !important;}\n.u-resetSpectrum .u-baseColor--borderNormal {border-color: rgba(0, 0, 0, 0.4980392156862745) !important;}\n.u-resetSpectrum .u-baseColor--borderDark {border-color: rgba(0, 0, 0, 0.6) !important;}\n.u-resetSpectrum .u-baseColor--iconLight .svgIcon,.u-resetSpectrum .u-baseColor--iconLight.svgIcon {fill: rgba(0, 0, 0, 0.2980392156862745) !important;}\n.u-resetSpectrum .u-baseColor--iconNormal .svgIcon,.u-resetSpectrum .u-baseColor--iconNormal.svgIcon {fill: rgba(0, 0, 0, 0.4980392156862745) !important;}\n.u-resetSpectrum .u-baseColor--iconDark .svgIcon,.u-resetSpectrum .u-baseColor--iconDark.svgIcon {fill: rgba(0, 0, 0, 0.6) !important;}\n.u-resetSpectrum .u-baseColor--textNormal {color: rgba(0, 0, 0, 0.4980392156862745) !important;}\n.u-resetSpectrum .u-baseColor--textNormal.u-baseColor--textDarken:hover {color: rgba(0, 0, 0, 0.6) !important;}\n.u-resetSpectrum .u-baseColor--textDark {color: rgba(0, 0, 0, 0.6) !important;}\n.u-resetSpectrum .u-baseColor--textDarker {color: rgba(0, 0, 0, 0.8) !important;}\n.u-resetSpectrum .u-baseColor--backgroundLight {background-color: rgba(0, 0, 0, 0.09803921568627451) !important;}\n.u-resetSpectrum .u-baseColor--backgroundNormal {background-color: rgba(0, 0, 0, 0.2) !important;}\n.u-resetSpectrum .u-baseColor--backgroundDark {background-color: rgba(0, 0, 0, 0.2980392156862745) !important;}\n.u-resetSpectrum .u-baseColor--buttonLight {border-color: rgba(0, 0, 0, 0.2980392156862745) !important; color: rgba(0, 0, 0, 0.2980392156862745) !important;}\n.u-resetSpectrum .u-baseColor--buttonLight:hover {border-color: rgba(0, 0, 0, 0.2980392156862745) !important;}\n.u-resetSpectrum .u-baseColor--buttonLight .icon:before,.u-resetSpectrum .u-baseColor--buttonLight .svgIcon {color: rgba(0, 0, 0, 0.2980392156862745) !important; fill: rgba(0, 0, 0, 0.2980392156862745) !important;}\n.u-resetSpectrum .u-baseColor--buttonDark {border-color: rgba(0, 0, 0, 0.6) !important; color: rgba(0, 0, 0, 0.6) !important;}\n.u-resetSpectrum .u-baseColor--buttonDark:hover {border-color: rgba(0, 0, 0, 0.8) !important;}\n.u-resetSpectrum .u-baseColor--buttonDark .icon:before,.u-resetSpectrum .u-baseColor--buttonDark .svgIcon {color: rgba(0, 0, 0, 0.6) !important; fill: rgba(0, 0, 0, 0.6) !important;}\n.u-resetSpectrum .u-baseColor--buttonNormal {border-color: rgba(0, 0, 0, 0.4980392156862745) !important; color: rgba(0, 0, 0, 0.4980392156862745) !important;}\n.u-resetSpectrum .u-baseColor--buttonNormal:hover {border-color: rgba(0, 0, 0, 0.6) !important;}\n.u-resetSpectrum .u-baseColor--buttonNormal .icon:before,.u-resetSpectrum .u-baseColor--buttonNormal .svgIcon {color: rgba(0, 0, 0, 0.4980392156862745) !important; fill: rgba(0, 0, 0, 0.4980392156862745) !important;}\n.u-resetSpectrum .u-baseColor--buttonDark.button--filled,.u-resetSpectrum .u-baseColor--buttonDark.button--withChrome.is-active {background-color: rgba(0, 0, 0, 0.2980392156862745) !important; border-color: rgba(0, 0, 0, 0.2980392156862745) !important; color: rgba(255, 255, 255, 1) !important; fill: rgba(255, 255, 255, 1) !important;}\n.u-resetSpectrum .u-baseColor--buttonNormal.button--filled,.u-resetSpectrum .u-baseColor--buttonNormal.button--withChrome.is-active {background-color: rgba(0, 0, 0, 0.2) !important; border-color: rgba(0, 0, 0, 0.2) !important; color: rgba(255, 255, 255, 1) !important; fill: rgba(255, 255, 255, 1) !important;}\n.u-resetSpectrum .u-baseColor--link {color: rgba(0, 0, 0, 0.4980392156862745) !important;}\n.u-resetSpectrum .u-baseColor--link.link--darkenOnHover:hover {color: rgba(0, 0, 0, 0.6) !important;}\n.u-resetSpectrum .u-baseColor--link.link--darken:hover,.u-resetSpectrum .u-baseColor--link.link--darken:focus,.u-resetSpectrum .u-baseColor--link.link--darken:active {color: rgba(0, 0, 0, 0.6) !important;}\n.u-resetSpectrum .u-baseColor--link.link--dark {color: rgba(0, 0, 0, 0.6) !important;}\n.u-resetSpectrum .u-baseColor--link.link--dark.link--darken:hover,.u-resetSpectrum .u-baseColor--link.link--dark.link--darken:focus,.u-resetSpectrum .u-baseColor--link.link--dark.link--darken:active {color: rgba(0, 0, 0, 0.8) !important;}\n.u-resetSpectrum .u-baseColor--link.link--darker {color: rgba(0, 0, 0, 0.8) !important;}\n.u-resetSpectrum .u-baseColor--placeholderNormal ::-webkit-input-placeholder {color: rgba(0, 0, 0, 0.2980392156862745);}\n.u-resetSpectrum .u-baseColor--placeholderNormal ::-moz-placeholder {color: rgba(0, 0, 0, 0.2980392156862745);}\n.u-resetSpectrum .u-baseColor--placeholderNormal :-ms-input-placeholder {color: rgba(0, 0, 0, 0.2980392156862745);}\n.u-resetSpectrum .svgIcon--logoWordmark {stroke: none !important; fill: rgba(0, 0, 0, 0.6) !important;}\n.u-resetSpectrum .svgIcon--logoMonogram {stroke: none !important; fill: rgba(0, 0, 0, 0.6) !important;}\n.u-resetSpectrum  .ui-h1,.u-resetSpectrum  .ui-h2,.u-resetSpectrum  .ui-h3,.u-resetSpectrum  .ui-h4,.u-resetSpectrum  .ui-brand1,.u-resetSpectrum  .ui-brand2,.u-resetSpectrum  .ui-captionStrong {color: rgba(0, 0, 0, 0.8) !important; fill: rgba(0, 0, 0, 0.8) !important;}\n.u-resetSpectrum  .ui-body,.u-resetSpectrum  .ui-caps {color: rgba(0, 0, 0, 0.6) !important; fill: rgba(0, 0, 0, 0.6) !important;}\n.u-resetSpectrum  .ui-summary,.u-resetSpectrum  .ui-caption {color: rgba(0, 0, 0, 0.2980392156862745) !important; fill: rgba(0, 0, 0, 0.2980392156862745) !important;}\n.u-resetSpectrum .u-accentColor--borderLight {border-color: rgba(2, 184, 117, 1) !important;}\n.u-resetSpectrum .u-accentColor--borderNormal {border-color: rgba(2, 184, 117, 1) !important;}\n.u-resetSpectrum .u-accentColor--borderDark {border-color: rgba(0, 171, 107, 1) !important;}\n.u-resetSpectrum .u-accentColor--iconLight .svgIcon,.u-resetSpectrum .u-accentColor--iconLight.svgIcon {fill: rgba(2, 184, 117, 1) !important;}\n.u-resetSpectrum .u-accentColor--iconNormal .svgIcon,.u-resetSpectrum .u-accentColor--iconNormal.svgIcon {fill: rgba(0, 171, 107, 1) !important;}\n.u-resetSpectrum .u-accentColor--iconDark .svgIcon,.u-resetSpectrum .u-accentColor--iconDark.svgIcon {fill: rgba(28, 153, 99, 1) !important;}\n.u-resetSpectrum .u-accentColor--textNormal {color: rgba(0, 171, 107, 1) !important;}\n.u-resetSpectrum .u-accentColor--hoverTextNormal:hover {color: rgba(0, 171, 107, 1) !important;}\n.u-resetSpectrum .u-accentColor--textNormal.u-accentColor--textDarken:hover {color: rgba(28, 153, 99, 1) !important;}\n.u-resetSpectrum .u-accentColor--textDark {color: rgba(28, 153, 99, 1) !important;}\n.u-resetSpectrum .u-accentColor--backgroundLight {background-color: rgba(2, 184, 117, 1) !important;}\n.u-resetSpectrum .u-accentColor--backgroundNormal {background-color: rgba(0, 171, 107, 1) !important;}\n.u-resetSpectrum .u-accentColor--backgroundDark {background-color: rgba(28, 153, 99, 1) !important;}\n.u-resetSpectrum .u-accentColor--buttonDark {border-color: rgba(0, 171, 107, 1) !important; color: rgba(28, 153, 99, 1) !important;}\n.u-resetSpectrum .u-accentColor--buttonDark:hover {border-color: rgba(28, 153, 99, 1) !important;}\n.u-resetSpectrum .u-accentColor--buttonDark .icon:before,.u-resetSpectrum .u-accentColor--buttonDark .svgIcon{color: rgba(28, 153, 99, 1) !important; fill: rgba(28, 153, 99, 1) !important;}\n.u-resetSpectrum .u-accentColor--buttonNormal:not(.clapButton--largePill) {border-color: rgba(2, 184, 117, 1) !important; color: rgba(0, 171, 107, 1) !important;}\n.u-resetSpectrum .u-accentColor--buttonNormal:hover {border-color: rgba(0, 171, 107, 1) !important;}\n.u-resetSpectrum .u-accentColor--buttonNormal .icon:before,.u-resetSpectrum .u-accentColor--buttonNormal .svgIcon{color: rgba(0, 171, 107, 1) !important; fill: rgba(0, 171, 107, 1) !important;}\n.u-resetSpectrum .u-accentColor--buttonNormal.button--filled .icon:before,.u-resetSpectrum .u-accentColor--buttonNormal.button--filled .svgIcon{color: rgba(255, 255, 255, 1) !important; fill: rgba(255, 255, 255, 1) !important;}\n.u-resetSpectrum .u-accentColor--buttonDark.button--filled,.u-resetSpectrum .u-accentColor--buttonDark.button--withChrome.is-active,.u-resetSpectrum .u-accentColor--fillWhenActive.is-active {background-color: rgba(28, 153, 99, 1) !important; border-color: rgba(28, 153, 99, 1) !important; color: rgba(255, 255, 255, 1) !important; fill: rgba(255, 255, 255, 1) !important;}\n.u-resetSpectrum .u-accentColor--buttonNormal.button--filled:not(.clapButton--largePill),.u-resetSpectrum .u-accentColor--buttonNormal.button--withChrome.is-active:not(.clapButton--largePill) {background-color: rgba(0, 171, 107, 1) !important; border-color: rgba(0, 171, 107, 1) !important; color: rgba(255, 255, 255, 1) !important; fill: rgba(255, 255, 255, 1) !important;}\n.u-resetSpectrum .postArticle.is-withAccentColors .markup--user,.u-resetSpectrum .postArticle.is-withAccentColors .markup--query {color: rgba(0, 171, 107, 1) !important;}',
							}}
						/>
						<div className="js-collectionFooter u-tintBgColor u-hide">
							<div className="container u-maxWidth1040">
								<div className="u-marginTop10 u-paddingTop10 u-paddingBottom30 u-tintSpectrum">
									<div className="linkSet u-clearfix">
										<div className="u-floatRight u-textColorNormal u-baseColor--textNormal u-xs-floatLeft">
											<a
												className="button button--chromeless u-baseColor--buttonNormal u-marginLeft15 u-lineHeight35 u-xs-block u-xs-marginLeft0"
												href="https://shift.infinite.red/about"
												title="About Red Shift"
												aria-label="About Red Shift"
												data-collection-slug="infinite-red"
											>
												About Red Shift
											</a>
											<span className="middotDivider u-xs-hide" />
											<a
												className="button button--chromeless u-baseColor--buttonNormal u-lineHeight35 u-xs-block"
												href="https://shift.infinite.red/latest"
												title="Latest Stories for Red Shift"
												aria-label="Latest Stories for Red Shift"
												data-collection-slug="infinite-red"
											>
												Latest Stories
											</a>
											<span className="middotDivider u-xs-hide" />
											<a
												className="button button--chromeless u-baseColor--buttonNormal u-lineHeight35 u-xs-block"
												href="https://shift.infinite.red/archive"
												title="Archive for Red Shift"
												aria-label="Archive for Red Shift"
												data-collection-slug="infinite-red"
											>
												Archive
											</a>
											<span className="middotDivider u-xs-hide" />
											<a
												className="button button--chromeless u-baseColor--buttonNormal u-lineHeight35 u-xs-block"
												href="https://medium.com/about"
											>
												About Medium
											</a>
											<span className="middotDivider u-xs-hide" />
											<a
												className="button button--chromeless u-baseColor--buttonNormal u-lineHeight35 u-xs-block"
												href="https://policy.medium.com/medium-terms-of-service-9db0094a1e0f"
											>
												Terms
											</a>
											<span className="middotDivider u-xs-hide" />
											<a
												className="button button--chromeless u-baseColor--buttonNormal u-lineHeight35 u-xs-block"
												href="https://policy.medium.com/medium-privacy-policy-f03bf92035c9"
											>
												Privacy
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="loadingBar" />
			<div className="surface-scrollOverlay" />
		</>
	);
};
export default Blog;
