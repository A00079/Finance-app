<template>
  <div>
    <Primary />
    <Secondary />
    <InfoBars />
  </div>
</template>
<script>
import { Primary, Secondary, InfoBars } from "./components";

export default {
  components: { Primary, Secondary, InfoBars },
  name: "Home",
};
</script>
<style scoped></style>
