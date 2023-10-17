import React from "react";

import Card from './components/Card/Card';
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  state = {
    soufiane: {
      fullname: 'Soufiane Maski',
      nickname: 'The Data "Legend"',
      points: 0
    },
    dorothee: {
      fullname: 'Dorothée Catry',
      nickname: 'The Witch',
      points: 0
    },
    felix: {
      fullname: 'Félix Depret',
      nickname: 'Félix Kebab',
      points: 0
    },
    caro: {
      fullname: 'Caroline Rouvillain',
      nickname: 'The Brain',
      points: 0
    },
    gwen: {
      fullname: 'Gwenaëlle Deschamps',
      nickname: 'The Mommy',
      points: 0
    },
    julien: {
      fullname: 'Julien Billardon',
      nickname: 'Teddy Bear',
      points: 0
    },
    greg: {
      fullname: 'Grégoire Lozach',
      nickname: 'Fonzy',
      points: 0
    }
  }

  increment = (name) => {
    this.setState({
      ...this.state,
      [name]: {
        ...this.state[name],
        points: this.state[name].points + 1
      }
    })
  }

  decrement = (name) => {
    this.setState({
      ...this.state,
      [name]: {
        ...this.state[name],
        points: this.state[name].points - 1
      }
    })
  }

  render() {
    const persons = Object.keys(this.state);

    return (
      <>
        <h1>The Data Counter !!!</h1>
        <article>
          {persons.map(person => (
            <Card 
              key={person} 
              name={person}
              person={this.state[person]}
              increment={this.increment}
              decrement={this.decrement}
            />
          ))}
        </article>
      </>
    );
  }
}

export default App;