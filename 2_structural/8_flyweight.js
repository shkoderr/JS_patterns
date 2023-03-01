//Flyweight — это шаблон проектирования, целью которого является минимизация использования памяти и повышение производительности за счет обмена данными между похожими объектами. В JavaScript этот шаблон можно использовать для минимизации объема памяти объектов, которые имеют много общих данных. Например, данный паттерн позволяет не загружать снова ранее загруженные изображения.
class Car {
  constructor(model, price) {
    this.model = model
    this.price = price
  }
}

class CarFactory {
  constructor() {
    this.cars = [] //наш 'кэш', если в массиве будет объект, то будем брать из него, а не создавать новый
  }

  create(model, price) {
    //метод 'create' дублирует функционал конструктора класса 'Car'
    const candidate = this.getCar(model) //пробуем получить объект, который потенциально сущ-ет в данном классе
    if (candidate) {
      //если этот объект уже есть, то...
      return candidate //...возвращаем этот объект, а если такого нет, то...
    }

    const newCar = new Car(model, price) //...создаём новый объект
    this.cars.push(newCar) //добавляем созданный объект в массив this.cars - т.о. мы закэшируем объект
    return newCar
  }

  getCar(model) {
    return this.cars.find((car) => car.model === model)
  }
}

const factory = new CarFactory()
//Теперь создадим с помощью CarFactory.create машинки:
const bmwX6 = factory.create('bmw', 10000)
const audi = factory.create('audi', 12000)
const bmwX3 = factory.create('bmw', 8000)
console.log(bmwX6) //Car { model: 'bmw', price: 10000 }
console.log(audi) //Car { model: 'audi', price: 12000 }
console.log(bmwX3) //Car { model: 'bmw', price: 10000 } - в объекте factory мы уже сохранили 'bmw' и когда мы заново создаём 'bmw', мы берём его из кэша

console.log(bmwX3 === bmwX6) //true
