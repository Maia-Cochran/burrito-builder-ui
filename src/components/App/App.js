import React, { Component } from 'react';
import './App.css';
import { getOrders } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }


  addNewOrder = (newOrder) => {
    this.setState({ orders: [...this.state.orders, newOrder] })
  }

  async componentDidMount () {
    await getOrders().then( data => {
      console.log(data)
      this.setState({orders: [...data.orders]})
    })
      .catch(err => console.error('Error fetching:', err));
  }
  componentDidUpdate = () => {
    getOrders().then((response) => response.json())
    .then((data) => {
      this.setState({orders: [...data.orders]})
    })
    .catch((error) => {
      this.setState({
        error: `Sorry, we seem to be having a ${error.message}`
      })
    })
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addOrder={this.addNewOrder} />
        </header>
        <Orders orders={this.state.orders} />
      </main>
    );
  }
}


export default App;
