import React from "react";

const OpeningTimes = () => {
  return (
    <div className="container bg-dark text-white">
      <table className="table table-sm auto-fit text-white">
        <thead>
          <tr>
            <th scope="col">Days of Week</th>
            <th scope="col">Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-info">
            <th scope="row">Monday</th>
            <td>09:00 - 00:00</td>
          </tr>

          <tr className="table-primary">
            <th scope="row">Tuesday</th>
            <td>09:00 - 00:00</td>
          </tr>
          <tr className="table-secondary">
            <th scope="row">Wednesday</th>
            <td>09:00 - 00:00</td>
          </tr>
          <tr className="table-success">
            <th scope="row">Thursday</th>
            <td>09:00 - 00:00</td>
          </tr>
          <tr className="table-danger">
            <th scope="row">Friday</th>
            <td>09:00 - 00:00</td>
          </tr>
          <tr className="table-warning">
            <th scope="row">Saturday</th>
            <td>09:00 - 01:00</td>
          </tr>
          <tr className="table-info">
            <th scope="row">Sunday</th>
            <td>10:00 til 10pm</td>
          </tr>
          <tr className="table-light">
            <th scope="row">Exceptions: Bank Holidays & Christmas</th>
            <td>CLOSED</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OpeningTimes;
