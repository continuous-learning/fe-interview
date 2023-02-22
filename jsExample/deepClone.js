const data = {
  age: 18,
  name: "liuruchao",
  education: ["小学", "初中", "高中", "大学", undefined, null],
  likesFood: new Set(["fish", "banana"]),
  friends: [
    { name: "summer", sex: "woman" },
    { name: "daWen", sex: "woman" },
    { name: "yang", sex: "man" }],
  work: {
    time: "2019",
    project: { name: "test", obtain: ["css", "html", "js"] }
  },
  play: function () { console.log("玩滑板"); }
}

const data1 = {
  name: 'foo',
  child: null,
}
data1.child = data1

const deepClone = (datas, hash = new WeakMap()) => {
  let result = {}
  if (typeof datas !== 'object' || datas === null) {
    throw new Error('Please pass Object')
  }
  if (hash.has(datas)) return hash.get(datas) // 判断传入的待拷贝对象的引用是否存在于hash中，如果存在，直接返回
  for (const prop in datas) {
    if (typeof datas[prop] !== 'object' || datas[prop] !== null) result[prop] = datas[prop]
    else if (Object.prototype.toString.call(datas[prop]) === '[object Array]') result[prop] = [...datas[prop]]
    else if (datas[prop] instanceof Set) result[prop] = new Set([...datas[prop]])
    else if (datas[prop] instanceof Map) result[prop] = new Map([...datas[prop]])
    else {
      hash.set(datas, datas) // 将这个待拷贝对象的引用存于hash中
      deepClone(datas[prop], hash)
    }
  }
  return result
};

const newDatas = deepClone(data);

const deepCloneByBreadths = (datas, hash = new WeakMap()) => {}
