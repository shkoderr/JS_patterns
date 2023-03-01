//=======================ES 5 syntax======================
//function Server(name, ip) {    //название с большой буквы, т.к. мы создаём функцию-класс
//  this.name = name
//  this.ip = ip
//}
////Теперь расширим прототип нашего класса: 
//Server.prototype.getUrl = function () {
//  return `https://${this.ip}:80`
//}
//Теперь создадим инстанс нашего класса: 
//const aws = new Server('AWS German', '82.21.21.32')
//console.log(aws.getUrl()) //https://82.21.21.32:80

//=======================ES 6 syntax======================
//Создадим класс Server:
class Server {
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }
  //Создадим метод getUrl сразу в конструкторе класса: 
  getURL() {
    return `https://${this.ip}:80`
  }
}

const aws = new Server('AWS German', '82.21.21.32')
console.log(aws.getUrl())  //https://82.21.21.32:80


