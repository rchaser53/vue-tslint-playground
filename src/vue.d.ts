import Vue from 'vue'

declare namespace Hoge {
	type globalHoge = (b: string) => number
}

declare module 'vue/types/vue' {
	interface Vue {
		globalHoge: Hoge.globalHoge
	}
}
