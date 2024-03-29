import { Preference } from "mercadopago";
import { client } from "../libs/mercadoPago.js";

export const preference = async (req, res) => {
  const { id, userId, title, unit_price, quantity } = req.body;
  const newPreferences = new Preference(client);
  
  let preferences = {
    body: {
      items: [
        {
          id,
          category_id: userId,
          title,
          unit_price,
          quantity
        }
      ],
      back_urls: {
        success: "https://mr-gym.vercel.app/choose-plan/success",
        failure: "https://mr-gym.vercel.app/choose-plan/failure",
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
