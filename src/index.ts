import Vue from 'vue'

// import ComponentA from './components/av-ts-component.vue'
// import ComponentA from './components/componentA.vue'
import ComponentA from './components/native-ts.vue'

new Vue({
	el: '#app',
	components: { ComponentA },
	template: '<component-a my-prop="{a:1, b:3}"/>'
})
