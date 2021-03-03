// Partial<T> Required<T> Readonly<T>
// Record<K extends keyof any, T>
// Pick<T, K extends keyof any>
// Omit<T, K extends keyof any>
// NonNullable<T>

interface Todo {
  title: string
  description: string
}
// Partial<Type> 将Type的所有属性设置为可选

// Required<Type> 将Type的所有属性设置为必须

// Readonly<Type> 构造一个Type的所有属性都设置为readonly的类型，这意味着无法重新分配所构造类型的属性
const todo1: Readonly<Todo> = {
  title: 'todo1',
  description: 'todo1'
}
todo1.title = '123' // error

// Record<Keys, Type> 构造一个对象类型，其属性键为Keys，其属性值为Type
const symb = Symbol()
const todo2: Record<'a' | 1 | typeof symb, Todo> = {
  a: { title: 'a', description: 'a' },
  1: { title: '1', description: '1' },
  [symb]: { title: '2', description: '2' }
}

// Pick<Type, Keys> 通过从Type中选择属性Keys的集合来构造类型
interface Todo2 {
  a: string
  1: string
  [symb]: string
}
const todo3: Pick<Todo2, 'a' | typeof symb> = {
  a: 'a',
  [symb]: 'b'
}

// Omit<Type, keys>
const todo4: Omit<Todo2, 'a'> = {
  1: '1',
  [symb]: '2'
}

// Exclude
type t = Exclude<"a" | "b" | "c", "a"> // t = "b" | "c"
type t2 = Extract<"a" | "d", "a" | "b" | "c"> // t = "a"

// NonNullable<Type>
type t3 = NonNullable<any>

// Parameters<Type>
type t4 = Parameters<(a: string, b: number) => string> // [a: string, b: number]
type t5 = Parameters<typeof Array.prototype.map>

// ConstructorParameters<Type>
type t6 = ConstructorParameters<ArrayConstructor>

// ReturnType<Type>
type t7 = ReturnType<() => Promise<string>>

// InstanceType<Type>
type t8 = InstanceType<typeof Object>

function toHex(this: Number) {
  return this.toString(16)
}

const fiveHex: OmitThisParameter<typeof toHex> = toHex.bind(5)
fiveHex()