<template>

  <app-header />

  <router-view />

</template>

<script>
import AppHeader from '@/Pages/AppHeader.vue';
export default {
  components: { AppHeader },
}
</script>