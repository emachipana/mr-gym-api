import { Preference } from "mercadopago";
import { client } from "../libs/mercadoPago.js";

export const preference = async (req, res) => {
  const { id, title, unit_price, quantity } = req.body;
  const newPreferences = new Preference(client);
  
  let preferences = {
    body: {
      items: [
        {
          id,
          title,
          unit_price,
          quantity
        }
      ],
      back_urls: {
        success: "http://localhost:3000/choose-plan/success",
        failure: "http://localhost:3000/choose-plan/failure",
        pending: "",
      },
      auto_return: "approved",
      payment_methods: {
        excluded_payment_methods: [
          {
            id: "pagoefectivo_atm"
          }
        ],
        excluded_payment_types: [
          {
            id: "credit_card"
          }
        ],
        installments: 1
      },
    }
  }

  try {
    const response = await newPreferences.create(preferences);

    res.json(response);
  }catch(e) {
    console.error(e);

    res.status(500).json(e);
  }
}
