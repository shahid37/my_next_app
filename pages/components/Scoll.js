import React from 'react';
import MenuButton from './menu';
import NavBar from './navebar';
import Link from 'next/link';

class MyDocument extends React.Component {
	constructor(props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this);
		this.myRef = React.createRef();
		this.state = {
			visible: false,
			route: null,
			headerColor: 'rgba(0, 0, 0, 0)',
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(event) {
		const top = window.pageYOffset || document.documentElement.scrollTop;
		if (top > 200) {
			this.setState({ headerColor: 'rgba(255, 255, 255, 0.96)' });
		} else {
			this.setState({ headerColor: 'rgba(0, 0, 0, 0)' });
		}
	}
	setValue = () => {
		this.setState({
			visible: !this.state.visible,
		});
		// setVisible(!visible);
	};

	render() {
		const { windowWidth } = this.props;
		const blueColor = 'nav__menu__link-mobile w-nav-link w--current w--nav-link-open';
		const blackColor = 'nav__menu__link-mobile w-nav-link w--nav-link-open';
		return (
			<div
				ref={this.myRef}
				// ref={this.myRef}
				// onScroll={this.onScroll}
			>
				<div
					data-collapse="medium"
					data-animation="over-right"
					data-duration={400}
					data-doc-height={1}
					data-no-scroll={1}
					data-w-id="48941a4f-8c15-7a61-3715-67421ac8b695"
					role="banner"
					className="nav w-nav"
					style={{ backgroundColor: this.state.headerColor, transition: 'opacity 200ms ease 0s' }}
				>
					{' '}
					{/* ::before */}
					<div className="nav__container">
						<a href="/" aria-current="page" className="nav__brand w-inline-block w--current">
							<div data-w-id="48941a4f-8c15-7a61-3715-67421ac8b698" className="html-embed w-embed">
								{/*?xml version="1.0" encoding="UTF-8"?*/}
								<img src={'./logo-dark.png'} />
							</div>
						</a>
						<NavBar headerColor={this.state.headerColor} />
						<MenuButton visible={this.state.visible} setValue={this.setValue} />
					</div>
					<div
						class="w-nav-overlay"
						data-wf-ignore=""
						id="w-nav-overlay-0"
						style={{
							display: this.state.visible ? 'block' : 'none',
							height: '10676px',
							// width: '440px',
							width: windowWidth,
							background: 'white',
						}}
					>
						<div
							style={{
								width: 25,
								position: 'relative',
								float: 'right',
								marginTop: 18,
								marginRight: 18,
								fontSize: '24px',
								cursor: 'pointer',
							}}
							onClick={() => {
								this.setValue();
							}}
						>
							<div
								data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6b9"
								className="nav-icon__bar--white"
								style={{
									transform:
										'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(135deg) skew(0deg, 0deg)',
									'background-color': '#4c3e54',
								}}
							></div>
							<div
								data-w-id="48941a4f-8c15-7a61-3715-67421ac8b6b9"
								className="nav-icon__bar--white"
								style={{
									transform:
										'translate3d(0px, -8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)',
									'background-color': '#4c3e54',
								}}
							></div>
						</div>
						<div style={{ clear: 'both', height: '100%' }}>
							<a
								href="/"
								aria-current="page"
								class={this.route == null ? blueColor : blackColor}
								data-ix="nav-link-hover"
								style={{ opacity: 1 }}
							>
								Home
							</a>
							<a
								href="/work"
								aria-current="page"
								class={this.route == 'work' ? blueColor : blackColor}
								data-ix="nav-link-hover"
								style={{ opacity: 1 }}
							>
								Work
							</a>
							<a
								href="/capabilities"
								aria-current="page"
								class={this.route == 'capabilities' ? blueColor : blackColor}
								data-ix="nav-link-hover"
								style={{ opacity: 1 }}
							>
								Capabilities
							</a>
							{/* <a
								href="/community"
								aria-current="page"
								class={this.route == 'community' ? blueColor : blackColor}
								data-ix="nav-link-hover"
								style={{ opacity: 1 }}
							>
								Community
							</a> */}
							{/* <a
							href="/company"
							aria-current="page"
							class={this.route == 'company' ? blueColor : blackColor}
							data-ix="nav-link-hover"
							style={{ opacity: 1 }}
						>
							Company
						</a> */}
							<Link
								href={{
									query: { data: this.props.data },
									pathname: '/company',
								}}
							>
								<a
									aria-current="page"
									class={this.route == 'company' ? blueColor : blackColor}
									data-ix="nav-link-hover"
									style={{ opacity: 1 }}
								>
									{'Company' || 'Unknown'}
								</a>
							</Link>
							<a
								href="/contact"
								aria-current="page"
								class={this.route == 'contact' ? blueColor : blackColor}
								data-ix="nav-link-hover"
								style={{ opacity: 1 }}
							>
								Contact
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MyDocument;
