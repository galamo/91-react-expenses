import axios from "axios";
import { baseUrl } from "..";

interface IOption {
  code: string;
  name: string;
}

export default async function deleteExpenseApi(exName: string): Promise<any> {
  const result = await axios.post(`${baseUrl}/delete-expense`, {
    name: exName,
  });
  return result.data;
}
