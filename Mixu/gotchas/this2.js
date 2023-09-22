function f1() {
	console.log(this.toString())
	console.log(this == global)
}

f1()
