import { useState } from 'React';

const useCounter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const incrementIfOdd = (delay = 1000) => {
    setTimeout(() => {
      setCount(count + 1);
    }, delay);
  };

  const incrementAsync = (delay = 1000) => {
    setTimeout(() => {
      setCount(count - 1);
    }, delay);
  };

  return {
    count,
    increment,
    decrement,
    incrementIfOdd,
    incrementAsync,
  };
};

export default useCounter;
