<template>
  <div>
    <nuxt-link to="/posts">posts</nuxt-link>
    <h2>{{ year }}/{{ month }}</h2>

    <ul>
      <li v-for="article in posts" :key="article.slug">
        <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  watchQuery: true,
  async asyncData({ $content, route, params }) {
    const { year, month } = params;

    const posts = await $content("posts", year, month)
      .sortBy("date", "desc")
      .fetch();

    return {
      posts,
      year,
      month,
    };
  },
};
</script>
