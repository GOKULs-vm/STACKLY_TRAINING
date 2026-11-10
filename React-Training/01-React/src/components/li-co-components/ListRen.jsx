import React from 'react'

const ListRen = () => {
    const users = [
        { id: 1, name: 'John', age: 30, city: 'New York', email: 'john@example.com', role: 'admin' },
        { id: 2, name: 'Jane', age: 25, city: 'Los Angeles', email: 'jane@example.com', role: 'user' },
        { id: 3, name: 'Bob', age: 35, city: 'Chicago', email: 'bob@example.com', role: 'developer' },
        { id: 4, name: 'Alice', age: 28, city: 'San Francisco', email: 'alice@example.com', role: 'manager' },
        { id: 5, name: 'Tom', age: 40, city: 'Seattle', email: 'tom@example.com', role: 'guest' }
    ]
  return (
    <div>
      <h1>List Rendering in Action</h1>
      {
        users.map((user) => (
            <div key={user.id} className='flex flex-col gap-2 border-b border-sky-600 pb-2'>
                <h2 className='text-2xl text-center text-sky-700 font-bold tracking-widest'>{user.name}</h2>
                <p className='text-slate-700 text-center text-md leading-relaxed tracking-wide'>Age: {user.age}</p>
                <p className='text-slate-700 text-center text-md leading-relaxed tracking-wide'>City: {user.city}</p>                
                <p className='text-slate-700 text-center text-md leading-relaxed tracking-wide'>Email: {user.email}</p>
                <p className='text-slate-700 text-center text-md leading-relaxed tracking-wide'>Role: {user.role}</p>
            </div>
        ))
      }
    </div>
  )
}

export default ListRen
