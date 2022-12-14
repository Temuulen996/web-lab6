import axios from "axios";

export const allWine = async () => {
  let wines = await axios.get("http://localhost:3001/all");
  wines = wines.data;
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
  if (fromPoint === undefined) fromPoint = 90;
  if (toPoint === undefined) toPoint = 95;
  if (fromPrice === undefined) fromPrice = 100;
  if (toPrice === undefined) toPrice = 150;
  console.log(
    `http://localhost:3001/search?byRegion=${region}&fromPoint=${fromPoint}&toPoint=${toPoint}&fromPrice=${fromPrice}&toPrice=${toPrice}`
  );
  let wines = await axios.get(
    `http://localhost:3001/search?byRegion=${region}&fromPoint=${fromPoint}&toPoint=${toPoint}&fromPrice=${fromPrice}&toPrice=${toPrice}`
  );
  wines = wines.data;
  console.log(wines);
  return wines;
};
export const wineByCountry = async (
  country,
  fromPoint,
  toPoint,
  fromPrice,
  toPrice
) => {
  console.log(fromPoint);
  if (fromPoint === undefined) fromPoint = 90;
  if (toPoint === undefined) toPoint = 95;
  if (fromPrice === undefined) fromPrice = 100;
  if (toPrice === undefined) toPrice = 150;
  console.log(
    `http://localhost:3001/search?byCountry=${country}&fromPoint=${fromPoint}&toPoint=${toPoint}&fromPrice=${fromPrice}&toPrice=${toPrice}`
  );
  let wines = await axios.get(
    `http://localhost:3001/search?byCountry=${country}&fromPoint=${fromPoint}&toPoint=${toPoint}&fromPrice=${fromPrice}&toPrice=${toPrice}`
  );
  wines = wines.data;
  console.log(wines);
  return wines;
};
export const wineByName = async (
  name,
  fromPoint,
  toPoint,
  fromPrice,
  toPrice
) => {
  console.log(fromPoint);
  if (fromPoint === undefined) fromPoint = 90;
  if (toPoint === undefined) toPoint = 95;
  if (fromPrice === undefined) fromPrice = 100;
  if (toPrice === undefined) toPrice = 150;
  console.log(
    `http://localhost:3001/search?byName=${name}&fromPoint=${fromPoint}&toPoint=${toPoint}&fromPrice=${fromPrice}&toPrice=${toPrice}`
  );
  let wines = await axios.get(
    `http://localhost:3001/search?byName=${name}&fromPoint=${fromPoint}&toPoint=${toPoint}&fromPrice=${fromPrice}&toPrice=${toPrice}`
  );
  wines = wines.data;
  console.log(wines);
  return wines;
};
export const wineByVariety = async (
  variety,
  fromPoint,
  toPoint,
  fromPrice,
  toPrice
) => {
  console.log(fromPoint);
  if (fromPoint === undefined) fromPoint = 90;
  if (toPoint === undefined) toPoint = 95;
  if (fromPrice === undefined) fromPrice = 100;
  if (toPrice === undefined) toPrice = 150;
  console.log(
    `http://localhost:3001/search?byVariety=${variety}&fromPoint=${fromPoint}&toPoint=${toPoint}&fromPrice=${fromPrice}&toPrice=${toPrice}`
  );
  let wines = await axios.get(
    `http://localhost:3001/search?byVariety=${variety}&fromPoint=${fromPoint}&toPoint=${toPoint}&fromPrice=${fromPrice}&toPrice=${toPrice}`
  );
  wines = wines.data;
  console.log(wines);
  return wines;
};
