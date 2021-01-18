import { getProductDetailsAPI } from './api';
import PageLayout from './components/pageLayout';

export async function getServerSideProps(context) {
	const response = await getProductDetailsAPI({ id: context.query.id });
	// console.log(response.data.portfolio.project_services, 'llllllllllllllllll');
	return {
		props: { productId: context.query.id, product: response },
	};
}

const ProductDetail = ({ product, productId }) => {
	console.log(product);
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
						<h1 className="h1--reversed" style={{ color: 'black' }}>
							{product.data.portfolio.app_name.value[0].text}
						</h1>
						{product.data.portfolio.short_description ? (
							<h3 className="h3--reversed" style={{ color: 'black' }}>
								{product.data.portfolio.short_description.value[0].text}
							</h3>
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
								src={
									product.data.portfolio.app_icon
										? product.data.portfolio.app_icon.value.main.url
										: 'https://assets.website-files.com/5e696c156810060ef59d768e/5e6fd30639a59734dc598b06_logo-arcade-city.png'
								}
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
										{product.data.portfolio.project_services
											? product.data.portfolio.project_services.value.map((element) => (
													<div role="listitem" className="specs__collection__item w-dyn-item">
														<p className="p--project-specs">
															{element.service_name.value[0].text}
														</p>
													</div>
											  ))
											: ''}
									</div>
								</div>
							</div>
							<div className="project-overview__specs__platforms">
								<h5>Platforms</h5>
								<div className="w-dyn-list">
									<div role="list" className="specs__collection__list w-dyn-items">
										{product.data.portfolio.platforms
											? product.data.portfolio.platforms.value.map((element) => (
													<p className="p--project-specs">{element.platform.value[0].text}</p>
											  ))
											: ''}
									</div>
								</div>
							</div>
							<div className="project-overview__specs__tech">
								<h5>Technology</h5>
								<div className="w-dyn-list">
									<div role="list" className="specs__collection__list w-dyn-items">
										{product.data.portfolio.technology
											? product.data.portfolio.technology.value.map((element) => (
													<div role="listitem" className="specs__collection__item w-dyn-item">
														<p className="p--project-specs">
															{element.technology1.value[0].text}
														</p>
													</div>
											  ))
											: ''}
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
					// backgroundImage:
					backgroundImage: `url(${
						product.data.portfolio.second_image
							? product.data.portfolio.second_image.value.main.url
							: 'https://infinite.red/work/"https://assets.website-files.com/5e696c156810060ef59d768e/5e6fcf8514a08b9af8359a69_ac__lg-grid-img1.jpg'
					})`,
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
