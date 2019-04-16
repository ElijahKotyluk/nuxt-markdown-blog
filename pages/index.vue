<template>
  <div class="container index">
    <p>
      Dynamic markdown routes:
    </p>
    <nuxt-link v-for="(file, index) in markdownFiles" :key="index" :to="file.to">
      {{ file.title }}
    </nuxt-link>

    
    <div class="dynamic-markdown-content" v-html="content" />

  </div>

</template>

<script>
import MarkdownSample from '~/static/markdown-sample.md';

export default {
  data () {
    return {
      content: MarkdownSample,
      markdownFiles: [
        {
          title: 'test-one',
          to: '/markdown/test-one'
        },
        {
          title: 'test-two',
          to: '/markdown/test-two'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.index {
  align-items: center;
}
</style>
