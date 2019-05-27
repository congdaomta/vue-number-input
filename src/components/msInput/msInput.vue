<template>
<div>
    <input
    ref="input"
    v-bind="$attrs"
    v-model="numberInput"
    v-on="listeners"
    type = "number"
    @input="validate"
    @blur="formatNumber"
    />
    <div v-if="valid" class="invalid">Yeu cau nhap so</div>
</div>
</template>

<script>
export default {
  name: "MsInput",
  props: {
      value:{ },
  },
  computed: {
      listeners(){
          return{
              ...this.$listeners,
              input:(evt)=>{
                  this.$emit('input',evt.target.value)
              }
          }
      }
  },
  data() {
    return {
        valid: false,
        numberInput: '',
        error: [],
        step: null,
    };
  },
  methods: {
      validate(event){
          let inputBegin = this.numberInput;
            
      },
      formatNumber(event){
          let count = event.target.attributes.step.value.length - 1;
          this.numberInput = parseFloat(Math.round(this.numberInput * 100) / 100).toFixed(count);
          return this.numberInput;
      }
  },
  watch: {}
};
</script>

<style scoped lang="scss">
@import './msInput.scss'
</style>
