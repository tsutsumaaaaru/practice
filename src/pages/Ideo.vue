<template lang="pug">
.ideo_trace
  .header
    a.companyname Queue.inc
    .header_right
      a.search_icon
        i.fas.fa-search
      a.menubar
        i.fas.fa-bars
  .homeheader
    .tripplets
      ul
        li 
          a(href="") Work
        li
          a(href="") Blog
        li
          a(href="") Tools
    .contact_container
      span
        p.introduction IDEOはグローバル に展開するデザイン ファームです
        p.element WANT TO LEARN MORE?
        a(href="") IDEO TOKYOについて
  .office_pic
    //- img(src="https://churchill.imgix.net/images/static/images/Tokyo_Office19231.jpg?auto=format&dpr=1&fit=crop&h=960&w=1500")
    .office_pic_left
    .office_pic_right
      .white_part
        p.subtitle IDEO TOKYO
        a.font_Noto How might we help Japan unlock its crative potential?
        .partition
        p.ideo_tokyo 「日本の変化の触媒になる」ことをミッションに掲げるIDEO Tokyoには、多彩な専門領域と情熱を持つスタッフが世界中から集まっています。
        button 
          span.aboutIdeo IDEO について
    link(href='https://use.fontawesome.com/releases/v5.0.6/css/all.css', rel='stylesheet')
</template>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display');
.header
  z-index 900
  position fixed
  height 90px
  background-color white 
  width 100%
  padding 10px 20px 10px 20px
  display flex
  flex-flow row nowrap
  justify-content space-between
  align-items center

a.companyname
  font-family 'Oxygen Mono', monospace
  font-size 35px
  margin 15px 15px
  font-weight 600

a.search_icon
  margin-right 1.5rem
  padding 1rem

a.menubar
  margin-right 2rem
  padding 1rem


.homeheader
  max-width 1180px
  // width 80%
  display flex
  margin-top 90px
  padding-left 50px
  padding-right 50px
  margin-left auto 
  margin-right auto

.tripplets
  letter-spacing -4px
  line-height 145px
  flex-basis 78%

ul
  list-style-type none

li a 
  font-size 140px
  font-weight 300
  color black 
  font-family: 'Noto Serif', serif;
  text-decoration none
  background-image: linear-gradient(180deg,transparent 65%,#fcf113 0)
  background-size 0 100%
  -webkit-transition background-size .4s ease
  &:hover
    background-image inear-gradient(180deg, transparent 65%, #fcf113 0)
    // background-color yellow 
    // transparent 65%
    background-size  100% 100%
    background-repeat no-repeat
    // animation animation-haniwaman 3s linear 0s infinite normal
    transition background-size .4s ease

.contact_container
  display flex
  flex-direction column
  flex-wrap nowrap
  justify-content flex-start
  flex-basis 22%

span 
  border-left 3px solid #000
  padding 5px 5px 7px 20px

p.introduction
 font-size 16px
 font-weight 300
 font-color #000
 font-family AxisStd-Regular,Helvetica,Arial,sans-serif
 margin-bottom 15px
 letter-spacing -.5px

p.element
  color #a2aeb6
  font-size 13px
  margin-bottom 15px
  letter-spacing .7px

span a
  border-bottom 1px solid
  font-size 15px
  font-weight 600
  color black
  letter-spacing 1px

.office_pic
  margin-top 70px
  display flex
  flex-direction row
  align-items center
  background-image url('https://churchill.imgix.net/images/static/images/Tokyo_Office19231.jpg?auto=format&dpr=1&fit=crop&h=960&w=1500')
  background-size cover 
  background-repeat no-repeat
  background-position 50%
  position absolute
  height 100%
  width 100%

.office_pic_left
  flex-basis 50%
  
.office_pic_right
  flex-basis 50%
  height 50%

.white_part
  position relative
  // margin-top 3rem
  margin-left 2rem
  padding 50px
  background-color white
  width 75%
  float left
  height auto
  box-sizing border-box

.white_part a
  cursor pointer
  color black 
  font-size 2rem
  letter-spacing .4px
  // margin-bottom 10px

p.subtitle
  color #a2aeb6
  font-size 13px
  margin-bottom 15px
  letter-spacing .7px
  margin-top 35px

.partition
  border-bottom 5px solid #000
  margin 30px 0 30px 0
  width 32px

.ideo_tokyo
  margin-top 1rem
  margin-bottom 1rem
  letter-spacing -.5px

button
  heigh 42px
  width 180px
  padding 12px 15px
  
.aboutIdeo 
  &:hover
    -webkit-transform: rotateX(360deg)
    -ms-transform: rotateX(360deg)
    transform: rotateX(360deg)
</style>
<script>
export default {
  
}
</script>
