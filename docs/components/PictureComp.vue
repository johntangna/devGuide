<script setup lang="ts">
import { withBase } from "vitepress";
const props = defineProps<{
  imgUrl: {
    type: String;
    default: "";
  };
}>();
</script>
<template>
  <p align="center">
    <img :src="withBase(props.imgUrl)" />
  </p>
</template>