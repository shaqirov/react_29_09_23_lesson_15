import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function MainPage() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  function increment() {
    setCount(count + 1);
  }

  useEffect(() => {
    if (count === 10) {
      navigate("login");
    }
  }, [count]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MainPage</h1>
      <h3>{count}</h3>
      <button onClick={increment}>+</button>
    </div>
  );
}
