import React from 'react';
import BurgerIngredient from './BurgerIgredient/BurgerIgredient';
import classes from './Burger.module.css';

const burger = (props) => {
    //props.ingredients is an Object
    //keys method extract the keys of the given Object
    //returns a array of keys
    //igKey is the key of the array

    //**************************** */

    //Array(props.ingredients[igKey] creates a new Array like new Array(3)
    //means the size of array is 3
    //here we creates array having size that equals the amount of given ingredient (igKey)
    const transformedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])] 
                    .map((_, i) => {
                        return <BurgerIngredient key={igKey + i} type={igKey} />;
                    });
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;