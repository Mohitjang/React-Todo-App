import React from "react";

const About = () => {
  let myStyle = {
    minHeight: "90vh",
    margin: "40px auto",
    borderRadius: "4px",
    backgroundColor: "rgb(232,227,227)",
    padding: "1rem"
  };

  let eachStyle = {
    borderRadius: "4px",
    padding: "1rem",
    backgroundColor: "white",
    margin: "2rem auto",
textAlign: "center" 
  };

  return (
    <div className="container my-3 " style={myStyle}>
      <div className="container p-4" style={eachStyle}>
        <h3 className="my-3">
          This is an about component Welcome to Our Todo App!
        </h3>
        <p>
          Our Todo App is a simple yet powerful tool designed to help you stay
          organized, manage your tasks efficiently, and boost your productivity.
        </p>
      </div>
      <div className="container p-5" style={eachStyle}>
        <h3 className="my-2">What Can You Do with Our Todo App?</h3>
        <hr/>
        <h4 className="my-3">Create Tasks:</h4>
        <p>
          Quickly add new tasks to your list, whether it's a personal to-do, a
          work-related assignment, or a reminder for a special event.
        </p>
        <h4 className="my-3">Organize Tasks:</h4>
        <p>
          Organize your tasks into categories or prioritize them using labels,
          due dates, and importance levels.
        </p>
        <h4 className="my-3">Track Progress:</h4>
        <p>
          Monitor your progress by marking tasks as complete, reviewing
          completed tasks, and tracking your overall productivity.
        </p>
        <h4 className="my-3">Customize Your Experience:</h4>
        <p>
          Personalize your Todo App experience with customizable themes,
          layouts, and preferences to suit your workflow and style.
        </p>
      </div>
    </div>
  );
};

export default About;
