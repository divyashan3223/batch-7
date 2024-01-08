import { useState } from "react";

const coursesList = [
  {
    id: 1,
    title: "python",
    fees: 20000,
  },
  {
    id: 2,
    title: "java",
    fees: 20000,
  },
  {
    id: 3,
    title: "python",
    fees: 20000,
  },
  {
    id: 4,
    title: "java",
    fees: 20000,
  },
  {
    id: 5,
    title: "python",
    fees: 20000,
  },
];

const Course = () => {
  const [courses, setCourses] = useState(coursesList);
  const [activeCourse, setActiveCourse] = useState(null);

  const handleDeleteCourse = courseId => {
    const updatedCourses = courses.filter(course => course.id !== courseId);
    setCourses(updatedCourses);
  };
  const handleViewCourse = course => {
    setActiveCourse(course.title);
  };

  return (
    <div>
      <h1>Course list</h1>
      <h1>{activeCourse}</h1>
      {courses.length > 0 ? (
        <ul>
          {courses.map(course => (
            <li
              key={course.id}
              style={{ display: "flex", alignItems: "center" }}
            >
              <h4>
                {course.title} - {course.fees}
              </h4>
              <button onClick={() => handleViewCourse(course)}>view</button>
              <button onClick={() => handleDeleteCourse(course.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h1> No Course found</h1>
      )}
    </div>
  );
};

export default Course;
