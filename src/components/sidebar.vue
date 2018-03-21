<template>
  <div :class="$style.innerHoge">
    <div :class="$style.hoge">
      <div :class="$style.innerHoge">ここからSPA</div>
      <ul>
        <li>spa 000</li>
        <li>spa 111</li>
        <li>spa 222</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
const abc = '23'

export default {}
</script>

<style module lang="sass">
  .hoge {
    background-color:red;

    .innerHoge {
      background-color: blue;
    }
  }
</style>
