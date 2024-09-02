/* eslint-disable react/prop-types */
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = ({ part, excercise }) => {
  return (
    <p>
      {part} {excercise}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, index) => (
        <Part key={index} part={part.name} excercise={part.exercises} />
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  // console.log(parts);
  let total = 0;

  parts.forEach((el) => {
    total += el.exercises;
  });

  return (
    <>
      <p>
        Number of excercise <b>{total}</b>
      </p>
    </>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
