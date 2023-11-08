import React, { useState } from "react";

function App() {
  const [Card, setCard] = useState([
    { id: 0, title: "벤치프레스", body: "80kg들기", isDone: false },
  ]);
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");

  const Add_card = () => {
    const new_card = {
      id: Card.length + 1,
      title: title,
      body: body,
      isDone: false,
    };
    setCard([...Card, new_card]);
    settitle("");
    setbody("");
  };

  const Cleartodo = (id) => {
    const updateCard = Card.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: true };
      }
      return item;
    });
    setCard(updateCard);
    console.log(updateCard);
  };

  const ReturnTodo = (id) => {
    const returnCard = Card.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: false };
      }
      return item;
    });
    setCard(returnCard);
  };

  const deltodo = (id) => {
    const Card_del = Card.filter((item) => item.id != id);
    setCard(Card_del);
    console.log(Card_del);
  };
  return (
    <div>
      <header>todoRetest</header>
      <input
        value={title}
        onChange={(event) => {
          settitle(event.target.value);
        }}
      ></input>
      <input
        value={body}
        onChange={(event) => {
          setbody(event.target.value);
        }}
      ></input>
      <button onClick={Add_card}>추가하기</button>

      <div>-------------------</div>
      <div>진행중</div>
      <div className="todo_Cardss">
        {Card.filter((item) => !item.isDone).map((item) => (
          <>
            <div>제목 :{item.title}</div>
            <div>내용:{item.body}</div>
            <button onClick={() => Cleartodo(item.id)}>완료</button>
            <button onClick={() => deltodo(item.id)}>삭제</button>
          </>
        ))}
      </div>

      <div>-------------------</div>
      <div>성공</div>
      {Card.filter((item) => item.isDone).map((item) => (
        <>
          <div>제목 :{item.title}</div>
          <div>내용:{item.body}</div>
          <button onClick={() => Cleartodo(item.id)}>완료</button>
          <button onClick={() => ReturnTodo(item.id)}>못함</button>
        </>
      ))}
    </div>
  );
}

export default App;
