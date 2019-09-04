import * as actionTypes from './actions';
import axios from '../../axios-orders';

export const purchaseOrderSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseOrderFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL
    }
}

export const purchaseOrderStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseOrder = (orderData) => {
    return dispatch => {
        dispatch(purchaseOrderStart());
        axios.post('/orders.json',orderData)
        .then(resp => {
            console.log(resp.data);
            dispatch(purchaseOrderSuccess(resp.data.name,orderData))
            //this.setState({loading:false});
            //this.props.history.push('/');
        })
        .catch(err => {
            dispatch(purchaseOrderFail(err));
            //this.setState({loading:false});
        });
    }
}


