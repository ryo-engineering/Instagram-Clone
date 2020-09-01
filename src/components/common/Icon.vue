<template>
  <div class="icon" :style="{height: height + 'px', width: width + 'px'}">
    <img :src="source" :style="{height: height + 'px', width: width + 'px'}" />
  </div>
</template>
<script>
export default {
  props: {
    source: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      default: 40,
    },
    width: {
      type: Number,
      default: 40,
    },
  },
};
</script>
<style scoped>
.icon {
  border-radius: 100px;
}
.icon img {
  border-radius: 100px;
}
</style>