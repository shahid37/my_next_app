import { useState } from 'react';
import PageLayout from './components/pageLayout';
import axios from 'axios';
import { constants } from '../constants';
import { getBlogPostsAPI } from './api';
export const getStaticProps = async () => {
	let blogs = [];
	const response = await getBlogPostsAPI({ pageSize: 10 });
	blogs = response.results;
	return {
		// props: data,
		props: { blogsData: blogs },
	};
};
const Blog = ({ blogsData }) => {
	return (
		<PageLayout>
			<div className="hero-sub hero-img--work">
				<div className="container">
					<div className="hero-sub__content">
						<h1 className="h1--reversed">Our Blogs</h1>
						<p className="p--large p--reversed">
							Our company has teams working on multiple projects across all domains. &nbsp;Some of us are
							assisting external groups, and some of us are leading client ideas through design and
							development to a finished product.
						</p>
					</div>
				</div>
			</div>
			<div class="u-marginBottom40 js-collectionStream">
				<div className="streamItem streamItem--section js-streamItem" data-action-scope="_actionscope_4">
					<section className="u-marginTop30 u-xs-margin0 u-marginBottom15 u-maxWidth1032 u-sm-paddingLeft20 u-sm-paddingRight20 u-borderBox u-marginAuto">
						<div className="row u-marginTop30 u-marginLeftNegative12 u-marginRightNegative12">
							{blogsData.map((element, index) => {
								let type = element.type;
								let val = element.type.split('_').pop();
								return (
									<div
										className="col u-xs-size12of12 js-trackPostPresentation u-paddingLeft12 u-marginBottom15 u-paddingRight12 u-size4of12"
										data-source="collection_home---4------2-----------------------"
										data-post-id="e08a14fd995"
										data-index={2}
										data-scroll="native"
									>
										{element.data[`${type}`].blog_image !== undefined ? (
											<div className="u-lineHeightBase postItem">
												<a
													// href="https://shift.infinite.red/tensorflow-js-aws-amplify-e08a14fd995?source=collection_home---4------2-----------------------"
													// href="/blogDetails"
													href={`/blogDetails?slug=${val}`}
													data-action="open-post"
													data-action-value="https://shift.infinite.red/tensorflow-js-aws-amplify-e08a14fd995?source=collection_home---4------2-----------------------"
													className="u-block u-xs-height170 u-height172 u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-borderLighter"
													style={{
														backgroundImage: `url("${
															element.data[`${type}`]
																? element.data[`${type}`].blog_image.value.main.url
																: '	'
														}")`,
														backgroundPosition: '50% 50% !important',
													}}
												>
													<span className="u-textScreenReader"></span>
												</a>
											</div>
										) : (
											<>
												<div className="u-lineHeightBase postItem">
													<a
														// href="https://shift.infinite.red/tensorflow-js-aws-amplify-e08a14fd995?source=collection_home---4------2-----------------------"
														href={`/blogDetails?slug=${val}`}
														data-action="open-post"
														data-action-value="https://shift.infinite.red/tensorflow-js-aws-amplify-e08a14fd995?source=collection_home---4------2-----------------------"
														className="u-block u-xs-height170 u-height172 u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-borderLighter"
														style={{
															backgroundImage:
																'url("https://cdn-images-1.medium.com/max/400/1*WZEIsgBEOwUBkZYpl4r3VA.jpeg")',
															backgroundPosition: '50% 50% !important',
														}}
													>
														<span className="u-textScreenReader">
															TensorFlow.js + AWS Amplify
														</span>
													</a>
												</div>
											</>
										)}
										<div className="col u-xs-marginBottom10 u-paddingLeft0 u-paddingRight0 u-paddingTop15 u-marginBottom30">
											<a
												className
												href="https://shift.infinite.red/tensorflow-js-aws-amplify-e08a14fd995?source=collection_home---4------2-----------------------"
												data-action-source="collection_home---4------2-----------------------"
												data-post-id="e08a14fd995"
											>
												<h3 className="u-contentSansBold u-lineHeightTightest u-xs-fontSize24 u-paddingBottom2 u-paddingTop5 u-fontSize32">
													<div className="u-letterSpacingTight u-lineHeightTighter u-breakWord u-textOverflowEllipsis u-lineClamp3 u-fontSize24">
														{element.data[`${type}`].blog_title.value[0].text}
													</div>
												</h3>
												<div className="u-contentSansThin u-lineHeightBaseSans u-fontSize24 u-xs-fontSize18 u-textColorNormal u-baseColor--textNormal">
													<div className="u-fontSize18 u-letterSpacingTight u-lineHeightTight u-marginTop7 u-textColorNormal u-baseColor--textNormal">
														{element.data[`${type}`].short_description.value[0].text}
													</div>
												</div>
											</a>
											<div className="u-clearfix u-marginTop20">
												<div className="u-flexCenter">
													<div className="postMetaInline-avatar u-flex0">
														<a
															className="link u-baseColor--link avatar"
															href="https://shift.infinite.red/@gantlaborde"
															data-action="show-user-card"
															data-action-value="6ca0fe37eac1"
															data-action-type="hover"
															data-user-id="6ca0fe37eac1"
															data-collection-slug="infinite-red"
															dir="auto"
														>
															<img
																src={
																	element.data[`${type}`].author_image.value.main.url
																}
																className="avatar-image u-size36x36 u-xs-size32x32"
																alt="Go to the profile of Gant Laborde"
															/>
														</a>
													</div>
													<div className="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
														<a
															className="ds-link ds-link--styleSubtle link link--darken link--accent u-accentColor--textNormal u-accentColor--textDarken"
															href="https://shift.infinite.red/@gantlaborde"
															data-action="show-user-card"
															data-action-value="6ca0fe37eac1"
															data-action-type="hover"
															data-user-id="6ca0fe37eac1"
															data-collection-slug="infinite-red"
															dir="auto"
														>
															{element.data[`${type}`].author_name.value[0].text}
														</a>
														<div className="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
															<time dateTime="2020-09-01T16:01:01.130Z">
																{element.data[`${type}`].publish_date.value}
															</time>
															<span className="middotDivider u-fontSize12" />
															<span
																className="readingTime"
																title={element.data[`${type}`].read_time.value[0].text}
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</section>
				</div>
			</div>
		</PageLayout>
	);
};
export default Blog;
