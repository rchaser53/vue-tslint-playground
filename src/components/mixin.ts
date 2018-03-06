import Vue from 'vue'
import Component from 'vue-class-component'
// import Parent from './parent.vue'

@Component
export default class extends Vue {
	mixinValue = 'Hello'
}
