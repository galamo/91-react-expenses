import axios from "axios";
import { baseUrl } from "..";



export default async function addNewExpenseApi(expense: any): Promise<any> {
  const result = await axios.post(`${baseUrl}/expense`, {
    ...expense,
  });
  return result.data;
}
