import { getProductDetailsAPI } from './api';
import PageLayout from './components/pageLayout';

export async function getServerSideProps(context) {
	const response = await getProductDetailsAPI({ id: context.query.id });
	console.log(response, 'llllllllllllllllll');
	return {
		props: { productId: context.query.id, product: response },
	};
}

const ProductDetail = ({ product, productId }) => {
	return (
		<PageLayout>
			<div
				style={{
					backgroundImage: `url(${product.data.portfolio.image.value.main.url})`,
					// 'url("https://assets.website-files.com/5e696c156810060ef59d768e/5e6fecd408830f01d8f1297b_slider-img.jpg")',
				}}
				className="hero-project"
			>
				<div className="container">
					<div className="hero-project__title">
						<h1 className="h1--reversed">{product.data.portfolio.app_name.value[0].text}</h1>
						{product.data.portfolio.short_description ? (
							<h3 className="h3--reversed">{product.data.portfolio.short_description.value[0].text}</h3>
						) : (
							<h2>None</h2>
						)}
					</div>
				</div>
			</div>
			<div className="project-overview">
				<div className="container">
					<div className="project-overview__flex">
						<div className="project-overview__specs">
							<img
								// src="https://assets.website-files.com/5e696c156810060ef59d768e/5e6fd30639a59734dc598b06_logo-arcade-city.png"
								src={product.data.portfolio.app_icon.value.main.url}
								className="project-overview__specs__logo"
							/>
							<div>
								<h4
									style={{
										height: '10vh',
										justifyContent: 'center',
										display: 'flex',
										alignSelf: 'center',
										marginRight: 50,
										marginTop: 10,
									}}
								>
									{product.data.portfolio.app_name.value[0].text}
								</h4>
							</div>
							<div className="project-overview__specs__expertise">
								<h5>Project Services</h5>
								<div className="w-dyn-list">
									<div role="list" className="specs__collection__list w-dyn-items">
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs">Branding</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs">UI</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs">UX</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs">Backend Architecture</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs">Development</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">React Native</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">iOS</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">Android</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">Phoenix</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">Blockchain</p>
										</div>
									</div>
								</div>
							</div>
							<div className="project-overview__specs__platforms">
								<h5>Platforms</h5>
								<div className="w-dyn-list">
									<div role="list" className="specs__collection__list w-dyn-items">
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">Branding</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">UI</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">UX</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">
												Backend Architecture
											</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">Development</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">React Native</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs">iOS</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs">Android</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">Phoenix</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">Blockchain</p>
										</div>
									</div>
								</div>
							</div>
							<div className="project-overview__specs__tech">
								<h5>Technology</h5>
								<div className="w-dyn-list">
									<div role="list" className="specs__collection__list w-dyn-items">
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">Branding</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">UI</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">UX</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">
												Backend Architecture
											</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">Development</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs">React Native</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">iOS</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs w-condition-invisible">Android</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs">Phoenix</p>
										</div>
										<div role="listitem" className="specs__collection__item w-dyn-item">
											<p className="p--project-specs">Blockchain</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="project-overview__intro">
							{product.data.portfolio.heading ? (
								<h2>{product.data.portfolio.heading.value[0].text}</h2>
							) : (
								<h2>None</h2>
							)}
							{product.data.portfolio.description ? (
								<div className="p--project w-richtext">
									<p>{product.data.portfolio.description.value[0].text}</p>
								</div>
							) : (
								<h2>None</h2>
							)}
						</div>
					</div>
				</div>
			</div>
			<div
				style={{
					backgroundImage:
						'url(https://infinite.red/work/"https://assets.website-files.com/5e696c156810060ef59d768e/5e6fcf8514a08b9af8359a69_ac__lg-grid-img1.jpg")',
				}}
				className="project-img-lg img-lg--contain"
			/>

			<div className="bottom-cta">
				<div className="container">
					<div className="bottom-cta__intro">
						<h2 className="h2--crimson">Let's do this thing</h2>
						<p className="p--center">
							Ready to get to work? We’re your experts, your muscle, and your partner in building an
							impactful and professional product.
						</p>
					</div>
					<a href="../contact" className="bttn bttn--outlined w-button">
						Contact us
					</a>
				</div>
			</div>
		</PageLayout>
	);
};

export default ProductDetail;
