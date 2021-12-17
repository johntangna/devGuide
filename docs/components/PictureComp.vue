<script setup lang="ts">
const props = defineProps<{
  imgUrl: {
    type: String;
    default: "";
  };
}>();
</script>
<template>
  <p align="center">
    <img :src="props.imgUrl" />
  </p>
</template>