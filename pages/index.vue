<template>
  <main>
    <div class="bg" />
    <logo class="logo" />
    <state class="map" />
    <div class="dates">
      <span>May 01</span>
      <span>Aug 31</span>
    </div>
    <a href="https://runsignup.com/Race/TN/Memphis/TheGreatVirtualRaceAcrossTennessee1000K">
      Join
    </a>
  </main>
</template>

<style lang="scss" scoped>
  // 123 days
  a {
    color: $light;
    font-weight: bold;
    right: 0;
    padding: 1vmin;
    position: fixed;
    bottom: 0;
    z-index: 100;

    &::before {
      background: $dark;
      content: '';
      border-radius: 50%;
      height: 400%;
      left: -75%;
      position: absolute;
      top: -75%;
      width: 400%;
      z-index: -1;
    }
  }

  .logo {
    min-height: 100vmin;
    position: absolute;
    top: 0;
  }

  .map {
    bottom: 0;
    display: block;
    position: fixed;
    width: 100%;
  }

  @keyframes time {
    to {
      // transform: scaleX(1);
      transform: scaleX((2 / 123))
    }
  }

  .bg {
    animation: time 5s 1.5s $ease-out-quint forwards;
    background: $lighter;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    // transform: scaleX(0);
    transform-origin: left;
    // width: (2 / 123 * 100%);
    width: 100%;
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
  }
</style>
