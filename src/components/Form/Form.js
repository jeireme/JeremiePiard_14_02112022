import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { addUser } from "../../redux";
import { states } from "./states";
import tick from "../../assets/tick.png";
import "./Form.css";

function Form() {
  const [birthdayDate, setBirthdaytDate] = useState();
  const [startDate, setStartDate] = useState();
  const [userName, setUserName] = useState();
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  const registerEmployee = (e) => {
    e.preventDefault();

    const newUser = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      dateOfBirth: e.target[2].value,
      startDate: e.target[3].value,
      street: e.target[5].value,
      city: e.target[6].value,
      state: e.target[7].value,
      zipCode: e.target[8].value,
      department: e.target[9].value,
    };

    setUserName(newUser.firstName + " " + newUser.lastName);

    dispatch(addUser(newUser));
    setModal(true);

    e.target[0].value = "";
    e.target[1].value = "";
    setBirthdaytDate("");
    setStartDate("");
    e.target[5].value = "";
    e.target[6].value = "";
    e.target[7].value = "";
    e.target[8].value = "";
    e.target[9].value = "";
  };

  return (
    <div className="container">
      <div className="formContainer flexContainer">
        <h1>HRnet</h1>
        <Link className="link" to="/JeremiePiard_14_02112022/employee-list">
          View Current Employees
        </Link>
        <h2 className="title">Create Employee</h2>

        <form onSubmit={registerEmployee} className="flexContainer">
          {/* First Name */}
          <div className="input margin-bottom">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" required />
          </div>

          {/* Last Name */}
          <div className="input margin-bottom">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" required />
          </div>

          {/* Date of Birth */}
          <div className="input margin-bottom">
            <label htmlFor="date-of-birth">Date of Birth</label>
            <div>
              <DatePicker
                selected={birthdayDate}
                onChange={(date) => setBirthdaytDate(date)}
                wrapperClassName="datePicker"
                required
              />
            </div>
          </div>

          {/* Start Date */}
          <div className="input margin-bottom">
            <label htmlFor="start-date">Start Date</label>
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                wrapperClassName="datePicker"
                required
              />
            </div>
          </div>

          <fieldset className="margin">
            <legend>Address</legend>

            <div className="flexContainer">
              {/* Street */}
              <div className="input margin">
                <label htmlFor="street">Street</label>
                <input id="street" type="text" required />
              </div>

              {/* City */}
              <div className="input margin">
                <label htmlFor="city">City</label>
                <input id="city" type="text" required />
              </div>

              {/* State */}
              <div className="input margin">
                <label htmlFor="state">State</label>
                <select name="state" id="state" required>
                  <option value="">-- Select a State --</option>
                  {states.map((state) => (
                    <option value={state.abbreviation} key={state.abbreviation}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Zip Code */}
              <div className="input margin">
                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number" required />
              </div>
            </div>
          </fieldset>

          {/* Departement */}
          <div className="input margin">
            <label htmlFor="department">Department</label>
            <select name="department" id="department" required>
              <option value="">-- Select a departement --</option>
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Legal</option>
            </select>
          </div>

          {/* Save Button */}
          <button type="submit" className="button">
            Save
          </button>
        </form>

        <div
          className={modal ? "overlay overlay-active" : "overlay"}
          onClick={() => setModal(false)}
        ></div>
        <div
          className={modal ? "modal-content modal-active" : "modal-content "}
        >
          <img src={tick} alt="valid tick" />
          <h2>Employee Created!</h2>
          <p>{userName} has been added to the database.</p>
          <button onClick={() => setModal(false)}>OK</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
