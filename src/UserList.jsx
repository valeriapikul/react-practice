import UserCard from "./UserCard";

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <UserCard name={user.name} age={user.age} isOnline={user.isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
