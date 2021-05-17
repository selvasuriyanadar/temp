import React from "react";
import { FormData, FormAccess } from "../data/FormData.js";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.form_access = new FormAccess(this.props.form);

    const form = new FormData(this.props.form.form_no);
    form.copy(this.props.form);
    this.state = { form };
  }

  onProjectNameChange = (e) => {
    const form = this.state.form;
    const value = e.target.value;

    form.project_name = value;
    this.form_access.fetchProjectName(value);
    this.setState({ form });
  };

  onDurationChange = (e) => {
    const form = this.state.form;
    const value = e.target.value;

    form.duration = value;
    this.form_access.fetchDuration(value);
    this.form_access.generateEndDate();
    form.end_date = this.form_access.form.end_date;
    this.setState({ form });
  };

  onStartDateChange = (e) => {
    const form = this.state.form;
    const value = e.target.value;

    form.start_date = value;
    this.form_access.fetchStartDate(value);
    this.form_access.generateEndDate();
    form.end_date = this.form_access.form.end_date;
    this.setState({ form });
  };

  onEndDateChange = (e) => {
    const form = this.state.form;
    const value = e.target.value;

    form.end_date = value;
    this.form_access.fetchEndDate(value);
    this.setState({ form });
  };

  onMenWorkersChange = (e) => {
    const form = this.state.form;
    const value = e.target.value;

    form.men_workers = value;
    this.form_access.fetchMenWorkers(value);
    this.form_access.generateTotalWorkers();
    form.total_workers = this.form_access.form.total_workers;
    this.setState({ form });
  };

  onWomenWorkersChange = (e) => {
    const form = this.state.form;
    const value = e.target.value;

    form.women_workers = value;
    this.form_access.fetchWomenWorkers(value);
    this.form_access.generateTotalWorkers();
    form.total_workers = this.form_access.form.total_workers;
    this.setState({ form });
  };

  onTotalWorkersChange = (e) => {
    const form = this.state.form;
    const value = e.target.value;

    form.total_workers = value;
    this.form_access.fetchTotalWorkers(value);
    this.setState({ form });
  };

  onMenPerdaySalaryChange = (e) => {
    const form = this.state.form;
    const value = e.target.value;

    form.men_perday_salary = value;
    this.form_access.fetchMenPerdaySalary(value);
    this.form_access.generateMenTotalSalary();
    form.men_total_salary = this.form_access.form.men_total_salary;
    this.form_access.generateTotalSalary();
    form.total_salary = this.form_access.form.total_salary;
    this.setState({ form });
  };

  onWomenPerdaySalaryChange = (e) => {
    const form = this.state.form;
    const value = e.target.value;

    form.women_perday_salary = value;
    this.form_access.fetchWomenPerdaySalary(value);
    this.form_access.generateWomenTotalSalary();
    form.women_total_salary = this.form_access.form.women_total_salary;
    this.form_access.generateTotalSalary();
    form.total_salary = this.form_access.form.total_salary;
    this.setState({ form });
  };

  onMenTotalSalaryChange = (e) => {
    const form = this.state.form;
    const value = e.target.value;

    form.men_total_salary = value;
    this.form_access.fetchMenTotalSalary(value);
    this.form_access.generateTotalSalary();
    form.total_salary = this.form_access.form.total_salary;
    this.setState({ form });
  };

  onWomenTotalSalaryChange = (e) => {
    const form = this.state.form;
    const value = e.target.value;

    form.women_total_salary = value;
    this.form_access.fetchWomenTotalSalary(value);
    this.form_access.generateTotalSalary();
    form.total_salary = this.form_access.form.total_salary;
    this.setState({ form });
  };

  onTotalSalaryChange = (e) => {
    const form = this.state.form;
    const value = e.target.value;

    form.total_salary = value;
    this.form_access.fetchTotalSalary(value);
    this.setState({ form });
  };

  render() {
    const form = this.state.form;
    return (
      <div>
        <h1>COMPANY FORM {form.form_no}</h1>
        <form>
          Project Name :
          <input type="text" name="project_name" value={form.project_name}
            onChange={this.onProjectNameChange} />
          <br /><br />
          Duration :
          <input type="text" name="duration" value={form.duration}
            onChange={this.onDurationChange} />
          <br /><br />
          Start Date :
          <input type="date" name="start_date" value={form.start_date}
            onChange={this.onStartDateChange} />
          <br /><br />
          End Date :
          <input type="date" name="end_date" value={form.end_date}
            onChange={this.onEndDateChange} />
          <br /><br />
          No of Men Working:
          <input type="text" name="men_workers" value={form.men_workers}
            onChange={this.onMenWorkersChange} />
          <br /><br />
          No of Women Working:
          <input type="text" name="women_workers" value={form.women_workers}
            onChange={this.onWomenWorkersChange} />
          <br /><br />
          Total Employees:
          <input type="text" name="total_workers" value={form.total_workers}
            onChange={this.onTotalWorkersChange} />
          <br /><br />
          Salary Per Day for Men:
          <input type="text" name="men_perday_salary" value={form.men_perday_salary}
            onChange={this.onMenPerdaySalaryChange} />
          <br /><br />
          Salary Per Day for Women:
          <input type="text" name="women_perday_salary" value={form.women_perday_salary}
            onChange={this.onWomenPerdaySalaryChange} />
          <br /><br />
          Salary for Men for Entire Project Duration:
          <input type="text" name="men_total_salary" value={form.men_total_salary}
            onChange={this.onMenTotalSalaryChange} />
          <br /><br />
          Salary for Women for Entire Project Duration:
          <input type="text" name="women_total_salary" value={form.women_total_salary}
            onChange={this.onWomenTotalSalaryChange} />
          <br /><br />
          Total Salary Spent on Men + Women for Entire Project Duration:
          <input type="text" name="total_salary" value={form.total_salary}
            onChange={this.onTotalSalaryChange} />
        </form>
      </div>
    );
  }
}
