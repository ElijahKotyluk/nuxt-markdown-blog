<template>

    <div :key="$route.params.slug">
      <section class="">
        <div class="">
          <div class="container">
            <h1 class="title">
              {{$route.params.slug}}
            </h1>
            <h2 class="subtitle">
              A dynamic markdown file
            </h2>
          </div>
        </div>
      </section>
      <div class="container">
        <div v-html="content.default" class="contentWrapper content"></div>
      </div>
    </div>



</template>

<script>
export default {
  async asyncData ({params}) {
    const fileContent = await import(`~/static/markdown-files/${params.slug}.md`)
    return {
      content: fileContent
    }
  }
}
</script>
