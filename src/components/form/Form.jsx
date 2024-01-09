import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [course, setCourse] = useState("");
  return (
    <form>
      <h1>
        firstname - {firstName} <br /> lastName - {lastName} <br /> course -{" "}
        {course}
      </h1>
      <div>
        <label htmlFor="firstName">
          FirstName
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={event => {
              console.log(event.target.value);
              setFirstName(event.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          lastName
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={event => setLastName(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="course">
          course
          <input
            type="text"
            name="course"
            id="course"
            value={course}
            onChange={event => setCourse(event.target.value)}
          />
        </label>
      </div>
      <input type="submit" value="Add Student" />
    </form>
  );
};

export default Form;
