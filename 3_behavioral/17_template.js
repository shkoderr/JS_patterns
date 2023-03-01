class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {}

  work() {
    return `${this.name} выполняет ${this.responsibilities()}`
  }

  getPaid() {
    return `${this.name} получает ЗП ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'Developing software'
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'Testing programms'
  }
}

const dev = new Developer('Timur', 100000)
console.log(dev.getPaid()) //Timur получает ЗП 100000
console.log(dev.work()) //Timur выполняет Developing software

const tester = new Tester('Lena', 90000)
console.log(tester.getPaid()) //Lena получает ЗП 90000
console.log(tester.work()) //Lena выполняет Testing programms
