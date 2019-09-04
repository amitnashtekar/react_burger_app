import React , {Component} from 'react';
import Auxi from '../../hoc/Auxi/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandlr/withErrorHandlr';
import { connect} from 'react-redux';
import * as burgerBuilderActions from '../../Store/Actions/index';




class BurgerBuilder extends Component {
    state = {
        // ingredients: {
        //     salad:0,
        //     bacon:0,
        //     cheese:0,
        //     meat:0
        // },
        //totalPrice:4,
        //purchesable: false,
        purchasing: false,
        loading: false
    }
    componentDidMount () {
        this.props.onInitIngredients();
        // axios.get('/ingredients.json')
        // .then(res => {
        //     this.setState({ingredients:res.data});
        // }).catch(err=>{
        //     this.setState({error:true});
        //     console.log(err)
        // })
    }    

    // addIngredientHandler = (type) => {
    //     let updatedCount = this.props.ings[type];
    //     updatedCount = updatedCount + 1;
    //     let updatedIngredients = {
    //         ...this.props.ings
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     var newPrice = this.props.totalPrice + INGREDIENTS_PRICE[type];
    //     this.setState({ingredients:updatedIngredients, totalPrice: newPrice});
    //     this.updateIngredients(updatedIngredients);

    // }
    
    // removeIngredientHandler = (type) => {
    //     let updatedCount = this.props.ings[type];
    //     if (updatedCount === 0) {
    //         return; 
    //     }
    //     updatedCount = updatedCount - 1;
    //     let updatedIngredients = {
    //         ...this.props.ings
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     var newPrice = this.props.totalPrice - INGREDIENTS_PRICE[type];
    //     this.setState({ingredients:updatedIngredients, totalPrice: newPrice});
    //     this.updateIngredients(updatedIngredients);
    // }

    updateIngredients = (ingredients) => {
        const sum = Object.keys(ingredients)
                    .map(key => {
                        return ingredients[key]
                    })
                    .reduce((sum, el) => {
                        return sum + el
                    }, 0);
        return sum === 0 ? false : true;
        
    }
    
    purchaseOrder = () => {
        this.setState({purchasing:true});
    }
    closeModal = () => {
        this.setState({purchasing:false});
    }
    purchaseContinue = () => {
        alert('purchase continued !');
        // const queryParam = [];
        // for(let i in this.props.ings) {
        //     queryParam.push(encodeURIComponent(i) + '=' + this.props.ings[i])
        // }
        // queryParam.push('totalPrice='+ this.props.totalPrice);
        // var queryString ='?' + queryParam.join('&');
        // this.props.history.push({
        //     pathname:'/checkout',
        //     search: queryString
        // })
        this.props.history.push('/checkout');
        
    }

    render() {
        const disableInfo = {
            ...this.props.ings
        } 
        for(let key in disableInfo) {
           disableInfo[key] = this.props.ings[key] <= 0; 
        }
        let orderSummary = <Spinner />;
        let burger = this.props.error?<strong>Something is wrong!!</strong>:<Spinner />
        
        if(this.props.ings) {
            burger = (
                <Auxi>
                    <Burger ingredients={this.props.ings}></Burger>
                    <BuildControls ingredientAdded = {this.props.onIngredientAdded}
                    ingredientRemoved = {this.props.onIngredientRemoved}
                    disabled = {disableInfo}
                    price = {this.props.totalPrice}
                    purchesable = {!this.updateIngredients(this.props.ings)}
                    ordered = {this.purchaseOrder}/>
                </Auxi>
            )
        }
        if(!this.state.loading && this.props.ings) {
            orderSummary =  <OrderSummary  ingredients = {this.props.ings}
            cancelOrder = {this.closeModal}
            purchaseContinue = {this.purchaseContinue}
            price = {this.props.totalPrice}>
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

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        totalPrice:state.burgerBuilder.totalPrice,
        error:state.burgerBuilder.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded:(ingName) => dispatch(burgerBuilderActions.addIngredients(ingName)),
        onIngredientRemoved:(ingName) => dispatch(burgerBuilderActions.removeIngredients(ingName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients())
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios));