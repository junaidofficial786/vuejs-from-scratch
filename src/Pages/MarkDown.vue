<script>
import {marked} from 'marked';
export default {
  data () {
    return {
      text: "",
      timeout: ""
    }
  },

  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500)
    },

    debounce(func, wait = 1000) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(func, wait)
    }
  },

  computed: {
    markedText() {
      return marked(this.text)
    }
  }
}
</script>

<template>
  <div class="flex w-full flex-wrap">
    <h1 class="w-full text-center text-lg">
      Markdown App
    </h1>
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <textarea class="w-full h-full" @input="update" :value="text"></textarea>
      </article>

      <article class="w-1/2 border">
        <div class="w-full h-full" v-html="markedText"></div>
      </article>
    </section>
  </div>
</template>

<style scoped>

</style>