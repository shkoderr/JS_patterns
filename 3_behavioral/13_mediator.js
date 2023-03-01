class User {
  constructor(name) {
    this.name = name
    this.room = null
  }

  send(message, to) {
    this.room.send(message, this, to)
  }

  recieve(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`)
  }
}


class ChatRoom {
  constructor() {
    this.users = {}
  }

  register(user) {
    this.users[user.name] = user
    user.room = this
  }

  send(message, from, to) {
    if(to) {
      to.recieve(message, from)
    } else {
      Object.keys(this.users).forEach(key => {
        if(this.users[key] !== from) {
          this.users[key].recieve(message, from)
        }
      })
    }
  }
}

//создадим юзеров из нашего класса:
const timur = new User('Timur')
const ksusha = new User('Ksusha')
const kolya = new User('Kolya')

const room = new ChatRoom()
//зарегаем наших юзеров в чат-комнату:
room.register(timur)
room.register(ksusha)
room.register(kolya)

//отправим сообщения друг другу:
timur.send('Hello!', ksusha)
ksusha.send('Hey!', timur)
kolya.send('Hey everyone!')

//Output:
/*Timur => Ksusha: Hello!
  Ksusha => Timur: Hey!
  Kolya => Timur: Hey everyone!
  Kolya => Ksusha: Hey everyone!*/

