<template>
  <button
    :class="`py-2 px-4 font-semibold rounded-lg shadow-md text-white border-none cursor-pointer bg-${color}-500 hover:bg-${color}-700`"
  >
    SFC Button
  </button>
</template>

<script lang="ts">
export default {
  name: "SFCButton",
  props: {
    color: {
      type: String,
      default: "blue", // 设定默认颜色
    },
  },
};
</script>
