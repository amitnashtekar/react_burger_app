import React , {Component} from 'react';
import Auxi from '../../hoc/Auxi/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandlr/withErrorHandlr';

const INGREDIENTS_PRICE = {
    salad:1.2,
    bacon:0.8,
    cheese:1,
    meat:0.7
}

class BurgerBuilder extends Component {
    state = {
        // ingredients: {
        //     salad:0,
        //     bacon:0,
        //     cheese:0,
        //     meat:0
        // },
        totalPrice:4,
        purchesable: false,
        purchasing: false,
        loading: false,
        error:false 
    }
    componentDidMount () {
        axios.get('/ingredients.json')
        .then(res => {
            this.setState({ingredients:res.data});
        }).catch(err=>{
            this.setState({error:true});
            console.log(err)
        })
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
        this.updateIngredients(updatedIngredients);

    }
    
    removeIngredientHandler = (type) => {
        let updatedCount = this.state.ingredients[type];
        if (updatedCount === 0) {
            return; 
        }
        updatedCount = updatedCount - 1;
        let updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        var newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
        this.setState({ingredients:updatedIngredients, totalPrice: newPrice});
        this.updateIngredients(updatedIngredients);
    }

    updateIngredients = (ingredients) => {
        const sum = Object.keys(ingredients)
                    .map(key => {
                        return ingredients[key]
                    })
                    .reduce((sum, el) => {
                        return sum + el
                    }, 0);
        this.setState({purchesable: sum === 0 ? false : true});
        
    }
    
    purchaseOrder = () => {
        this.setState({purchasing:true});
    }
    closeModal = () => {
        this.setState({purchasing:false});
    }
    purchaseContinue = () => {
        alert('purchase continued !');
        this.props.history.push('/checkout')
        // this.setState({loading:true})
        // const order = {
        //     ingredients: this.state.ingredients,
        //     customer: {
        //         address: {
        //             street: 'test raod',
        //             zipcode:'2122',
        //             country: 'Australia'
        //         },
        //         name: 'Amit Ashtekar',
        //         email:'test@test.com'
        //     },
        //     deliveryMethod:'fastest',
        //     price:this.state.totalPrice
        // }
        // axios.post('/orders.json',order)
        // .then(resp => {
        //     this.setState({loading:false,purchasing:false})
        // })
        // .catch(err => {
        //     this.setState({loading:false,purchasing:false})
        // });
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        } 
        for(let key in disableInfo) {
           disableInfo[key] = this.state.ingredients[key] <= 0; 
        }
        let orderSummary = <Spinner />;
        let burger = this.state.error?<strong>Something is wrong!!</strong>:<Spinner />
        
        if(this.state.ingredients) {
            burger = (
                <Auxi>
                    <Burger ingredients={this.state.ingredients}></Burger>
                    <BuildControls ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disableInfo}
                    price = {this.state.totalPrice}
                    purchesable = {!this.state.purchesable}
                    ordered = {this.purchaseOrder}/>
                </Auxi>
            )
        }
        if(!this.state.loading && this.state.ingredients) {
            orderSummary =  <OrderSummary  ingredients = {this.state.ingredients}
            cancelOrder = {this.closeModal}
            purchaseContinue = {this.purchaseContinue}
            price = {this.state.totalPrice}>
           </OrderSummary>
        }
        
        return (
            <Auxi>
                
                <Modal show = {this.state.purchasing} 
                    closeModal = {this.closeModal}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxi>
        )
    }
    
}

export default WithErrorHandler(BurgerBuilder, axios);