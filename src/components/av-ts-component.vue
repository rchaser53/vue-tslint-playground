<template>
    <div>
        hoge
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch, Lifecycle, p } from 'av-ts'

@Component({
	filters: {},
	name: 'my-component'
	//   delimiter: ['{{', '}}'],
})
export default class MyComponent extends Vue {
	// extends Vue or your own component
	myData = '123'

	// props declaration
	@Prop
	myProp = p({
		type: Object,
		required: true
		// default() {
		//     return { a: 1, b: 2}
		// }
	})

	// method is `method`
	myMethod() {
		console.log('myMethod called!')
	}

	// accessor is `computed`
	get myGetter() {
		return this.myProp
	}

	// watch handler is declared by decorator
	myWatchee = 'watch me!'
	@Watch('myWatchee')
	handler(newVal, oldVal) {
		console.log(this.myWatchee + 'changed!')
	}

	// lifecycle hook is speical so it is decorated
	@Lifecycle
	beforeCreate() {}
}
</script>
