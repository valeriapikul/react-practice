import UserCard from "./UserCard";

const showList = (users) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <UserCard
              name={user.name}
              age={user.age}
              isOnline={user.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

const UserList = ({ users }) => {
  return users.length === 0 ? "Пользователей нет" : showList(users);
};

export default UserList;
