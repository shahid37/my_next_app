const ProtfolioComp = (props) => {
	const { element } = props;
	// console.log(element, 'elementtttttttttttt');
	return (
		<>
			<div role="listitem" className="projects__list__collection__item w-dyn-item w-col w-col-4">
				<a
					data-w-id="fb77d157-3886-01b9-8c12-b748e44bba8c"
					// href="work/blendspace.html"
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
							<h5>{element.data.portfolio.app_type.value[0].text === 'web_app' ? 'Web' : 'Mobile'}</h5>
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
		</>
	);
};

export default ProtfolioComp;
