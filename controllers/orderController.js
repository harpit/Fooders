const Order = require('../models/order');

module.exports = {
    placeOrder: async (req, res) => {
        const newOrder = new Order({
            ...req.body,
            userId: req.user.id
        });
        try {
            await newOrder.save();
            const orderId = newOrder._id
            res.status(200).json({ status: true, message: "Order Placed successfully", orderId: orderId })
        } catch (error) {
            res.status(500).json({ status: false, message: error.message });
        }
    },
    getUserOrder: async (req, res) => {
      const userId = req.user.id;
      const {paymentStatus , orderStatus} = req.query;

      let query = {userId};

      if (paymentStatus) {
        query.paymentStatus = paymentStatus;
      }

      if (orderStatus == orderStatus) {
        query.orderStatus = orderStatus;
      }

      try {
        const order = await Order.find(query)
        .populate({
            path : 'orderItems.foodId',
            select : "imageUrl title rating time"
        })

        req.status(200).json(order);
      } catch (error) {
        res.status(500).json({ status: false, message: error.message });
      }
    }
}