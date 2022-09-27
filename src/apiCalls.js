export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
      .catch(error => console.log(error))
}

export const postOrder = (order, name, ingredients) => {
  return fetch(`http://localhost:3001/api/v1/orders`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({order: name, ingredients}),
})
.then(res => res.json())
}