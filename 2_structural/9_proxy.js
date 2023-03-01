function networkFetch(url) {
  return `${url} - Ответ с сервера`
}

const cache = new Set()
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0]
    if(cache.has(url)) {
      return `${url} - ответ из кэша`
    } else {
      cache.add(url)
      return Reflect.apply(target, thisArg, args)
    }
  }
})

console.log(proxiedFetch('angular.io')) //angular.io - Ответ с сервера
console.log(proxiedFetch('angular.io')) //angular.io - ответ из кэша