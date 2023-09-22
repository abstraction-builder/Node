function f1()
{
	console.log(this)
}

const obj1 = {id: "Foo"}
f1.call(obj1, 123) // So, f1 is some sort of object or function object?!

const obj2 = {id: "Bar"}
f1.apply(obj2)
