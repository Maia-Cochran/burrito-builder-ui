export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
  .then(response => {
    if(!response.ok){
      throw new Error('Oh noes! Try again!')
    } else {
      return response.json()
    }
  })
      // .then(response => response.json())
      // .catch(error => console.log(error))
}

export const postOrder = async (name, ingredients) => {
  await fetch(`http://localhost:3001/api/v1/orders/`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({name: name, ingredients: ingredients})
})
.then(res => res.json())
}
