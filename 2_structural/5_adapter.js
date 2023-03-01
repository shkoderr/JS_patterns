//Адаптер позволяет интегрировать старый интерфейс какого-то класса в новый и позволяет им работать совместно
class OldCalc {
  operations(t1, t2, operation) {
    switch (operation) {
      case 'add': return t1 + t2
      case 'sub': return t1 - t2
      default: return NaN
    }
  }
}

class NewCalc {
  add(t1, t2) {
    return t1 + t2
  }
  sub(t1, t2) {
    return t1 - t2
  }
}

//На данный момент у нас есть 2 класса, которые делают одно и то же, но интерфейсы у них разные
//Теперь скомбинируем функционал обоих классов, получив высшую абстракцию

class CalcAdapter {
  constructor() {
    this.calc = new NewCalc()
  }
  operations(t1, t2, operation) {
    switch (operation) {
      case 'add': return this.calc.add(t1, t2)
      case 'sub': return this.calc.sub(t1, t2)
      default: return NaN
    }
  }
}

const oldCalc = new OldCalc()
console.log(oldCalc.operations(10, 5, 'add')) //15

const newCalc = new NewCalc()
console.log(newCalc.add(10, 5)) //15

const adapter = new CalcAdapter()
console.log(adapter.operations(25, 10, 'sub')) //15
