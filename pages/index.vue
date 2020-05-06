<template>
  <main>
    <div class="bg" :style="'width:' + progress + '%'" />
    <logo class="logo" />
    <state :progress="progress" class="map" />
    <div class="dates">
      <span class="start">
        <span>May</span>
        <span>01</span>
      </span>
      <span class="end">
        <span>Aug</span>
        <span>31</span>
      </span>
    </div>
    <div class="day">
      <span>day</span>
      <h1>{{ daysIn }}</h1>
    </div>
    <svg class="ticks" xmlns="http://www.w3.org/2000/svg" width="2400" height="10" viewBox="0 0 2400 10">
      <path fill="none" stroke-miterlimit="10" d="M1 0v10M20 0v10M40 0v10M59 0v10M79 0v10M99 0v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10m19-10v10m20-10v10m20-10v10" />
    </svg>
    <a href="https://runsignup.com/Race/TN/Memphis/TheGreatVirtualRaceAcrossTennessee1000K">
      Join
    </a>
  </main>
</template>

<script>
import getDayOfYear from 'date-fns/get_day_of_year'
export default {
  asyncData(ctx) {
    const year = ctx.app.$dateFns.format(new Date(), 'y')
    const month = ctx.app.$dateFns.format(new Date(), 'M')
    const day = ctx.app.$dateFns.format(new Date(), 'd')

    return {
      year: year,
      month: month,
      day: day,
      dayOfStart: getDayOfYear(new Date(2020, 5, 1)),
      // dayOfNow: getDayOfYear(new Date(2020, 8, 20)),
      dayOfNow: getDayOfYear(new Date(year, month, day)),
      dayOfEnd: getDayOfYear(new Date(2020, 8, 31))
    }
  },
  computed: {
    daysIn() {
      return this.dayOfNow - this.dayOfStart + 1
    },
    progress() {
      return this.daysIn / 123 * 100
    }
  }
}
</script>

<style lang="scss" scoped>
  // 123 days
  .ticks {
    display: block;
    bottom: 3em;
    left: 0;
    right: 0;
    position: fixed;
    stroke: $dark;
    stroke-width: 3;
    width: 100%;
  }

  a {
    background: $dark;
    bottom: 0;
    color: $light;
    font-weight: bold;
    left: 0;
    right: 0;
    padding: 1em;
    position: fixed;
    text-align: center;
    text-transform: uppercase;
    z-index: 100;

    &:hover {
      color: $lighter;
    }
  }

  .logo {
    bottom: 0;
    min-height: 100%;
    position: fixed;
    top: 0;
  }

  .map {
    bottom: 3vmin;
    display: block;
    left: 3vmin;
    margin: auto;
    position: fixed;
    right: 3vmin;
    top: 3vmin;
    width: calc(100% - 6vmin);
  }

  @keyframes time {
    from {
      transform: scaleX(0);
    }
  }

  .bg {
    animation: time 5s $ease-out-quint forwards;
    background: $lighter;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    transform-origin: left;
    z-index: -1;
  }

  .dates {
    display: flex;
    font-family: monospace;
    font-weight: bold;
    justify-content: space-between;
    padding: 1vmin;
    position: relative;
    text-transform: uppercase;
    width: 100%;

    span {
      display: block;
    }

    .end {
      text-align: right;
    }
  }

  .day {
    font-family: monospace;
    font-weight: bold;
    justify-content: space-between;
    padding: 1vmin;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 2em;
    width: 100%;

    span {
      display: block;
    }
  }
</style>
