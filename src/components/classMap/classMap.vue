<template>
  <span :class="classMaps"></span>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      item: {
        type: Number
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    computed: {
      classMaps() {
        return this.classMap[this.item];
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
