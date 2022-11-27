import Head from "next/head";
import Image from "next/image";
import Tablee from "../components/table/table";
import styles from "../styles/Home.module.css";
import { Button } from "react-bootstrap";
import {
  allWine,
  wineByCountry,
  wineByName,
  wineByRegion,
  wineByVariety,
} from "../lib/api";
import { useState } from "react";
export const getServerSideProps = async ({ req, res }) => {
  let data = await allWine();

  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  const [drinks, setDrinks] = useState(data);
  const [type, setType] = useState("region");
  const [filter, setFilter] = useState("");
  const [price, setPrice] = useState({
    fromPrice: undefined,
    toPrice: undefined,
  });
  const [point, setPoint] = useState({
    fromPoint: undefined,
    toPoint: undefined,
  });
  const getAll = async () => {
    const winess = await allWine();
    setDrinks(winess);
  };
  const changeList = async () => {
    console.log(point);
    console.log(filter);
    if (type === "region") {
      console.log("reg ajillaa");
      let wines = await wineByRegion(
        filter,
        point.fromPoint,
        point.toPoint,
        price.fromPrice,
        price.toPrice
      );
      setDrinks(wines);
    } else if (type === "country") {
      let wines = await wineByCountry(
        filter,
        point.fromPoint,
        point.toPoint,
        price.fromPrice,
        price.toPrice
      );
      setDrinks(wines);
    } else if (type === "name") {
      let wines = await wineByName(
        filter,
        point.fromPoint,
        point.toPoint,
        price.fromPrice,
        price.toPrice
      );
      setDrinks(wines);
    } else if (type === "variety") {
      let wines = await wineByVariety(
        filter,
        point.fromPoint,
        point.toPoint,
        price.fromPrice,
        price.toPrice
      );
      setDrinks(wines);
    }
  };

  // const changeListByVariety = async () => {
  //   console.log("var ajillaa");
  //   let wines = await wineByRegion("Napa", 90, 95, 90, 100);
  //   setDrinks(wines);
  // };
  // const changeListByCountry = async () => {
  //   console.log("coun ajillaa");
  //   let wines = await wineByRegion("Napa", 90, 95, 90, 100);
  //   setDrinks(wines);
  // };
  // const changeListByName = async () => {
  //   console.log("name ajillaa");
  //   let wines = await wineByRegion("Napa", 90, 95, 90, 100);
  //   setDrinks(wines);
  // };

  return (
    <div className="">
      <div className="  w-full flex justify-center items-center">
        <div className="  flex my-3 mx-3 ">
          <div className="flex">
            <p className="flex items-center h-full">point:</p>
            <input
              value={point.fromPoint}
              min={0}
              onChange={(e) => {
                console.log(e.target.value);
                setPoint({ ...point, fromPoint: e.target.value });
              }}
              className="w-10 mx-2"
              type={"number"}
            />
            <input
              value={point.toPoint}
              min={0}
              onChange={(e) => {
                console.log(e.target.value);
                setPoint({ ...point, toPoint: e.target.value });
              }}
              className="w-10 mx-2"
              type={"number"}
            />
          </div>
          <div className="flex">
            <p className="flex items-center h-full">price:</p>
            <input
              value={price.fromPrice}
              min={0}
              onChange={(e) => {
                console.log(e.target.value);
                setPrice({ ...price, fromPrice: e.target.value });
              }}
              className="w-10 mx-2"
              type={"number"}
            />
            <input
              value={price.toPrice}
              min={0}
              onChange={(e) => {
                console.log(e.target.value);
                setPrice({ ...price, toPrice: e.target.value });
              }}
              className="w-10 mx-2"
              type={"number"}
            />
          </div>
          <select
            defaultValue="region"
            onChange={(e) => {
              console.log(e.target.value);
              setType(e.target.value);
            }}
          >
            <option selected value="region">
              region
            </option>
            <option value="country">country</option>
            <option value="name">name</option>
            <option value="variety">variety</option>
          </select>
          <input
            value={filter}
            className="mr-2"
            onChange={(e) => {
              console.log(e.target.value);
              setFilter(e.target.value);
            }}
            placeholder={`${type}...`}
          />

          <Button
            className="mr-4"
            variant="primary"
            onClick={() => {
              changeList();
            }}
          >
            FILTER
          </Button>
          <Button
            variant="success"
            onClick={() => {
              getAll();
            }}
          >
            ALL
          </Button>
        </div>
      </div>
      <Tablee data={drinks} />
    </div>
  );
}
