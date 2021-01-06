import PageLayout from './components/pageLayout';

const Ruby = () => {
	return (
		<PageLayout>
			<div
				style={{
					backgroundImage:
						'url(https://infinite.red/technologies/"https://assets.website-files.com/5e696c156810060ef59d768e/5ea726ba95a4cd67e1fd2f69_ruby-hero.jpg")',
				}}
				className="hero-sub"
			>
				<div className="container">
					<div className="hero-sub__content">
						<img
							src="https://assets.website-files.com/5e696c156810060ef59d768e/5ea728cdb3d360af3ff81d22_ruby-icon.svg"
							alt="Ruby on Rails"
							className="her-sub__content__img"
						/>
						<img
							src="ruby-on-rails.html"
							alt
							className="her-sub__content__img w-condition-invisible w-dyn-bind-empty"
						/>
						<div className="hero-sub__sm-title">
							<h5 className="h5--reversed">Ruby on Rails</h5>
							<h5 className="h5--reversed sm-title--static">Development</h5>
						</div>
						<h1 className="h1--reversed">Building extraordinary websites and web apps.</h1>
					</div>
				</div>
			</div>
			<div className="sub-intro sub-intro--white">
				<div className="container">
					<div className="section-intro">
						<h2>World-Class Applications</h2>
					</div>
				</div>
			</div>
			<div className="overview-2-col">
				<div className="container">
					<div className="overview-2-col__flex">
						<div className="overview-2-col__img">
							<img
								height
								alt="Ruby on Rails"
								src="https://assets.website-files.com/5e696c156810060ef59d768e/5ea726e81d9f695f8642a227_rub-project-img.png"
								sizes="(max-width: 479px) 96vw, (max-width: 767px) 66vw, (max-width: 991px) 67vw, 41vw"
								srcSet="https://assets.website-files.com/5e696c156810060ef59d768e/5ea726e81d9f695f8642a227_rub-project-img-p-500.png 500w, https://assets.website-files.com/5e696c156810060ef59d768e/5ea726e81d9f695f8642a227_rub-project-img.png 1242w"
								className="overview-2-col__img__project"
							/>
						</div>
						<div className="overview-2-col__content">
							<div className="overview-2-col__content__block w-richtext">
								<p>
									Infinite Red developers have been creating web applications in Ruby on Rails since
									before version 1.0 was introduced. Our solid background in Ruby combined with our
									experience designing, developing, and deploying large scale web applications means
									that your Rails project will be in good hands.
								</p>
								<p>
									Rails is a great choice of platform for building smaller web applications. The speed
									of development is unparalleled and the ecosystem is still very healthy. We have 10+
									years of experience with scaling Rails and the ability to handle legacy Rails
									codebases. We are happy to support Rails projects from legacy Rails codebases to
									scaling issues.
								</p>
							</div>
							<a href="../contact.html" className="bttn bttn--outlined w-button">
								Start a Project
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="related-projects">
				<div className="container">
					<div className="related-projects__heading">
						<h5>Related Work</h5>
					</div>
					<div className="projects__list__collection-wrapper w-dyn-list">
						<div role="list" className="projects__list__collection w-dyn-items w-row">
							<div role="listitem" className="projects__list__collection__item w-dyn-item w-col w-col-4">
								<a
									data-w-id="46e585a2-d07e-b654-3845-2585f4e06db8"
									href="../work/sellebrate.html"
									className="project__card w-inline-block"
								>
									<div
										style={{
											backgroundImage:
												'url(https://infinite.red/technologies/"https://assets.website-files.com/5e696c156810060ef59d768e/5f8915a4c60fdd56be9c9ca0_thumb-sellebrate.jpg")',
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
									data-w-id="46e585a2-d07e-b654-3845-2585f4e06db8"
									href="../work/addis.html"
									className="project__card w-inline-block"
								>
									<div
										style={{
											backgroundImage:
												'url(https://infinite.red/technologies/"https://assets.website-files.com/5e696c156810060ef59d768e/5ebd8989e602c74456cc9237_tile-addis.jpg")',
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
									data-w-id="46e585a2-d07e-b654-3845-2585f4e06db8"
									href="../work/bukowskis-market.html"
									className="project__card w-inline-block"
								>
									<div
										style={{
											backgroundImage:
												'url(https://infinite.red/technologies/"https://assets.website-files.com/5e696c156810060ef59d768e/5ebd89a45fff683d750397ae_tile-bukowskis.jpg")',
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
					<a href="../contact.html" className="bttn bttn--outlined w-button">
						Contact us
					</a>
				</div>
			</div>
			{/*[if lte IE 9]><![endif]*/}
		</PageLayout>
	);
};

export default Ruby;
