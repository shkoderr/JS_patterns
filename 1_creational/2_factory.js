//Создадим 3 класса со схожей функциональностью, но разными параметрами:
//Классы очень похожи и отличаются только ценой
class SimpleMembership {
  constructor(name) {
    this.name = name
    this.cost = 50
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name
    this.cost = 150
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name
    this.cost = 500
  }
}

//Мы можем создать фэктори:

class MemberFactory {
  static list = {
    //list - объект, в котором хранятся ссылки на наши различные классы
    simple: SimpleMembership,
    standart: StandardMembership,
    premium: PremiumMembership,
  }
  //создадим метод create, с помощью которого мы будем создавать инстансы наших классов
  create(name, type = 'simple') {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple //получаем необходимый класс, если не укажем, то simple
    const member = new Membership(name) //теперь это уже инстанс конкретного класса
    //можем модифицировать наш инстанс
    member.type = type
    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`)
    }
    return member
  }
}

const factory = new MemberFactory()

const members = [
  factory.create('Timur', 'simple'), //создаём мембера с подпиской и он сразу попадает в массив
  factory.create('Kseniia', 'premium'),
  factory.create('Lena', 'standard'),
  factory.create('Ivan', 'premium'),
  factory.create('Yura'),
]

console.log(members) //получаем массив, состоящий из объектов определённого типа

members.forEach((member) => {
  member.define()
})
//Т.к. мы создали этот метод ранее, у нас будет такая красивая информация о наших объектах:
/*Timur (simple): 50
  Kseniia (premium): 500
  Lena (standard): 50
  Ivan (premium): 500
  Yura (simple): 50*/
