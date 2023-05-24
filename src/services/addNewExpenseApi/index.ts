import axios from "axios";
import { baseUrl } from "..";

interface IOption {
  code: string;
  name: string;
}

export default async function addNewExpenseApi(expense: any): Promise<any> {
  const result = await axios.post(`${baseUrl}/expense`, {
    ...expense,
  });
  return result.data;
}
