import React, { useState } from 'react'
import { use } from 'react'

const App = () => {
 const [name, setName] = useState('');
 const [company, setCompany] = useState('');
 const [phone, setPhone] = useState('');
 const [favorite, setFavorite] = useState(false);
const [allusers, setAllusers] = useState([]);

 const submitHandler =(e)=>{
  e.preventDefault();
   const newContact ={name,company,phone,favorite};
   const newArr =[...allusers,newContact];
   setAllusers(newArr);

   setName('');
   setCompany('');
   setPhone('');
   setFavorite(false);

   
 };
 const deleteHandler =(index)=>{
  const copyUser =[...allusers];
  copyUser.splice(index,1);
  setAllusers(copyUser);

}
  
  

 
  return (
   <div className='flex flex-col items-center p-6'>
    
    <form  onSubmit={submitHandler} className='bg-gray-50 p-4 mt-32 w-[40%] rounded-md'>
     
      <label className='block mb-2 font-medium '>Name</label>
      <input className='w-[50%] mb-4 p-2 border rounded' value={name}
       onChange={(e)=> setName(e.target.value)} type="text" placeholder='Enter name' />

       <label className=' block mb-2 font-medium '>company</label>
       <input className='w-[50%] mb-4 p-2 border rounded' value={company}
       onChange={(e)=> setCompany(e.target.value)} type="text" placeholder='Enter company name' />

       <label className=' block mb-2 font-medium '>Phone number</label>
       <input className='w-[50%] mb-4 p-2 border rounded' value={phone}
       onChange={(e)=> setPhone(e.target.value)} type="text" placeholder='Enter phone number' />
      <label className=' mb-2 font  flex items-center'>
       <input type="checkbox"  className='mr-2' checked={favorite} 
       onChange={(e)=>setFavorite(e.target.checked)} />
       favorite
       </label>
       <button type='submit' className='w-full py-3 bg-blue-500 text-whitep-2 rounded-md'>Add contact</button>
    
      </form>
      <div className='mt-6 bg-gray-50 p-6 w-[50%] rounded-s-md'> 
        <h1 className='text-2xl font-bold mb-4'> contact  details</h1>
        {allusers.map((elem,i)=>(
          <div key={i} className='bg-white p-4 mb-4 rounded shadow flex justify-between items-center'>
          <div>
            <h1 className='text-xl font-semibold'
            >{elem.name}</h1>
            <h2 className='text-md'>{elem.company}</h2>
            <p className='text-sm text-gray-600'>{elem.phone}</p> 
            {elem.favorite &&(
              <p className='text-sm bg-yellow-700 text-white rounded-3xl py-3 px-9 font-medium'> Favorite</p>
            )}   
          </div>
          <button className='bg-red-600 text-white p-2 rounded' onClick={()=> deleteHandler(i)}>Delete</button>
          </div>
          
        ))}
        {allusers.length=== 0 &&(
          <p className='text-center text-gray-500'>No contact aadded yet.</p>
        )}
        </div>      
    </div>
  )
}

export default App