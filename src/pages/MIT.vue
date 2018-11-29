<template lang="pug">
.techcrunch.background-white
    #advertisement.wid100.border-bottom.height15vh.p-1
        img(src="http://images.ctfassets.net/7ca9kifzimh6/4E4BoAIvHq2KIIuMQakEq2/089f44baebb3e06399894bcbc458efcd/technology.jpg?q=50&fl=progressive").wid70.height100.text-align-center
    .flexed.mt-1.height60
        .wid50.text-align-center.p-1
            .typeSize2.height33.ff-topic Uber’s self-driving trucks division is dead, long live Uber self-driving cars
            //- video.mt-1.mb-1.height60.wid90
            //-     source(src="https://youtu.be/CIpwuvEBiZI")
            iframe(width='560', height='315', src='https://www.youtube.com/embed/CIpwuvEBiZI', frameborder='0', allow='autoplay; encrypted-media', allowfullscreen='').wid90.height
        .wid30.flexed.f_vertical_topped_start.p-1
            div.border-bottom.height25.flexed.f_vertical_topped_start.p-1
                .typeSize5.ff-topic Uber’s self-driving trucks division is dead, long live Uber self-driving cars
                .typeSize7.text-align-center.mt-1.text-align-left Brian Heater
            div.border-bottom.height25.flexed.f_vertical_topped_start.p-1
                .typeSize5.ff-topic Uber’s self-driving trucks division is dead, long live Uber self-driving cars
                .typeSize7.text-align-center.mt-1.text-align-center Brian Heater
            div.border-bottom.height25.flexed.f_vertical_topped_start.p-1
                .typeSize5.ff-topic Uber’s self-driving trucks division is dead, long live Uber self-driving cars
                .typeSize7.text-align-center.mt-1.text-align-center Brian Heater
            div.height25.flexed.f_vertical_topped_start.p-1
                .typeSize5.ff-topic Uber’s self-driving trucks division is dead, long live Uber self-driving cars
                .typeSize7.text-align-center.mt-1.text-align-center Brian Heater
    .wid80.border-bottom
        h3.m-2 Latest
    .more.flexed.wid80.flexed.f_vertical_topped_start.p-1
        div(v-for="item in items").flexed.border-bottom.f_horizontal_centered_between
            div.wid30.flexed.f_vertical_topped_start.p-1
                div.typeSize4.ff-topic {{ item.title }}
                div.flexed
                    div.typeSize6 {{item.date}}
                    div.typeSize6 {{item.author}}
            div.wid30.typeSize5 {{ item.article }}
            img.wid30(v-bind:src="item.img").wid30.p-1
</template>
<style>

</style>

<script>
export default {
    data () {
        return {
            items:[
                {
                    title:"Dixons Carphone now says ~8.8M more customers affected by 2017 breach",
                    date:"6days ago",
                    author: "Taiga Tsutsumaru",
                    article:"Hello, we are queue. We work in Tokyo.Our main job is to create solutions toword societis around the world by using AI and IoT.",
                    img: "https://techcrunch.com/wp-content/uploads/2018/06/GettyImages-857205346.jpg?w=1390&crop=1"
                },
                {
                    title:"Dixons Carphone now says ~8.8M more customers affected by 2017 breach",
                    date:"yesterday",
                    author: "Elon Mask",
                    article:"Hello, we are queue. We work in Tokyo.Our main job is to create solutions toword societis around the world by using AI and IoT.",
                    img: "https://techcrunch.com/wp-content/uploads/2018/06/GettyImages-489512962.jpg?w=300&h=160&crop=1"
                },
                {
                    title:"Dixons Carphone now says ~8.8M more customers affected by 2017 breach",
                    date:"6days ago",
                    author: "Taiga Tsutsumaru",
                    article:"Hello, we are queue. We work in Tokyo.Our main job is to create solutions toword societis around the world by using AI and IoT.",
                    img: "https://techcrunch.com/wp-content/uploads/2018/02/twitter-app-icon-ios.jpg?w=300&h=160&crop=1"
                },
                {
                    title:"Dixons Carphone now says ~8.8M more customers affected by 2017 breach",
                    date:"6days ago",
                    author: "Taiga Tsutsumaru",
                    article:"Hello, we are queue. We work in Tokyo.Our main job is to create solutions toword societis around the world by using AI and IoT.",
                    img: "https://techcrunch.com/wp-content/uploads/2018/08/starbucks-2.jpg?w=300&h=160&crop=1"
                },{
                    title:"Dixons Carphone now says ~8.8M more customers affected by 2017 breach",
                    date:"6days ago",
                    author: "Taiga Tsutsumaru",
                    article:"Hello, we are queue. We work in Tokyo.Our main job is to create solutions toword societis around the world by using AI and IoT.",
                    img: "https://techcrunch.com/wp-content/uploads/2018/05/gettyimages-490597690.jpg?w=300&h=160&crop=1"
                },
            ]

        }
    }
}
</script>



