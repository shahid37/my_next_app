import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	// var cursor = '.cursor',
	// 	follower = '.follower',
	// 	cWidth = 8, //カーソルの大きさ
	// 	fWidth = 10, //フォロワーの大きさ
	// 	delay = 10, //数字を大きくするとフォロワーがより遅れて来る
	// 	mouseX = 0, //マウスのX座標
	// 	mouseY = 0, //マウスのY座標
	// 	posX = 0, //フォロワーのX座標
	// 	posY = 0; //フォロワーのX座標

	// //カーソルの遅延アニメーション
	// //ほんの少ーーーしだけ遅延させる 0.001秒
	// TweenMax.to({}, 0.001, {
	// 	repeat: -1,
	// 	onRepeat: function () {
	// 		posX += (mouseX - posX) / delay;
	// 		posY += (mouseY - posY) / delay;

	// 		TweenMax.set(follower, {
	// 			css: {
	// 				left: posX - fWidth / 2,
	// 				top: posY - fWidth / 2,
	// 			},
	// 		});

	// 		TweenMax.set(cursor, {
	// 			css: {
	// 				left: mouseX - cWidth / 2,
	// 				top: mouseY - cWidth / 2,
	// 			},
	// 		});
	// 	},
	// });

	// //マウス座標を取得
	// $(document).on('mousemove', function (e) {
	// 	mouseX = e.pageX;
	// 	mouseY = e.pageY;
	// });

	// $('a').on({
	// 	mouseenter: function () {
	// 		cursor.addClass('is-active');
	// 		follower.addClass('is-active');
	// 	},
	// 	mouseleave: function () {
	// 		cursor.removeClass('is-active');
	// 		follower.removeClass('is-active');
	// 	},
	// });

	return (
		<>
			<Head>
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"
					integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ=="
					crossorigin="anonymous"
				></script>
			</Head>
			<div class="btn">
				<a href="">link</a>
			</div>
			<div class="cursor"></div>
			<div class="follower"></div>
		</>
	);
}
