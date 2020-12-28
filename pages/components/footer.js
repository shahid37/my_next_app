const Footer = (props) => {
	return (
		<div className="footer">
			<div className="footer__container">
				<div className="footer__nav">
					<a href="index.html" aria-current="page" className="footer__nav__brand w-inline-block w--current">
						<img
							src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e6ad55212785322a62948a6_logo-ir%402x.png"
							width={81}
							alt="Infinite Red log in light gray"
						/>
					</a>
					<a href="work.html" className="footer__nav__link">
						Work
					</a>
					<a href="capabilities.html" className="footer__nav__link">
						Capabilities
					</a>
					<a href="community.html" className="footer__nav__link">
						Community
					</a>
					<a href="company.html" className="footer__nav__link">
						Company
					</a>
					<a href="http://shift.infinite.red/" target="_blank" className="footer__nav__link">
						Blog
					</a>
					<a href="contact.html" className="footer__nav__link">
						Contact
					</a>
				</div>
				<div className="footer__contact">
					<div className="footer__contact__locations">
						<div className="footer__contact__locations__text">Fully remote throughout the U.S.</div>
					</div>
					<div className="footer__contact__info">
						<div className="footer__contact__methods">
							<a href="tel:+14152956152" className="footer__contact__method__link">
								p:&nbsp;(415) 295-6152
							</a>
							<a
								href="mailto:hello@infinite.red?subject=New%20message%20from%20infinite.red"
								className="footer__contact__method__link"
							>
								e:&nbsp;hello@infinite.red
							</a>
						</div>
						<div className="footer__contact__social">
							<a
								href="https://twitter.com/infinite_red"
								target="_blank"
								className="footer__contact__social__icon w-inline-block"
							>
								<img
									src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e6ad5521278536f7a2948a2_icon-twitter-footer%402x.png"
									width={20}
									alt="Twitter icon"
								/>
							</a>
							<a
								href="https://www.instagram.com/infinitered_designers/"
								target="_blank"
								className="footer__contact__social__icon w-inline-block"
							>
								<img
									src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5eb3209221f6df4423f5786e_c-insta.svg"
									width={20}
									alt="Instagram icon"
								/>
							</a>
							<a
								href="https://github.com/infinitered"
								target="_blank"
								className="footer__contact__social__icon w-inline-block"
							>
								<img
									src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5eb3209204b0b68175029ead_c-github.svg"
									width={20}
									alt="GitHub icon"
								/>
							</a>
							<a
								href="https://www.youtube.com/channel/UCwpSzVt7QpLDbCnPXqR97-g"
								target="_blank"
								className="footer__contact__social__icon w-inline-block"
							>
								<img
									src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5eb32091cf9abc54fdfec0f5_c-youtube.svg"
									width={20}
									alt="YouTube icon"
								/>
							</a>
							<a
								href="https://www.facebook.com/infiniteredinc/"
								target="_blank"
								className="footer__contact__social__icon w-inline-block"
							>
								<img
									src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5eb32091fdaa86845c72da3e_c-facebook.svg"
									width={20}
									alt="Facebook icon"
								/>
							</a>
							<a
								href="https://www.linkedin.com/company/infinitered"
								target="_blank"
								className="footer__contact__social__icon w-inline-block"
							>
								<img
									src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5eb320922c43276f58d1a0f3_c-linkedin.svg"
									width={20}
									alt="LinkedIn icon"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
