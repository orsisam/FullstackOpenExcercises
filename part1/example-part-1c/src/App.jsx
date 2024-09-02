import { useState } from 'react';

const Display = (props) => {
  return <div>{props.counter}</div>;
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  // setTimeout(() => setCounter(counter + 1), 1000);
  const increaseByOne = () => {
    console.info('clicked');
    setCounter(counter + 1);
  };

  const setToZero = () => {
    console.warn('resetting counter...');
    setCounter(0);
  };

  const decreaseByOne = () => {
    setCounter(counter - 1);
  };

  console.log('rendering...', counter);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text='+' />
      <Button onClick={decreaseByOne} text='-' />
      <div>
        <Button onClick={setToZero} text='reset' />
      </div>
    </div>
  );
};

export default App;
