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

const Work = ({ portfolio, error }) => {
	return (
		<PageLayout>
			<div className="hero-sub hero-img--work">
				<div className="container">
					<div className="hero-sub__content">
						<h1 className="h1--reversed">Our Work</h1>
						<p className="p--large p--reversed">
							Our company has teams working on multiple projects across all domains. &nbsp;Some of us are
							assisting external groups, and some of us are leading client ideas through design and
							development to a finished product.
						</p>
					</div>
				</div>
			</div>
			<div className="projects">
				<div className="section-intro-symbol">
					<h2>Some of the projects we've worked on</h2>
					<p className="p--large p--large__spacer--24">
						Out of the hundreds of clients we've worked with, we've captured a few case studies to share.
						&nbsp;Would you like to be our next one?
					</p>
					<a href="#" target="_blank" className="section-intro-link icon-link" />
				</div>
				<div className="container">
					<div className="projects__list__collection-wrapper w-dyn-list">
						<div role="list" className="projects__list__collection w-dyn-items w-row">
							{portfolio.map((element) => (
								<div
									role="listitem"
									className="projects__list__collection__item w-dyn-item w-col w-col-4"
								>
									<a
										data-w-id="fb77d157-3886-01b9-8c12-b748e44bba8c"
										// href="work/blendspace.html"
										// href={element.data.portfolio.app_link.value.url}
										href="/productDetails"
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
												<h5>
													{element.data.portfolio.app_type.value[0].text === 'web_app'
														? 'Web'
														: 'Mobile'}
												</h5>
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
								// <ProtfolioComp element={element} />
							))}
						</div>
					</div>
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
			<div className="container what-we-offer">
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
				<div className="p--center">
					<a href="capabilities.html" className="bttn bttn--outlined bttn--spacing-top-lg w-button">
						What we offer
					</a>
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
export default Work;
