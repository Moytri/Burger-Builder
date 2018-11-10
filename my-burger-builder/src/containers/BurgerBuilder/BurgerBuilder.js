import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    constructor (props) {
        super(props);
        this.state = {
                //key value pair
                //key is the name of the ingredients
                //value is the amount
                ingredients: {
                    salad: 1,
                    bacon: 1,
                    cheese: 2,
                    meat: 2
                }
        }
    }

    render() {
        //returns two components
        //graphical representation of the burger
        //The area where I need to add or remove Ingredients
        return (
            <Aux>             
                <Burger ingredients={this.state.ingredients}/>
            </Aux>
        );
    };
}

export default BurgerBuilder;