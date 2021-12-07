import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import "./styles.css";

const counterReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case "INCREMENTED": {
      return { ...state, value: state.value + 1 };
    }
    case "DECREMENTED": {
      return { ...state, value: state.value - 1 };
    }
    case "RESET": {
      return { ...state, value: 0 };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(counterReducer);

const Screen = () => {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const reset = () => dispatch({ type: "RESET" });

  return (
    <div style={{ margin: "20px" }}>
      <span
        style={{ margin: "20px", padding: "4px", border: "2px solid black" }}
      >
        {counter}
      </span>{" "}
      <button onClick={reset}>reset</button>
    </div>
  );
};

const Counter = () => {
  const dispatch = useDispatch();
  const increment = () => dispatch({ type: "INCREMENTED" });
  const decrement = () => dispatch({ type: "DECREMENTED" });

  return (
    <div>
      <button onClick={increment}>+</button>
      <Screen />
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Counter</h1>
        <Counter />
      </div>
    </Provider>
  );
}
