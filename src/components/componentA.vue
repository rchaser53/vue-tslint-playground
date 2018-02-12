<template>
  <div class="column is-12">
    <label @click="hoge" class="label">afsdaf</label>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from 'vue'
import Component from 'vue-class-component'

Vue.mixin({
	methods: {
		globalHoge: function() {
			console.log(2)
		}
	}
})

const MixinA = {
	nyan(): void {
		console.log('nyan')
	}
}

const MixinB = {
	chu(a: number): string {
		return a.toString()
	}
}

export default (({ MixinA, MixinB }) => {
	@Component({
		props: {
			propMessage: String
		}
	})
	class Hoge extends Vue {
		hoge(this: Hoge) {
			// [1,2,3].reduce<string[]>((stack, next) => {
			//     return stack.concat(next.toString())
			// }, [])
			MixinA.nyan()

			this.globalHoge('abc')
			// this.a
		}
	}
	return Hoge
})({ MixinA, MixinB })
</script>
