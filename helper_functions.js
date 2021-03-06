exports.calculate_order_total_sum = (order) =>{
    var total_price = 0.0;
    var orderItems = order.order_items;
    for(var i = 0; i < orderItems.length; i++){
        total_price += orderItems[i].item.price * orderItems[i].quantity;
    }
    
    order.total_price = total_price;
    return order;
};


exports.calculate_orders_total_sum = (orders) =>{
    for(var i = 0; i < orders.length; i++){
        orders[i] = this.calculate_order_total_sum(orders[i]);
    }

    return orders;
};

