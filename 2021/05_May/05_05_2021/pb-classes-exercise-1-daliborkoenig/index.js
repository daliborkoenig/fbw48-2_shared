class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		// Complete the code!
		this.fullname = `${firstname} ${lastname}`
		this.email = `${firstname.toLowerCase()}.${lastname.toLowerCase()}@company.com`
	}
}

emp1 = new Employee("John", "Smith")
console.log(emp1.fullname) // ➞ "John Smith"

emp2 = new Employee("Mary",  "Sue")
console.log(emp2.email) // ➞ "mary.sue@company.com"

emp3 = new Employee("Antony", "Walker")
console.log(emp3.firstname) // ➞ "Antony"