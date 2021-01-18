import React, { useEffect, useState } from 'react';
import PageLayout from './components/pageLayout';
import { RichText } from 'prismic-reactjs';
import { getBlogPostAPI } from './api';

export async function getServerSideProps(context) {
	// console.log('getServerProps', context.params, context.query);
	const response = await getBlogPostAPI({ id: context.query });
	return {
		props: { blogg: response.data[`blog_${context.query.slug}`], name: context.query.slug },
	};
}

const Test = ({
	blogg,
	//  blogsArray, error, postId
}) => {
	const renderbase = Object.keys(blogg).map(function (keyName, keyIndex) {
		return (
			<div className="n p">
				<div className="ab ac ae af ag dm ai aj">
					{blogg[`${keyName}`].type === 'Image' && keyName === 'blog_image' ? (
						<div class="ab ac ae af ag dm ai aj">
							<figure className="hg hh hi hj hk hl cz da paragraph-image">
								<div role="button" tabIndex={0} className="hm hn ho hp aj hq">
									<div className="cz da hf">
										<div className="hw s ho hx">
											<div className="hy hz s">
												<div className="hr hs t u v ht aj bm hu hv">
													<img
														alt="Image for post"
														className="t u v ht aj ia ib ar wn"
														src="https://miro.medium.com/max/60/1*QFTq4F4W8fmX26URT4gpDQ.jpeg?q=20"
														width={3868}
														height={2464}
													/>
												</div>
												<img
													alt="Image for post"
													className="wj wk t u v ht aj c"
													width={3868}
													height={2464}
													src="https://miro.medium.com/max/3868/1*QFTq4F4W8fmX26URT4gpDQ.jpeg"
													srcSet={blogg[`${keyName}`].value.main.url}
													sizes="700px"
												/>
												<noscript>
													&lt;img alt="Image for post" class="t u v ht aj"
													src="https://miro.medium.com/max/7736/1*QFTq4F4W8fmX26URT4gpDQ.jpeg"
													width="3868" height="2464"
													srcSet="https://miro.medium.com/max/552/1*QFTq4F4W8fmX26URT4gpDQ.jpeg
													276w, https://miro.medium.com/max/1104/1*QFTq4F4W8fmX26URT4gpDQ.jpeg
													552w, https://miro.medium.com/max/1280/1*QFTq4F4W8fmX26URT4gpDQ.jpeg
													640w, https://miro.medium.com/max/1400/1*QFTq4F4W8fmX26URT4gpDQ.jpeg
													700w" sizes="700px"/&gt;
												</noscript>
											</div>
										</div>
									</div>
								</div>
							</figure>
						</div>
					) : (
						''
					)}
					{blogg[`${keyName}`].type === 'StructuredText' &&
					keyName !== 'blog_title' &&
					keyName !== 'short_description' &&
					keyName !== 'author_name' &&
					keyName !== 'read_time' &&
					keyName !== 'publish_date'
						? RichText.render(blogg[`${keyName}`].value)
						: ''}
				</div>
			</div>
		);
		// and a[keyName] to get its value
	});

	return (
		<PageLayout>
			<style
				type="text/css"
				data-fela-rehydration={599}
				data-fela-type="STATIC"
				dangerouslySetInnerHTML={{
					__html:
						'html{box-sizing:border-box}*, *:before, *:after{box-sizing:inherit}body{margin:0;padding:0;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;color:rgba(0,0,0,0.8);position:relative;min-height:100vh}h1, h2, h3, h4, h5, h6, dl, dd, ol, ul, menu, figure, blockquote, p, pre, form{margin:0}menu, ol, ul{padding:0;list-style:none;list-style-image:none}main{display:block}a{color:inherit;text-decoration:none}a, button, input{-webkit-tap-highlight-color:transparent}img, svg{vertical-align:middle}button{background:transparent;overflow:visible}button, input, optgroup, select, textarea{margin:0}:root{--reach-tabs:1;--reach-menu-button:1}',
				}}
			/>
			<style
				data-fela-type="KEYFRAME"
				type="text/css"
				dangerouslySetInnerHTML={{
					__html:
						'@-webkit-keyframes k1{0%{opacity:0.8}50%{opacity:0.5}100%{opacity:0.8}}@-moz-keyframes k1{0%{opacity:0.8}50%{opacity:0.5}100%{opacity:0.8}}@keyframes k1{0%{opacity:0.8}50%{opacity:0.5}100%{opacity:0.8}}',
				}}
			/>
			<style
				type="text/css"
				data-fela-rehydration={599}
				data-fela-type="RULE"
				dangerouslySetInnerHTML={{
					__html:
						'.a{font-family:medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.b{font-weight:400}.c{background-color:rgba(255, 255, 255, 1)}.l{height:100vh}.m{width:100vw}.n{display:flex}.o{align-items:center}.p{justify-content:center}.q{height:35px}.r{fill:rgba(41, 41, 41, 1)}.s{display:block}.t{position:absolute}.u{top:0}.v{left:0}.w{right:0}.x{z-index:500}.y{box-shadow:0 4px 12px 0 rgba(0, 0, 0, 0.05)}.ah{max-width:1192px}.ai{min-width:0}.aj{width:100%}.ak{height:65px}.an{flex:1 0 auto}.ao{height:25px}.ap{fill:rgba(25, 25, 25, 1)}.aq{flex:0 0 auto}.ar{visibility:hidden}.as{margin-left:16px}.at{color:rgba(232, 53, 53, 1)}.au{fill:rgba(232, 53, 53, 1)}.av{font-size:inherit}.aw{border:inherit}.ax{font-family:inherit}.ay{letter-spacing:inherit}.az{font-weight:inherit}.ba{padding:0}.bb{margin:0}.bc:hover{cursor:pointer}.bd:hover{color:rgba(196, 52, 49, 1)}.be:hover{fill:rgba(196, 52, 49, 1)}.bf:disabled{cursor:default}.bg:disabled{color:rgba(26, 137, 23, 0.3)}.bh:disabled{fill:rgba(26, 137, 23, 0.3)}.bi{border-top:none}.bj{background-color:rgba(233, 54, 54, 1)}.bl{height:54px}.bm{overflow:hidden}.bn{margin-right:40px}.bo{height:36px}.bp{width:72px}.bq{overflow:auto}.br{flex:0 1 auto}.bs{list-style-type:none}.bt{line-height:40px}.bu{white-space:nowrap}.bv{overflow-x:auto}.bw{align-items:flex-start}.bx{margin-top:20px}.by{padding-top:20px}.bz{height:80px}.ca{height:20px}.cb{margin-right:15px}.cc{margin-left:15px}.cd:first-child{margin-left:0}.ce{min-width:1px}.cf{background-color:rgba(255, 170, 158, 1)}.cg{font-family:sohne, "Helvetica Neue", Helvetica, Arial, sans-serif}.ch{font-size:13px}.ci{line-height:20px}.cj{color:rgba(255, 221, 212, 1)}.ck{text-transform:uppercase}.cl{letter-spacing:1px}.cm{color:inherit}.cn{fill:inherit}.co:hover{color:rgba(255, 230, 222, 1)}.cp:hover{fill:rgba(255, 230, 222, 1)}.cq:disabled{color:rgba(255, 187, 176, 1)}.cr:disabled{fill:rgba(255, 187, 176, 1)}.cs{margin-bottom:0px}.ct{margin-top:0px}.cu{height:119px}.cx{padding-left:24px}.cy{padding-right:24px}.cz{margin-left:auto}.da{margin-right:auto}.db{max-width:728px}.dc{box-sizing:border-box}.dd{top:calc(100vh + 100px)}.de{bottom:calc(100vh + 100px)}.df{width:10px}.dg{pointer-events:none}.dh{word-break:break-word}.di{word-wrap:break-word}.dj:after{display:block}.dk:after{content:""}.dl:after{clear:both}.dm{max-width:680px}.dn{line-height:1.23}.do{letter-spacing:0}.dp{font-style:normal}.dq{font-family:fell, Georgia, Cambria, "Times New Roman", Times, serif}.el{margin-bottom:-0.27em}.em{color:rgba(41, 41, 41, 1)}.en{line-height:1.394}.fd{margin-bottom:-0.42em}.fe{color:rgba(117, 117, 117, 1)}.ff{margin-top:32px}.fg{justify-content:space-between}.fk{border-radius:50%}.fl{height:48px}.fm{width:48px}.fn{margin-left:12px}.fo{font-size:14px}.fp{margin-bottom:2px}.fr{max-height:20px}.fs{text-overflow:ellipsis}.ft{display:-webkit-box}.fu{-webkit-line-clamp:1}.fv{-webkit-box-orient:vertical}.fx:hover{text-decoration:underline}.fy:disabled{color:rgba(117, 117, 117, 1)}.fz:disabled{fill:rgba(117, 117, 117, 1)}.ga{margin-left:8px}.gb{color:rgba(255, 255, 255, 1)}.gc{padding:0px 8px 1px}.gd{fill:rgba(255, 255, 255, 1)}.ge{background:rgba(232, 53, 53, 1)}.gf{border-color:rgba(232, 53, 53, 1)}.gg:hover{background:rgba(196, 52, 49, 1)}.gh:hover{border-color:rgba(196, 52, 49, 1)}.gi:disabled{cursor:inherit}.gj:disabled{opacity:0.3}.gk:disabled:hover{background:rgba(232, 53, 53, 1)}.gl:disabled:hover{border-color:rgba(232, 53, 53, 1)}.gm{border-radius:4px}.gn{border-width:1px}.go{border-style:solid}.gp{display:inline-block}.gq{text-decoration:none}.gr{align-items:flex-end}.gz{padding-right:6px}.ha:hover{color:rgba(25, 25, 25, 1)}.hb:hover{fill:rgba(25, 25, 25, 1)}.hc{fill:rgba(117, 117, 117, 1)}.hd{margin-right:8px}.he{margin-right:-6px}.hf{max-width:3868px}.hl{clear:both}.hn{cursor:zoom-in}.ho{position:relative}.hp{z-index:auto}.hq:focus{transform:scale(1.01)}.hr{opacity:0}.hs{transition:opacity 100ms 400ms}.ht{height:100%}.hu{will-change:transform}.hv{transform:translateZ(0)}.hw{margin:auto}.hx{background-color:rgba(242, 242, 242, 1)}.hy{padding-bottom:63.70217166494312%}.hz{height:0}.ia{filter:blur(20px)}.ib{transform:scale(1.1)}.ic{visibility:visible}.id{line-height:1.58}.ie{letter-spacing:-0.004em}.if{font-family:charter, Georgia, Cambria, "Times New Roman", Times, serif}.iy{margin-bottom:-0.46em}.iz{clear:left}.ja{float:left}.jb{font-size:66px}.jc{line-height:.83}.jd{margin-right:12px}.jj{max-width:2103px}.jk{padding-bottom:102.61531145981931%}.jl{font-weight:700}.jm{font-style:italic}.jn{list-style-type:decimal}.jo{margin-left:30px}.jp{padding-left:0px}.jv{box-shadow:inset 3px 0 0 0 rgba(41, 41, 41, 1)}.jw{padding-left:23px}.jx{margin-left:-20px}.jy{margin-bottom:14px}.jz{padding-top:24px}.ka{padding-bottom:10px}.kb{background-color:rgba(8, 8, 8, 1)}.kc{height:3px}.kd{width:3px}.ke{margin-right:20px}.kf{line-height:1.12}.kg{letter-spacing:-0.022em}.kh{font-weight:500}.la{margin-bottom:-0.28em}.lg{line-height:1.18}.lo{margin-bottom:-0.31em}.lp{padding:20px}.lq{background:rgba(242, 242, 242, 1)}.lr{font-family:Menlo, Monaco, "Courier New", Courier, monospace}.ls{font-size:16px}.lt{margin-top:-0.09em}.lu{margin-bottom:-0.09em}.lv{white-space:pre-wrap}.lw{padding:2px 4px}.lx{font-size:75%}.ly> strong{font-family:inherit}.lz{padding-left:30px}.ma{line-height:44px}.mb{letter-spacing:-0.009em}.mc{font-size:30px}.ms{box-shadow:inset 0 0 0 1px rgba(230, 230, 230, 1)}.mt{padding:0px}.mu{padding:16px 20px}.mv{flex-direction:column}.mw{flex:1 1 auto}.my{font-size:20px}.mz{line-height:28px}.na{max-height:56px}.nb{-webkit-line-clamp:2}.nc{margin-top:8px}.nd{max-height:40px}.ne{margin-top:12px}.nf{width:160px}.ng{background-image:url(https://miro.medium.com/max/320/1*8tooY4mx-qW4OpRsq_aSTg.jpeg)}.nh{background-origin:border-box}.ni{background-size:cover}.nj{height:167px}.nk{background-position:50% 50%}.nl{max-width:100%}.nr{max-width:2000px}.ns{padding-bottom:8.899999999999999%}.nt{text-decoration:underline}.nu{will-change:opacity}.nv{position:fixed}.nw{width:188px}.nx{left:50%}.ny{transform:translateX(406px)}.nz{top:calc(65px + 54px + 14px)}.oc{top:159px}.oe{width:131px}.of{padding-bottom:28px}.og{border-bottom:1px solid rgba(230, 230, 230, 1)}.oh{padding-bottom:20px}.oi{padding-top:2px}.oj{max-height:120px}.ok{-webkit-line-clamp:6}.ol{padding:4px 12px 6px}.om{flex-direction:row}.on{padding-top:28px}.oo{margin-bottom:19px}.op{margin-left:-3px}.ov{outline:0}.ow{border:0}.ox{user-select:none}.oy{cursor:pointer}.oz> svg{pointer-events:none}.pa:active{border-style:none}.pb{-webkit-user-select:none}.pc:focus{fill:rgba(117, 117, 117, 1)}.pd:hover{fill:rgba(117, 117, 117, 1)}.pl button{text-align:left}.pm{opacity:0.4}.pn{cursor:not-allowed}.po{padding-right:4px}.px{margin-top:40px}.py{flex-wrap:wrap}.pz{margin-top:25px}.qa{margin-bottom:8px}.qb{line-height:22px}.qc{border-radius:3px}.qd{padding:5px 10px}.qe{max-width:155px}.qi{top:1px}.qw{margin-left:-1px}.qx{margin-left:-4px}.rf{padding-right:8px}.rg{padding-top:32px}.rh{border-top:1px solid rgba(230, 230, 230, 1)}.ri{margin-bottom:25px}.rk{margin-bottom:32px}.rl{min-height:80px}.rq{width:80px}.rr{padding-left:102px}.rt{line-height:18px}.ru{letter-spacing:0.077em}.rv{margin-bottom:6px}.rw{font-size:22px}.rx{max-width:555px}.ry{max-width:450px}.rz{line-height:24px}.sa{display:none}.sc{max-width:550px}.sd{margin-top:5px}.se{height:40px}.sf{width:40px}.sg{font-size:12px}.sh{line-height:16px}.si{letter-spacing:0.083em}.sj{padding-top:8px}.sk{padding-top:25px}.sm{background:rgba(255, 255, 255, 1)}.sn{margin-bottom:40px}.so{margin-top:24px}.sp{padding-bottom:16px}.sq{margin-bottom:24px}.uc{flex-grow:0}.ud{padding-bottom:24px}.ue{max-width:500px}.ui{padding-bottom:8px}.uv{padding-bottom:100%}.vg{padding:60px 0}.vh{background-color:rgba(0, 0, 0, 0.9)}.vj{padding-bottom:48px}.vk{border-bottom:1px solid rgba(255, 255, 255, 0.54)}.vl{margin:0 -12px}.vm{margin:0 12px}.vn{flex:1 1 0}.vo:hover{color:rgba(255, 255, 255, 0.99)}.vp:hover{fill:rgba(255, 255, 255, 0.99)}.vq:disabled{color:rgba(255, 255, 255, 0.7)}.vr:disabled{fill:rgba(255, 255, 255, 0.7)}.vs{color:rgba(255, 255, 255, 0.98)}.vt{color:rgba(255, 255, 255, 0.7)}.vu{height:22px}.vv{width:200px}.wb{margin-right:16px}.wc{background-image:url(https://miro.medium.com/max/160/1*8tooY4mx-qW4OpRsq_aSTg.jpeg)}.wd{-webkit-user-select:none}',
				}}
			/>
			<style
				type="text/css"
				data-fela-rehydration={599}
				data-fela-type="RULE"
				media="all and (min-width: 1080px)"
				dangerouslySetInnerHTML={{
					__html:
						'.d{display:none}.ag{margin:0 64px}.eh{font-size:48px}.ei{margin-top:0.55em}.ej{line-height:60px}.ek{letter-spacing:-0.011em}.fa{font-size:22px}.fb{margin-top:0.92em}.fc{line-height:28px}.gy{margin-left:30px}.hk{margin-top:56px}.iu{font-size:21px}.iv{margin-top:2em}.iw{line-height:32px}.ix{letter-spacing:-0.003em}.ji{padding-top:7px}.ju{margin-top:1.05em}.kw{font-size:30px}.kx{margin-top:1.25em}.ky{line-height:36px}.kz{letter-spacing:0}.lf{margin-top:0.86em}.ln{margin-top:1.72em}.mh{margin-top:1.75em}.mm{margin-top:2.11em}.mr{margin-top:32px}.nq{margin-top:1.95em}.ou{margin-right:5px}.pk{margin-top:5px}.pw{padding-left:6px}.qk{display:inline-block}.qp{margin-left:7px}.qq{margin-top:8px}.qv{width:25px}.rd{padding-left:7px}.re{top:3px}.tf{width:calc(100% + 32px)}.tg{margin-left:-16px}.th{margin-right:-16px}.ty{padding-left:16px}.tz{padding-right:16px}.ua{flex-basis:25%}.ub{max-width:25%}.ur{font-size:16px}.us{line-height:20px}.ve{min-width:70px}.vf{min-height:70px}',
				}}
			/>
			<style
				type="text/css"
				data-fela-rehydration={599}
				data-fela-type="RULE"
				media="all and (max-width: 1079.98px)"
				dangerouslySetInnerHTML={{
					__html:
						'.e{display:none}.gx{margin-left:30px}.ot{margin-right:5px}.pj{margin-top:5px}.pv{padding-left:6px}.qj{display:inline-block}.qn{margin-left:7px}.qo{margin-top:8px}.qu{width:25px}.rb{padding-left:7px}.rc{top:3px}',
				}}
			/>
			<style
				type="text/css"
				data-fela-rehydration={599}
				data-fela-type="RULE"
				media="all and (max-width: 903.98px)"
				dangerouslySetInnerHTML={{
					__html:
						'.f{display:none}.gw{margin-left:30px}.os{margin-right:5px}.pi{margin-top:5px}.pt{padding-left:6px}.pu{top:3px}.qh{display:inline-block}.ql{margin-left:7px}.qm{margin-top:8px}.qt{width:15px}.ra{padding-left:3px}.uh{margin-right:16px}',
				}}
			/>
			<style
				type="text/css"
				data-fela-rehydration={599}
				data-fela-type="RULE"
				media="all and (max-width: 727.98px)"
				dangerouslySetInnerHTML={{
					__html:
						'.g{display:none}.al{height:56px}.am{display:flex}.bk{display:block}.cv{margin-bottom:0px}.cw{height:110px}.fi{margin-top:32px}.fj{flex-direction:column-reverse}.gu{margin-bottom:30px}.gv{margin-left:0px}.mx{padding:10px 12px 10px}.or{margin-left:8px}.pg{margin-top:2px}.ph{margin-right:8px}.pr{padding-left:6px}.ps{top:3px}.qg{display:inline-block}.qs{width:15px}.qz{padding-left:3px}.rj{padding-top:0}.rm{margin-bottom:24px}.rn{align-items:center}.ro{width:102px}.rp{position:relative}.rs{padding-left:0}.sb{margin-top:24px}.sl{border-top:none}.sr{padding-bottom:12px}.ss{margin-top:16px}.ug{margin-right:16px}.ut{margin-left:16px}.uu{margin-right:0px}.vi{padding:32px 0}.vw{width:140px}.vx{margin-bottom:16px}.vy{margin-top:30px}.vz{width:100%}.wa{flex-direction:row}',
				}}
			/>
			<style
				type="text/css"
				data-fela-rehydration={599}
				data-fela-type="RULE"
				media="all and (max-width: 551.98px)"
				dangerouslySetInnerHTML={{
					__html:
						'.h{display:none}.ab{margin:0 24px}.dr{font-size:34px}.ds{margin-top:0.56em}.dt{line-height:42px}.du{letter-spacing:-0.016em}.eo{font-size:18px}.ep{margin-top:0.79em}.eq{line-height:24px}.fh{margin-top:32px}.fq{margin-bottom:0px}.gs{margin-bottom:30px}.gt{margin-left:0px}.hg{margin-top:40px}.ig{margin-top:1.56em}.ih{line-height:28px}.ii{letter-spacing:-0.003em}.je{padding-top:0}.jq{margin-top:1.34em}.ki{font-size:22px}.kj{margin-top:0.93em}.kk{letter-spacing:0}.lb{margin-top:0.67em}.lh{font-size:20px}.li{margin-top:1.23em}.md{margin-top:1.08em}.mi{margin-top:1.57em}.mn{margin-top:24px}.nm{margin-top:1.2em}.oq{margin-left:8px}.pe{margin-top:2px}.pf{margin-right:8px}.pp{padding-left:6px}.pq{top:3px}.qf{display:inline-block}.qr{width:15px}.qy{padding-left:3px}.st{width:calc(100% + 24px)}.su{margin-left:-12px}.sv{margin-right:-12px}.ti{padding-left:12px}.tj{padding-right:12px}.tk{flex-basis:100%}.tl{max-width:100%}.uf{margin-right:16px}.uj{font-size:16px}.uk{line-height:20px}.uw{min-width:48px}.ux{min-height:48px}',
				}}
			/>
			<style
				type="text/css"
				data-fela-rehydration={599}
				data-fela-type="RULE"
				media="all and (min-width: 904px) and (max-width: 1079.98px)"
				dangerouslySetInnerHTML={{
					__html:
						'.i{display:none}.af{margin:0 64px}.ed{font-size:48px}.ee{margin-top:0.55em}.ef{line-height:60px}.eg{letter-spacing:-0.011em}.ex{font-size:22px}.ey{margin-top:0.92em}.ez{line-height:28px}.hj{margin-top:56px}.iq{font-size:21px}.ir{margin-top:2em}.is{line-height:32px}.it{letter-spacing:-0.003em}.jh{padding-top:7px}.jt{margin-top:1.05em}.ks{font-size:30px}.kt{margin-top:1.25em}.ku{line-height:36px}.kv{letter-spacing:0}.le{margin-top:0.86em}.lm{margin-top:1.72em}.mg{margin-top:1.75em}.ml{margin-top:2.11em}.mq{margin-top:32px}.np{margin-top:1.95em}.tc{width:calc(100% + 32px)}.td{margin-left:-16px}.te{margin-right:-16px}.tu{padding-left:16px}.tv{padding-right:16px}.tw{flex-basis:25%}.tx{max-width:25%}.up{font-size:16px}.uq{line-height:20px}.vc{min-width:70px}.vd{min-height:70px}',
				}}
			/>
			<style
				type="text/css"
				data-fela-rehydration={599}
				data-fela-type="RULE"
				media="all and (min-width: 728px) and (max-width: 903.98px)"
				dangerouslySetInnerHTML={{
					__html:
						'.j{display:none}.ae{margin:0 48px}.dz{font-size:48px}.ea{margin-top:0.55em}.eb{line-height:60px}.ec{letter-spacing:-0.011em}.eu{font-size:22px}.ev{margin-top:0.92em}.ew{line-height:28px}.hi{margin-top:56px}.im{font-size:21px}.in{margin-top:2em}.io{line-height:32px}.ip{letter-spacing:-0.003em}.jg{padding-top:7px}.js{margin-top:1.05em}.ko{font-size:30px}.kp{margin-top:1.25em}.kq{line-height:36px}.kr{letter-spacing:0}.ld{margin-top:0.86em}.ll{margin-top:1.72em}.mf{margin-top:1.75em}.mk{margin-top:2.11em}.mp{margin-top:32px}.no{margin-top:1.95em}.sz{width:calc(100% + 28px)}.ta{margin-left:-14px}.tb{margin-right:-14px}.tq{padding-left:14px}.tr{padding-right:14px}.ts{flex-basis:50%}.tt{max-width:50%}.un{font-size:16px}.uo{line-height:20px}.va{min-width:48px}.vb{min-height:48px}',
				}}
			/>
			<style
				type="text/css"
				data-fela-rehydration={599}
				data-fela-type="RULE"
				media="all and (min-width: 552px) and (max-width: 727.98px)"
				dangerouslySetInnerHTML={{
					__html:
						'.k{display:none}.ac{margin:0 24px}.dv{font-size:34px}.dw{margin-top:0.56em}.dx{line-height:42px}.dy{letter-spacing:-0.016em}.er{font-size:18px}.es{margin-top:0.79em}.et{line-height:24px}.hh{margin-top:40px}.ij{margin-top:1.56em}.ik{line-height:28px}.il{letter-spacing:-0.003em}.jf{padding-top:0}.jr{margin-top:1.34em}.kl{font-size:22px}.km{margin-top:0.93em}.kn{letter-spacing:0}.lc{margin-top:0.67em}.lj{font-size:20px}.lk{margin-top:1.23em}.me{margin-top:1.08em}.mj{margin-top:1.57em}.mo{margin-top:24px}.nn{margin-top:1.2em}.sw{width:calc(100% + 24px)}.sx{margin-left:-12px}.sy{margin-right:-12px}.tm{padding-left:12px}.tn{padding-right:12px}.to{flex-basis:100%}.tp{max-width:100%}.ul{font-size:16px}.um{line-height:20px}.uy{min-width:48px}.uz{min-height:48px}',
				}}
			/>
			<style
				type="text/css"
				data-fela-rehydration={599}
				data-fela-type="RULE"
				media="print"
				dangerouslySetInnerHTML={{ __html: '.z{display:none}' }}
			/>
			<style
				type="text/css"
				data-fela-rehydration={599}
				data-fela-type="RULE"
				media="(orientation: landscape) and (max-width: 903.98px)"
				dangerouslySetInnerHTML={{ __html: '.fw{max-height:none}' }}
			/>
			<style
				type="text/css"
				data-fela-rehydration={599}
				data-fela-type="RULE"
				media="(prefers-reduced-motion: no-preference)"
				dangerouslySetInnerHTML={{
					__html: '.hm{transition:transform 300ms cubic-bezier(0.2, 0, 0.2, 1)}.oa{transition:opacity 200ms}',
				}}
			/>
			<style
				type="text/css"
				data-fela-rehydration={599}
				data-fela-type="RULE"
				media="all and (max-width: 1230px)"
				dangerouslySetInnerHTML={{ __html: '.ob{display:none}' }}
			/>
			<style
				type="text/css"
				data-fela-rehydration={599}
				data-fela-type="RULE"
				media="all and (max-width: 1198px)"
				dangerouslySetInnerHTML={{ __html: '.od{display:none}' }}
			/>
			<link rel="icon" href="https://miro.medium.com/fit/c/128/128/1*5pafh1yr5ktw2_3Ke6mT0g.png" data-rh="true" />
			<link
				id="glyph_link"
				rel="stylesheet"
				type="text/css"
				href="https://glyph.medium.com/css/unbound.css"
				data-rh="true"
			/>
			<div className="hero-sub hero-img--work">
				<div className="container">
					<div className="hero-sub__content">
						<h1 className="h1--reversed">Our Blog</h1>
						<p className="p--large p--reversed">
							Our company has teams working on multiple projects across all domains. &nbsp;Some of us are
							assisting external groups, and some of us are leading client ideas through design and
							development to a finished product.
						</p>
					</div>
				</div>
			</div>{' '}
			{blogg ? (
				<div className="n p">
					<div className="ab ac ae af ag dm ai aj">
						<div className>
							<h1
								id="fc84"
								className="dn do dp dq b dr ds dt du dv dw dx dy dz ea eb ec ed ee ef eg eh ei ej ek el em"
							>
								{/* title */}
								{/* {console.log(blogg.blog_title ? blogg.blog_title.type : '')} */}
								{blogg.blog_title ? blogg.blog_title.value[0].text : ''}
							</h1>
						</div>
						<h2 id="17d8" className="en do dp cg b eo ep eq er es et eu ev ew ex ey ez fa fb fc fd fe">
							{/* {blogg.short_description.value[0].text} */}
							{blogg.short_description ? blogg.short_description.value[0].text : ''}
						</h2>
						<div className="ff">
							<div className="n fg fh fi fj">
								<div className="o n">
									<div>
										<a
											href="https://gantlaborde.medium.com/?source=post_page-----404950de4303--------------------------------"
											rel="noopener"
										>
											<img
												alt="Gant Laborde"
												className="s fk fl fm"
												src={
													blogg.author_image
														? blogg.author_image.value.main.url
														: 'https://miro.medium.com/fit/c/96/96/1*gnkCSbW1lhpdf6ZvaLEXHQ.png'
												}
												// src="https://miro.medium.com/fit/c/96/96/1*gnkCSbW1lhpdf6ZvaLEXHQ.png"
												width={48}
												height={48}
											/>
										</a>
									</div>
									<div className="fn aj s">
										<div className="n">
											<div style={{ flex: 1 }}>
												<span className="cg b fo ci em">
													<div className="fp n o fq">
														<span className="cg b fo ci bm fr fs ft fu fv fw em">
															<a
																href="https://gantlaborde.medium.com/?source=post_page-----404950de4303--------------------------------"
																className="cm cn av aw ax ay az ba bb bc fx bf fy fz"
																rel="noopener"
															>
																{blogg.author_name
																	? blogg.author_name.value[0].text
																	: 'none'}
															</a>
														</span>
														<div className="ga s aq h">
															<span>
																<a
																	href="https://medium.com/m/signin?actionUrl=%2F_%2Fsubscribe%2Fuser%2F6ca0fe37eac1&operation=register&redirect=https%3A%2F%2Fshift.infinite.red%2Fxmas-dice-mathematics-404950de4303&source=post_page-6ca0fe37eac1----404950de4303---------------------follow_byline-----------"
																	className="cg b ch ci gb gc gd ge gf gg gh bc gi gj gk gl gm gn go dc gp gq"
																	rel="noopener"
																>
																	Follow
																</a>
															</span>
														</div>
													</div>
												</span>
											</div>
										</div>
										<span className="cg b fo ci fe">
											<span className="cg b fo ci bm fr fs ft fu fv fw fe">
												<div>
													<a
														className="cm cn av aw ax ay az ba bb bc fx bf fy fz"
														rel="noopener"
														href="/xmas-dice-mathematics-404950de4303?source=post_page-----404950de4303--------------------------------"
													>
														{blogg.publish_date ? blogg.publish_date.value : ''}
													</a>{' '}
													{/* */}·{/* */} {/* */}
													{blogg.read_time ? blogg.read_time.value[0].text : '5'} read
												</div>
											</span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				''
			)}
			{renderbase}
		</PageLayout>
	);
};

export default Test;
