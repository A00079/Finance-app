<template>
  <section class="text-gray-600 body-font mt-0">
    <div class="hidden md:block lg:block xl:block">
      <div
        class="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <!-- <h1
          style="
            background: linear-gradient(to right, #f7971e, #ffd200);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          "
          class="title-font tracking-tight font-extrabold text-5xl mb-2 font-medium relative"
        >
          <p class="skeleton-box">Lead a comfortable life!</p>
        </h1> -->
          <!-- <h1
          class="title-font tracking-tight font-extrabold text-2xl mb-4 font-medium text-gray-500"
        >
          We take care of your finances.
        </h1> -->
          <!-- <div class="mt-8">
          <button
            class="inline-flex h-12 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg relative"
          >
            <p class="skeleton-box">Get Your Credit Score</p>
            <span>
              <svg
                class="w-6 h-6 mt-1 ml-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
          <br />
          <div class="mb-8 leading-relaxed tracking-tight font-semibold mt-0">
            <div class="flex">
              <lottie
                :options="defaultOptions3"
                :height="90"
                :width="90"
                v-on:animCreated="handleAnimation"
              />
              <span class="tracking-tight font-bold text-lg mt-8">4,50,00,000+</span>
              <span class="mt-8"> have got their Credit Scores for FREE!</span>
            </div>
          </div>
        </div> -->
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div class="">
            <lottie
              :options="defaultOptions"
              :height="270"
              :width="270"
              v-on:animCreated="handleAnimation"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="md:hidden lg:hidden xl:hidden container mx-auto px-6 mobile-view-home-screen relative"
    >
      <div class="flex flex-col">
        <div class="animation-content bg-transparent py-3 rounded-b-3xl">
          <div>
            <!-- <lottie
              :options="defaultOptions"
              :height="160"
              :width="160"
              v-on:animCreated="handleAnimation"
            /> -->
            <img
              src="/img/home-page-illustration.png"
              class="w-52 h-52 mx-auto"
            />
          </div>
        </div>
        <div class="write-content">
          <div class="text-center w-full">
            <h1
              class="title-font sm:text-4xl text-2xl mb-0 font-bold mt-1 text-indigo-700"
            >
              Lead a comfortable life!
            </h1>
            <h1
              class="title-font sm:text-4xl px-4 text-md mb-1 font-demibold mt-0 text-gray-500"
            >
              We take care of your finances.
            </h1>
            <div class="flex justify-center">
              <button
                class="inline-flex text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm"
              >
                <div class="flex flex-row">
                  <div>Get Your Credit Score</div>
                  <div>
                    <svg
                      class="w-5 h-5 pl-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src="/img/home-curve.png" class="absolute -top-3 left-0" style="z-index: -1;" />
    </div>
  </section>
</template>
<script>
import animationData from "@/assets/animations/empreendedor-cor.json";
import animationData2 from "@/assets/animations/speedometer.json";
import animationData3 from "@/assets/animations/award.json";
export default {
  name: "Primary",
  data() {
    return {
      defaultOptions: { animationData: animationData, loop: true },
      defaultOptions2: { animationData: animationData2, loop: true },
      defaultOptions3: { animationData: animationData3, loop: true },
      animationSpeed: 1,
    };
  },
  mounted() {},
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    stop: function () {
      this.anim.stop();
    },
    play: function () {
      this.anim.play();
    },
    pause: function () {
      this.anim.pause();
    },
    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed);
    },
  },
};
</script>
<style scoped>
:root {
  --animate-duration: 1000ms;
  --animate-delay: 2s;
}
.skeleton-box {
  overflow: hidden;
  background-color: transparent;
}
.skeleton-box::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, rgba(255, 255, 255, 0)),
    color-stop(20%, rgba(255, 255, 255, 0.2)),
    color-stop(60%, rgba(255, 255, 255, 0.5)),
    to(rgba(255, 255, 255, 0))
  );
  background-image: -o-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0)
  );
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0)
  );
  -webkit-animation: shimmer 3s infinite;
  animation: shimmer 3s infinite;
  content: "";
}
@-webkit-keyframes shimmer {
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}
@keyframes shimmer {
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}
</style>