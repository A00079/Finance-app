<template>
  <section class="text-gray-600 body-font">
    <div class="hidden md:block lg:block xl:block">
      <div class="container px-10 py-16 mx-auto flex flex-wrap">
        <div class="flex flex-col text-center w-full mb-14">
          <h2
            class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
          >
            ROOF PARTY POLAROID
          </h2>
          <h1
            class="sm:text-3xl text-2xl font-medium title-font text-indigo-900"
          >
            A Good Credit Score Range
          </h1>
        </div>
        <div class="flex flex-row -m-4">
          <div class="p-0 w-full">
            <div class="flex p-2 sm:flex-row flex-col">
              <div
                class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0"
              >
                <vc-donut
                  class="mt-10"
                  background="white"
                  foreground="grey"
                  :size="100"
                  unit="px"
                  :thickness="30"
                  :has-legend="false"
                  legend-placement="top"
                  :sections="[{ value: 25, color: '#F15A24' }]"
                  :total="100"
                  :start-angle="270"
                  :auto-adjust-text-size="true"
                >
                  <h1 class="text-sm font-bold text-red-500">300-629</h1>
                </vc-donut>
              </div>
              <div class="flex-grow pr-10">
                <h2 class="text-red-500 text-lg title-font font-medium mb-3">
                  Bad
                </h2>
                <p class="leading-relaxed text-sm text-gray-600 font-medium">
                  Blue bottle crucifix vinyl post-ironic four dollar.
                </p>
              </div>
            </div>
          </div>
          <div class="p-0 w-full">
            <div class="flex p-2 sm:flex-row flex-col">
              <div
                class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0"
              >
                <vc-donut
                  class="mt-10"
                  background="white"
                  foreground="grey"
                  :size="100"
                  unit="px"
                  :thickness="30"
                  :has-legend="false"
                  legend-placement="top"
                  :sections="[{ value: 50, color: '#F7931E' }]"
                  :total="100"
                  :start-angle="180"
                  :auto-adjust-text-size="true"
                >
                  <h1 class="text-sm font-bold text-yellow-500">630-639</h1>
                </vc-donut>
              </div>
              <div class="flex-grow pr-10">
                <h2 class="text-yellow-500 text-lg title-font font-medium mb-3">
                  Fair
                </h2>
                <p class="leading-relaxed text-sm text-gray-600 font-medium">
                  Blue bottle crucifix vinyl post-ironic four dollar.
                </p>
              </div>
            </div>
          </div>
          <div class="p-0 w-full">
            <div class="flex p-2 sm:flex-row flex-col">
              <div
                class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0"
              >
                <vc-donut
                  class="mt-10"
                  background="white"
                  foreground="grey"
                  :size="100"
                  unit="px"
                  :thickness="30"
                  :has-legend="false"
                  legend-placement="top"
                  :sections="[{ value: 75, color: '#FCEE21' }]"
                  :total="100"
                  :start-angle="90"
                  :auto-adjust-text-size="true"
                >
                  <h1 class="text-sm font-bold text-green-500">690-719</h1>
                </vc-donut>
              </div>
              <div class="flex-grow pr-10">
                <h2 class="text-green-500 text-lg title-font font-medium mb-3">
                  Good
                </h2>
                <p class="leading-relaxed text-sm text-gray-600 font-medium">
                  Blue bottle crucifix vinyl post-ironic four dollar.
                </p>
              </div>
            </div>
          </div>
          <div class="p-0 w-full">
            <div class="flex p-2 sm:flex-row flex-col">
              <div
                class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0"
              >
                <vc-donut
                  class="mt-10"
                  background="white"
                  foreground="grey"
                  :size="100"
                  unit="px"
                  :thickness="30"
                  :has-legend="false"
                  legend-placement="top"
                  :sections="[{ value: 100, color: '#8CC63F' }]"
                  :total="100"
                  :start-angle="0"
                  :auto-adjust-text-size="true"
                >
                  <h1 class="text-sm font-bold text-green-900">720-850</h1>
                </vc-donut>
              </div>
              <div class="flex-grow pr-10">
                <h2 class="text-green-900 text-lg title-font font-medium mb-3">
                  Excellent
                </h2>
                <p class="leading-relaxed text-sm text-gray-600 font-medium">
                  Blue bottle crucifix vinyl post-ironic four dollar.
                </p>
              </div>
            </div>
          </div>
        </div>
        <WhatIsCreditCard />
      </div>
    </div>
    <div class="mobile-credit-range mt-24 md:hidden lg:hidden xl:hidden">
      <div class="container px-5 py-0 mx-auto rounded-t-3xl" style="background:#0810B3">
        <div class="flex flex-col text-center w-full mb-4">
          <h2
            class="text-xs text-white tracking-widest font-medium title-font mb-1 text-left"
          >
            Credit Range
          </h2>
          <h1
            class="text-left text-2xl font-medium title-font mb-4 text-white mb-4"
          >
            A Good Credit Range
          </h1>
        </div>
        <div class="animation-content">
          <div class="wrapper">
            <div class="gauge">
              <div class="slice-colors">
                <div class="st slice-item"></div>
                <div class="st slice-item"></div>
                <div class="st slice-item"></div>
                <div class="st slice-item"></div>
                <div class="st slice-item"></div>
              </div>
              <div class="needle"></div>
              <div class="gauge-center"></div>
            </div>
          </div>
        </div>
        <div class="indicators-content">
          <div class="flex flex-row mt-7 space-x-1">
            <div class="w-1/5">
              <div
                class="h-full flex flex-col items-center rounded-lg space-y-1"
              >
                <div
                  class="w-9 h-9 bg-white object-cover object-center flex-shrink-0 rounded-xl"
                  style="background: #1eaa59"
                ></div>
                <div class="text-center">
                  <h2 class="text-white text-center text-xs font-bold">
                    Excellent
                  </h2>
                </div>
              </div>
            </div>
            <div class="w-1/5">
              <div
                class="h-full flex flex-col items-center rounded-lg space-y-1"
              >
                <div
                  class="w-9 h-9 bg-white object-cover object-center flex-shrink-0 rounded-xl"
                  style="background: #9aa91e"
                ></div>
                <div class="text-center">
                  <h2 class="text-white text-center text-xs font-bold">Good</h2>
                </div>
              </div>
            </div>
            <div class="w-1/5">
              <div
                class="h-full flex flex-col items-center rounded-lg space-y-1"
              >
                <div
                  class="w-9 h-9 bg-white object-cover object-center flex-shrink-0 rounded-xl"
                  style="background: #efc20f"
                ></div>
                <div class="text-center">
                  <h2 class="text-white text-center text-xs font-bold">Fair</h2>
                </div>
              </div>
            </div>
            <div class="w-1/5">
              <div
                class="h-full flex flex-col items-center rounded-lg space-y-1"
              >
                <div
                  class="w-9 h-9 bg-white object-cover object-center flex-shrink-0 rounded-xl"
                  style="background: #e67e22"
                ></div>
                <div class="text-center">
                  <h2 class="text-white text-center text-xs font-bold">
                    Uncertain
                  </h2>
                </div>
              </div>
            </div>
            <div class="w-1/5">
              <div
                class="h-full flex flex-col items-center rounded-lg space-y-1"
              >
                <div
                  class="w-9 h-9 bg-white object-cover object-center flex-shrink-0 rounded-xl"
                  style="background: #e84c3d"
                ></div>
                <div class="text-center">
                  <h2 class="text-white text-center text-xs font-bold">Poor</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WhatIsCreditCard />
      </div>
    </div>
  </section>
</template>
<script>
import VueSpeedometer from "vue-speedometer";
import animationData from "@/assets/animations/speedometer.json";
import WhatIsCreditCard from "./WhatIsCreditCard.vue";
export default {
  name: "CreditScore",
  data() {
    return {
      defaultOptions: { animationData: animationData, loop: true },
    };
  },
  components: {
    VueSpeedometer,
    WhatIsCreditCard,
  },
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
.wrapper {
  display: table;
  margin: 0 auto;
  background: rgba(21, 34, 46, 0.25);
  padding: 20px 30px 30px;
  border-radius: 6px;
  box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.32), 0 1px 9px -1px #15222e;
}

.wrapper-header {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: rgba(255, 255, 255, 0.74);
  margin: 30px 0 15px;
  font-weight: normal;
}

.heart {
  margin: 0 8px;
  display: inline-block;
  animation: simplePulse ease-in-out 1.1s infinite;
}

.gauge {
  font-family: Arial, Helvetica, sans-serif;
  background: #e7e7e7;
  box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.09),
    0 0 35px 5px rgba(255, 255, 255, 0.29);
  width: 200px;
  height: 100px;
  border-radius: 100px 100px 0 0;
  position: relative;
  overflow: hidden;
  /* safari fix */
  -webkit-transform-style: flat;
  -webkit-transform: translateZ(0px);
}
.gauge.min-scaled {
  transform: scale(0.5);
}

.gauge-center {
  content: "";
  color: #fff;
  width: 60%;
  height: 60%;
  background: #15222e;
  border-radius: 100px 100px 0 0;
  position: absolute;
  box-shadow: 0 -13px 15px -10px rgba(0, 0, 0, 0.28);
  right: 21%;
  bottom: 0;
  color: #fff;
}
.gauge-center::before {
  content: "840";
  font-size: 1.5em;
  width: 100%;
  padding: 3px 0 0 0;
  text-align: center;
  float: left;
  -webkit-font-smoothing: antialiased;
}
.gauge-center::after {
  content: "Score";
  width: 100%;
  float: left;
  opacity: 0.6;
  text-align: center;
}

.needle {
  width: 78px;
  height: 7px;
  background: #15222e;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 100%;
  border-top-right-radius: 5px;
  position: absolute;
  bottom: 4px;
  left: 20px;
  transform-origin: 100% 4px;
  animation: speed 5s infinite;
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.38);
}

.slice-colors .st {
  position: absolute;
  bottom: 0;
  width: 60px;
  height: 0;
  border-bottom: 80px solid #000;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
}
.slice-colors .st.slice-item:nth-child(1) {
  border-bottom-color: #1eaa59;
  left: -2px;
}
.slice-colors .st.slice-item:nth-child(2) {
  border-bottom-color: #9baa1e;
  transform: rotate(135deg);
  transform-origin: right;
  top: 12px;
  left: -27px;
}
.slice-colors .st.slice-item:nth-child(3) {
  border-bottom-color: #f1c40f;
  transform: rotate(179deg);
  transform-origin: right;
  top: -20px;
  left: -43px;
  border-bottom-width: 150px;
  border-left-width: 50px;
  border-right-width: 50px;
  width: 18px;
}
.slice-colors .st.slice-item:nth-child(4) {
  border-bottom-color: #e67e22;
  transform: rotate(219deg);
  transform-origin: right;
  top: -23px;
  left: 72px;
}
.slice-colors .st.slice-item:nth-child(5) {
  border-bottom-color: #e84c3d;
  transform: rotate(240deg);
  transform-origin: right;
  right: 47px;
}

@-webkit-keyframes speed {
  0% {
    transform: rotate(0);
  }
  40% {
    transform: rotate(180deg);
  }
  55% {
    transform: rotate(170deg);
  }
  75% {
    transform: rotate(180deg);
  }
}
@-webkit-keyframes simplePulse {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 0.98;
  }
}
</style>