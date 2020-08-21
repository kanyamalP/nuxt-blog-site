<template>
  <div>
    <nuxt-link to="/posts">posts</nuxt-link>
    <h2>{{ post.title }}</h2>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const { year, month, slug } = params;

    let post;

    try {
      post = await $content("posts", year, month, slug).fetch();
    } catch (e) {
      error({ message: "post not found" });
    }

    return {
      post,
    };
  },
};
</script>
