import React from "react";

// //read by checkout by username
// router.get("/read/username/:email", async (req, res) => {
//     try {
//       const checkout = await Checkout.find({
//         email: req.params.email,
//       }).collation({
//         locale: "en",
//         strength: 2,
//       });
//       //collation for case insensitive search
//       res.status(200).json(checkout);
//     } catch (err) {
//       res.json({ message: err });
//     }
//   });

const Success = () => {
  return (
    <div>
      SUCCESS !
      <div>
        <h2>Well Done! You're going to the MOVIES!</h2>
        <div>data.firstName data.lastName</div>
        <div>Movie: data.film</div>
        <div>Screening Time: data.time </div>
        <div>Seats: data.cart</div>
        <p>data.cartName: data.quantity </p>
        <p>...</p>

        <div>Total Cost: data.total</div>
      </div>
    </div>
  );
};

export default Success;
