import PageLayout from './components/pageLayout';
import axios from 'axios';
import { constants } from '../constants';

export const getStaticProps = async () => {
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

const App = ({ portfolio, error }) => {
	return (
		<PageLayout>
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
							{[1, 2, 3].map((element) => (
								<>
									<div
										role="listitem"
										className="clients-featured__collection__item w-dyn-item w-col w-col-4"
									>
										<div
											style={{
												backgroundImage:
													'url(https://assets.website-files.com/5e696c156810060ef59d768e/5e696ca86810061d659d79a8_microsoft.png)',
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
													'url(https://assets.website-files.com/5e696c156810060ef59d768e/5e696d25681006100a9d7acc_bluejeans.png)',
											}}
											className="clients-featured__collection__item__img"
										/>
									</div>
								</>
							))}
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
									<a href="/reactNative" className="cta-capabilities__tech__link w-inline-block">
										<img
											src="https://assets.website-files.com/5e696c156810060ef59d768e/5e700a6fbfeebf79fe21790f_s-react-native.svg"
											alt="React Native"
											className="capabilities__icon"
										/>
										<h5 className="h5--link">React Native</h5>
									</a>
								</div>
								<div role="listitem" className="capabilities__collection__item w-dyn-item">
									<a href="/design" className="cta-capabilities__tech__link w-inline-block">
										<img
											src="https://assets.website-files.com/5e696c156810060ef59d768e/5e700a2cff2c95d8c91c588a_s-design.svg"
											alt="Design"
											className="capabilities__icon"
										/>
										<h5 className="h5--link">Design</h5>
									</a>
								</div>
								<div role="listitem" className="capabilities__collection__item w-dyn-item">
									<a href="/website" className="cta-capabilities__tech__link w-inline-block">
										<img
											src="https://assets.website-files.com/5e696c156810060ef59d768e/5e700a4e5ff238eb00682bb1_s-react-js.svg"
											alt="ReactJS"
											className="capabilities__icon"
										/>
										<h5 className="h5--link">ReactJS</h5>
									</a>
								</div>
								<div role="listitem" className="capabilities__collection__item w-dyn-item">
									<a href="ruby" className="cta-capabilities__tech__link w-inline-block">
										<img
											src="https://assets.website-files.com/5e696c156810060ef59d768e/5e700a4208830f673ff1e946_s-ruby.svg"
											alt="Ruby on Rails"
											className="capabilities__icon"
										/>
										<h5 className="h5--link">Ruby on Rails</h5>
									</a>
								</div>
								<div role="listitem" className="capabilities__collection__item w-dyn-item">
									<a href="mobileAppsIos" className="cta-capabilities__tech__link w-inline-block">
										<img
											src="https://assets.website-files.com/5e696c156810060ef59d768e/5e700a0f067b43914cd50ff6_s-ios.svg"
											alt="iOS"
											className="capabilities__icon"
										/>
										<h5 className="h5--link">iOS</h5>
									</a>
								</div>
								<div role="listitem" className="capabilities__collection__item w-dyn-item">
									<a href="mobileAppsIos" className="cta-capabilities__tech__link w-inline-block">
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
								{[1, 2, 3, 4, 5, 6, 7, 8].map((element) => (
									<div
										role="listitem"
										className="client-list__collection__item w-dyn-item w-col w-col-4"
									>
										<a
											style={{ backgroundImage: 'none' }}
											href="https://cr.infinite.red/"
											className="client-list__collection__item__img w-inline-block w-condition-invisible"
										/>
										<a
											style={{
												backgroundImage:
													'url(https://assets.website-files.com/5e696c156810060ef59d768e/5e696e83157c8c24846f4964_chain%20react.png)',
											}}
											href="https://cr.infinite.red/"
											className="client-list__collection__item__img w-inline-block"
										/>
									</div>
								))}
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
												backgroundImage: 'url(/5f8914a7175a715314e3ab88_sellebrate-header.jpg)',
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
								{portfolio.map((element) => (
									<div
										role="listitem"
										className="work-list__cards__collection__item w-dyn-item w-col w-col-4"
									>
										<a
											data-w-id="9faa8e80-2410-9c49-9a18-e82ce5a556e7"
											href={element.data.portfolio.app_link.value.url}
											className="project__card w-inline-block"
										>
											<div
												style={{
													backgroundImage: `url(${element.data.portfolio.image.value.main.url})`,
												}}
												className="work-list__project__card__img"
											/>
											<div className="work-list__project__card__info">
												<h4>{element.data.portfolio.app_name.value[0].text}</h4>
												<div className="work-list__slider__title__categories">
													{element.data.portfolio.app_type.value[0].text === 'web_app'
														? 'Web'
														: 'Mobile'}
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
								))}
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
		</PageLayout>
	);
};

export default App;
