const mongodb = require('mongoose');
const Order = require('./orderSchema');


exports.createOrder = (req, res) => {

      const newOrder = new Order({

        userId:   req.body.userId,
        cart:   req.body.cart,

      })

      //console.log(newOrder);

      newOrder.save()
        .then(() => {
          res.status(201).json({
            statusCode: 201,
            status: true,
            message: 'Order created successfully'
          })
        })
        .catch(() => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to create Order'
          })
        })

}