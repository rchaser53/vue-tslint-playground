// interface HogeInterface extends HogeType {
//   pro: number
// }

interface HogeInterface {
	pro: number
}

type HogeType = { pro: number }

// const hoge = {}

// class TestClass implements HogeInterface {
class TestClass implements HogeType {
	pro = 23
	nyan = 12
	// proType = 22;
}

interface Nyan {
	hoges: HogeType[]
}

interface Nyan2 {
	hoges: HogeInterface[]
}

// type HogeType = { propType: number }

interface Nyan {
	hoges: HogeType[]
}
