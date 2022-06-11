import './App.css';
import { useState } from 'react'
import Read from "./components/Read"
import Create from "./components/Create"
import Update from "./components/Update"
import Delete from "./components/Delete"
import axios from "axios";
import Navbar from './components/Navbar';

function App() {

  const [posts, setPosts] = useState([]);

  // Read function
  const getRequest = async () => {
    console.log("read data")
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');
      setPosts(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const [userId, setUserId] = useState('');
  const [Id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("")

  // Create 
  const postRequest = async () => {
    if (userId.length == 0 || Id.length == 0 || title.length == 0 || body.length == 0) {
      alert("Please Enter all the values(UserId, ID, Title, Body)!")
      return
    }
    const newPost = {
      userId: userId,
      Id: Id,
      title: title,
      body: body
    }
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
      setPosts(response.data)
    } catch (err) {
      console.error(err);
    }
  }



  // Update 
  const putRequest = async () => {
    if (userId.length == 0 || Id.length == 0 || title.length == 0 || body.length == 0) {
      alert("Please Enter all the values(UserId, ID, Title, Body)!")
      return
    }
    const updatedTodo = {
      Id: Id,
      userId: userId,
      title: title,
      body: body,
    }
    try {
      const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', updatedTodo);
      console.log(response.data);
      setPosts(response.data)
      console.log(response)
    } catch (err) {
      console.error(err);
    }
  }

  // Delete
  const deleteRequest = async () => {
    if (Id.length == 0) {
      alert("Please Enter Id")
      return
    }
    try {
      const resp = await axios.delete('https://jsonplaceholder.typicode.com/todos/${Id}')
      console.log(resp);
      setPosts("");
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />


      {/* Form */}
      <div className="container mt-5">
        <form>
          <div className="form-group">
            <label >User ID</label>
            <input required onChange={(e) => setUserId(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" />
          </div>
          <div className="form-group">
            <label>ID</label>
            <input required onChange={(e) => setId(e.target.value)} type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label >Title</label>
            <input required onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Body</label>
            <input required onChange={(e) => setBody(e.target.value)} type="text" className="form-control" />
          </div>
        </form>

        {/* CRUD Operation Button */}
        <div className="operationButtons">
          <Read getRequest={getRequest} /> {/*passing function to components */}
          <Create postRequest={postRequest} />
          <Update putRequest={putRequest} />
          <Delete deleteRequest={deleteRequest} />
        </div>

        {/* Table */}
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.length > 2 ? posts.map((post) => {
              return (
                <tr key={post.id}>
                  <th scope="row">{post.userId}</th>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              )
            }) :
              <tr>
                <th scope="row">{posts.userId}</th>
                <td>{posts.Id}</td>
                <td>{posts.title}</td>
                <td>{posts.body}</td>
              </tr>

            }
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
