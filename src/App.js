import "./App.css";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState();
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newName, age: Number(newAge)})
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, 'users', id)
    const newFields = {age: age + 1}
    await updateDoc(userDoc, newFields)
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id)
    await deleteDoc(userDoc)
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    };

    getUsers();
  }, []);

  return (
    <div style={{padding: 50}}>
      <input
        placeholder="Name..."
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="Number"
        placeholder="Age..."
        onChange={(e) => setNewAge(e.target.value)}
      />
      <button onClick={createUser}> Create User </button>
      {users.map((user) => (
        <div key={user.id}>
          <div>Name: {user.name}</div>
          <div>age: {user.age}</div>
          <button onClick={() => {updateUser(user.id, user.age)}}> Increase age </button>
          <button onClick={() => {deleteUser(user.id)}}> Delete User </button>
        </div>
      ))}
    </div>
  );
}

export default App;
