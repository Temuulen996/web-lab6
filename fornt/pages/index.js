import Head from "next/head";
import Image from "next/image";
import Tablee from "../components/table/table";
import styles from "../styles/Home.module.css";
import { allWine } from "../lib/api";
export const getServerSideProps = async ({ req, res }) => {
  let data = await allWine();
  console.log(data.data);
  data = data.data;
  return {
    props: {
      data,
    },
  };
};
export default function Home({ data }) {
  return (
    <div className="">
      <Tablee data={data} />
    </div>
  );
}
