import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

function GetComponent() {
  const [posts, getPosts] = useState([])

  const clickHandler = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      console.log(response)
      getPosts(response.data)
    })
    .catch(error => {
      console.log('Error retrieving data')
    })
  }

  return (
    <div>
      <div>
        <div><button onClick={clickHandler}>Get Data</button></div>
        <br/><hr/><br/>
        <div>
          {
          posts.length ?
          posts.map(post => <div key={post.id}>{post.name}</div>) :
          null 
          }
        </div>
      </div>
      
    </div>
  )
}

export default GetComponent