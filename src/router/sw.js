self.addEventListener('message', function (e) {
  console.log(e.data)
  e.waitUntil(
    self.clients.matchAll().then(clients => {
      clients?.length && clients.forEach(client => {
        client.postMessage(e.data + Date.now())
      })
    })
  )
})