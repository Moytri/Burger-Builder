import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';

class BurgerBuilder extends Component {

    render() {
        //returns two components
        //graphical representation of the burger
        //The area where I need to add or remove Ingredients
        return (
            <Aux>
               
                <div>Burger</div>
                <div>Build Controls</div>
            </Aux>
        );
    };
}

export default BurgerBuilder;