<template>
  <div class="sidebar">
    <div class="sidebar-profile">
      <p>kanap</p>
      <img class="sidebar-img" src="/img/profile.jpg" />
      <p>25歳</p>
      <p>元保育士</p>
      <p>佐賀生まれ沖縄育ち</p>
      <p>動物が大好き</p>
      <p>旅行と花火が好き</p>
      <a
        class="twitter-timeline"
        data-width="260"
        data-height="500"
        data-theme="light"
        href="https://twitter.com/kanyamalP?ref_src=twsrc%5Etfw"
      >Tweets by kanyamalP</a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
};
</script>
<style lang="scss" scoped>
.sidebar {
  background-color: wheat;
  width: 370px;
  padding-top: 150;
}
.sidebar-img {
  height: 333px;
  width: 250px;
}
.sidebar-profile {
  width: 80%;
  margin: 0 auto;
  padding-top: 100px;
}
</style>