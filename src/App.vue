<template>

  <app-header />

  <router-view />

  <!-- <welcome-page />

  <dc-heros />
  
  <my-calendar /> -->

</template>

<script>
import AppHeader from './components/AppHeader.vue';
import DcHeros from './components/DcHeros.vue';
import MyCalendar from './components/MyCalendar.vue';
import WelcomePage from './components/WelcomePage.vue';
export default {
  components: { AppHeader, DcHeros, MyCalendar, WelcomePage },  
}
</script>