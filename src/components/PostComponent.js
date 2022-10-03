import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

function PostComponent() {
  const [dataName, setDataName] = useState([{ name: '', username:'', email:''}])
  
  
  const submitHandler = e => {
    e.preventDefault()
    console.log(dataName)
     axios.post('https://jsonplaceholder.typicode.com/users', dataName)
     .then(response => {
       console.log(response)
     })
     .catch(error => {
       console.log('Error retrieving data')
     })
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input 
            type='text' 
            name='name' 
            value={dataName.name} 
            onChange={ e => setDataName([{ ...dataName, name: e.target.value }])} />
        </div>
        <div>
          <input 
            type='text' 
            name='username' 
            value={dataName.username} 
            onChange={ e => setDataName([{ ...dataName, username: e.target.value }])} />
        </div>
        <div>
          <input 
            type='text' 
            name='email' 
            value={dataName.email} 
            onChange={ e => setDataName([{ ...dataName, email: e.target.value }])} />
        </div>
        <button type='submit'>Submit</button>
      </form>
      <div>
        {
          dataName.length ?
          dataName.map(data => <div key={data.id}>{data}</div>):
          null
        }
      </div>
    </div>
  )
}

export default PostComponent