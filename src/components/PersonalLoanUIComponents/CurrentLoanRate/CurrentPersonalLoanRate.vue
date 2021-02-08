<template>
  <div class="container px-5 py-2 mx-auto mt-28">
    <div class="flex flex-col text-center w-full mb-10">
      <h2
        class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
      >
        Current Personal Loan Rates
      </h2>
      <h1
        class="sm:text-3xl md:text-3xl font-medium title-font text-indigo-900"
      >
        Personal Loan Interest Rates Comparison, Best Personal Loan
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
                <p class="text-center mt-2 font-bold text-indigo-900 uppercase">
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
          <div class="flex flex-row space-x-56 mt-2">
            <p class="text-gray-600 font-semibold">Bank</p>
            <p class="text-gray-600 font-semibold">
              Personal Loan Interest Rates
            </p>
            <p class="text-gray-600 font-semibold pr-10">Processing Fee</p>
          </div>
          <div class="flex flex-col mt-4">
            <div
              class="h-14 bg-white flex mb-1 items-center border-gray-200 border p-2 rounded-xl"
              v-for="(item, index) in personalLoanDetails_table"
              :key="index"
            >
              <div
                class="w-10 h-10 bg-gray-50 ring-2 ring-indigo-900 object-cover object-center flex-shrink-0 rounded-full mr-4"
              >
                <p class="text-center mt-2 font-bold text-indigo-900 uppercase">
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
                <div class="flex flex-col">
                  <div class="bg-gray-300 w-full rounded-sm h-2">
                    <div
                      class="bg-indigo-600 rounded-sm h-2"
                      :class="'w-' + item.loan_perc"
                    ></div>
                  </div>
                  <p class="text-gray-900 title-font font-bold text-xs">
                    {{ item.interest_rates }}
                  </p>
                </div>
              </div>
              <div class="flex-grow ml-64 space-y-1 mt-1">
                <div>
                  <vc-donut
                    class="mt-0 mr-10"
                    background="white"
                    foreground="grey"
                    :size="30"
                    unit="px"
                    :thickness="25"
                    :has-legend="false"
                    legend-placement="top"
                    :sections="[
                      { value: item.process_fee_num, color: '#F15A24' },
                    ]"
                    :total="100"
                    :start-angle="270"
                    :auto-adjust-text-size="true"
                    @section-click="handleSectionClick"
                  >
                    <!-- <small class="text-xs font-bold text-red-500">{{item.processing_fee}}</small> -->
                  </vc-donut>
                </div>
                <div>
                    <p class="ml-7 text-gray-900 title-font font-bold text-xs">
                    {{ item.processing_fee }}
                  </p>
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
      personalLoanDetails_table: [
        {
          bankname: "SBI Personal Loan Rates",
          interest_rates: "9.60%",
          processing_fee: "1.00%",
          process_fee_num: 20,
          loan_perc: "4",
        },
        {
          bankname: "Fullerton India",
          interest_rates: "9.60%",
          processing_fee: "1.00%",
          process_fee_num: 50,
          loan_perc: "9",
        },
        {
          bankname: "ICICI Bank Personal Rates",
          interest_rates: "9.60%",
          processing_fee: "1.00%",
          process_fee_num: 5,
          loan_perc: "7",
        },
        {
          bankname: "Karur Vysya Bank",
          interest_rates: "9.60%",
          processing_fee: "1.00%",
          process_fee_num: 60,
          loan_perc: "5",
        },
        {
          bankname: "Standard Chartered Bank",
          interest_rates: "9.60%",
          processing_fee: "1.00%",
          process_fee_num: 25,
          loan_perc: "10",
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>