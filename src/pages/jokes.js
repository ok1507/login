import React, { useEffect, useState } from "react";
import HeaderCmp from "../componets/header";
import axios from "axios";
import { Card, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Jokes = () => {
  const [loading, setLoading] = useState(true);
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    getJokes();
  }, []);

  const getJokes = async () => {
    try {
      const res = await axios.get(
        "https://official-joke-api.appspot.com/jokes/ten"
      );
      setJokes(res.data);
      if (res.status) {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <HeaderCmp />

      {loading ? (
        <div style={{ textAlign: "center", marginTop: "25%" }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : null}

      {jokes.map((item, index) => {
        return (
          <div style={{ width: "20rem", margin: "auto" }}>
            <Card style={{ width: "18rem", marginBottom: 10, marginTop: 10 }}>
              <Card.Body>
                <Card.Title>{item.punchline}</Card.Title>
                <Card.Text style={{ fontFamily: "cursive" }}>
                  {item.setup}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};
export default Jokes;
