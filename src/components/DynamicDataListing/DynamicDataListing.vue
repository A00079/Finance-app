<template>
  <section>
    <div class="hidden md:block lg:block xl:block">PC</div>
    <div class="md:hidden lg:hidden xl:hidden">
      <div class="container mx-auto">
        <div class="px-4">
          <h2
            class="text-xs text-indigo-800 text-left tracking-widest font-medium title-font mb-1"
          >
            CARDS FOR YOU
          </h2>
          <h1
            class="text-2xl font-semibold text-left title-font mb-4 text-indigo-800"
          >
            We Found 9 Credit Cards For You
          </h1>
          <div class="flex mt-4 justify-start">
            <div class="w-36 h-1 rounded-full bg-indigo-700 inline-flex"></div>
          </div>
        </div>
        <div class="box-list">
          <div class="flex flex-row flex-wrap justify-center mx-auto space-x-3">
            <div class="flex flex-col">
              <img
                src="/img/savings.png"
                class="bg-indigo-50 py-2 px-2 rounded-xl w-24 h-24 mx-auto"
              />
              <p class="text-sm text-indigo-700 font-bold text-center">key 1</p>
            </div>
            <div class="flex flex-col">
              <img
                src="/img/savings.png"
                class="bg-indigo-50 py-2 px-2 rounded-xl w-24 h-24 mx-auto"
              />
              <p class="text-sm text-indigo-700 font-bold text-center">key 1</p>
            </div>
            <div class="flex flex-col">
              <img
                src="/img/savings.png"
                class="bg-indigo-50 py-2 px-2 rounded-xl w-24 h-24 mx-auto"
              />
              <p class="text-sm text-indigo-700 font-bold text-center">key 1</p>
            </div>
            <div class="flex flex-col">
              <img
                src="/img/savings.png"
                class="bg-indigo-50 py-2 px-2 rounded-xl w-24 h-24 mx-auto"
              />
              <p class="text-sm text-indigo-700 font-bold text-center">key 1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "DynamicDataListing",
};
</script>
<style scoped>
</style>