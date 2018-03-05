import Vue from 'vue'
import Router from 'vue-router'
import AvTsComponent from './components/av-ts-component.vue'
import ComponentA from './components/componentA.vue'
import NativeTs from './components/native-ts.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/hoge',
			name: 'HelloWorld',
			children: [
				{
					path: 'ratta',
					component: AvTsComponent
				},
				{
					path: 'makimaki',
					component: ComponentA
				}
			],
			components: {
				default: NativeTs
			}
		},
		// this is kinda 404
		{
			path: '/*',
			component: {
				template: '<div>nya-n</div>'
			}
		}
	]
})
