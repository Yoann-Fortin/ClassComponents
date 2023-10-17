import React from "react";
import PropTypes from 'prop-types';

import './Card.css'
class Card extends React.Component {
   constructor(props) {
      super(props)
   }

   handleClickIncrement = () => {
      this.props.increment(this.props.name)
   }

   handleClickDecrement = () => {
      this.props.decrement(this.props.name)
   }

   render() {
      const {
         fullname,
         nickname,
         points
      } = this.props.person;

      return (
         <section>
            <h2>{fullname} aka {nickname}</h2>
            <p>{points} points</p>
            <button onClick={this.handleClickIncrement}>Increment</button>
            <button onClick={this.handleClickDecrement}>Decrement</button>
         </section>
      )
   }
}

Card.propTypes = {
   increment: PropTypes.func.isRequired,
   decrement: PropTypes.func.isRequired,
   name: PropTypes.string.isRequired,
   person: PropTypes.shape({
      fullname: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      points: PropTypes.string.isRequired
   }).isRequired
}

export default Card;