<template>
  <div class="column is-12">
    <label @click="hoge" class="label">afsdaf</label>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from 'vue'
import Component from 'vue-class-component'

const SomethingMixin = {
	nyan(): void {
		console.log('nyan')
	},
	chu<T>(a: T): T {
		return a
	}
}

export default ((mixin) => {
	@Component({
		props: {
			propMessage: String
		}
	})
	class Hoge extends Vue {
		hoge() {
			mixin.nyan()
			// [1,2,3].reduce<string[]>((stack, next) => {
			//     return stack.concat(next.toString())
			// }, [])
		}
	}
	return Hoge
})(SomethingMixin)
</script>
