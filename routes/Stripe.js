require("dotenv").config();

const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const tickets = new Map([
  [1, { type: "Child Ticket", price: 500 }],

  [2, { type: "Adult Ticket", price: 1000 }],

  [3, { type: "Senior Ticket", price: 700 }],

  [4, { type: "Child Deluxe Ticket", price: 1000 }],

  [5, { type: "Adult Deluxe Ticket", price: 1500 }],

  [6, { type: "Senior Deluxe Ticket", price: 1200 }],
]);

router.post("/create-checkout-session/", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const ticket = tickets.get(item.id);
        return {
          price_data: {
            currency: "gbp",
            product_data: {
              name: ticket.type,
            },
            unit_amount: ticket.price,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/success.html`,
      cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
