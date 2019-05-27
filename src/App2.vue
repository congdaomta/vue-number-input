<template>
  <div id="app">
    <ms-input v-model="model1" step="0.001"></ms-input>
  </div>
</template>


<script>
import MsInput from '@/components/msInput/msInput.vue'
export default {
    components:{
        MsInput,
    },
    data(){
      return{
        model1: ''
      }
    }
}
</script>

<style>
#app{
    text-align: center
}
</style>
