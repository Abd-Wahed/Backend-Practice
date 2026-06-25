// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert('User added successfully!');
          form.reset();
        }
      })
  }
  return (
    <>
      <h2>Simple CRUD Operation</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" />
        <br />
        <input type="text" name="email" />
        <br />
        <input type="submit" value="Add User" name="" id="" />
      </form>
    </>
  )
}

export default App
