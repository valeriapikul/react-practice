import UserCard from "./UserCard.jsx";
import UserList from "./UserList.jsx";

const users = [
  {name: 'Marti',
    age: 17,
    isOnline: true,
    id: 1
  },
  {name: 'Lola',
    age: 23,
    isOnline: true,
    id: 2
  },
  {name: 'Oleg',
    age: 45,
    isOnline: false,
    id: 3
  },
]

const App = () => {
  return <UserList users={users} /> 
};

export default App;