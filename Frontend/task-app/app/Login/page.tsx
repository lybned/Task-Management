export default function Page(){

  

  return(
    <div className="flex justify-center w-full h-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 items-center">
      <div className="bg-white p-5 border-gray-400 w-full sm:w-1/2 md:w-1/3 2xl:w-1/4 border-2 rounded-lg  h-fit">
        <p className="text-2xl my-3 text-center font-black">Login</p>
        <div className="mb-6">
            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="JohnDoe" required />
        </div> 
        <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
        </div>    
        <button className="w-full mb-6 bg-sky-500 px-3 py-2 rounded-full hover:bg-sky-700" >Login</button>    
        <div className="flex flex-wrap"><p className="me-3">Do not have an account yet? </p><a href="/Register" className="no-underline hover:underline text-sky-500">Register Here</a></div>            
      </div>
    </div>
  )
}