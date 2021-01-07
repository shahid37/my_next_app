import PageLayout from './components/pageLayout';

const MobileApps = () => {
	return (
		<PageLayout>
			<div className="hero-sub hero-img--apps">
				<div className="container">
					<div className="hero-sub__content">
						<h5 className="h5--reversed">Mobile &amp;&nbsp;Apps</h5>
						<h1 className="h1--reversed">We craft each app to achieve clear objectives and goals.</h1>
					</div>
				</div>
			</div>
			<div className="sub-intro bg--gray-light">
				<div className="container">
					<div className="section-intro">
						<h2>A better way of building apps</h2>
						<p className="p--large">
							Great apps need the expertise of a multi-disciplinary team. They work together–from planning
							to implementation. Our process puts our strategists, designers, and developers to work
							side-by-side on your project. They’ll solve the unique challenges your app poses and uncover
							ways to make it even better than you imagined.
						</p>
					</div>
				</div>
			</div>
			<div className="mobile-process">
				<div className="container-full">
					<div className="mobile-process__steps">
						<div className="mobile-process__step">
							<h2 className="mobile-proces__step__title">01</h2>
							<h5 className="h5--opacity">Research &amp;&nbsp;Plan</h5>
							<p>
								Just like building a house, we start with architecture. Together, we’ll find the most
								effective solution to your unique business challenges.
							</p>
						</div>
						<div className="mobile-process__step">
							<h2 className="mobile-proces__step__title">02</h2>
							<h5 className="h5--opacity">Prototype &amp; design</h5>
							<p>
								A clickable, interactive prototype tests assumptions. It also ensures your app will be
								intuitive, easy to use, and meets your users’ needs.
							</p>
						</div>
						<div className="mobile-process__step">
							<h2 className="mobile-proces__step__title">03</h2>
							<h5 className="h5--opacity">Engineer &amp; develop</h5>
							<p>
								After you’ve approved the final high-fidelity design, our team gets to work solving the
								technical puzzles needed to bring your app to life.
							</p>
						</div>
						<div className="mobile-process__step">
							<h2 className="mobile-proces__step__title">04</h2>
							<h5 className="h5--opacity">Test &amp; Deploy</h5>
							<p>
								Our engineering team thoroughly tests the code and eliminates any problems. They also
								oversee deployment for a smooth launch.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mobile-about">
				<div className="container">
					<div className="section-intro">
						<h2>Reduce risk, maximize impact</h2>
						<p className="p--large">
							We’re more than just designers and technologists. We’re also business partners. We’ll help
							you weigh options, make recommendations, and achieve maximum results with your budget.
							Whatever your market, we can help you reach goals and set you apart from your competition.
						</p>
					</div>
					<div className="mobile-about__overview">
						<div className="mobile-about__overview__content__row">
							<h3>The best apps are game changers</h3>
							<p>
								Great apps have the potential to disrupt markets, multiply productivity, reduce costs or
								even go viral. But they can also go terribly wrong. The truth is that any worthwhile
								project will have unforeseen challenges to overcome, pitfalls to avoid, and wrong
								assumptions to be righted. This is where we are at our best. We have the knowledge and
								skills to help you mitigate risk, make smart trade-offs, and get the maximum value for
								your budget.
							</p>
						</div>
						<div className="mobile-about__overview__content__row">
							<h3>How much will it cost?</h3>
							<p>
								Every project involves unique technical challenges and unknowns. At the start of a
								project, we know the least about it, so any estimates will be rough. Instead of trying
								to set a fixed price and fixed scope, we help our clients answer, "What should I budget
								to have enough resources to succeed?”. Once we have a ballpark idea on the budget, we
								can adjust the scope in either breadth or depth, incorporating new knowledge and ideas
								as we get deeper into the project.
							</p>
						</div>
					</div>
					<a href="contact.html" className="bttn bttn--outlined w-button">
						Work with us
					</a>
				</div>
			</div>
			<div className="services-open-source">
				<div className="container">
					<div className="section-intro">
						<h2 className="h2--reversed">Reduce risk, maximize impact</h2>
						<p className="p--large p--reversed">
							We’re more than just designers and technologists. We’re also business partners. We’ll help
							you weigh options, make recommendations, and achieve maximum results with your budget.
							Whatever your market, we can help you reach goals and set you apart from your competition.
						</p>
					</div>
					<div className="services-open-source__projects">
						<div className="open-source__cards">
							<a
								data-w-id="00b82b2e-fcbd-a4bc-940c-ca3976970010"
								href="https://github.com/infinitered/ignite"
								target="_blank"
								className="cta__card w-inline-block"
							>
								<div className="cta__card__img">
									<img
										src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e753462d0097c5229f0d3b5_ignite-logo.svg"
										alt="Ignite logo "
										className="cta-card__img"
									/>
								</div>
								<div className="cta__card__content">
									<h4 className="heading">Ignite</h4>
									<p>
										The ideal starting app for React Native, best practices, generators, and more.
									</p>
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
								data-w-id="00b82b2e-fcbd-a4bc-940c-ca397697001c"
								href="https://github.com/infinitered/reactotron"
								target="_blank"
								className="cta__card w-inline-block"
							>
								<div className="cta__card__img">
									<img
										src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e75380f34e76c4a5eaeb46b_reactotron-logo.svg"
										alt="Reactotron logo "
										className="cta-card__img"
									/>
								</div>
								<div className="cta__card__content">
									<h4 className="heading">Reactotron</h4>
									<p>Have a peek inside your React Native and ReactJS apps.</p>
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
						</div>
						<a
							href="https://github.com/infinitered"
							target="_blank"
							className="bttn bttn--outlined bttn--outlined-reversed w-button"
						>
							View all projects on Github
						</a>
					</div>
					<div className="services-open-source__community">
						<div className="services-open-source__community__content">
							<h3 className="h3--reversed">Organizers of the React Native conference, Chain React</h3>
							<p className="p--reversed">
								Chain React: The React Native Conference consists of multiple talks on React Native
								given by mobile software engineers at Facebook, AirBnB, and others, on a variety of
								topics from beginner to expert level. Our first conference was a resounding success and
								we can't wait for next year!
							</p>
						</div>
						<div className="services-open-source__community__content">
							<h3 className="h3--reversed">#1 Newsletter in the React Native community</h3>
							<p className="p--reversed">
								PikesSoft curates the React Native Newsletter which has well over 10,000 subscribers and
								is the premier place for Reach Native news, articles, tutorials, announcements, and much
								more.
							</p>
						</div>
					</div>
					<a
						href="http://community.infinite.red"
						target="_blank"
						className="bttn bttn--outlined bttn--outlined-reversed w-button"
					>
						Join the Slack community
					</a>
				</div>
			</div>
			<div className="related-projects">
				<div className="container">
					<div className="related-projects__heading">
						<h5>More projects</h5>
					</div>
					<div className="projects__list__collection-wrapper w-dyn-list">
						<div role="list" className="projects__list__collection w-dyn-items w-row">
							<div role="listitem" className="projects__list__collection__item w-dyn-item w-col w-col-4">
								<a
									data-w-id="539ebcda-3656-0d97-b499-931a24208ec6"
									href="work/sellebrate.html"
									className="project__card w-inline-block"
								>
									<div
										style={{
											backgroundImage:
												'url(https://infinite.red/"https://assets.website-files.com/5e696c156810060ef59d768e/5f8915a4c60fdd56be9c9ca0_thumb-sellebrate.jpg")',
										}}
										className="work-list__project__card__img"
									/>
									<div className="work-list__project__card__info">
										<h4>Sellebrate</h4>
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
							<div role="listitem" className="projects__list__collection__item w-dyn-item w-col w-col-4">
								<a
									data-w-id="539ebcda-3656-0d97-b499-931a24208ec6"
									href="work/addis.html"
									className="project__card w-inline-block"
								>
									<div
										style={{
											backgroundImage:
												'url(https://infinite.red/"https://assets.website-files.com/5e696c156810060ef59d768e/5ebd8989e602c74456cc9237_tile-addis.jpg")',
										}}
										className="work-list__project__card__img"
									/>
									<div className="work-list__project__card__info">
										<h4>Addis</h4>
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
							<div role="listitem" className="projects__list__collection__item w-dyn-item w-col w-col-4">
								<a
									data-w-id="539ebcda-3656-0d97-b499-931a24208ec6"
									href="work/bukowskis-market.html"
									className="project__card w-inline-block"
								>
									<div
										style={{
											backgroundImage:
												'url(https://infinite.red/"https://assets.website-files.com/5e696c156810060ef59d768e/5ebd89a45fff683d750397ae_tile-bukowskis.jpg")',
										}}
										className="work-list__project__card__img"
									/>
									<div className="work-list__project__card__info">
										<h4>Bukowski's Market</h4>
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
export default MobileApps;
