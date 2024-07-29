/* eslint-disable react/prop-types */
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

const Part = ({ part, excercise }) => {
  return (
    <>
      <p>
        {part} {excercise}
      </p>
    </>
  );
};

const Content = ({ data }) => {
  return (
    <>
      <Part part={data[0].part1} excercise={data[0].excercise1} />
      <Part part={data[1].part2} excercise={data[1].excercise2} />
      <Part part={data[2].part3} excercise={data[2].excercise3} />
    </>
  );
};

const Total = ({ data }) => {
  return (
    <>
      <p>
        Number of excercise{' '}
        {data[0].excercise1 + data[1].excercise2 + data[2].excercise3}
      </p>
    </>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const excercise = [
    {
      part1: 'Fundamental of React',
      excercise1: 10,
    },
    {
      part2: 'Using props to pass data',
      excercise2: 7,
    },
    {
      part3: 'State of component',
      excercise3: 14,
    },
  ];

  return (
    <div>
      <Header title={course} />
      <Content data={excercise} />
      <Total data={excercise} />
    </div>
  );
};

export default App;
