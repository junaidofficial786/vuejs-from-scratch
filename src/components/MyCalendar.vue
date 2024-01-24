<template>
    <div class="m-auto">
        <h1 class="text-2xl my-2 text-center">Calandar Vue App</h1>
        <section class="flex text-bold justify-between font-bold">
            <p class="p-2">{{ currentMonthName }}</p>
            <p class="p-2">{{ currentYear }}</p>
        </section>
        <section class="flex py-2">
            <p class="text-center" style="width: 14.28%;" v-for="day in days" :key="day">
                {{ day }}
            </p>
        </section>
        <section class="flex flex-wrap">
            <p class="text-center" style="width: 14.28%;" v-for="num in startDay()" :key="num">
            </p>

            <p class="text-center" :class="currentDateClass(num)" style="width: 14.28%;"
                v-for="num in dateInMonths(currentYear, currentMonthNumber)" :key="num">
                {{ num }}
            </p>
        </section>
        <section class="flex text-bold justify-between font-bold">
            <button class=" p-2 rounded" @click="prev">&laquo; prev</button>
            <button class=" p-2 rounded" @click="next">next &raquo;</button>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentMonthNumber: new Date().getMonth(), //get current month number
            // currentMonthName: new Date().toLocaleDateString(undefined, { month: 'long' }), //get month name. example: September
            currentYear: new Date().getFullYear(),
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        }
    },
    methods: {
        dateInMonths(year, month) {
            return new Date(year, month + 1, 0).getDate(); //get dates of month of a year 
        },
        startDay() {
            return new Date(this.currentYear, this.currentMonthNumber, 1).getDay(); //this will give 1st day (index) of starting of this month
        },
        next() {
            if (this.currentMonthNumber == 11) { //11 is month 12th at index of 11 ( 0 - 11)
                this.currentYear++;
                this.currentMonthNumber = 0; 
            } else {
                this.currentMonthNumber++;
            }
        },
        prev() {
            if (this.currentMonthNumber == 0) { // 0 is 1st month at index of 0 ( 0 - 11)
                this.currentYear--;
                this.currentMonthNumber = 11;
            } else {
                this.currentMonthNumber--;
            }
        },
        currentDateClass(num) {
            const calandarFullDate = new Date(this.currentYear, this.currentMonthNumber, num).toDateString();
            const currentFullDate = new Date().toDateString();
            return calandarFullDate === currentFullDate ? 'text-yellow-600 shadow border-2' : '';
        }
    },

    computed: {
        currentMonthName() {
            return new Date(this.currentYear, this.currentMonthNumber).toLocaleDateString(undefined, { month: 'long' });
        },

    }
}
</script>

<style></style>