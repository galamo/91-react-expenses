import axios from "axios";
import { baseUrl } from "..";

export default async function deleteExpenseApi(exName: string): Promise<any> {
  const result = await axios.post(`${baseUrl}/delete-expense`, {
    name: exName,
  });
  return result.data;
}
