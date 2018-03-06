<template>
  <div class="column is-12">
    <label @click="hoge" class="label">testetsteste</label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'
import MixinA from './mixin'
import Parent from './parent.vue'

Vue.mixin({
	methods: {
		globalHoge: function() {
			console.log(2)
		}
	}
})

@Component({
	// extends: Parent
})
export default class extends mixins(MixinA) {
	hoge() {
		// console.log((this as any).parentValue)
		// console.log((this as any).msg)
		// this.parentValue
		console.log('2222')
		console.log(this.parentValue)
		// this.parentValue
		console.log(this.mixinValue)
	}
}
</script>
