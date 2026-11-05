import PropChild from "./PropChild"

const PropParent = () => {
    const users = [
        { name: 'John', age: 30, city: 'New York', email: 'john@example.com', phone: '123-456-7890' },
        { name: 'Jane', age: 25, city: 'Los Angeles', email: 'jane@example.com', phone: '987-654-3210' },
        { name: 'Bob', age: 35, city: 'Chicago', email: 'bob@example.com', phone: '555-555-5555' },
        { name: 'Alice', age: 28, city: 'San Francisco', email: 'alice@example.com', phone: '111-222-3333' },
        { name: 'Tom', age: 40, city: 'Seattle', email: 'tom@example.com', phone: '444-555-6666' }
    ]
  return (
    <div className='max-w-5xl mx-auto mt-10 mb-10 px-8 py-8 flex flex-col gap-8 justify-between rounded-xl shadow-lg'>
      <div className='flex flex-col gap-2 border-b border-sky-600 pb-2'>
        <h1 className='text-4xl text-center text-sky-700 font-bold tracking-widest'>Props</h1>
        <p className='text-slate-700 text-center text-md leading-relaxed tracking-wide'>Here Props is used to list the details of the users with 
            the help of map function</p>
      </div>
      <div className='flex flex-wrap gap-8 justify-between'>
        {
            users.map((user, index) => (
                <PropChild key={index} name={user.name} age={user.age} city={user.city} email={user.email} phone={user.phone} />
            ))
        }
      </div>
      
    </div>
  )
}

export default PropParent
