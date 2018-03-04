<template>
  <div class="column is-12">
    <label @click="hoge" class="label">{{propertyA}}</label>
    <div>{{culculatePropertyA}}</div>
    <button @click="nyan">nya-n</button>
    <button @click="globalHoge">global</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

Vue.mixin({
	methods: {
		// vue-typescript knows the globalHoge but need extra parameter
		globalHoge: function() {
			console.log('global')
		}
	}
})

const MixinB = {
	methods: {
		chu: function(a: number): string {
			return a.toString()
		}
	}
}

const Hoge = Vue.extend({
	mixins: [MixinB],
	data() {
		return {
			propertyA: 1
		}
	},
	methods: {
		hoge() {
			this.propertyA += 1
		},
		nyan: function() {
			console.log((this as any).chu(1))
		}
	},
	computed: {
		culculatePropertyA: function() {
			this.globalHoge('a') // why don't you need the parameter. globalHoge is no parameter.
			return this.propertyA * 2 // the editor emits the error. but it's not typescript error.
		}
	}
})
export default Hoge
</script>
