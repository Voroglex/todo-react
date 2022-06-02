import { render } from "@testing-library/react";
import React, { useState } from "react";
import Card from "./Card";
import "./NewCard";
import NewCard from "./NewCard";

function App() {
  const [cards, setCards] = useState([]);
  const [description, setDescription] = useState("");

  const addNewCard = (e) => {
    e.preventDefault()
    if(description !== ""){
    const newCard = {
      id: Date.now(),
      body: description,
    };
  
    setCards([...cards, newCard]);
    setDescription("")
  }

  };

  const deleteCard = (e) => {
    setCards(cards.filter((p) => p.id !== e.id));
  };

  return (
    <div className="App">
      <NewCard
        onChange={(e) => setDescription(e.target.value)}
        onClick={addNewCard}
        formInput={description}
      />
      {cards.map((card, index) => (
        <Card
          card={card}
          key={card.id}
          remove={deleteCard}
          number={index + 1}
        />
      ))}
    </div>
  );
}

export default App;
