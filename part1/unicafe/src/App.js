import { useState } from "react";

const Statistics = (props) => {
  if (props.total === 0) {
    return <p>No feedback given</p>;
  } else {
    const calculateAvege = () => (props.good - props.bad) / props.total;

    const calculatePercentage = () => `${(props.good / props.total) * 100} %`;

    return (
      <table>
        <tbody>
          <tr>
            <StatisticLine text="good" value={props.good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value={props.neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value={props.bad} />
          </tr>
          <tr>
            <StatisticLine text="all" value={props.total} />
          </tr>
          <tr>
            <StatisticLine text="average" value={calculateAvege()} />
          </tr>
          <tr>
            <StatisticLine text="positive" value={calculatePercentage()} />
          </tr>
        </tbody>
      </table>
    );
  }
};

const StatisticLine = (props) => {
  console.log(props);
  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>
  );
};

const Display = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.value}</h1>
    </div>
  );
};

const Button = (props) => {
  console.log(props);
  return <button onClick={props.clickHandler}>{props.text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickHandler = (opinion) => {
    if (opinion === "good") setGood(good + 1);
    else if (opinion === "neutral") setNeutral(neutral + 1);
    else if (opinion === "bad") setBad(bad + 1);
  };

  const total = good + neutral + bad;

  return (
    <div>
      <Display value="give feedback" />
      <Button clickHandler={() => clickHandler("good")} text="good" />
      <Button clickHandler={() => clickHandler("neutral")} text="neutral" />
      <Button clickHandler={() => clickHandler("bad")} text="bad" />
      <Display value="statistics" />
      <Statistics total={total} good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
