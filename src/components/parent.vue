<template>
  <div class="column is-12">
    <label @click="hoge" class="label">parent</label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class extends Vue {
	parentValue = 'parent value!!!'
}
</script>
