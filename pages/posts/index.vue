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
      <div class="container">
        <div v-for="(post, index) in posts" :key="index">
          <n-link :to="post.path">{{ post.title }}</n-link>
        </div>
      </div>
      <SidebarComponent />
    </div>

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
.main-content {
  background-image: url(/img/iroenpitu.jpeg);
  background-size: cover;
  height: 475px;
  background-repeat: no-repeat;
  background-position: bottom;
  .main-photo h1 {
    font-size: 40px;
    padding-top: 190px;
    font-family: auto;
  }
}
.wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  .container {
    width: calc(100% - 370px);
  }
}

.date-list {
  list-style: none;
  display: flex;
  li {
    padding: 0 6% 0 6%;
  }
  li:hover,
  .choosed {
    border-top: solid 10px #ff7d6e;
  }
  p {
    color: #4766ffad;
    font-weight: bold;
    font-size: 20px;
  }
  a {
    text-decoration: none;
  }
}
hr.line-2020 {
  border: none;
  border-top: dashed 1px #ff0000;
  height: 1px;
}
</style>