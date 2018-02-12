import Vue from 'vue'
import ComponentA from './components/componentA.vue'

// import ComponentA from './components/av-ts-component.vue'

new Vue({
	el: '#appaaa',
	components: { ComponentA },
	template: '<component-a my-prop="{a:1, b:3}"/>'
})
