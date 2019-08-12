import React , {Component} from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICE = {
    salad:1.2,
    bacon:0.8,
    cheese:1,
    meat:0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4 
    }

    addIngredientHandler = (type) => {
        let updatedCount = this.state.ingredients[type];
        updatedCount = updatedCount + 1;
        let updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        var newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
        this.setState({ingredients:updatedIngredients, totalPrice: newPrice});

    } 
    render() {
        return (
            <Auxi>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls ingredientAdded = {this.addIngredientHandler}/>
            </Auxi>
        )
    }
    
}

export default BurgerBuilder;