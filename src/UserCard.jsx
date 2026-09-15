const UserCard = ({ name, age, isOnline }) => {
  let text;

  if (isOnline === true) {
    text = "В сети";
  } else {
    text = "Не в сети";
  }

  return (
    <div>
      <p>
        {name} {age} {text}
      </p>
    </div>
  );
};

export default UserCard;