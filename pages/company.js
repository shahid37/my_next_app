import Footer from './components/footer';
import PageLayout from './components/pageLayout';
import { withRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { constants } from '../constants';
import { getAllTeamMembersAPI } from './api';
// import { getBlogPostsAPI } from './api';

var React = require('react');
export const getStaticProps = async () => {
	const companyData = await getAllTeamMembersAPI();
	// 	const data2 = await fetchData2();
	// 	const finalData = [data, data2];
	// 	console.log(data, 'data');
	// 	const companyData = [];
	// 	const employeeTeamMembers = [];
	// 	if (finalData) {
	// 		for (let j = 0; j < finalData.length; j++) {
	// 			console.log('daataaaaaaaaaaaaaaaaaaaaaa', finalData.length);
	// 			for (let i = 0; i < finalData[j].data.results.length; i++) {
	// 				console.log(finalData[j].data.results[i].type, 'firsttttttttttttt');
	// 				if (finalData[j].data.results[i].type === 'team_members') {
	// 					companyData.push(finalData[j].data.results[i]);
	// 				}
	// 				// if (finalData[j].data.results[i].type === 'emplayee_team_members') {
	// 				// employeeTeamMembers.push(finalData[j].data.results[i]);
	// 				// }
	// 			}
	// 			// console.log('lengthhhhhhhhh', employeeTeamMembers);
	// 		}
	// 	}
	return {
		// props: data,
		props: {
			ownerTeamMembers: companyData,
			teamMembers: [],
		},
	};
};

const Company = ({ ownerTeamMembers, teamMembers, error }) => {
	const [teamMembersData, setTeamMembersData] = useState(teamMembers);
	useEffect(() => {
		console.log('kkkkkkkkkkkkkkkkkkkkkk');
	});
	return (
		<PageLayout>
			<div className="hero-sub hero-img--company">
				<div className="container">
					<div className="hero-sub__content">
						<h1 className="h1--reversed">Company</h1>
						<p className="p--large p--reversed">
							Infinite Red has been designing, building and shipping apps remotely for over 10 years. Our
							team has so many accreditations and skills, we couldn’t possibly list them all. You might
							recognize quite a few faces from popular React Native blog posts, to JavaScript conferences,
							podcasts, and the Open Source community. Plus, we’re a pretty fun team to work with (though
							our opinion might be biased).
						</p>
					</div>
				</div>
			</div>
			<div className="team-gallery">
				<div className="container">
					<img
						src="/5efcf4f9833ed01d545638c6_team_infinite_red.jpg"
						width={1197}
						alt="Group photo of Infinite Red team"
						sizes="(max-width: 479px) 96vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, 98vw"
						srcSet="/profile.jpg 500w, /profile.jpg 800w, /profile.jpg 1600w, /profile.jpg 2000w, /profile.jpg 2440w"
						className="team-gallery__img"
					/>
				</div>
			</div>
			<div className="col-icon">
				<div className="container">
					<div className="col-icon-3 w-row">
						<div className="col-icon__col w-col w-col-4">
							<div className="col-icon__heading">
								<img
									src="/5e7a52d92c9dda15bb7e74b7_icon-communication.svg"
									alt="Icon of two talk bubbles inside of a circle"
									className="col-icon__col__icon"
								/>
								<h4>Communication</h4>
							</div>
							<p>
								We over-communicate. At every step of the process you will know what to expect, where
								your investment is going, and how to make it go farther. We treat you like a partner,
								not just a client.
							</p>
						</div>
						<div className="col-icon__col w-col w-col-4">
							<div className="col-icon__heading">
								<img
									src="/5e7a52e37b79364e809b081f_icon-professionalism.svg"
									alt="Icon of document with badge inside of a circle"
									className="col-icon__col__icon"
								/>
								<h4>Professionalism</h4>
							</div>
							<p>
								To us, being professional means doing what we say and saying what we mean. It means
								playing to our strengths and collaborating.
							</p>
						</div>
						<div className="col-icon__col col--last w-col w-col-4">
							<div className="col-icon__heading">
								<img
									src="/5e7a52ec94560d76bd90d8f2_icon-community.svg"
									alt="Icon showing two profiles inside of a circle"
									className="col-icon__col__icon"
								/>
								<h4>Community</h4>
							</div>
							<p>
								As developers we owe a great deal to the talent and hard work that goes into free and
								open source software. We go out of our way to find ways we can serve and lead in the
								communities that spring up around the technology we use.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="team">
				<div className="container">
					<div className="section-intro">
						<h2>Meet Our Team</h2>
						<p className="p--large">The people behind the magic at Pikes Soft.</p>
					</div>
					<div className="team__owners">
						<div className="team__owners__collection-wrapper w-dyn-list">
							<div role="list" className="team__owners__collection w-dyn-items w-row">
								<div style={{ display: 'flex', justifyContent: 'center' }}>
									{ownerTeamMembers.map((element) => (
										<div
											role="listitem"
											className="team__owners__collection__item w-dyn-item w-col w-col-4"
										>
											<div className="team__owners__card">
												<div className="team__details">
													<div
														style={{
															backgroundImage:
																// 'url(_https_/assets.website-files.com/5e696c156810060ef59d768e/5eb43ab81e665c7da404fcc8_Jamon.html)',
																`url(${element.data.team_members.image.value.main.url})`,
														}}
														className="team__owners__card__img"
													/>
													<h4 className="h4--team-name">
														{element.data.team_members.name.value[0].text}
													</h4>
													<p className="p--small">
														{element.data.team_members.designation.value[0].text}
													</p>
													<div className="team__details__location">
														<img
															src="/location.svg"
															alt="location pin icon"
															className="team__details__location__icon"
														/>
														<h5 className="h5--opacity">
															{element.data.team_members.location.value[0].text}
														</h5>
													</div>
												</div>
												<div className="team__owner__card__bio">
													<p>{element.data.team_members.description.value[0].text}</p>
													<div className="team__owner__bio__social">
														<a
															href={element.data.team_members.twitter_link.value.url}
															target="_blank"
															className="team__social__icon w-inline-block"
														>
															<img
																src="/twitter.svg"
																alt="Twitter icon"
																className="team__social__icon__img"
															/>
														</a>
														<a
															href={element.data.team_members.github_link.value.url}
															target="_blank"
															className="team__social__icon w-inline-block"
														>
															<img
																src="/github.svg"
																alt="Github icon"
																className="team__social__icon__img"
															/>
														</a>
														<a
															href={element.data.team_members.linkedin.value.url}
															target="_blank"
															className="team__social__icon w-inline-block"
														>
															<img
																src="/linkedin.svg"
																alt="LinkedIn icon"
																className="team__social__icon__img"
															/>
														</a>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="team__list">
						<div className="team__list__collection-wrapper w-dyn-list">
							<div role="list" className="team__list__collection w-dyn-items w-row">
								{teamMembersData.map((element) => (
									<div
										role="listitem"
										className="team__list__collection__item w-dyn-item w-col w-col-4"
									>
										<div className="team__details">
											<div
												style={{
													backgroundImage: `url(${element.data.emplayee_team_members.image.value.main.url})`,
												}}
												className="team__list__img"
											/>
											<h4 className="h4--team-name">
												{element.data.emplayee_team_members.name.value[0].text}
											</h4>
											<p className="p--small">
												{element.data.emplayee_team_members.designation.value[0].text}
											</p>
											<div className="team__details__location">
												<img
													src="/location.svg"
													alt="location pin icon"
													className="team__details__location__icon"
												/>
												<h5 className="h5--opacity">
													{element.data.emplayee_team_members.location.value[0].text}
												</h5>
											</div>
										</div>
										<a
											data-w-id="6e4668f0-962e-8832-1b7c-84eb117c6bcd"
											// href="#"
											className="team__list__more-link w-inline-block"
										>
											<div
												// className="team__list__link-open"
												style={{
													display: element.data.emplayee_team_members.boolean.value
														? 'none'
														: 'block',
												}}
												onClick={() => {
													setTeamMembersData(
														teamMembersData.map((item) => {
															if (
																item.data.emplayee_team_members ===
																element.data.emplayee_team_members
															) {
																return {
																	...item,
																	data: {
																		...item.data,
																		emplayee_team_members: {
																			...item.data.emplayee_team_members,
																			boolean: {
																				...item.data.emplayee_team_members
																					.boolean,
																				value: !item.data.emplayee_team_members
																					.boolean.value,
																			},
																		},
																	},
																};
															}
															return item;
														})
													);
												}}
											>
												+ More
											</div>
											{/* <button onClick={() => console.log('press meeeeeeeeeeeeeeeeeeeeeeee')}>
													Click me
												</button> */}

											<div
												// className="team__list__link-close"
												style={{
													display: element.data.emplayee_team_members.boolean.value
														? 'block'
														: 'none',
													// : 'none',
												}}
												onClick={() => {
													setTeamMembersData(
														teamMembersData.map((item) => {
															if (
																item.data.emplayee_team_members ===
																element.data.emplayee_team_members
															) {
																return {
																	...item,
																	data: {
																		...item.data,
																		emplayee_team_members: {
																			...item.data.emplayee_team_members,
																			boolean: {
																				...item.data.emplayee_team_members
																					.boolean,
																				value: !item.data.emplayee_team_members
																					.boolean.value,
																			},
																		},
																	},
																};
															}
															return item;
														})
													);
												}}
											>
												— less
											</div>
										</a>
										<div
											className="team__list__bio"
											style={{
												display: element.data.emplayee_team_members.boolean.value
													? 'block'
													: 'none',
												// : 'none',
											}}
										>
											<p>{element.data.emplayee_team_members.description.value[0].text}</p>
											<div className="team__list__bio__social">
												<a
													href={element.data.emplayee_team_members.twitter_link.value.url}
													target="_blank"
													className="team__social__icon w-inline-block"
												>
													<img
														src="/twitter.svg"
														alt="Twitter icon"
														className="team__social__icon__img"
													/>
												</a>
												<a
													href={element.data.emplayee_team_members.github_link.value.url}
													className="team__social__icon w-inline-block w-condition-invisible"
												>
													<img
														src="/github.svg"
														alt="Github icon"
														className="team__social__icon__img"
													/>
												</a>
												<a
													href={element.data.emplayee_team_members.linkedin_link.value.url}
													target="_blank"
													className="team__social__icon w-inline-block"
												>
													<img
														src="/linkedin.svg"
														alt="LinkedIn icon"
														className="team__social__icon__img"
													/>
												</a>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="gallery-grid">
				<div className="container-full">
					<div className="gallery-grid__2-col">
						<div className="gallery-grid__2-col__img-l" />
						<div className="gallery-grid__2-col__img-r" />
					</div>
					<div className="gallery-grid__img-full" />
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
			</div>{' '}
			{/*[if lte IE 9]><![endif]*/}
			{/* Mirrored from infinite.red/company by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 23 Dec 2020 11:36:52 GMT */}
		</PageLayout>
	);
};
export default withRouter(Company);
