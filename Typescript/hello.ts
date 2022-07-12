let a: number = 123;
console.log(a);
const str = '123123'
enum AA { a = '4', b = 9 }
//1.类之间兼容性
class Point2D {
  x = 1
  y = 2
};
class Point3D {
  x = 1
  y = 2
  z = 3
};
//【Point3D】能够兼容【Point2D】
const p: Point2D = new Point3D();

//2.接口之间的兼容性
interface Point2D {
  x: number
  y: number
};
interface Point3D {
  x: number
  y: number
  z: number
};
//【point3D】能够兼容【Point2D】
let p3: Point3D = { x: 1, y: 2, z: 3 }
let p2: Point2D
p2 = p3

//3.函数之间的兼容性
type F1 = (x: number) => void
type F2 = (x: number, y: number) => void
let f1: F1 = (x: number) => { }
let f2: F2 = f1

//4.交叉类型
interface Person { name: string }
interface Contact { phone: number }
//合并成一个类型
type PersonDetail = Person & Contact
//5.泛型函数
function fn<Type>(x: Type) { }
fn<string>('2')
fn('2')
//5.1泛型约束:约束成更具体的类型
function fn2<Type>(x: Type[]) {
  console.log(x.length);
}
//5.2泛型约束:约束成具有指定属性的接口
interface Length { length: number }
function fn3<Type extends Length>(x: Type) {
  console.log(x.length);
}
//5.3泛型约束：【extends keyof】限定某类型的属性
function fn4<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}
let person = { name: 'linll', age: 10 }
fn4(person, 'name')
//5.4 泛型的接口
interface IdFunc<Type> {
  id: (value: Type) => Type
  ids: () => Type[]
}
let obj: IdFunc<number> = {
  id(value) { return value },
  ids() { return [1, 2, 4] }
}
const arry = [1, 2, 3, 4]
arry.forEach(item => { })

//5.4 泛型的类
class persion<Type> {
  name: Type
  add: (x: Type, y: Type) => Type
  constructor(name: Type, add: (x: Type, y: Type) => Type) {
    this.add = add
    this.name = name
  }
}
const myNum = new persion(1, (x: number, y: number) => x + y)
interface persion2 {
  name: string
  age: number
  height: number
}
//5.5 工具泛型【partial<接口名>】：将对象属性变成【可选】后构建一个新对象
type children = Partial<persion2>
let child: children = { name: 'linll' }
//5.6 工具泛型【Readonly<接口名>】：将对象属性变成【只读】后构建一个新对象
type children2 = Readonly<persion2>
let child2: children2 = { name: 'linll', age: 20, height: 172 }
//5.7 工具泛型【Pick<接口名>】：选取对象的【几个属性】后构建一个新对象
type children3 = Pick<persion2, 'name' | 'age'>
let child3: children3 = { name: 'linll', age: 20 }
//5.8 工具泛型【Record<'属性名1' | '属性名2',全部属性类型>】：快速构建一个相同属性类型对象
type persion3 = Record<'age' | 'height', string[]>
let child4: persion3

//5.6 索引签名类【key:string】：给【未知属性名】进行占位
type persion4 = {
  [key: string]: number
}
let obj2: persion4 = { age: 28 }
//5.6 映射类型【[key in ]】：遍历【联合类型】创建【对象】
type persion5Keys = 'name' | 'age' | 'height'
type persion5 = { [kesy in persion5Keys]: string }
//5.7 映射类型【[key in keyof ]】：遍历【旧类型对象】创建【新类型的对象】
type persion6 = {
  name: string
  age: number
  height: number
}
type persion7 = { [key in keyof persion6]: number }
//5.8 索引查询类型【对象类型名['属性名']】：查询属性的类型
type key = persion6['name']
//5.8.1 【联合类型】或【keyof】查询多个属性的类型
type key2 = persion6['height' | 'age']
type key3 = persion6[keyof persion6]