<template>
  <div>
    <mt-button type="primary" @click.native="openPicker">primary</mt-button>
    <mt-datetime-picker ref="picker" type="time" v-model="pickerValue">
    </mt-datetime-picker>
    <p>{{pickerValue}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerValue: "",
    };
  },
  methods: {
    openPicker() {
      this.$refs.picker.open();
    },
  },
};
</script>

<style></style>
