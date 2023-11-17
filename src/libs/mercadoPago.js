import { MercadoPagoConfig } from "mercadopago";
import { MERCADO_PAGO_TOKEN } from "../../config.js";

export const client = new MercadoPagoConfig({
  accessToken: MERCADO_PAGO_TOKEN
})
