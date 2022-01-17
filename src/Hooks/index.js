import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

function Example() {
  const [count, setCount] = useState("Mohit Pandey");
  const [fruits, setFruit] = useState(["apple"]);

  useEffect(() => {
    const reFruits = ["mango", "banana", "grapes"];
    let helperC = [fruits,...reFruits];
    console.log(helperC);
    setFruit(helperC);
    //console.log(fruits);
    //console.log(reFruits);
  }, []);
  return (
    <Container className="py-5">
      {/* <p className="h3 mb-4">You clicked {count} times</p>
      <button
        className="btn btn-outline-primary"
        onClick={() => setCount(count + 2)}
      >
        Click me
      </button> */}
      <ul>        
        {/* {console.log("hi", fruits)} */}
        {fruits && fruits.length ? (
          fruits.map((val, i) => {
            return <li key={i}>{val}</li>;
          })
        ) : (
          <li>No fruits available</li>
        )}
      </ul>
    </Container>
  );
}

export default Example;
