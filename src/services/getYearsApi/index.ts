import axios from "axios";
import { baseUrl } from "..";

interface IOption {
  code: string;
  name: string;
}

export default async function getYearsApi(): Promise<Array<IOption>> {
  const result = await axios.get(`${baseUrl}/years`);
  return result.data.map((y: number) => {
    return { code: y.toString(), name: y.toString() };
  });
}
