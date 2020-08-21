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
          <n-link to="/posts/2020/8/">
            <p>2020/8</p>
          </n-link>
        </li>
        <li>
          <n-link to="/posts/2020/9/">
            <p>2020/9</p>
          </n-link>
        </li>
        <li>
          <n-link to="/posts/2020/10/">
            <p>2020/10</p>
          </n-link>
        </li>
        <li>
          <n-link to="/posts/2020/11/">
            <p>2020/11</p>
          </n-link>
        </li>
        <li>
          <n-link to="/posts/2020/12/">
            <p>2020/12</p>
          </n-link>
        </li>
      </ul>
    </div>
    <div class="wrapper">
      <div class="container">
        <nuxt-link to="/posts">全投稿へ戻る</nuxt-link>
        <h2>2020年の投稿</h2>

        <ul>
          <li>
            <nuxt-link to="/posts/2020/8">8月の投稿</nuxt-link>
          </li>
        </ul>
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
  // async asyncData({ $content, params, error }) {
  //   let article;
  //   try {
  //     article = await $content("posts", params.slug).fetch();
  //     // OR const article = await $content(`posts/${params.slug}`).fetch()
  //   } catch (e) {
  //     error({ message: "Article not found" });
  //   }
  //   const [prev, next] = await $content("posts")
  //     .only(["title", "slug"])
  //     .sortBy("date", "desc")
  //     .surround(params.slug)
  //     .fetch();
  //   return {
  //     article,
  //     prev,
  //     next,
  //   };
  // },
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