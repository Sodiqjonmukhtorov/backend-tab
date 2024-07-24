import { Card } from "./components/card";
import { Form } from "./components/form";
import { request } from "./config/request";
import React from "react";

function App() {
  const [state, setState] = React.useState([]);

  const getData = () => {
    request.get("/todos").then((res) => {
      setState(res.data);
    });
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Form refetch={getData} />
      {state.map((item) => (
        <Card refetch={getData} key={item.id} {...item} />
      ))}
    </>
  );
}

export default App;
