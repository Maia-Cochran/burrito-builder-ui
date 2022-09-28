import React, { Component } from 'react';
import { postOrder } from '../../apiCalls'

class OrderForm extends Component {
  constructor(props) {
    super(props);
    // this.props = props;
    this.state = {
      id: this.props.id,
      name: '',
      ingredients: []
    };
  }

  handleNameChange = e => {
    e.preventDefault();
    console.log('NAME', e.target.name)
    this.setState({ name: e.target.value })
  }

  handleIngredientChange = e => {
    e.preventDefault();
    console.log('ing value', e.target.name)
    this.setState({ ingredients: [...this.state.ingredients, [e.target.name]] })
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name && this.state.ingredients.length) {
      const newSubmit = postOrder(this.state.name, this.state.ingredients);
      console.log('NEW SUBMIT', newSubmit)
      newSubmit.then(data => {
        this.props.addOrder(data)
      })
    }
    this.clearInputs();
  }


  clearInputs = () => {
    this.setState({ name: '', ingredients: [] });
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      console.log('INGREDIENT', ingredient)
      return (
        <button className='ingredient-choice' key={ingredient} name={ingredient} value={this.state.ingredients} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        {ingredientButtons}

        <p>Order: {this.state.ingredients.join(', ') || 'Nothing selected'}</p>

        <button className='submit-button' onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
