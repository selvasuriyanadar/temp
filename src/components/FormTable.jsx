import React from "react";

export default class FormTable extends React.Component {

  constructor() {
    super();
  }

  render() {
    const body = this.props.forms.map(
      form => (<tr>
        <td>{form.form_no}</td>
        <td>{form.project_name}</td>
        <td>{form.duration}</td>
        <td>{form.start_date}</td>
        <td>{form.end_date}</td>
        <td>{form.men_workers}</td>
        <td>{form.women_workers}</td>
        <td>{form.total_workers}</td>
        <td>{form.men_perday_salary}</td>
        <td>{form.women_perday_salary}</td>
        <td>{form.men_total_salary}</td>
        <td>{form.women_total_salary}</td>
        <td>{form.total_salary}</td>
      </tr>)
    );
    return (
      <table>
        <tr>
          <th>COMPANY FORM NO</th>
          <th>Project Name</th>
          <th>Duration</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>No of Men Working</th>
          <th>No of Women Working</th>
          <th>Total Employees</th>
          <th>Salary Per Day for Men</th>
          <th>Salary Per Day for Women</th>
          <th>Salary for Men for Entire Project Duration</th>
          <th>Salary for Women for Entire Project Duration</th>
          <th>Total Salary Spent on Men + Women for Entire Project Duration</th>
        </tr>
        { body }
      </table>
    );
  }
}
