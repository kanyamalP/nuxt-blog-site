<template>
  <footer>
    <p>(c)copy right 2020 Kanap Allrights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>
<style lang="scss" scoped>
footer {
  height: 100px;
  background-color: tomato;
  /* position: absolute;
    bottom: 0; */
}

footer p {
  text-align: center;
  color: white;
  font-weight: bold;
  padding: 35px;
}
</style>