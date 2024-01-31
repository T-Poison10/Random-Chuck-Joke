
export default function Nav()
{
    return(
        

<nav className=" border-gray-200 dark:bg-purple-800">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href=".." className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Chuck-Joke-Generator</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" >
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-none rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent dark:border-none">
        <li>
          <a href="/About" className="block py-2 px-3 text-black rounded hover:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-white dark:hover:bg-transparent dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    );
}