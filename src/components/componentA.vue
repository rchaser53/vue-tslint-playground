<template>
  <div class="column is-12">
    <label @click="hoge" class="label">testetsteste</label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'
import MixinA from './mixin'

Vue.mixin({
	methods: {
		globalHoge: function() {
			console.log(2)
		}
	}
})

@Component
export default class extends mixins(MixinA) {
	hoge() {
		console.log(this.mixinValue)
	}
}
</script>
