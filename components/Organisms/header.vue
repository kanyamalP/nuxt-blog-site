<template>
  <header>
    <div class="header">
      <n-link class="logo" to="/">
        <p>Kanap Blog</p>
      </n-link>
      <!-- <a href="https://twitter.com/kanyamalP">
        <img class="twitter-logo" src="/img/twitter-logo.png" />
      </a>-->
      <n-link to="/posts" style="float:right">posts</n-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
<style lang="scss" scoped>
/*header*/
header {
  height: 140px;
  background-color: tomato;
  padding: 5px 0 10px 20px;
  .logo {
    font-size: 50px;
    color: white;
    font-family: monospace;
    text-decoration: none;
  }
  .twitter-logo {
    height: 70px;
    width: 70px;
    padding-left: 86%;
    position: absolute;
    top: 60px;
  }
}
</style>