<template>
  <div>
    <div class="hidden md:block lg:block xl:block">
      <div class="container px-5 py-2 mx-auto mt-28">
        <div class="flex flex-col text-center w-full mb-10">
          <h2
            class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
          >
            Demat Account Charges
          </h2>
          <h1
            class="sm:text-3xl md:text-3xl font-medium title-font text-indigo-900"
          >
            Bank Demat Account Charges Comparison, Best Demat Accounts
          </h1>
        </div>
        <div class="content-section bg-gray-100 rounded-xl">
          <div class="flex flex-row">
            <div class="flex flex-col">
              <h4 class="m-2 p-3 rounded-xl bg-white">
                <div class="flex flex-row">
                  <p class="text-indigo-900 font-bold">
                    Short Comparison On Loan Rates
                  </p>
                  <div class="ml-2 mt-0">
                    <svg
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </h4>
              <div class="p-2 w-full space-y-2">
                <div
                  class="h-14 bg-white flex items-center border-gray-200 border p-2 rounded-lg"
                  v-for="(item, index) in personalLoanDetails"
                  :key="index"
                >
                  <div
                    class="w-10 h-10 bg-gray-50 ring-2 ring-indigo-900 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  >
                    <p
                      class="text-center mt-2 font-bold text-indigo-900 uppercase"
                    >
                      {{ item.bankname.substring(0, 2) }}
                    </p>
                  </div>
                  <div class="flex-grow w-52">
                    <h2 class="text-indigo-900 title-font font-bold">
                      {{ item.bankname }}
                    </h2>
                    <div class="flex flex-row">
                      <svg
                        class="w-3 text-green-600 shadow-xl h-3 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <small class="text-gray-500 font-semibold"
                        >Personal Loan</small
                      >
                    </div>
                  </div>
                  <div class="flex-grow ml-4 space-y-1 mt-1">
                    <h2 class="text-gray-900 title-font font-bold text-xs">
                      {{ item.interest_rates }}
                    </h2>
                    <p class="text-gray-500 text-xs font-bold">
                      {{ item.processing_fee }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="table-content ml-10">
              <div class="flex flex-row space-x-28 mt-2">
                <p class="text-gray-600 font-semibold">Broker</p>
                <p class="text-gray-600 font-semibold w-40">Acct Opening Fee</p>
                <p class="text-gray-600 font-semibold">Demat AMC</p>
                <p class="text-gray-600 font-semibold">
                  Brokerage (Eq Delivery)
                </p>
              </div>
              <div class="flex flex-col mt-4">
                <div
                  class="h-14 bg-white flex mb-1 items-center border-gray-200 border p-2 rounded-xl"
                  v-for="(item, index) in dematAcctDetails_table"
                  :key="index"
                >
                  <div
                    class="w-6 h-6 bg-gray-50 ring-2 ring-indigo-900 object-cover object-center flex-shrink-0 rounded-full mr-2"
                  >
                    <p
                      class="text-center mt-1 font-bold text-xs text-indigo-900 uppercase"
                    >
                      {{ item.broker.substring(0, 2) }}
                    </p>
                  </div>
                  <div class="w-36">
                    <div class="flex-grow">
                      <p
                        class="text-indigo-900 title-font font-bold w-36 truncate"
                      >
                        {{ item.broker }}
                      </p>
                      <div class="flex flex-row">
                        <svg
                          class="w-3 text-green-600 shadow-xl h-3 mt-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <small class="text-gray-500 font-semibold w-36 truncate"
                          >Demat Account</small
                        >
                      </div>
                    </div>
                  </div>
                  <div class="w-28 ml-6">
                    <div class="flex-grow mt-1">
                      <div class="flex flex-col">
                        <!-- <div class="bg-gray-300 w-full rounded-sm h-2">
                    <div
                      class="bg-indigo-600 rounded-sm h-2"
                      :class="'w-' + item.loan_perc"
                    ></div>
                  </div> -->
                        <p class="text-green-700 title-font font-bold text-xs">
                          {{ item.acc_topening_fee }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-36 ml-28">
                    <div class="flex-grow space-y-1 mt-1">
                      <div class="flex flex-col">
                        <!-- <div class="bg-gray-300 w-full rounded-sm h-2">
                    <div
                      class="bg-indigo-600 rounded-sm h-2"
                      :class="'w-' + item.loan_perc"
                    ></div>
                  </div> -->
                        <p class="text-gray-900 title-font font-bold text-xs">
                          {{ item.demat_amc }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="w-28 ml-14">
                    <div class="flex-grow ml-4 space-y-1 mt-1">
                      <div class="flex flex-col">
                        <div class="bg-gray-300 w-full rounded-sm h-2">
                          <div
                            class="bg-indigo-600 rounded-sm h-2"
                            :class="'w-' + item.Brokerage"
                          ></div>
                        </div>
                        <p class="text-gray-900 title-font font-bold text-xs">
                          {{ item.Brokerage }}
                        </p>
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
    <div class="md:hidden lg:hidden xl:hidden">
      <div class="container px-5 py-20 mx-auto">
        <div class="flex flex-col text-center w-full mb-10">
          <h2
            class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
          >
            CURRENT DEMAT ACCOUNT RATES
          </h2>
          <h1 class="text-2xl font-semibold title-font mb-4 text-indigo-800">
            Demat Account Interest Rates Comparison, Best Personal Loan
          </h1>
          <p class="mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p>
        </div>
        <div class="pieChart w-full mx-auto">
          <div class="flex flex-col space-y-12">
            <div>
              <only-pie-chart-slider
                key="card-48488090"
                :cardkey="'card-86549' + 2"
                :cardcount="7"
                cardheight="100"
                cardwidth="100px !important"
                :spaceBetween="15"
                :showsPagination="false"
                :cardData="dematAcctDetails_table"
                :slidesPerView="3"
                cardRoundClass="rounded-md"
                :centeredSlides="true"
                :allowTouchMove="true"
                cardbackground="#FFF"
                :containerModifierClass="false"
              />
            </div>
            <div class="card-slider-for-intrest">
              <pie-chart-card-slider
                key="card-484884879"
                :cardkey="'card-787' + 2"
                :cardcount="7"
                cardheight="65"
                cardwidth="auto !important"
                :spaceBetween="20"
                :showsPagination="false"
                :cardData="dematAcctDetails_table"
                :slidesPerView="3"
                cardRoundClass="rounded-md"
                :centeredSlides="true"
                :allowTouchMove="true"
                cardbackground="#3730A3"
                :containerModifierClass="true"
              />
            </div>
          </div>
          <div class="summary-details">
            <p class="text-sm text-indigo-700 text-left font-extrabold pt-6">
              Summary Of Interest Rates
            </p>
            <div class="flex flex-col w-full">
              <div class="p-2 pl-0 w-full">
                <div
                  class="h-full flex items-center p-2 pl-0 rounded-lg border-b-2 border-gray-300 border-dashed"
                >
                  <div
                    class="w-10 h-10 bg-yellow-300 object-cover object-center flex-shrink-0 rounded-xl mr-4"
                  ></div>
                  <div class="flex flex-row space-x-7">
                    <div class="flex-grow mt-1">
                      <h2 class="text-gray-900 text-sm title-font font-bold">
                        HDFC Bank
                      </h2>
                      <p class="text-gray-500 text-sm">Credit Rate</p>
                    </div>
                    <div class="flex-grow mt-1">
                      <h2 class="text-gray-900 text-xs title-font font-bold">
                        (MPR)%
                      </h2>
                      <p class="text-green-800 text-semibold text-xs mt-1">
                        1.99% to 3.49%
                      </p>
                    </div>
                    <div class="flex-grow mt-1">
                      <h2 class="text-gray-900 text-xs title-font font-bold">
                        (APR)%
                      </h2>
                      <p class="text-indigo-800 text-semibold text-xs mt-1">
                        1.99% to 3.49%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-2 pt-0 pl-0 w-full">
                <div
                  class="h-full flex items-center p-2 pl-0 rounded-lg border-b-2 border-gray-300 border-dashed"
                >
                  <div
                    class="w-10 h-10 bg-indigo-300 object-cover object-center flex-shrink-0 rounded-xl mr-4"
                  ></div>
                  <div class="flex flex-row space-x-7">
                    <div class="flex-grow mt-1">
                      <h2 class="text-gray-900 text-sm title-font font-bold">
                        HDFC Bank
                      </h2>
                      <p class="text-gray-500 text-sm">Credit Rate</p>
                    </div>
                    <div class="flex-grow mt-1">
                      <h2 class="text-gray-900 text-xs title-font font-bold">
                        (MPR)%
                      </h2>
                      <p class="text-green-800 text-semibold text-xs mt-1">
                        1.99% to 3.49%
                      </p>
                    </div>
                    <div class="flex-grow mt-1">
                      <h2 class="text-gray-900 text-xs title-font font-bold">
                        (APR)%
                      </h2>
                      <p class="text-indigo-800 text-semibold text-xs mt-1">
                        1.99% to 3.49%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-2 pt-0 pl-0 w-full">
                <div
                  class="h-full flex items-center p-2 pl-0 rounded-lg border-b-2 border-gray-300 border-dashed"
                >
                  <div
                    class="w-10 h-10 bg-green-400 object-cover object-center flex-shrink-0 rounded-xl mr-4"
                  ></div>
                  <div class="flex flex-row space-x-7">
                    <div class="flex-grow mt-1">
                      <h2 class="text-gray-900 text-sm title-font font-bold">
                        HDFC Bank
                      </h2>
                      <p class="text-gray-500 text-sm">Credit Rate</p>
                    </div>
                    <div class="flex-grow mt-1">
                      <h2 class="text-gray-900 text-xs title-font font-bold">
                        (MPR)%
                      </h2>
                      <p class="text-green-800 text-semibold text-xs mt-1">
                        1.99% to 3.49%
                      </p>
                    </div>
                    <div class="flex-grow mt-1">
                      <h2 class="text-gray-900 text-xs title-font font-bold">
                        (APR)%
                      </h2>
                      <p class="text-indigo-800 text-semibold text-xs mt-1">
                        1.99% to 3.49%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-2 pt-0 pl-0 w-full">
                <div
                  class="h-full flex items-center p-2 pl-0 rounded-lg border-b-2 border-gray-300 border-dashed"
                >
                  <div
                    class="w-10 h-10 bg-yellow-600 object-cover object-center flex-shrink-0 rounded-xl mr-4"
                  ></div>
                  <div class="flex flex-row space-x-7">
                    <div class="flex-grow mt-1">
                      <h2 class="text-gray-900 text-sm title-font font-bold">
                        HDFC Bank
                      </h2>
                      <p class="text-gray-500 text-sm">Credit Rate</p>
                    </div>
                    <div class="flex-grow mt-1">
                      <h2 class="text-gray-900 text-xs title-font font-bold">
                        (MPR)%
                      </h2>
                      <p class="text-green-800 text-semibold text-xs mt-1">
                        1.99% to 3.49%
                      </p>
                    </div>
                    <div class="flex-grow mt-1">
                      <h2 class="text-gray-900 text-xs title-font font-bold">
                        (APR)%
                      </h2>
                      <p class="text-indigo-800 text-semibold text-xs mt-1">
                        1.99% to 3.49%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-2 pt-0 pl-0 w-full">
                <div class="h-full flex items-center p-2 pl-0 rounded-lg">
                  <div
                    class="w-10 h-10 bg-yellow-600 object-cover object-center flex-shrink-0 rounded-xl mr-4"
                  ></div>
                  <div class="flex flex-row space-x-7">
                    <div class="flex-grow mt-1">
                      <h2 class="text-gray-900 text-sm title-font font-bold">
                        HDFC Bank
                      </h2>
                      <p class="text-gray-500 text-sm">Credit Rate</p>
                    </div>
                    <div class="flex-grow mt-1">
                      <h2 class="text-gray-900 text-xs title-font font-bold">
                        (MPR)%
                      </h2>
                      <p class="text-green-800 text-semibold text-xs mt-1">
                        1.99% to 3.49%
                      </p>
                    </div>
                    <div class="flex-grow mt-1">
                      <h2 class="text-gray-900 text-xs title-font font-bold">
                        (APR)%
                      </h2>
                      <p class="text-indigo-800 text-semibold text-xs mt-1">
                        1.99% to 3.49%
                      </p>
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
</template>
<script>
export default {
  name: "CurrentPersonalLoanRate",
  data() {
    return {
      personalLoanDetails: [
        {
          bankname: "SBI Personal Loan Rates",
          interest_rates: "9.60%",
          processing_fee: "1.00%",
          loan_perc: 20,
        },
        {
          bankname: "Fullerton India",
          interest_rates: "9.60%",
          processing_fee: "1.00%",
          loan_perc: 10,
        },
        {
          bankname: "ICICI Bank Personal Rates",
          interest_rates: "9.60%",
          processing_fee: "1.00%",
          loan_perc: 15,
        },
        {
          bankname: "Karur Vysya Bank",
          interest_rates: "9.60%",
          processing_fee: "1.00%",
          process_fee_num: 10,
          loan_perc: "50",
        },
      ],
      dematAcctDetails_table: [
        {
          broker: "ICICI Direct",
          acc_topening_fee: "Rs 0",
          demat_amc: "Rs 700 (from 2nd year)",
          Brokerage: 20,
          active_clients: "1,289,023",
          avg_apr: 80,
          name: "SBI",
        },
        {
          broker: "HDFC Securities",
          acc_topening_fee: "Rs 999",
          demat_amc: "Rs 750",
          Brokerage: 10,
          active_clients: "889,126",
          avg_apr: 80,
          name: "SBI",
        },
        {
          broker: "Kotak Securities",
          acc_topening_fee: "Rs 750",
          demat_amc: "Rs 600",
          Brokerage: 25,
          active_clients: "4",
          avg_apr: 80,
          name: "SBI",
        },
        {
          broker: "AxisDirect",
          acc_topening_fee: "Rs 900",
          demat_amc: "Rs 650",
          Brokerage: 12,
          active_clients: "688,217",
          avg_apr: 80,
          name: "SBI",
        },
        {
          broker: "SBI Securities",
          acc_topening_fee: "Rs 850",
          demat_amc: "Rs 350",
          Brokerage: 2,
          active_clients: "415,014",
          avg_apr: 80,
          name: "SBI",
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>