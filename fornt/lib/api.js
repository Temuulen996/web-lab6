import axios from "axios";

export const allWine = async () => {
  const wines = await axios.get("http://localhost:3001/all");
  return wines;
};
export const wineByRegion = async (
  region,
  fromPoint,
  toPoint,
  fromPrice,
  toPrice
) => {
  console.log(fromPoint);
  let wine = await axios.get(`http://localhost:3001/search?byRegion=${region}`);
};
