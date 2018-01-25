<!--Mod2-->
<template>
  <div>
    <m-menu v-if="isShowMenu"/>
    <div>
      <router-view/>
    </div>
  </div>

</template>

<script>
  import MMenu from 'components/m-menu/m-menu'

  export default {
    data: function () {
      return {
        isShowMenu: true
      }
    },
    components: {
      MMenu
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

