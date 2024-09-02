const Hello = ({ name, age }) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  };

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const name = 'Peter';
  const age = 35;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Artisan' age={22 + 7} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
