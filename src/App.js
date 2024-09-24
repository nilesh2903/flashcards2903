import { useState } from "react";
import "./index";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 1,
    name: "Nilesh",
    milestone:
      "1. Setting up the JIRA with GitHub versioning automation. 2.Understanding and implementing the CI/CD Pipeline for Zypher 3.Completion of frontend of zypher ",
  },
  {
    id: 2,
    name: "Gokul",
    milestone:
      "1. LinkedIn Top Voice Batch 2. Complete 1 Course of VC/Investments",
  },
  {
    id: 3,
    name: "Nikhil",
    milestone: "Yet To Decide",
  },
  {
    id: 4,
    name: "Yash",
    milestone: "Yet To Decide",
  },
  {
    id: 5,
    name: "Siddhant",
    milestone: `1. Launch 1st Pilot 2.Finalize the cloud kitchen Menu 3. Sort out financial for the cloud kitchen and pilot`,
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((name) => (
        <div
          key={name.id}
          onClick={() => handleClick(name.id)}
          className={name.id === selectedId ? "selected" : ""}
        >
          <p>{name.id === selectedId ? name.milestone : name.name}</p>
        </div>
      ))}
    </div>
  );
}
