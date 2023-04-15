import { useState } from "react";

const Display = (props) => {
  return <h1>{props.text}</h1>;
};

const DisplayAnecdote = (props) => {
  const selected = props.selected;
  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {props.points[selected]} votes</p>
    </div>
  );
};

const DisplayAnecdoteMostVotes = ({ points, anecdotes }) => {
  let max = 0;
  let maxIndex = 0;

  for (let i = 0; i < points.length; i++) {
    if (max < points[i]) {
      max = points[i];
      maxIndex = i;
    }
  }

  return (
    <div>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {max} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  // const points = [0, 0, 0, 0, 0, 0, 0, 0];
  const pointsArray = Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(pointsArray);

  const chooseRandomAndecdote = () => {
    const randomInt = Math.floor(Math.random() * 8);
    setSelected(randomInt);
  };

  const votingButtonHandling = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  console.log(points);

  return (
    <div>
      <Display text={"Anecdote of the day"} />
      <DisplayAnecdote
        points={points}
        selected={selected}
        anecdotes={anecdotes}
      />
      <button onClick={votingButtonHandling}>vote</button>
      <button onClick={chooseRandomAndecdote}>next anecdote</button>
      <Display text={"Anecdote with the most votes"} />
      <DisplayAnecdoteMostVotes anecdotes={anecdotes} points={points} />
    </div>
  );
};

export default App;
