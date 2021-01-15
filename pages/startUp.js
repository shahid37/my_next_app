import PageLayout from './components/pageLayout';

const StartUp = () => {
	return (
		<PageLayout textColor={'rgb(76, 62, 84)'} menuColor={'rgba(255, 255, 255, 0.96)'}>
			<div className="hero-illustration">
				<div className="container">
					<div className="hero-illustration__flex">
						<div className="hero-illustration__img-container">
							<div className="hero-illustration__img" />
						</div>
						<div className="hero-illustration__content">
							<div className="hero-illustration__headings">
								<h1>
									Design It.
									<br />
									Pitch It. Fund It.
								</h1>
								<p>
									Building a company is hard. Unless you’re an experienced founder, funding a company
									can feel downright impossible. Built specifically for entrepreneurs, the Startup
									Package will help you pitch your app to investors and maximize your chance of
									getting funded.
								</p>
							</div>
							<div className="hero-illustration__ul">
								<h4>In a few short weeks, you'll have:</h4>
								<ul role="list">
									<li>
										<div>
											Clearly defined user personas based on market research and actual user
											testing
										</div>
									</li>
									<li>
										<div>Complete visual design and UX for your app</div>
									</li>
									<li>
										<div>An interactive, demo-ready mockup to show off to investors</div>
									</li>
									<li>
										<div>A polished, professional pitch deck</div>
									</li>
									<li>
										<div>
											Everything you need to build an MVP, including detailed system architecture,
											development timeline and cost estimate
										</div>
									</li>
								</ul>
							</div>
							<a href="/contact" className="bttn w-button">
								Let's Do This
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="banner"></div>
			<div className="grid-3-col">
				<div className="container">
					<h2 className="p--center">Why the Startup Package?</h2>
					<div className="grid-3-col__flex">
						<div className="grid-3-col__container">
							<div className="grid-3-col__icon grid-3-col__icon__insights" />
							<h4>Insights you can use</h4>
							<p>
								We won’t just make a good-looking prototype (though we’ll do that, too!). Our talented
								designers and UI experts will help you understand your users, validate your idea and
								help you achieve product-market fit.
							</p>
						</div>
						<div className="grid-3-col__container">
							<div className="grid-3-col__icon grid-3-col__icon__pitching" />
							<h4>Help pitching &amp;&nbsp;presenting</h4>
							<p>
								The Startup Package includes an interactive prototype that’s clickable and ready to
								pitch to investors, along with a complete pitch deck to help you sell your vision and an
								estimate for what it all costs to build.
							</p>
						</div>
						<div className="grid-3-col__container">
							<div className="grid-3-col__icon grid-3-col__icon__experience" />
							<h4>Industry experience</h4>
							<p>
								We’ll leverage our extensive knowledge and connections to teach you more about the world
								of startups and venture capital. Where relevant, we’ll even introduce you to advisors
								and VCs in our network!
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="section-intro">
				<div className="container">
					<div className="section-intro">
						<h2>The Startup Package Process</h2>
					</div>
				</div>
			</div>
			<div className="row-img">
				<div className="container">
					<div className="row-img__flex">
						<div className="row-img__img-container__img img__research" />
						<div className="row-img__content">
							<div className="row-img__content__icon icon__research" />
							<h3>Phase 1: User Research and Testing</h3>
							<p>
								First, we’ll get clear on your goals, product idea and target market. Then we’ll dive
								into user research, including tests with actual users in your target market, to define
								clear user personas, as well as what they’d expect in a minimum viable product.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row-img">
				<div className="container">
					<div className="row-img__flex row-img__flex--left">
						<div className="row-img__img-container__img row-img__img--right" />
						<div className="row-img__content">
							<div className="row-img__content__icon icon__design-iteration" />
							<h3>Phase 2: Design and Iterate</h3>
							<p>
								With an eye toward your intended customers and industry, we’ll identify your UX goals
								and requirements and create visual designs that are functional, attractive, and
								user-friendly. It’s a highly iterative process, and we’ll involve you at every step.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row-img">
				<div className="container">
					<div className="row-img__flex">
						<div className="row-img__img-container__img img__prototype" />
						<div className="row-img__content">
							<div className="row-img__content__icon icon__research" />
							<h3>Phase 3: Prototype</h3>
							<p>
								Once the design process is complete, we’ll create an interactive, clickable and tappable
								mockup of your app that’s ready to demo to VCs. Why tell potential investors your
								concept when you can show them?
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="row-img row-img__last">
				<div className="container">
					<div className="row-img__flex row-img__flex--left">
						<div className="row-img__img-container__img row-img__img--right img__presentation" />
						<div className="row-img__content">
							<div className="row-img__content__icon icon__design-iteration" />
							<h3>Phase 4: Presentation &amp; Specs</h3>
							<p>
								Last but not least, you’ll get a polished pitch deck that shows off your vision and
								makes it easier to pitch your idea. We’ll also include a detailed system architecture
								and cost estimate so you know exactly what it will take to build your app.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="work-slider bg-gray">
				<div className="container">
					<div className="section-intro">
						<h2>Some of our recent work</h2>
					</div>
					<div
						data-animation="slide"
						data-duration={500}
						data-infinite={1}
						className="work-list__slider w-slider"
					>
						<div className="work-list__slider__mask w-slider-mask">
							<div className="work-list__slider__slide1 w-slide">
								<div className="w-dyn-list">
									<div role="list" className="w-dyn-items">
										<div role="listitem" className="w-dyn-item">
											<a
												style={{
													backgroundImage:
														'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5e6feaa8ee168a8849fe09fb_hero.html)',
												}}
												// href="work/docibr.html"
												className="work-list__slider__img w-inline-block"
											>
												<div className="work-list__slider__title">
													<h5 className="h5--reversed">Docibr</h5>
													<h2 className="h2--reversed">Improving the Career Journey</h2>
													<div className="work-list__slider__title__categories">
														<h5 className="h5--reversed">Web</h5>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="w-slide">
								<div className="w-dyn-list">
									<div role="list" className="w-dyn-items">
										<div role="listitem" className="w-dyn-item">
											<a
												style={{
													backgroundImage:
														'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5eab7129508a3b81ffa80eb6_hero-fortis.html)',
												}}
												href="work/fortis-riders.html"
												className="work-list__slider__img w-inline-block"
											>
												<div className="work-list__slider__title">
													<h5 className="h5--reversed">Fortis Riders</h5>
													<h2 className="h2--reversed">Designing a first class experience</h2>
													<div className="work-list__slider__title__categories">
														<h5 className="h5--reversed">Android&nbsp; |&nbsp; iOS</h5>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="w-slide">
								<div className="w-dyn-list">
									<div role="list" className="w-dyn-items">
										<div role="listitem" className="w-dyn-item">
											<a
												style={{
													backgroundImage:
														'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5eab6e3c32e6ce52b0b969e7_hero-elemeno.html)',
												}}
												href="work/elemeno.html"
												className="work-list__slider__img w-inline-block"
											>
												<div className="work-list__slider__title">
													<h5 className="h5--reversed">Elemeno</h5>
													<h2 className="h2--reversed">
														Making healthcare fun for providers
													</h2>
													<div className="work-list__slider__title__categories">
														<h5 className="h5--reversed">
															Web&nbsp; |&nbsp; Android&nbsp; | iOS
														</h5>
													</div>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="w-slide">
								<div className="w-dyn-list">
									<div role="list" className="w-dyn-items">
										<div role="listitem" className="w-dyn-item">
											<a
												style={{
													backgroundImage:
														'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5f8914a7175a715314e3ab88_sellebrate-header.html)',
												}}
												href="work/sellebrate.html"
												className="work-list__slider__img w-inline-block"
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
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="slider__bttn-prev w-slider-arrow-left">
							<img
								src="https://assets.website-files.com/5b6342b08baf64a24c057c53/5b68adcc6abb9588b830727b_circle-arrow-left.svg"
								alt
							/>
						</div>
						<div className="slider__bttn-next w-slider-arrow-right">
							<img
								src="https://assets.website-files.com/5b6342b08baf64a24c057c53/5b68adcc0bedee7530debc80_circle-arrow-right.svg"
								alt
							/>
						</div>
						<div className="work-list__slider__nav w-slider-nav w-round" />
					</div>
					<div className="testimonial__quote testimonial__quote-work-slider">
						<div className="w-dyn-list">
							<div role="list" className="w-dyn-items">
								<div role="listitem" className="testimonial__collection__item w-dyn-item">
									<p className="p--quote">
										“The team at Infinite Red brought me from an idea, to reality. They worked with
										me and added a unique perspective to my project and created something beyond
										what I had imagined. They took the time to listen to what I needed and quickly
										made it something beautiful and cohesive! My experience with this design team
										was unparalleled!”
									</p>
									<div className="testimonial__client">
										<div
											style={{ backgroundImage: 'none' }}
											className="testimonial__img w-condition-invisible"
										/>
										<h4 className="testimonial__collection__item__name">Deby Aho</h4>
										<h6 className="testimonail__collection__item__title">Sellebrate</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			<div className="faq">
				<div className="container">
					<div className="section-intro">
						<h2>Have more questions?</h2>
					</div>
					<div className="faq__container">
						<div className="faq__flex">
							<div className="faq__question-container">
								<div className="faq__question-icon" />
								<div className="faq__question-content">
									<h4>Have you actually helped companies secure funding?</h4>
									<p>
										Yes! We’ve had multiple companies work with us on the initial concept, secure
										funding for their app, and then return to us for development. When that happens,
										it’s the best feeling in the world (in case you’re wondering).
									</p>
								</div>
							</div>
							<div className="faq__question-container">
								<div className="faq__question-icon" />
								<div className="faq__question-content">
									<h4>
										I found someone who can build me an entire app for $10k. Why should I work with
										you?
									</h4>
									<p>
										Getting funded is about more than having the technology. It’s about
										product-market fit. It’s about understanding your market and potential growth
										trajectory. It’s about learning how to sell your vision. And frankly, it’s about
										who you know. We provide all of that and more.
									</p>
								</div>
							</div>
						</div>
						<div className="faq__flex">
							<div className="faq__question-container">
								<div className="faq__question-icon" />
								<div className="faq__question-content">
									<h4>What's the typical timeframe?</h4>
									<p>
										Our turn-around for the Startup Package is typically 6-8 weeks, depending on the
										budget and time you have to invest.
									</p>
								</div>
							</div>
							<div className="faq__question-container">
								<div className="faq__question-icon" />
								<div className="faq__question-content">
									<h4>What if I want the app fully developed?</h4>
									<p>
										Infinite Red has a full team of developers to support your app from beginning to
										end. After your Startup Package is complete, we will provide a quote for full
										development.
									</p>
								</div>
							</div>
						</div>
						<div className="faq__flex">
							<div className="faq__question-container">
								<div className="faq__question-icon" />
								<div className="faq__question-content">
									<h4>I've already started. Is the startup package still right for me?</h4>
									<p>
										Absolutely! Wherever your project is currently on the timeline, we can help. We
										have worked with brands at all different stages of the startup process.
									</p>
								</div>
							</div>
							<div className="faq__question-container">
								<div className="faq__question-icon" />
								<div className="faq__question-content">
									<h4>I'm nervous. Can you help with that?</h4>
									<p>
										Entrepreneurship can certainly be daunting. You don't have to do it alone—we've
										got your back.
									</p>
								</div>
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
					<a href="/contact" className="bttn bttn--outlined w-button">
						Contact us
					</a>
				</div>
			</div>
		</PageLayout>
	);
};
export default StartUp;
