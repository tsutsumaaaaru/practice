<template lang="pug">
div(style='padding: 10px; background-color: #999999;')

  h1.layout_h1 FLEX PARENT

  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_topped_start
  .flexed.f_horizontal_topped_start(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_centered_start
  .flexed.f_horizontal_centered_start(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_bottom_start
  .flexed.f_horizontal_bottom_start(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_ends_start
  .flexed.f_horizontal_ends_start(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_equ_start
  .flexed.f_horizontal_equ_start(style='background-color: #fff; border: 5px solid black; margin: 10px 0 100px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}


  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_topped_centered
  .flexed.f_horizontal_topped_centered(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_centered_centered
  .flexed.f_horizontal_centered_centered(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_bottom_centered
  .flexed.f_horizontal_bottom_centered(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_ends_centered
  .flexed.f_horizontal_ends_centered(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_equ_centered
  .flexed.f_horizontal_equ_centered(style='background-color: #fff; border: 5px solid black; margin: 10px 0 100px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}


  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_topped_end
  .flexed.f_horizontal_topped_end(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_centered_end
  .flexed.f_horizontal_centered_end(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_bottom_end
  .flexed.f_horizontal_bottom_end(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_ends_end
  .flexed.f_horizontal_ends_end(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_equ_end
  .flexed.f_horizontal_equ_end(style='background-color: #fff; border: 5px solid black; margin: 10px 0 100px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}


  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_topped_between
  .flexed.f_horizontal_topped_between(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_centered_between
  .flexed.f_horizontal_centered_between(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_bottom_between
  .flexed.f_horizontal_bottom_between(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_ends_between
  .flexed.f_horizontal_ends_between(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_equ_between
  .flexed.f_horizontal_equ_between(style='background-color: #fff; border: 5px solid black; margin: 10px 0 100px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}


  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_topped_around
  .flexed.f_horizontal_topped_around(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_centered_around
  .flexed.f_horizontal_centered_around(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_bottom_around
  .flexed.f_horizontal_bottom_around(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_ends_around
  .flexed.f_horizontal_ends_around(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}
  p(style='font-weight: bold; margin-bottom: 5px;') .f_horizontal_equ_around
  .flexed.f_horizontal_equ_around(style='background-color: #fff; border: 5px solid black; margin: 10px 0 100px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}

  p(style='font-weight: bold; margin-bottom: 5px;') .f_vertical_topped_start
  .flexed.f_vertical_topped_start(style='background-color: #fff; border: 5px solid black; margin: 10px 0 40px; height: 150px;')
    div(v-for='n in 50', style='padding: 5px; border: 2px solid black; margin: 1px;') {{n}}

  hr

  h1 LAYOUT TEMPLATE
  p(style='font-weight: bold; margin-bottom: 5px;') .layout1
  .layout1
    .header .header
    .sidemenu .sidemenu
    .content
      p(v-for='n in 1') .content
    .footer .footer

  p(style='font-weight: bold; margin-bottom: 5px;') .layout2
  .layout2
    .header .header
    .sidemenu .sidemenu
    .content
      p(v-for='n in 100') .content ↓

  p(style='font-weight: bold; margin-bottom: 5px;') .layout3
  .layout3
    .header .header
    .side1 .side1
    .content .content
    .side2 .side2
    .footer .footer
</template>
