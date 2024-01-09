import { useState } from "react";
import Input from "./Input";

const initialState = {
  firstName: "",
  lastName: "",
  course: "",
};

const Form = () => {
  const [student, setStudent] = useState(initialState);
  const { course, firstName, lastName } = student;

  const handleChange = event => {
    const { value, name } = event.target;
    const updatedStudent = { ...student, [name]: value };
    setStudent(updatedStudent);
  };

  return (
    <form>
      <h1>
        firstname - {firstName} <br /> lastName - {lastName} <br /> course -
        {course}
      </h1>
      <Input
        name="firstName"
        onChange={event => handleChange(event)}
        value={firstName}
        label="firstName"
      />
      <Input
        name="lastName"
        onChange={event => handleChange(event)}
        value={lastName}
        label="lastName"
      />
      <Input
        name="course"
        onChange={event => handleChange(event)}
        value={course}
        label="course"
      />

      <input type="submit" value="Add Student" />
    </form>
  );
};

export default Form;
