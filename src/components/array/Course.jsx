const courses = ["java", "python", "plc", "web development"];

// const mappedCourse = courses.map(course => <li>{course}</li>);

const Course = () => {
  // console.log(mappedCourse);
  return (
    <div>
      {/* <ul>{mappedCourse}</ul> */}

      <ul className="list-container">
        {courses.map(course => (
          <li>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default Course;
