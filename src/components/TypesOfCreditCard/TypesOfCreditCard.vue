<template>
  <section>
    <div class="hidden md:block lg:block xl:block">
      <div class="container px-5 py-16 mx-auto">
        <div class="text-right mb-10 w-full">
          <h1
            class="sm:text-3xl md:text-3xl font-bold title-font text-indigo-900 mb-2"
          >
            Types Of Credit Cards
          </h1>
          <p
            class="text-base leading-relaxed font-semibold text-right mx-auto text-gray-500s"
          >
            Below are some different types of credit cards.
          </p>
          <div class="flex mt-4 justify-end">
            <div class="w-36 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div class="types-of-credit-card">
          <div class="flex flex-row justify-between">
            <div class="flex flex-col">
              <div class="p-4 flex flex-col text-center items-center">
                <div
                  class="w-14 h-14 inline-flex items-center justify-center rounded-md bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0"
                >
                  <img src="/img/credit-card.png" class="w-10 h-10" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-indigo-900 text-lg title-font font-bold mb-1">
                    Standard CREDIT CARD
                  </h2>
                  <small
                    class="leading-relaxed text-xm text-gray-500 font-bold"
                  >
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </small>
                </div>
              </div>
              <div class="p-4 flex flex-col text-center items-center">
                <div
                  class="w-12 h-12 inline-flex items-center justify-center rounded-md bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0"
                >
                  <img src="/img/travelling.png" class="w-10 h-10" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-indigo-900 text-lg title-font font-bold mb-1">
                    Travel CREDIT CARD
                  </h2>
                  <small
                    class="leading-relaxed text-xm text-gray-500 font-bold"
                  >
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </small>
                </div>
              </div>
              <div class="p-4 flex flex-col text-center items-center">
                <div
                  class="w-12 h-12 inline-flex items-center justify-center rounded-md bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0"
                >
                  <img src="/img/cashback.png" class="w-10 h-10" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-indigo-900 text-lg title-font font-bold mb-1">
                    CashBack CREDIT CARD
                  </h2>
                  <small
                    class="leading-relaxed text-xm text-gray-500 font-bold"
                  >
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </small>
                </div>
              </div>
            </div>
            <div class="mt-24">
              <lottie
                :options="defaultOptions"
                :height="350"
                :width="350"
                v-on:animCreated="handleAnimation"
              />
            </div>
            <div>
              <div class="p-4 flex flex-col text-center items-center">
                <div
                  class="w-12 h-12 inline-flex items-center justify-center rounded-md bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0"
                >
                  <img src="/img/gas-pump.png" class="w-10 h-10" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-indigo-900 text-lg title-font font-bold mb-1">
                    Fuel CREDIT CARD
                  </h2>
                  <small
                    class="leading-relaxed text-xm text-gray-500 font-bold"
                  >
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </small>
                </div>
              </div>
              <div class="p-4 flex flex-col text-center items-center">
                <div
                  class="w-12 h-12 inline-flex items-center justify-center rounded-md bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0"
                >
                  <img src="/img/trophy.png" class="w-10 h-10" />
                </div>
                <div class="flex-grow">
                  <h2
                    class="text-indigo-900 text-lg title-font font-medium mb-1"
                  >
                    Reward CREDIT CARD
                  </h2>
                  <small
                    class="leading-relaxed text-xm text-gray-500 font-bold"
                  >
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </small>
                </div>
              </div>
              <div class="p-4 flex flex-col text-center items-center">
                <div
                  class="w-12 h-12 inline-flex items-center justify-center rounded-md bg-indigo-100 text-indigo-500 mb-2 flex-shrink-0"
                >
                  <img src="/img/brand.png" class="w-10 h-10" />
                </div>
                <div class="flex-grow">
                  <h2
                    class="text-indigo-900 text-lg title-font font-medium mb-1"
                  >
                    Co-Branded CREDIT CARD
                  </h2>
                  <small
                    class="leading-relaxed text-xm text-gray-500 font-bold"
                  >
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-credit-type md:hidden lg:hidden xl:hidden mt-16">
      <div class="container mx-auto">
        <div class="px-4">
          <h2
            class="text-xs text-indigo-800 text-left tracking-widest font-medium title-font mb-1"
          >
            Credit Card Types
          </h2>
          <h1
            class="text-2xl font-semibold text-left title-font mb-4 text-indigo-800"
          >
            Types Of Credit Cards
          </h1>
          <div class="flex mt-4 justify-start">
            <div class="w-36 h-1 rounded-full bg-indigo-700 inline-flex"></div>
          </div>
        </div>
        <div class="credit-card-container">
          <div class="flex flex-row justify-center w-full mt-8">
            <div
              class="h-full w-1/3 flex flex-col items-center rounded-lg space-y-1"
            >
              <div
                class="w-16 h-16 bg-white object-cover object-center flex-shrink-0 rounded-xl"
                style="background: #1eaa59"
              ></div>
              <div class="text-center">
                <h2 class="text-gray-800 text-center text-sm font-bold">
                  Excellent
                </h2>
              </div>
            </div>
            <div
              class="h-full w-1/3 flex flex-col items-center rounded-lg space-y-1"
            >
              <div
                class="w-16 h-16 bg-white object-cover object-center flex-shrink-0 rounded-xl"
                style="background: #1eaa59"
              ></div>
              <div class="text-center">
                <h2 class="text-gray-800 text-center text-sm font-bold">
                  Excellent
                </h2>
              </div>
            </div>
            <div
              class="h-full w-1/3 flex flex-col items-center rounded-lg space-y-1"
            >
              <div
                class="w-16 h-16 bg-white object-cover object-center flex-shrink-0 rounded-xl"
                style="background: #1eaa59"
              ></div>
              <div class="text-center">
                <h2 class="text-gray-800 text-center text-sm font-bold">
                  Excellent
                </h2>
              </div>
            </div>
          </div>
          <div class="flex flex-row justify-center w-full mt-4">
            <div
              class="h-full w-1/3 flex flex-col items-center rounded-lg space-y-1"
            >
              <div
                class="w-16 h-16 bg-white object-cover object-center flex-shrink-0 rounded-xl"
                style="background: #1eaa59"
              ></div>
              <div class="text-center">
                <h2 class="text-gray-800 text-center text-sm font-bold">
                  Excellent
                </h2>
              </div>
            </div>
            <div
              class="h-full w-1/3 flex flex-col items-center rounded-lg space-y-1"
            >
              <div
                class="w-16 h-16 bg-white object-cover object-center flex-shrink-0 rounded-xl"
                style="background: #1eaa59"
              ></div>
              <div class="text-center">
                <h2 class="text-gray-800 text-center text-sm font-bold">
                  Excellent
                </h2>
              </div>
            </div>
            <div
              class="h-full w-1/3 flex flex-col items-center rounded-lg space-y-1"
            >
              <div
                class="w-16 h-16 bg-white object-cover object-center flex-shrink-0 rounded-xl"
                style="background: #1eaa59"
              ></div>
              <div class="text-center">
                <h2 class="text-gray-800 text-center text-sm font-bold">
                  Excellent
                </h2>
              </div>
            </div>
          </div>
          <div class="credit-details-slider">
            <div class="px-4 mt-12">
              <h2
                class="text-xs text-indigo-800 text-center tracking-widest font-medium title-font mb-1"
              >
                Card Discription
              </h2>
              <h1
                class="text-2xl font-semibold text-center title-font mb-4 text-indigo-800"
              >
                Single Credit Card Types Discription
              </h1>
              <div class="flex mt-4 justify-center">
                <div
                  class="w-36 h-1 rounded-full bg-indigo-700 inline-flex"
                ></div>
              </div>
            </div>
            <div class="mt-10">
              <card-slider
                key="card-484884"
                :cardkey="'card-1' + 2"
                :cardcount="7"
                cardheight="260"
                cardwidth="310"
                :spaceBetween="20"
                :showsPagination="false"
                :cardData="featureDetails"
                :slidesPerView="2"
                cardRoundClass="rounded-md"
                :centeredSlides="false"
                :allowTouchMove="true"
                cardbackground="#6E21D1"
                :containerModifierClass="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import animationData from "@/assets/animations/typesofcreditcard.json";

export default {
  name: "TypesOfCreditCard",
  data() {
    return {
      defaultOptions: { animationData: animationData, loop: true },
      featureDetails: [
        { title: "Welcome Gift", img: "gift.png" },
        { title: "Fuel Surcharge Waiver", img: "gas-pump.png" },
        { title: "Cashback Benefits", img: "cashback-benefit.png" },
        { title: "Travel Benefits", img: "travel-bag.png" },
        { title: "Airport Lounge Access", img: "travelling.png" },
        { title: "Insurance Coverage", img: "lifeinsurance.png" },
      ],
    };
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
</style>