import Vue from 'vue'
import Router from 'vue-router'
import AvTsComponent from './components/av-ts-component.vue'
import ComponentA from './components/componentA.vue'
import NativeTs from './components/native-ts.vue'
import Sidebar from './components/sidebar.vue'

Vue.use(Router)

export const createComponents = (component) => {
	return {
		content: component,
		sidebar: Sidebar
	}
}

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/hoge',
			name: 'HelloWorld',
			children: [
				{
					path: 'ratta',
					components: createComponents(AvTsComponent)
				},
				{
					path: 'makimaki',
					components: createComponents(ComponentA)
				}
			],
			components: createComponents(ComponentA)
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
