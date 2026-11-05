
const PropChild = ({name, age, city, email, phone}) => {
  return (
    <div className='flex flex-col gap-4 px-6 py-6 rounded-lg shadow-md border border-gray-500 w-sm'>
      <h2 className='text-2xl text-center text-sky-700 font-bold tracking-widest'>{name}</h2>
      <div >
        <p className='text-slate-700 text-sm tracking-widest'>Age:</p>
        <p className='text-slate-900 text-xl'>{age}</p>
      </div>
      <div>
        <p className='text-slate-700 text-sm tracking-widest'>City:</p>
        <p className='text-slate-900 text-xl'>{city}</p>
      </div>
      <div>
        <p className='text-slate-700 text-sm tracking-widest'>Email:</p>
        <p className='text-slate-900 text-xl'>{email}</p>
      </div>
      <div>
        <p className='text-slate-700 text-sm tracking-widest'>Phone:</p>
        <p className='text-slate-900 text-xl'>{phone}</p>
      </div>
    </div>
  )
}

export default PropChild
