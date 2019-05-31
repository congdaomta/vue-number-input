<template>
  <div>
    <input
      ref="input"
      v-bind="$attrs"
      v-model="numberInput"
      @keydown="validate"
      @blur="formatNumber"
      :autofocus="autofocus"
      :step="step"
    >
  </div>
</template>

<script>
import { debuglog } from "util";
import { parse } from "path";
export default {
  name: "MsInput",
  inheritAttrs: false,
  props: {
    value: {},
    min: {
      default: 0,
      type: Number
    },
    max: {
      default: 999999,
      type: Number
    },
    autofocus: {
      default: false,
      type: [Boolean, String]
    },
    step: {
      default: 1,
      type: [Number, String]
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: evt => {
          this.$emit("input", evt.target.value);
        }
      };
    }
  },
  data() {
    return {
      valid: false,
      numberInput: ""
    };
  },
  methods: {
    validate(event) {
      this.changeToDot();
      let inputBegin = this.numberInput.toString();
      if (inputBegin.includes(".") || inputBegin.includes(",")) {
        if (
          inputBegin.match(/\./g) !== null ||
          inputBegin.match(/\,/g) !== null
        ) {
          if (
            event.keyCode === 110 ||
            event.keyCode === 188 ||
            event.keyCode === 190
          ) {
            event.preventDefault();
          }
        }
      }
    },
    formatNumber(event) {
      this.changeToDot();
      if (event.target.value) {
        if (this.numberInput > this.max) {
          this.numberInput = this.max;
          return this.numberInput;
        } else if (this.numberInput < this.min) {
          this.numberInput = this.min;
          return this.numberInput;
        }

        let count = event.target.attributes.step.value.length - 2;
        if (count < 0) {
          if (count === -1) {
            this.numberInput = Math.round(this.numberInput);
            return this.numberInput;
          }
          return this.numberInput;
        }

        let input = parseFloat(this.numberInput).toFixed(count + 1);
        if (input.split("")[input.split("").length - 1] === "5") {
          input =
            Math.ceil(input * parseFloat(Math.pow(10, count))) /
            Math.pow(10, count);
          this.numberInput = input;
          return this.numberInput;
        }

        this.numberInput = parseFloat(this.numberInput).toFixed(count);
        return this.numberInput;
      }
    },
    changeToDot() {
      if (
        this.numberInput
          .toString()
          .split("")
          .includes(",")
      ) {
        this.numberInput = this.numberInput.replace(",", ".");
      }
    }
  },
  watch: {}
};
</script>

<style scoped lang="scss">
@import "./msInput.scss";
</style>
