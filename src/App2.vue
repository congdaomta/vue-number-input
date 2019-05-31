<template>
  <div id="app">
    <ms-input step="0.01" ></ms-input>
  </div>
</template>


<script>
import MsInput from "@/components/msInput/msInput.vue";
export default {
  components: {
    MsInput
  },
  data() {
    return {
    };
  }
};
</script>

<style>
#app {
  text-align: center;
}
</style>
