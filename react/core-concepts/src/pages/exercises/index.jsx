import { useState } from "react";
import "./styles.css";
const cardList = [
  {
    id: 1,
    title: "Card 1",
    description: "Card 1 description",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Card 2",
    description: "Card 2 description",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    title: "Card 3",
    description: "Card 3 description",
    image: "https://picsum.photos/200/300",
  },
];
function CardComponents(props) {
  return (
    <div className="card-container">
      <h2>{props.id}</h2>
      <p>Title: {props.title}</p>
      <p>Description: {props.description}</p>
      <img src={props.image} />
    </div>
  );
  function formPage() {
    const [inputValueName, setInputValueName] = useState("");
    const [inputValueEmail, setInputValueEmail] = useState("");
    const [inputValueAssunto, setInputValueASsunto] = useState("");
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`$()`);
    };
  }
}
export default function ExercisesPage() {
  return (
    <div>
      <h1>01. Cards</h1>
      <div className="card-list">
        {cardList.map((card) => (
          <CardComponents
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
      <h1>02. Contact Form</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome:</label>
            <input type="text" value={inputValueName} />
          </div>
          <div>
            <label>Email:</label>
            <input type="text" value={inputValueEmail} />
          </div>
          <div>
            <label>Assunto:</label>
            <input type="text" value={inputValueAssunto} onChange={event} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
