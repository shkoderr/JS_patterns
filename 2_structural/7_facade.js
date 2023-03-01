//==============Create main class===============
class Complaints {
  constructor() {
    this.complaints = []
  }

  reply(complaint) {}

  add(complaint) {
    this.complaints.push(complaint)
    return this.reply(complaint)
  }
}

//===============Наследование==================
class ProductComplaints extends Complaints {
  reply({id, customer, details}) {
    return `Product: ${id}: ${customer} (${details})`
  }
}

class ServiceComplaints extends Complaints {
  reply({id, customer, details}) {
    return `Service: ${id}: ${customer} (${details})`
  }
}

//=====================Now we'll create a facade=========================
class ComplaintRegistry {
  register(customer, type, details) {  //по типу будем определять к какому роду жалоб относится сообщение 
    const id = Date.now()
    let complaint

    if(type === 'service') {
      complaint = new ServiceComplaints()
    } else {
      complaint = new ProductComplaints()
    }

    return complaint.add({id, customer, details})
  }
}

const registry = new ComplaintRegistry()

console.log(registry.register('Timur', 'service', 'Unavailable')) //Service: 1677503170555: Timur (Unavailable)
console.log(registry.register('Kseniia', 'product', 'An error occured')) //Product: 1677503223686: Kseniia (An error occured)



