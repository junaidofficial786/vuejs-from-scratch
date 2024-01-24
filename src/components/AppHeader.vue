<template>
    <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2">
        <router-link v-for="item in routesList" :key="item.to" class="mx-4" :to="item.to">
            {{ item.title }}
        </router-link>
    </nav>
</template>
    
<script>
export default {
    data() {
        return {
            routesList: [
                { title: 'Dashboard', to: '/' },
                { title: 'Heroes', to: '/heros' },
                { title: 'Calendar', to: '/calendar' }
            ]
        }
    }
}
</script>
    
<style></style>
    