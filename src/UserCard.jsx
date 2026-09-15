import { useState } from "react";

const UserCard = ({ name, age, isOnline }) => {
  const [status, setStatus] = useState(isOnline);

  let category;
  let text;

  if (status) {
    text = "В сети";
  } else {
    text = "Не в сети";
  }

  if (age < 18) {
    category = "Ребёнок";
  } else if (age >= 18 && age <= 65) {
    category = "Взрослый";
  } else {
    category = "Пенсионер";
  }

  return (
    <div>
      <p>
        {name} {age} {category} {text}
      </p>
      <button onClick={() => setStatus(!status)}>Сменить статус</button>
    </div>
  );
};

export default UserCard;
