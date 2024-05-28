import React from 'react';

export default function B9() {
  return (
    <div>
      <table className="table caption-top">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th scope="col">Stt</th>
            <th scope="col">Name</th>
            <th scope="col">Sex</th>
            <th scope="col">Date</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Male</td>
            <td>01/01/1990</td>
            <td>mark@example.com</td>
            <td>1234 Elm Street</td>
            <td>
              <button className="btn btn-primary btn-sm me-1">Change</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Male</td>
            <td>02/02/1992</td>
            <td>jacob@example.com</td>
            <td>5678 Oak Street</td>
            <td>
              <button className="btn btn-primary btn-sm me-1">Change</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>Male</td>
            <td>03/03/1993</td>
            <td>larry@example.com</td>
            <td>9101 Maple Avenue</td>
            <td>
              <button className="btn btn-primary btn-sm me-1">Change</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Alice</td>
            <td>Female</td>
            <td>04/04/1994</td>
            <td>alice@example.com</td>
            <td>1122 Pine Lane</td>
            <td>
              <button className="btn btn-primary btn-sm me-1">Change</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Bob</td>
            <td>Male</td>
            <td>05/05/1995</td>
            <td>bob@example.com</td>
            <td>3344 Birch Road</td>
            <td>
              <button className="btn btn-primary btn-sm me-1">Change</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
