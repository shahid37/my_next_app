import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
	componentDidMount() {
		console.log('22222222222222222componentDidMountcomponentDidMount');
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll(event) {
		let scrollTop = event.srcElement.body.scrollTop,
			itemTranslate = Math.min(0, scrollTop / 3 - 60);
		console.log('????');
		this.setState({
			transform: itemTranslate,
		});
	}

	render() {
		return (
			<Html>
				<Head>
					<link href="/fonts" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
