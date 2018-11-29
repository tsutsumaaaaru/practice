<template lang="pug">
#qiita
    .header
        p.typeColor-white qiita
    .content
        .editerArea
            textarea(placeholder="プログラミングの知識を共有しよう" ,v-model="article")
        .perviewArea
            p {{article}}
</template>
<script>
export default {
    data() {
        return {
            article: null,
        }
    },
    methods: {

    }
}
</script>
<style lang="stylus" scoped>
.header
    background-color #55c500
    height 60px
.content
    display flex
    flex-direction row
    height 100%
    width 100%
.editerArea
    width 50%
    height 100%
textarea
    width 100%
    height 100%
    font-size 2rem
    &:focus
        outline: 0
.perviewArea
    padding 3px
    position absolute 
    overflow auto
    box-sizing inherit 
    
</style>
