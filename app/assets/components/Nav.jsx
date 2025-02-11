import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {

  const pathname = usePathname();
  console.log(pathname);
  
  return (
    <nav className="z-50 flex items-center justify-between px-5 py-3">
      <h1 className="text-3xl font-extrabold">PSS Myanmar</h1>
      <ul className=" hidden lg:flex gap-4 justify-center text-lg font-semibold w-[40rem] items-center">
        <li>
          <Link href="/" className={`${ pathname == "/" ? " text-green-700 " : "hover:text-green-700"}`}>Home</Link>
        </li>
        <li>
          <Link href="/services" className={`${ pathname == "/services" ? " text-green-700 " : "hover:text-green-700"}`}>Our Services</Link>
        </li>
        <li>
          <Link href="/project" className={`${ pathname == "/project" ? " text-green-700 " : "hover:text-green-700"}`}>Our Projects</Link>
        </li>
        <li>
          <Link href="/gallery" className={`${ pathname == "/gallery" ? " text-green-700 " : "hover:text-green-700"}`}>Gallery</Link>
        </li>
      </ul> 
    </nav>
  )
}
