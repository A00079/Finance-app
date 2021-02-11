<template>
  <section>
    <div class="hidden md:block lg:block xl:block">
      <div class="relative">
        <div class="grid p-10 grid-cols-1 md:grid-cols-3 place-items-center">
          <div
            class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
          >
            <div
              class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
            >
              <h1
                class="title-font sm:text-4xl text-4xl mb-4 font-medium text-indigo-900"
              >
                Our Products
              </h1>
              <p class="mb-8 leading-relaxed text-md text-gray-600 font-medium">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
              <p
                class="mb-8 leading-relaxed text-md text-gray-800 font-semibold"
              >
                Fast and Reliable Way To Check Your Credit Score.
              </p>
              <p
                class="mb-2 leading-relaxed text-md text-gray-900 font-semibold"
              >
                Our Best Products
              </p>
              <div class="flex justify-center">
                <div
                  class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"
                ></div>
              </div>
            </div>
          </div>
          <div class="p-4 w-96 mr-36">
            <div
              class="flex rounded-lg h-full bg-white p-8 flex-col border-2 border-gray-200 shadow-xl"
            >
              <div class="flex items-center mb-3">
                <div
                  class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0"
                >
                  <img :src="`/img/${cardImg}`" class="w-16 h-16" />
                </div>
                <h2 class="text-gray-900 text-lg title-font font-medium">
                  {{ cardTitle }}
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center"
                  >Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-3 place-items-center gap-10">
              <div
                @mouseover="
                  handleContentChange('Credit Card', 'credit-card.svg')
                "
                class="bg-white w-28 h-28 rounded-2xl border-2 shadow-xl border-gray-200 cursor-pointer"
              >
                <div class="flex-column space-y-2 py-3">
                  <img
                    src="/img/credit-card.svg"
                    alt=""
                    class="h-12 w-12 mx-auto"
                  />
                  <div class="text-center pt-2 font-medium text-sm">
                    Credit Card
                  </div>
                </div>
              </div>
              <div class="flex-column space-y-6">
                <div
                  @mouseover="
                    handleContentChange('Health Care', 'healthcare.svg')
                  "
                  class="bg-white w-28 h-28 rounded-2xl border-2 shadow-xl border-gray-200 cursor-pointer"
                >
                  <div class="flex-column space-y-2 py-3">
                    <img
                      src="/img/healthcare.svg"
                      alt=""
                      class="h-12 w-12 mx-auto"
                    />
                    <div class="text-center pt-2 font-medium text-sm">
                      Health Care
                    </div>
                  </div>
                </div>
                <!-- <div class="container bg-gray-200 w-32 h-32">
              <div class="overlay bg-red-500 w-32 h-32">
                this is hovered text
              </div>
            </div> -->
                <div
                  @mouseover="
                    handleContentChange('Personal Loan', 'personalloan.png')
                  "
                  class="bg-white w-28 h-28 rounded-2xl border-2 shadow-xl border-gray-200 cursor-pointer"
                >
                  <div class="flex-column space-y-2 py-3">
                    <img
                      src="/img/personalloan.png"
                      alt=""
                      class="h-12 w-12 mx-auto"
                    />
                    <div class="text-center pt-0 font-medium text-sm">
                      Personal <br />Loan
                    </div>
                  </div>
                </div>
                <div
                  @mouseover="handleContentChange('Home Loan', 'homeloan.png')"
                  class="bg-white w-28 h-28 rounded-2xl border-2 shadow-xl border-gray-200 cursor-pointer"
                >
                  <div class="flex-column space-y-2 py-3">
                    <img
                      src="/img/homeloan.png"
                      alt=""
                      class="h-12 w-12 mx-auto"
                    />
                    <div class="text-center pt-2 font-medium text-sm">
                      Home Loan
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="flex-column space-y-6">
                  <div
                    @mouseover="
                      handleContentChange('Life Insurance', 'lifeinsurance.png')
                    "
                    class="bg-white w-28 h-28 rounded-2xl border-2 shadow-xl border-gray-200 cursor-pointer"
                  >
                    <div class="flex-column space-y-2 py-3">
                      <img
                        src="/img/lifeinsurance.png"
                        alt=""
                        class="h-12 w-12 mx-auto"
                      />
                      <div class="text-center pt-0 font-medium text-sm">
                        Life <br />Insurance
                      </div>
                    </div>
                  </div>
                  <div
                    @mouseover="
                      handleContentChange('Savings Account', 'savings.png')
                    "
                    class="bg-white w-28 h-28 rounded-2xl border-2 shadow-xl border-gray-200 cursor-pointer"
                  >
                    <div class="flex-column space-y-2 py-3">
                      <img
                        src="/img/savings.png"
                        alt=""
                        class="h-12 w-12 mx-auto"
                      />
                      <div class="text-center pt-0 font-medium text-sm">
                        Savings <br />Account
                      </div>
                    </div>
                  </div>
                  <div
                    @mouseover="
                      handleContentChange('Mutual Funds', 'homeloan.png')
                    "
                    class="bg-white w-28 h-28 rounded-2xl border-2 shadow-xl border-gray-200 cursor-pointer"
                  >
                    <div class="flex-column space-y-2 py-3">
                      <img
                        src="/img/homeloan.png"
                        alt=""
                        class="h-12 w-12 mx-auto"
                      />
                      <div class="text-center pt-2 font-medium text-sm">
                        Mutual Funds
                      </div>
                    </div>
                  </div>
                  <div
                    @mouseover="
                      handleContentChange('Demat Account', 'growth.png')
                    "
                    class="bg-white w-28 h-28 rounded-2xl border-2 shadow-xl border-gray-200 cursor-pointer"
                  >
                    <div class="flex-column space-y-2 py-3">
                      <img
                        src="/img/growth.png"
                        alt=""
                        class="h-12 w-12 mx-auto"
                      />
                      <div class="text-center pt-2 font-medium text-sm">
                        Demat Account
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          style="z-index: -1; height: 540px; width: 600px"
          src="/img/rightbluewave.png"
          class="absolute top-10 right-0"
        />
      </div>
    </div>
    <div class="md:hidden lg:hidden xl:hidden mt-3">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-3">
          <h2
            class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
          >
            OUR MAIN PRODUCTS
          </h2>
          <h1 class="text-3xl font-medium title-font mb-4 text-indigo-900 mb-4">
            Our Products
          </h1>
        </div>
        <div class="product-content">
          <div class="w-full mb-10 px-0">
            <div class="flex flex-col">
              <div class="p-0 w-52 -mx-5 mb-1">
                <div
                  class="h-full bg-pink-500 flex items-center border-gray-200 border p-3 rounded-md"
                >
                  <div class="flex-grow">
                    <h2 class="text-white title-font font-medium">
                      Holden Caulfield
                    </h2>
                    <p class="text-white">UI Designer</p>
                  </div>
                  <img
                    alt="team"
                    class="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full ml-0"
                    src="https://dummyimage.com/80x80"
                  />
                </div>
              </div>
              <div
                class="rounded-3xl w-52 mx-auto bg-white shadow-xl border-2 border-gray-200 overflow-hidden"
              >
                <img
                  alt="content"
                  class="h-48 w-48 mx-auto"
                  src="/img/ourproduct.png"
                />
              </div>
              <div class="p-0 w-full mt-1">
                <div
                  style="float: right"
                  class="h-full -mr-5 bg-pink-500 flex items-center border-gray-200 border p-3 rounded-md"
                >
                  <img
                    alt="team"
                    class="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-2"
                    src="https://dummyimage.com/80x80"
                  />
                  <div class="flex-grow">
                    <h2 class="text-white title-font font-medium">
                      Holden Caulfield
                    </h2>
                    <p class="text-white">UI Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <h2
              class="title-font text-center text-2xl font-medium text-indigo-700 mt-8 mb-3"
            >
              Advance Feature Products
            </h2>
            <p class="leading-relaxed text-center text-base">
              Williamsburg occupy sustainable snackwave gochujang. Pinterest
              cornhole brunch, slow-carb neutra irony.
            </p>
            <div class="flex w-full px-24 mx-auto rounded mt-6">
              <button
                @click="toggleProduct('short')"
                class="py-1 px-6 rounded border-2 border-indigo-500 mx-auto  focus:outline-none"
                :class="shortProduct?'bg-indigo-500 text-white': 'text-gray-700'"
              >
                Short
              </button>
              <button
                @click="toggleProduct('summary')"
                class="py-1 border-2 rounded border-indigo-500  mx-auto px-4 focus:outline-none"
                :class="summaryProduct?'bg-indigo-500 text-white': 'text-gray-700'"
              >
                Summary
              </button>
            </div>
          </div>
          <div class="summary-product" v-show="summaryProduct">
            <div class="flex flex-row justify-between">
              <div
                class="left-panel bg-white -mx-5 rounded-md border-2 border-gray-200 shadow-xl"
              >
                <div class="flex flex-col">
                  <div
                    class="flex flex-col p-2 border-b-2 border-dashed border-gray-200"
                  >
                    <img src="/img/credit-card.svg" class="w-10 h-10 mx-auto" />
                    <small class="text-gray-900 font-bold text-xs text-center"
                      >Credit Card</small
                    >
                  </div>
                  <div
                    class="flex flex-col p-2 border-b-2 border-dashed border-gray-200"
                  >
                    <img src="/img/credit-card.svg" class="w-10 h-10 mx-auto" />
                    <small class="text-gray-900 font-bold text-xs text-center"
                      >Credit Card</small
                    >
                  </div>
                  <div
                    class="flex flex-col p-2 border-b-2 border-dashed border-gray-200"
                  >
                    <img src="/img/credit-card.svg" class="w-10 h-10 mx-auto" />
                    <small class="text-gray-900 font-bold text-xs text-center"
                      >Credit Card</small
                    >
                  </div>
                  <div class="flex flex-col p-2">
                    <img src="/img/credit-card.svg" class="w-10 h-10 mx-auto" />
                    <small class="text-gray-900 font-bold text-xs text-center"
                      >Credit Card</small
                    >
                  </div>
                </div>
              </div>
              <div class="middle-panel">
                <img src="/img/credit-card.svg" class="w-24 h-24" />
              </div>
              <div
                class="right-panel bg-white -mr-5 rounded-md border-2 border-gray-200 shadow-xl"
              >
                <div class="flex flex-col">
                  <div
                    class="flex flex-col p-2 border-b-2 border-dashed border-gray-200"
                  >
                    <img src="/img/credit-card.svg" class="w-10 h-10 mx-auto" />
                    <small class="text-gray-900 font-bold text-xs text-center"
                      >Credit Card</small
                    >
                  </div>
                  <div
                    class="flex flex-col p-2 border-b-2 border-dashed border-gray-200"
                  >
                    <img src="/img/credit-card.svg" class="w-10 h-10 mx-auto" />
                    <small class="text-gray-900 font-bold text-xs text-center"
                      >Credit Card</small
                    >
                  </div>
                  <div
                    class="flex flex-col p-2 border-b-2 border-dashed border-gray-200"
                  >
                    <img src="/img/credit-card.svg" class="w-10 h-10 mx-auto" />
                    <small class="text-gray-900 font-bold text-xs text-center"
                      >Credit Card</small
                    >
                  </div>
                  <div class="flex flex-col p-2">
                    <img src="/img/credit-card.svg" class="w-10 h-10 mx-auto" />
                    <small class="text-gray-900 font-bold text-xs text-center"
                      >Credit Card</small
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="shortProduct">
            <div class="grid grid-cols-3 place-items-center gap-10">
              <div
                @mouseover="
                  handleContentChange('Credit Card', 'credit-card.svg')
                "
                class="bg-white w-28 h-28 rounded-2xl border-2 shadow-xl border-gray-200 cursor-pointer"
              >
                <div class="flex-column space-y-2 py-3">
                  <img
                    src="/img/credit-card.svg"
                    alt=""
                    class="h-12 w-12 mx-auto"
                  />
                  <div class="text-center pt-2 font-medium text-sm">
                    Credit Card
                  </div>
                </div>
              </div>
              <div class="flex-column space-y-6">
                <div
                  @mouseover="
                    handleContentChange('Health Care', 'healthcare.svg')
                  "
                  class="bg-white w-28 h-28 rounded-2xl border-2 shadow-xl border-gray-200 cursor-pointer"
                >
                  <div class="flex-column space-y-2 py-3">
                    <img
                      src="/img/healthcare.svg"
                      alt=""
                      class="h-12 w-12 mx-auto"
                    />
                    <div class="text-center pt-2 font-medium text-sm">
                      Health Care
                    </div>
                  </div>
                </div>
                <!-- <div class="container bg-gray-200 w-32 h-32">
              <div class="overlay bg-red-500 w-32 h-32">
                this is hovered text
              </div>
            </div> -->
                <div
                  @mouseover="
                    handleContentChange('Personal Loan', 'personalloan.png')
                  "
                  class="bg-white w-28 h-28 rounded-2xl border-2 shadow-xl border-gray-200 cursor-pointer"
                >
                  <div class="flex-column space-y-2 py-3">
                    <img
                      src="/img/personalloan.png"
                      alt=""
                      class="h-12 w-12 mx-auto"
                    />
                    <div class="text-center pt-0 font-medium text-sm">
                      Personal <br />Loan
                    </div>
                  </div>
                </div>
                <div
                  @mouseover="handleContentChange('Home Loan', 'homeloan.png')"
                  class="bg-white w-28 h-28 rounded-2xl border-2 shadow-xl border-gray-200 cursor-pointer"
                >
                  <div class="flex-column space-y-2 py-3">
                    <img
                      src="/img/homeloan.png"
                      alt=""
                      class="h-12 w-12 mx-auto"
                    />
                    <div class="text-center pt-2 font-medium text-sm">
                      Home Loan
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="flex-column space-y-6">
                  <div
                    @mouseover="
                      handleContentChange('Life Insurance', 'lifeinsurance.png')
                    "
                    class="bg-white w-28 h-28 rounded-2xl border-2 shadow-xl border-gray-200 cursor-pointer"
                  >
                    <div class="flex-column space-y-2 py-3">
                      <img
                        src="/img/lifeinsurance.png"
                        alt=""
                        class="h-12 w-12 mx-auto"
                      />
                      <div class="text-center pt-0 font-medium text-sm">
                        Life <br />Insurance
                      </div>
                    </div>
                  </div>
                  <div
                    @mouseover="
                      handleContentChange('Savings Account', 'savings.png')
                    "
                    class="bg-white w-28 h-28 rounded-2xl border-2 shadow-xl border-gray-200 cursor-pointer"
                  >
                    <div class="flex-column space-y-2 py-3">
                      <img
                        src="/img/savings.png"
                        alt=""
                        class="h-12 w-12 mx-auto"
                      />
                      <div class="text-center pt-0 font-medium text-sm">
                        Savings <br />Account
                      </div>
                    </div>
                  </div>
                  <div
                    @mouseover="
                      handleContentChange('Mutual Funds', 'homeloan.png')
                    "
                    class="bg-white w-28 h-28 rounded-2xl border-2 shadow-xl border-gray-200 cursor-pointer"
                  >
                    <div class="flex-column space-y-2 py-3">
                      <img
                        src="/img/homeloan.png"
                        alt=""
                        class="h-12 w-12 mx-auto"
                      />
                      <div class="text-center pt-2 font-medium text-sm">
                        Mutual Funds
                      </div>
                    </div>
                  </div>
                  <div
                    @mouseover="
                      handleContentChange('Demat Account', 'growth.png')
                    "
                    class="bg-white w-28 h-28 rounded-2xl border-2 shadow-xl border-gray-200 cursor-pointer"
                  >
                    <div class="flex-column space-y-2 py-3">
                      <img
                        src="/img/growth.png"
                        alt=""
                        class="h-12 w-12 mx-auto"
                      />
                      <div class="text-center pt-2 font-medium text-sm">
                        Demat Account
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "OurProducts",
  data() {
    return {
      cardTitle: "Health Care",
      cardImg: "healthcare.svg",
      shortProduct: false,
      summaryProduct: true,
    };
  },
  methods: {
    handleContentChange(title, img) {
      this.cardTitle = title;
      this.cardImg = img;
    },
    toggleProduct(section){
      if(section == 'short'){
        this.shortProduct = true;
        this.summaryProduct = false;
      }
      if(section == 'summary'){
        this.shortProduct = false;
        this.summaryProduct = true;
      }
    }
  },
};
</script>
<style scoped>
.container {
  position: relative;
  width: 100%;
}
.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ccc;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.3s linear;
}
.container:hover .overlay {
  height: 100%;
}
</style>