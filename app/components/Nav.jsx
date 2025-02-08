
export default function Nav() {
  return (
    <nav className="z-50 flex items-center justify-between px-5 py-3 text-white">
      <h1 className="text-3xl font-extrabold text-white">PSS Myanmar</h1>
      <ul className=" flex gap-4 justify-center text-lg font-semibold w-[40rem] items-center">
        <li>
          <a href="" className="text-green-700 ">Home</a>
        </li>
        <li>
          <a href="" className=" hover:text-green-700">Our Services</a>
        </li>
        <li>
          <a href="" className=" hover:text-green-700">Our Projects</a>
        </li>
        <li>
          <a href="" className=" hover:text-green-700">Gallery</a>
        </li>
        <li>
          <a href="" className=" hover:text-green-700">Contact Us</a>
        </li>
      </ul> 
    </nav>
  )
}
