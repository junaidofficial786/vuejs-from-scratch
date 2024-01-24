<style scoped></style>

<template>
    <div class="flex items-center justify-center h-screen  p-4 rounded-lg max-h-[80vh] overflow-y-auto">
        <ul>
            <form @submit.prevent="save">
                <input
                    class="px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none"
                    type="text" v-model="newHero" placeholder="Add Hero ...">
                <button type="submit"
                    class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Save</button>
            </form>
            <li class="hover:bg-gray-200" v-for="hero in heros" :key="hero.id">
                <div class="flex justify-between items-center">
                    <span @click="alert(hero.name)">
                        {{ hero.name }}
                    </span>
                    <span class="text-red-500 font-semibold underline">
                        <button @click="removeHero(hero.id)" class="">x</button>
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newHero: "",
            title: "Heros",
            heros: [
                {
                    id: 1,
                    name: "Superman"
                },
                {
                    id: 5,
                    name: "Super Flash"
                },
                {
                    id: 1,
                    name: "Superman"
                },
                {
                    id: 2,
                    name: "Supergirl"
                },
                {
                    id: 2,
                    name: "Supergirl"
                },
                {
                    id: 3,
                    name: "Batman"
                },
                {
                    id: 4,
                    name: "Ironman"
                },
                {
                    id: 5,
                    name: "Super Flash"
                },

            ]
        }
    },

    methods: {
        alert(name) {
            alert(name);
        },

        removeHero(heroId) {
            // Find the index of the hero with the specified id
            const index = this.heros.findIndex(hero => hero.id === heroId);

            if (index !== -1) {
                // Remove the hero from the array
                this.heros.splice(index, 1);
            }
        },

        save() {
            if (this.newHero.trim() === "") {
                return; // Don't add empty heroes
            }

            // Create a new hero object and prepend it to the array
            const newHeroObject = {
                id: this.heros.length + 1, // Assign a new id
                name: this.newHero
            };
            this.heros.unshift(newHeroObject);

            // Clear the input field
            this.newHero = "";

            // Focus on the input field again after submitting
            // this.$refs.heroInput.focus();
        }
    }
}
</script>
