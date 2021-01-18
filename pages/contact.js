import { useState } from 'react';
import PageLayout from './components/pageLayout';

var React = require('react');

const Contact = () => {
	const [username, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [projectDescription, setProjectDescription] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [bool, setBool] = useState('');
	const [formSubmitBool, setFormSubmitBool] = useState(false);
	const [radioValue, setRadioValue] = useState('');
	const myChangeHandlerName = (event) => {
		setUserName(event.target.value);
	};
	const handeRadioValue = (event) => {
		setRadioValue(event.target.value);
	};
	const myChangeHandlerEmail = (event) => {
		setEmail(event.target.value);
	};
	const myChangeHandlerProjectDescription = (event) => {
		setProjectDescription(event.target.value);
	};
	const myChangeHandlerPhoneNumber = (event) => {
		setPhoneNumber(event.target.value);
	};

	return (
		<PageLayout>
			<div className="hero-sub hero-img--contact">
				<div className="container">
					<div className="hero-sub__content">
						<h1 className="h1--reversed">Contact Us</h1>
						<p className="p--large p--reversed">
							We know every project is unique. That's why our founders will take the time to learn about
							your company, how you work, and what exactly you are looking for in a custom website, web
							app, Android or iOS app. We'll work closely with you to make sure your project is a success.
						</p>
					</div>
				</div>
			</div>
			<div className="contact">
				<div className="container">
					<div className="section-intro">
						<h2>Let's work together.</h2>
						<p className="p--large">Fill out the form below and we'll be in touch shortly.</p>
					</div>
					<div className="contact__form-container">
						<div className="contact__form">
							<div style={{ display: 'block' }}>
								<div style={{ display: formSubmitBool ? 'none' : 'block' }}>
									<form
										id="email-form"
										name="email-form"
										data-name="Email Form"
										className="contact__form__block__fields"
									>
										<label htmlFor="name" className="contact__form__label">
											What's your name?*
										</label>
										<input
											type="text"
											className="contact__form__field w-input"
											maxLength={256}
											name="name"
											data-name="Name"
											placeholder="First & Last Name"
											id="name"
											onChange={myChangeHandlerName}
											required
										/>
										<div className="contact__form__action w-clearfix">
											<label htmlFor="email-3" className="contact__form__label">
												What's your email?*
											</label>
											<input
												type="email"
												className="contact__form__field field--no-padding w-input"
												maxLength={256}
												name="email"
												data-name="Email"
												placeholder="ex. hello@pikessoft.com"
												id="email"
												onChange={myChangeHandlerEmail}
												required
											/>
											<a
												data-w-id="986697eb-fb2d-0e29-1b69-4463e8d7a635"
												// href="#"
												className="contact__form__action__link w-inline-block"
											>
												<div
													data-w-id="91f53789-e772-0c4e-923d-281de955ac86"
													className="bold-link"
													onClick={() => {
														setBool(!bool);
													}}
												>
													{!bool ? '+ Add Phone Number' : '- Hide Phone Number'}
												</div>
											</a>
										</div>
										<div
											style={{ display: !bool ? 'none' : 'block' }}
											className="contact__form__dropdown"
										>
											<div className="contact__form__dropdown_phone">
												<label htmlFor="Phone-2" className="contact__form__label">
													Phone Number
												</label>
												<input
													type="tel"
													className="contact__form__field w-input"
													maxLength={256}
													name="Phone"
													data-name="Phone"
													placeholder="ex. +1 (123) 456-1234"
													id="Phone-2"
													onChange={myChangeHandlerPhoneNumber}
												/>
												<div className="contact__form__dropdown__select">
													<h6>Do you prefer we call or email you?</h6>
												</div>
												<label className="contact__radio__button w-radio">
													<input
														type="radio"
														data-name="Contact Method"
														id="Phone"
														name="Contact-Method"
														defaultValue="Phone"
														className="w-form-formradioinput radio-bttn w-radio-input"
														onChange={handeRadioValue}
													/>
													<span
														htmlFor="Phone"
														className="contact__form__label w-form-label"
														onChange={handeRadioValue}
													>
														Call
													</span>
												</label>
												<label className="contact__radio__button w-radio">
													<input
														type="radio"
														data-name="Contact Method"
														id="Email-4"
														name="Contact-Method"
														defaultValue="Email"
														className="w-form-formradioinput radio-bttn w-radio-input"
														onChange={handeRadioValue}
													/>
													<span
														htmlFor="Email-4"
														className="contact__form__label w-form-label"
													>
														Email
													</span>
												</label>
												<label className="contact__radio__button w-radio">
													<input
														type="radio"
														data-name="Contact Method"
														id="Either"
														name="Contact-Method"
														defaultValue="Either"
														className="w-form-formradioinput radio-bttn w-radio-input"
														onChange={handeRadioValue}
													/>
													<span
														htmlFor="Either"
														className="contact__form__label w-form-label"
													>
														Either
													</span>
												</label>
											</div>
											<div className="contact__form__dropdown__bg" />
										</div>
										<label htmlFor="Message-2" className="contact__form__label">
											Tell us a little bit about your project.
										</label>
										<textarea
											placeholder="What are you looking to build? What's the deadline? Do you have a specifc budget range?"
											maxLength={5000}
											id="Message-2"
											name="Message"
											data-name="Message"
											className="contact__form__textarea form--bottom-spacing w-input"
											defaultValue={''}
											onChange={myChangeHandlerProjectDescription}
										/>
										<div className="w-embed">
											<input
												type="hidden"
												className="sourceLogging"
												id="timezone"
												name="Timezone"
												data-name="Timezone"
												defaultValue
											/>
										</div>
										<input
											// type="submit"
											defaultValue="Send Message"
											data-wait="Sending..."
											className="bttn w-button"
											onClick={() => {
												setFormSubmitBool(true);
											}}
										/>
									</form>
								</div>
								<div
									className="contact__success-msg w-form-done"
									style={{
										display: formSubmitBool ? 'block' : 'none',
									}}
								>
									<h3>Thanks for reaching out!</h3>
									<div className="text-block">
										Please give us a day or so to review your project and get back to you. In the
										meantime don't hesitate to email or call us at{' '}
										<a href="tel:4152956152">
											<strong className="p--large-link">+92 (42) 35941619</strong>
										</a>{' '}
										if you think of anything else.
									</div>
								</div>
								<div className="error-message w-form-fail">
									<div className="text-block-2">
										Oops! Something went wrong while submitting the form. Please try again.
									</div>
								</div>
							</div>
						</div>
						<div className="vertical-col-icon-3">
							<div className="vertical-col-icon__col">
								<div className="col-icon__heading">
									<img
										src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e7ba3145835f1a10c93eaea_icon-project.svg"
										alt="icon showing a square with four different shapes inside"
										className="col-icon__col__icon"
									/>
									<h4>Every project is unique</h4>
								</div>
								<p>
									We know that no two projects are alike. They come in all different shapes and sizes,
									so we work to find the best solution.
								</p>
							</div>
							<div className="vertical-col-icon__col">
								<div className="col-icon__heading">
									<img
										src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e7ba313b906fbfc78243f84_icon-talk.svg"
										alt="Icon showing two talk bubbles "
										className="col-icon__col__icon"
									/>
									<h4>Talk with a founder</h4>
								</div>
								<p>
									You won’t find cheesy salesmen at Infinite Red. Initial contact and estimation is
									always completed by one of our three founders.
								</p>
							</div>
							<div className="vertical-col-icon__col">
								<div className="col-icon__heading">
									<img
										src="https://assets.website-files.com/5e67db0c1e7a468249544a75/5e7ba313fd05b79e2796617a_icon-location.svg"
										alt="icon showing two pins connected by a dotted line"
										className="col-icon__col__icon"
									/>
									<h4>Location doesn't matter</h4>
								</div>
								<p>
									As developers we owe a great deal to the talent and hard work that goes into free
									and open source software. We go out of our way to find ways we can serve and lead in
									the communities that spring up around the technology we use.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default Contact;
