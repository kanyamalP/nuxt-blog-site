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
          <a href="/2020/8/">
            <p>2020/8</p>
          </a>
        </li>
        <li>
          <a href="/2020/9/">
            <p>2020/9</p>
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
        <div class="main">
          <div class="diary" v-for="(item, index) in posts" :key="index">
            <hr class="line-2020" />
            <div class="diary-content">
              <time :datetime="item.date">{{item.date}}</time>
              <div class="diary-title">
                <h2>
                  <n-link :to="item.path">{{item.title}}</n-link>
                </h2>
              </div>
              <div class="diary-comment">{{item.discription}}</div>
            </div>
          </div>
        </div>
      </div>
      <SidebarComponent />
    </div>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import HeaderComponent from "@/components/Organisms/header.vue";
import FooterComponent from "@/components/Organisms/footer.vue";
import SidebarComponent from "@/components/Organisms/sidebar.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  },
  async asyncData({ $content, route }) {
    const q = route.query.q;

    let query = $content("posts", { deep: true }).sortBy("date", "desc");

    if (q) {
      query = query.search(q);
    }

    const posts = await query.fetch();

    return {
      q,
      posts,
    };
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
