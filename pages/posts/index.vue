<template>
  <div>
    <HeaderComponent />
    <div>
      <div class="main-content">
        <div class="main-photo">
          <h1>2020年の投稿</h1>
        </div>
      </div>

      <ul class="date-list">
        <li>
          <a href="/2020/08/">
            <p>2020/08</p>
          </a>
        </li>
        <li>
          <a href="/2020/09/">
            <p>2020/09</p>
          </a>
        </li>
        <li>
          <a href="/2020/10/">
            <p>2020/10</p>
          </a>
        </li>
        <li>
          <a href="/2020/11/">
            <p>2020/11</p>
          </a>
        </li>
        <li>
          <a href="/2020/12/">
            <p>2020/12</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="wrapper">
      <div class="container">{{posts}}</div>
    </div>
    <SidebarComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Organisms/header.vue";
import FooterComponent from "@/components/Organisms/footer.vue";
import SidebarComponent from "@/components/Organisms/sidebar.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  },
  watchQuery: true,
  async asyncData({ $content, route }) {
    const q = route.query.q;

    let query = $content("posts", { deep: true }).sortBy("date", "desc");

    if (q) {
      query = query.search(q);
      // OR query = query.search('title', q)
    }

    const posts = await query.fetch();

    return {
      q,
      posts,
    };
  },
  watch: {
    q() {
      this.$router
        .replace({ query: this.q ? { q: this.q } : undefined })
        .catch(() => {});
    },
  },
};
</script>
<style scoped lang="scss">
</style>