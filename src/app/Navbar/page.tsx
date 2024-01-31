
export default function Nav()
{
    return(
        

<nav className=" dark:bg-purple-800 rounded-full m-3">
  <div className="max-w-screen-xl flex items-center justify-between p-4">
    <a href=".." className="flex items-center">
        <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" className="h-8" alt="Chuck-Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black"> Chuck-Joke-Generator</span>
    </a>
    <div>
      <ul className="font-medium flex p-4 md:p-0">
        <li>
          <a href="/About" className="block text-black rounded hover:bg-transparent dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}