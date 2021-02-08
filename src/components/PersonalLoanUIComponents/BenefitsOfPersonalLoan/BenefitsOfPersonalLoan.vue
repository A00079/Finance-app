<template>
  <div class="container px-5 py-10 mt-16 mx-auto">
    <div class="text-left mb-10 w-full">
      <h1
        class="sm:text-3xl md:text-3xl font-bold title-font text-indigo-900 mb-2"
      >
        BENEFITS OF USING A CREDIT CARD
      </h1>
      <p
        class="text-base leading-relaxed font-semibold text-left mx-auto text-gray-500s"
      >
        Below are some benefits of using credit cards.
      </p>
      <div class="flex mt-4 justify-start">
        <div class="w-36 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div class="benefits-of-credit-card">
      <div class="flex flex-row justify-between">
        <div class="flex flex-col space-y-4">
          <div class="flex flex-row space-x-4">
            <div
              class="p-4 w-40 pb-2 bg-indigo-800 border-2 border-gray-100 shadow-sm flex flex-col rounded-lg"
            >
              <img src="/img/debit-card.png" class="w-12 h-12 mx-auto" />
              <small class="text-center text-xm mt-7 text-white font-semibold">
                EASE OF CREDIT
              </small>
            </div>
            <div
              class="p-4 w-40 pb-2 bg-white border-2 border-gray-100 shadow-xsml flex flex-col rounded-lg"
            >
              <img src="/img/payment.png" class="w-12 h-12 mx-auto" />
              <small
                class="text-center text-xm mt-2 text-indigo-800 font-semibold"
              >
                RECURRING PAYMENTS
              </small>
            </div>
          </div>
          <div class="flex flex-row space-x-4">
            <div
              class="p-4 w-40 pb-2 bg-white border-2 border-gray-100 shadow-sm flex flex-col rounded-lg"
            >
              <img src="/img/cashback-benefit.png" class="w-12 h-12 mx-auto" />
              <small
                class="text-center text-xm mt-7 text-indigo-800 font-semibold"
              >
                CASHBACKS
              </small>
            </div>
            <div
              class="p-4 w-40 pb-2 bg-indigo-800 border-2 border-gray-100 shadow-sm flex flex-col rounded-lg"
            >
              <img src="/img/reward-card.png" class="w-12 h-12 mx-auto" />
              <small class="text-center text-xm mt-2 text-white font-semibold">
                REWARDS PROGRAMS
              </small>
            </div>
          </div>
        </div>
        <div class="big-preview">
          <div class="flex flex-col px-28 ml-60">
            <div>
              <img src="/img/reward-card.png" class="w-40 h-40 mx-auto" />
            </div>
            <h4 class="text-md font-bold text-indigo-800 text-center">REWARDS PROGRAMS</h4>
            <div class="flex mt-2 mb-2 justify-center">
              <div
                class="w-36 h-1 rounded-full bg-indigo-500 inline-flex"
              ></div>
            </div>
            <div>
              <p class="text-xm w-full text-gray-700 font-semibold text-center">
                There is usually a notion that credit cards are only used to make big one-time payments, but one can also add a credit card to their monthly biller and make recurring payments like electricity bills, gas bill, phone etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BenefitsOfCreditCard",
};
</script>
<style scoped>
</style>