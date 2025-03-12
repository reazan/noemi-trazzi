<script setup lang="ts">
const gallery = Object.values(import.meta.glob("@/assets/homepage/*.{png,jpg,jpeg,PNG,JPEG}", { eager: true, query: "?url", import: "default" }));
const backgroundImage = ref("");
const index = ref(0);
const screenImage = ref<HTMLDivElement>();

onMounted(() => {
	loopBackgrounds();
});

let timeout: ReturnType<typeof setTimeout>;
function loopBackgrounds() {
	clearTimeout(timeout);

	if (screenImage.value == null)
		return;

	const animation = screenImage.value.style.animation;
	screenImage.value.style.animation = "none";

	nextTick(() => {
		backgroundImage.value = `url(${gallery[index.value]})`;

		screenImage.value!.style.animation = animation;

		if (index.value === gallery.length - 1) {
			index.value = 0;
		}
		else {
			index.value += 1;
		}
	});

	timeout = setTimeout(() => {
		loopBackgrounds();
	}, 25000);
}
</script>

<template lang="pug">
.screen
	.screen-image(:style="{ 'background-image': backgroundImage }" ref="screenImage")
	//- .screen-overlay
	.p-3.position-relative(style="height: calc(100% - 1.5rem); z-index: 3;")
		.w-full.h-full.flex.flex-col.justify-between
			div
				.flex.justify-between.mb-2(class="font-size-[3rem]")
					div NOEMI
					div TRAZZI
				div(class="font-size-[2rem]")
					.flex.justify-between
						div DIRECTOR
						.text-pink &amp;
					.flex.justify-end PHOTOGRAPHER
			div
				.flex.gap-4.justify-center
					div(class="font-size-8 hover:font-size-9"): a(class="decoration-none text-white" target="_blank" href="https://www.instagram.com/noemitrazzi_/"): Icon(name="mdi:instagram")
					div(class="font-size-8 hover:font-size-9"): a(class="decoration-none text-white" target="_blank" href="https://vimeo.com/noemitrazzi"): Icon(name="mdi:vimeo")
					div(class="font-size-8 hover:font-size-9"): a(class="decoration-none text-white"): Icon(name="mdi:youtube")
</template>

<style>
.screen {
	@apply h-screen w-screen max-w-screen position-relative;
	overflow: hidden !important;
}

@keyframes pan-image {
	0% {
		background-position: 36% 42%;
		background-size: 200%;
	}

	20% {
		background-position: 30% 35%;
		background-size: 200%;
	}

	20.0001% { /* -- View 2 -- */
		background-position: 60% 85%;
		background-size: 300%;  /* 500 */
	}

	40% {
		background-position: 49% 81%;
		background-size: 300%; /* 500 */
	}

	40.0001% { /* -- View 3 -- */
		background-position: 80% 42%;
		background-size: 300%;
	}

	60% {
		background-position: 84% 33%;
		background-size: 300%;
	}

	60.0001% { /* -- View 4 -- */
		background-position: 0% 0%;
		background-size: 300%;
	}

	80% {
		background-position: 15% 4%;
		background-size: 300%;
	}

	80.0001% { /* -- View 5 -- */
		background-position: 80% 10%;
		background-size: 300%;
	}

	100% {
		background-position: 72% 14%;
		background-size: 300%;
	}
}

.screen-image {
	/* background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/662025/abstract.jpg'); */
	/* background-image: url("@/assets/homepage/photo001.jpg"); */
	background-size: cover;
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 1;
	left: 0px;
	top: 0px;
	background-position: 0% 0%;
	/* filter: sepia(100%) hue-rotate(160deg); */
	/* opacity: 0.6; */
	animation: pan-image 25s linear infinite;
}

@keyframes pan-overlay {
	from {
		background-position: 0% 0%;
	}

	to {
		background-position: 0% -100%;
	}
}

.screen-overlay {
	width: 100%;
	height: 100%;
	background: linear-gradient(rgb(red / 0.15), rgb(red / 0.15) 3px, transparent 3px, transparent 9px);
	background-size: 100% 9px;
	z-index: 2;
	animation: pan-overlay 22s infinite linear;
	position: absolute;
	left: 0px;
	top: 0px;
}
</style>
