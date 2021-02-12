<template>
  <section>
    <div class="container px-5 py-2 mx-auto">
      <div class="flex flex-col text-center w-full">
        <h2
          class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 text-left"
        >
          Credit Score Free
        </h2>
        <h1
          class="text-left text-1xl font-medium title-font mb-2 text-indigo-900 mb-4"
        >
          Get Credit Score For Free
        </h1>
      </div>
    </div>
    <div class="p-2 w-full  px-14">
      <div
        class="h-full flex items-center bg-indigo-100 border-gray-200 shadow-xl border p-4 rounded-2xl"
      >
        <div class="flex-grow">
          <p class="text-pink-500 font-semibold mb-2">UI Design</p>
          <h2 class="text-gray-900 title-font font-medium">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <div class="flex flex-row justify-between">
            <p class="text-gray-500 text-xs mt-4">UI Design simple work</p>
            <button class="py-3 px-3 bg-pink-500 rounded-xl">
              <svg
                class="w-4 h-4 text-white"
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
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container px-5 py-2 mx-auto mt-8">
      <div class="flex flex-col text-center w-full">
        <h1
          class="text-left text-1xl font-medium title-font mb-2 text-indigo-900 mb-4"
        >
          Features For You
        </h1>
      </div>
    </div>
    <div class="Ads-Banner-Mobile mt-2">
      <card-slider
        :cardcount="7"
        :cardheight="110"
        :cardwidth="160"
        :spaceBetween="20"
        :showsPagination="true"
        :cardData="adsDetails"
        :slidesPerView="2"
        :centeredSlides="true"
        :allowTouchMove="true"
      />
    </div>
  </section>
</template>
<script>
export default {
  name: "BigAdsBanner",
  data() {
    return {
      adsDetails: [
        { title: "Credit Card", img: "credit-card-home.png" },
        { title: "Home Loan", img: "home-loan-home.png" },
        { title: "Personal Loan", img: "personalloan.png" },
        { title: "Demat Account", img: "demat-acct-home.png" },
        { title: "Saving Account", img: "savings.png" },
        { title: "Credit Score", img: "credit-score.png" },
      ],
    };
  },
};
</script>
<style scoped>
</style>