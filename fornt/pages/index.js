import Head from "next/head";
import Image from "next/image";
import Tablee from "../components/table/table";
import styles from "../styles/Home.module.css";
import { Button } from "react-bootstrap";
import { allWine, wineByRegion } from "../lib/api";
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
  const changeListByRegion = async () => {
    console.log("reg ajillaa");
    let wines = await wineByRegion(
      filter,
      point.fromPoint,
      point.toPoint,
      price.fromPrice,
      price.toPrice
    );
    setDrinks(wines);
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
      <div className=" bg-red-400 w-full flex justify-center items-center">
        <div className="w-1/2 bg-red-600 flex my-3 mx-3">
          <select
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
          <div className="flex">
            <p>point:</p>
            <input
              onChange={(e) => {
                console.log(e.target.value);
                setPrice({ ...point, fromPoint: e.target.value });
              }}
              className="w-10 mx-2"
              type={"number"}
            />
            <input
              onChange={(e) => {
                console.log(e.target.value);
                setPrice({ ...point, toPoint: e.target.value });
              }}
              className="w-10 mx-2"
              type={"number"}
            />
          </div>
          <div className="flex">
            <p>price:</p>
            <input
              onChange={(e) => {
                console.log(e.target.value);
                setPrice({ ...price, fromPrice: e.target.value });
              }}
              className="w-10 mx-2"
              type={"number"}
            />
            <input
              onChange={(e) => {
                console.log(e.target.value);
                setPrice({ ...price, toPrice: e.target.value });
              }}
              className="w-10 mx-2"
              type={"number"}
            />
          </div>
          <input
            onChange={(e) => {
              console.log(e.target.value);
              setFilter(e.target.value);
            }}
            placeholder="talbar.."
          />

          <Button
            variant="success"
            onClick={() => {
              if (type === "region") {
                changeListByRegion();
              } else if (type === "country") {
                changeListByCountry();
              } else if (type === "name") {
                changeListByName();
              } else if (type === "variety") {
                changeListByVariety();
              }
            }}
          >
            Success
          </Button>
        </div>
      </div>
      <Tablee data={drinks} />
    </div>
  );
}
