export const status = {
  NOT_RECEIVED: 0,
  PAID: 1,
  RECEIVED: 2,
};

export const statusName = {
  [status.NOT_RECEIVED]: "Não Recebido",
  [status.RECEIVED]: "Recebido",
  [status.PAID]: "Pago",
};

export default status;
