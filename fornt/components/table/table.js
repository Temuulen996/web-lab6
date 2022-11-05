import { useState } from "react";
import { Table } from "react-bootstrap";

const Tablee = ({ data }) => {
  return (
    <div>
      {" "}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>country</th>
            <th>designation</th>
            <th>points</th>
            <th>price</th>
            <th>province</th>
            <th>region 1</th>
            <th>taster name</th>
            <th>taster twitter handle</th>
            <th>title</th>
            <th>variety</th>
            <th>winery</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{el.country}</td>
              <td>{el.designation}</td>
              <td>{el.points}</td>
              <td>{el.price}</td>
              <td>{el.province}</td>
              <td>
                {el.region_1} || {el.region_2}
              </td>

              <td>{el.taster_name}</td>
              <td>{el.taster_twitter_handle}</td>
              <td>{el.title}</td>
              <td>{el.variety}</td>
              <td>{el.winery}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Tablee;
