<template>
  <header class="header">
    <div
      class="header__title"
      :class="{header__view: headerVisible, nav__active: navActive}"
      v-observe-visibility="visibilityChanged"
    >
      <h1 class="header__main">Andre Nguyen</h1>
      <h2 class="header__sub">
        <span>A user-centric software engineer</span>
        <span>that brings to life</span>
        <span>innovative ideas and solutions</span>
      </h2>
    </div>
    <div class="header__date">
      <span class="horizontal-bar-1">&nbsp;</span>
      <p class="header__date-time">{{ today }}</p>
    </div>
    <span class="horizontal-bar__right"></span>
    <div class="header__fade"></div>
  </header>
</template>

<script>
import Dash from '@/components/dash.vue';
import { dataContext } from '@/main.ts';

export default {
  components: {
    Dash
  },
  data: function () {
    return {
      headerVisible: false,
      scrolled: false,
      navActive: false,
      today: false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
    dataContext.$on('navActive', navActive => {
      this.navActive = navActive
    })
    let objToday = new Date()

    let weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]

    let dayOfWeek = weekday[objToday.getDay()]

    let domEnder = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th']

    let dayOfMonth =
      objToday.getDate() < 10
        ? '0' + objToday.getDate() + domEnder[objToday.getDate()]
        : objToday.getDate() +
          domEnder[
            parseFloat(
              ('' + objToday.getDate()).substr(
                ('' + objToday.getDate()).length - 1
              )
            )
          ]

    let months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec'
    ]

    let curMonth = months[objToday.getMonth()]

    let curYear = objToday.getFullYear()

    let today = `${curMonth} ${dayOfMonth}, ${curYear}`
    this.today = today
  },
  mounted () {},
  methods: {
    visibilityChanged (isVisible, entry) {
      this.headerVisible = isVisible
      // console.log(entry)
      dataContext.$emit('isHeaderVisible', this.headerVisible)
      // console.log(this.visible)
    },
    handleScroll () {
      this.scrolled = window.scrollY === 0
      dataContext.$emit('isTop', this.scrolled)
      // console.log(this.scrolled)
    }
  }
}
</script>
