<script setup lang="ts">
const props = defineProps<{
  homeUrl: {
    type: String;
    default: "";
  };
}>();
const returnHome = props.homeUrl;
</script>
<template>
  <h2>
    <a class="header-anchor" href="#返回上一页" aria-hidden="true">#</a>
    <a :href="returnHome">返回上一页</a>
  </h2>
</template>
<style scoped>
a:hover {
  text-decoration: none;
}
</style>
