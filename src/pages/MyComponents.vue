<template lang="pug">
  .editor-wrapper(v-if="article")
    Notifier(v-model="message")
    .header
      .brand
        p(@click="$router.push({name: 'List'})") Martini
      .title
        input.input(v-model="title")
      .right-item
        button.button(@click="$router.push({name: 'Viewer', params: {id: $route.params.id}})")
          font-awesome-icon(icon="play-circle")
          span VIEWER
        .button
          font-awesome-icon(icon="lock" v-if="scope == 'PRIVATE'")
          font-awesome-icon(icon="lock-open" v-if="scope == 'PUBLIC'")
          select.button.select(v-model="scope")
            option PUBLIC
            option PRIVATE
        button.button(@click="save")
          font-awesome-icon(icon="cloud")
          span SAVE
        button.button.danger(@click="trash")
          font-awesome-icon(icon="trash")
          span DELETE
        //- button.button pdf
    .body
      .editor-area(:style="editorWidthObject")
        .width-controller(
          @mousedown="widthControlStart"
        )
        //- .side-bar
          .side-item(@click="toggleTarget")
            font-awesome-icon(icon="file" style="color:gray;")
            .side-item-content(style="display:none;")
              .menu
                template(v-for="type in styleTree.keys")
                  .menu-item {{type.name}}
        CMEditor.editor(
          v-model="text"
          @cursor="handleCursorPosition"
          )
      .preview-area
        .slide-area(ref="slide")
          SlideViewer(
            v-if="slideHeight && slideWidth && documentNode",
            :documentNode="documentNode",
            :slideHeight="slideHeight",
            :slideWidth="slideWidth",
            :parentPageNo="pageNo"
            )
</template>

<script>
import _ from 'lodash'
import {parse} from '@/util/Parser'
import SlideViewer from '@/components/SlideViewer'
import Notifier from '@/components/Notifier'
import CMEditor from '@/components/CMEditor'
import Logger from "@/util/Logger"
import {NodeTypes} from "@/util/NodeTypes"
import css from 'css'
export default {
  name: 'Editor',
  components: {
    SlideViewer,
    Notifier,
    CMEditor
  },
  props: ["id","page"],
  data () {
    return {
      article: null,
      title: '',
      source: '',
      scope: 'PRIVATE',
      styleData: '{"BigMessage":{"bigMessage":"hoge"}}',
      editTarget: '',
      pageNo: Number(this.page),
      edited: null,
      message: "welcome back",
      slideHeight: null,
      slideWidth: null,
      editorWidth: 500,
      editorWidthResizing: false
    }
  },
  computed: {
    styleBase(){
      const stylesTree = {};
      NodeTypes.forEach(element => {
          const isExtensible = element.selectors && element.selectors.length > 0
          if (!isExtensible) return
          const styles = {};
          element.selectors.forEach(selector => {
              styles[selector] = ""
          });
          stylesTree[element.name] = styles
      });
      return stylesTree;
    },
    styleTree:{
      get(){
        const styleTree = Object.assign({}, this.styleBase);
        const styleData = JSON.parse(this.styleData)
        Object.keys(styleTree).forEach(name1 => {
          Object.keys(styleTree[name1]).forEach(name2 => {
            if(styleData[name1] && styleData[name1][name2]){
              styleTree[name1][name2] = styleData[name1][name2]
            }
          })
        })
        return styleTree
      },
      set(newValue){
        console.log("new style tree!");
      }
    },
    text: {
      get(){
        return (this.editTarget == 'style') ?
          this.styleTree.BigMessage.node :
          this.source;
      },
      set(newValue){
        (this.editTarget == 'style') ?
          this.styleTree.BigMessage.node = newValue:
          this.source = newValue;
      }
    },
    documentNode () {
      return parse(this.source,this.styleTree);
    },
    editorWidthObject () {
      return {
        width: `${this.editorWidth}px`
      }
    },
    isPublished: {
      get(){
        return this.scope === 'PUBLIC' ? true : false ;
      },
      set(newValue){
        if(newValue === true){
          this.scope = 'PUBLIC'
        }else{
          this.scope = 'PRIVATE'
        }
      }
    }
  },
  watch: {
    source(){
      this.edited = (this.edited === null) ? false: true;
      console.log("source changed!")
    },
    editorWidthObject(){
      this.resizeEventHandler()
    }
  },
  created () {
    this.$store.dispatch('Article',{id:this.id})
      .then(data => {
          console.log(data)
          this.article = data.Article
          this.title = data.Article.title
          this.source = data.Article.source || ""
          this.isPublished = data.Article.isPublished
          this.$nextTick(()=>{
            [this.slideWidth, this.slideHeight] = [this.$refs.slide.clientWidth, this.$refs.slide.clientHeight]
          })
        }
      )
  },
  mounted(){
    window.addEventListener('resize',this.resizeEventHandler)
    window.addEventListener('beforeunload', this.alertIfNotSaved);
    window.addEventListener("mousemove",this.widthControl)
    window.addEventListener("mouseup",this.widthControlEnd)
  },
  destroyed(){
    window.removeEventListener('beforeunload', this.alertIfNotSaved);
  },
  beforeRouteLeave (to, from , next) {
    if(this.edited){
      const message = 'Do you really want to leave? you have unsaved changes!'
      window.confirm(message) ? next() : next(false);
    }else{
      next()
    }
  },
  methods: {
    toggleTarget(){
      this.editTarget = this.editTarget === 'style' ?
      'smd' : 'style' ;
    },
    widthControlStart(e){
      this.editorWidthResizing = true;
      console.log("start: ",e.clientX)
    },
    widthControl(e){
      if(this.editorWidthResizing){
        console.log("changeing",e.clientX)
        this.editorWidth = e.clientX
      }
    },
    widthControlEnd(e){
      if(this.editorWidthResizing){
        console.log("end: ",e.clientX)
        this.editorWidthResizing = false;
      }
    },
    alertIfNotSaved(e){
      if(this.edited){
        var confirmationMessage = "\o/";
        e.returnValue = confirmationMessage;     // Gecko and Trident
        return confirmationMessage;              // Gecko and WebKit
      }
    },
    handleCursorPosition(cursorPos){
      if(this.documentNode && this.documentNode.pages){
        const pages = this.documentNode.pages
        this.pageNo = pages.indexOf(pages.find((v,i,a)=>{
          return (cursorPos >= a[i].line.num) &&
          (i + 1 === a.length || cursorPos < a[i+1].line.num)
        }))
      }
    },
    resizeEventHandler(){
      let resizeTimer;
      const interval = Math.floor(1000 / 60);
      if (resizeTimer !== false) {
        clearTimeout(resizeTimer);
      }
      resizeTimer = setTimeout(() => {
        this.$nextTick(() => {
          [this.slideWidth, this.slideHeight] = [this.$refs.slide.clientWidth, this.$refs.slide.clientHeight]
        })
      }, interval);
    },
    save () {
      this.$store.dispatch("updateArticle",{
        id: this.id,
        title: this.title,
        source: this.source,
        isPublished: this.isPublished,
      })
      .then((response) => {
        this.edited = false
        this.message = "successfuly saved!"
      })
      .catch((err) => {
        console.log(err)
      })
    },
    trash () {
      if (window.confirm("Are you sure you want to Delete it?")) {
        this.$store.dispatch("deleteArticle",{
          id: this.id
        })
        .then((response) => {
          this.$router.push({name: 'List'})
        })
        .catch((err) => {
          alert(err)
        })
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import url('prismjs/themes/prism-okaidia.css')
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro')
.editor-wrapper
  width 100%
  height 100%
  background-color #fff
  display flex
  flex-direction column
.header
  height 60px
  background-color #fff
  border-bottom 1px solid rgba(0,0,0,0.2)
  display flex
  flex-direction row
  justify-content space-between
  align-items stretch
  z-index 1
  .right-item
    display flex
    flex-direction row
    justify-content flex-end
    align-items center
    margin-right 16px
  .brand
    cursor pointer
    display flex
    align-items center
    p
      color #000
      margin 0
      padding 0 16px
      font-size 24px
      letter-spacing 2px
  .title
    display flex
    flex-direction column
    align-items center
    justify-content center
    width: 100%;
    margin: 0 1rem;
    &:hover
      .input
        background-color #eee
    .input
      background-color #fff
      border none 
      outline none
      height 36px
      padding 0 16px
      width 100%
      box-sizing border-box
      // typeface
      font-size 18px
      line-height 36px
      text-align left
      font-family 'Futura', sans-serif
      // animation 
      transition-duration .25s
      &:focus
        background-color #eee
.body
  height 100%
  display flex
  background: rgba(0,0,0,0.1)
.editor-area
  position relative
  height: 100%;
  width: 400px;
  flex-shrink: 0;
  background-color: #fff;
  box-sizing: border-box;
  border-right: 1px solid rgba(0,0,0,0.2);
  display: flex
  .width-controller
    width 1rem
    position absolute
    height 100%
    right -0.5rem
    top 0
    bottom 0
    z-index 5
    cursor: col-resize;
  
  .side-bar
    display flex
    flex-direction column
    border-right: 1px solid rgba(0,0,0,0.2);
    
    .side-item
      display flex
      justify-content center
      align-items center
      min-width 3rem
      min-height 3rem
      border-bottom: 1px solid rgba(0,0,0,0.2);
      position relative
      .side-item-content
        position: absolute;
        top: 2rem;
        left: 2rem;
        background: #fff;
        box-shadow: 0 0 10px -5px rgba(0,0,0,0.5);
        z-index: 5;
        font-size: 0.8rem;
        line-height: 1rem;
        border-radius: 5px;
        border: 1px solid rgba(0,0,0,0.1);
        .menu-item
          line-height: 2.5rem;
          padding: 0 1rem;
          &:hover
            background rgba(0,0,0,0.1)
.editor
  width 100%
  height 100%
  box-sizing border-box
  border none
  outline none
  resize none
  font-family: 'Source Code Pro', monospace;
  font-size 10px
.cm-s-default
  height 100%
.editor::-webkit-scrollbar {
  display: none;
}
.html-area
  flex 1
  background-color #fff
  overflow scroll
  padding 8px
.vm
  width 100%
  height 100%
.preview-area
  height 100%
  width 100%
  margin: 0 1rem; 
  display: flex;
  justify-content: center;
  align-items: center;
.slide-area
  position: relative;
  width: 100%;
  padding-top: 70.707%;
.button
  // typeface
  font-family 'Futura', sans-serif
  color #fff
  font-size 13px
  letter-spacing .8px
  line-height 36px
  // layout
  display flex
  align-items center
  > span
    margin-left 8px
  // shape
  height 36px
  padding 0 1rem
  border: none;
  border-radius 2px
  //skin
  color: black;
  outline: 0;
  // animation 
  transition-duration .25s
  &:hover
    background-color rgba(0,0,0,0.1)
  .select
    border: 0;
    height: 100%;
    outline: 0;
    background none
    &:hover
      background none
.button.danger
  color red
  &:hover
    color white
    background-color #e6003a
</style>
