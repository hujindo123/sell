<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <classMap class="icon"  :item="seller.supports[0].type"></classMap>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" @click="showDetail" class="support-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span><i
      class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="backgrond">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <transition name="fade">
      <div class="detail" v-show="detailShow">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score"></star>
            </div>
            <flexTitle :title="'优惠信息'"></flexTitle>
            <ul v-if="seller.supports" class="supports">
              <li class="support-item" v-for="item in seller.supports">
                <classMap class="icon" :item="item.type"></classMap>
                <span class="text">{{item.description}}</span>
              </li>
            </ul>
            <flexTitle :title="'商家公告'"></flexTitle>
            <div class="title-description">{{seller.bulletin}}</div>
          </div>
        </div>
        <div class="detail-close">
          <i class="icon-close" @click="hideDetail"></i>
        </div>
      </div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  import star from 'components/star/star';
  import flexTitle from 'components/flexTitle/flextitle';
  import classMap from 'components/classMap/classMap';
  // 提供外置接口 已便于 外部引用
  export default{
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: false
      };
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      },
      hideDetail() {
        this.detailShow = false;
      }
    },
    components: {
      star, // 星星评分
      flexTitle, // 横线标题
      classMap // 列表前的icon
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";
  .header
    color #fff
    position relative
    overflow hidden
    background rgba(7, 17, 27, 0.5)
    .content-wrapper
      position relative
      padding 24px 12px 18px 24px
      font-size 0
      .avatar
        display inline-block
        vertical-align top
        img
          border-radius 2px
      .content
        display inline-block
        margin-left 16px
        .title
          line-height 18px
          margin 2px 0 8px 0
          .brand
            width 30px
            height 18px
            display inline-block
            vertical-align top
            bg-image('brand')
            background-size 30px 18px
            background-repeat no-repeat
          .name
            margin-left 6px
            font-size 16px
            font-weight bold
        .description
          margin-bottom 10px
          line-height 12px
          font-size 12px
        .support
          .icon
            width 12px
            height 12px
            display inline-block
            vertical-align top
            margin-right 4px
            background-size 12px 12px
            background-repeat no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            line-height 12px
            font-size 10px
            vertical-align top
      .support-count
        position absolute
        right 12px
        bottom 18px
        padding 0 8px
        height 24px
        line-height 24px
        border-radius 14px
        font-weight 100
        background-color rgba(0, 0, 0, 0.2)
        text-align center
        .count
          font-size 10px
          vertical-align top
        .icon-keyboard_arrow_right
          margin-left 2px
          line-height 24px
          font-size 10px
    .bulletin-wrapper
      position relative
      height 28px
      line-height 28px
      padding 0 22px 0 12px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      background rgba(7, 17, 27, 0.1)
      .bulletin-title
        display inline-block
        width 22px
        height 12px
        bg-image('bulletin')
        background-size 22px 12px
        background-repeat no-repeat
        vertical-align top
        margin-top 10px
      .bulletin-text
        font-size 10px
        margin 0 4px
      .icon-keyboard_arrow_right
        position absolute
        font-size 10px
        right 12px
        top 10px
    .backgrond
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      z-index -1
      filter blur(10px)
    .fade-enter-active
      transition: all .5s ease;
    .fade-leave-active
      transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    .fade-enter, .fade-leave
      transform: translateX(10px);
      opacity: 0;
    .detail
      position fixed
      top 0
      left 0
      z-index 100
      width 100%
      height 100%
      overflow auto
      background rgba(7, 17, 27, 0.8)
      -webkit-backdrop-filter blur(10px)
      .detail-wrapper
        min-height 100%
        width 100%
        .detail-main
          margin-top 64px
          padding-bottom 64px
          .name
            line-height 16px
            text-align center
            font-size 16px
            font-weight 700
          .star-wrapper
            margin-top 18px
            padding 2px 0
            text-align center
      .detail-close
        position relative
        height 32px
        width 32px
        margin -64px auto 0 auto
        clear both
        font-size 32px
      .supports
        width 80%
        margin 24px auto 24px
        .support-item
          padding 0 12px
          font-size 0
          .icon
            display inline-block
            width 16px
            height 16px
            background-size 16px 16px
            background-repeat no-repeat
            vertical-align top
            margin-bottom 12px
            margin-right 6px
            &.decrease
              bg-image('decrease_2')
            &.discount
              bg-image('discount_2')
            &.guarantee
              bg-image('guarantee_2')
            &.invoice
              bg-image('invoice_2')
            &.special
              bg-image('special_2')
          .text
            display inline-block
            font-size 12px
            color #fff
            line-height 12px
            margin-top 2px
      .title-description
        width 80%
        margin 24px auto 24px
        font-size 12px
        line-height 24px
</style>

