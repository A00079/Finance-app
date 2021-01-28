<template>
  <div>
    <div class="grid p-10 grid-cols-1 md:grid-cols-2 place-items-center">
      <div class="capitalize text-gray-600 text-xl">
        Our products
      </div>
      <div>
        <div class="grid grid-cols-3 place-items-center gap-10">
          <div class="bg-gray-200 w-24 h-24 rounded-md">
            <div class="flex-column space-y-2 py-3">
              <img src="/img/credit-card.svg" alt="" class="h-8 w-8 mx-auto" />
              <div class="text-center">
                Credit card
              </div>
            </div>
          </div>
          <div class="flex-column space-y-6">
            <div class="bg-gray-200 w-32 h-32 rounded-md">
              <div class="flex-column space-y-2 py-3">
                <img src="/img/healthcare.svg" alt="" class="h-8 w-8 mx-auto" />
                <div class="text-center">
                  Health Care
                </div>
              </div>
            </div>
            <div class="container bg-gray-200 w-32 h-32 ">
              <div class="overlay bg-red-500 w-32 h-32">
                this is hovered text
              </div>
            </div>
            <div class="bg-gray-200 w-32 h-32 rounded-md"></div>
          </div>
          <div>
            <div class="flex-column space-y-6">
              <div class="bg-gray-200 w-32 h-32 rounded-md"></div>
              <div class="bg-gray-200 w-32 h-32 rounded-md"></div>
              <div class="bg-gray-200 w-32 h-32 rounded-md"></div>
              <div class="bg-gray-200 w-32 h-32 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Products",
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
