import React, {Component} from 'react';
import Order from '../../components/Order/Order/Order';
import axios from '../../axios-orders';

class Orders extends Component {
    state={
        fetchedOrders : [],
        loading:true
    };

    componentDidMount() {
        axios.get('/orders.json')
        .then(resp => {
            let fetchedOrders = [];
                console.log(resp.data)
                for(let key in resp.data) {
                    fetchedOrders.push({
                        ...resp.data[key],
                        id:key

                    })
                }
                this.setState({fetchedOrders:fetchedOrders, loading:false});
        }).catch(err=>{
            this.setState({loading:false});
        })
    }

    render() {
        return(
            <div>
                {
                    this.state.fetchedOrders.map(order=>{
                    return <Order key={order.id}
                    ingredients={order.ingredients} 
                    price={order.price}/>
                    })
            }
                
            </div>
        )
    }
}

export default Orders;