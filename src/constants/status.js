import COLORS from "./colors";

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

export const statusColor = {
  [status.NOT_RECEIVED]: COLORS.NOT_RECEIVED,
  [status.RECEIVED]: COLORS.RECEIVED,
  [status.PAID]: COLORS.PAID,
};

export default status;
