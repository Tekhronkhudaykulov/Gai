import { API_URL } from "../config";
import { $api } from "./api";

export const requests = {
  fetchOperator: () => $api.get(`${API_URL}/queue`),
};
