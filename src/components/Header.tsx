import Link from "next/link"
import Image from "next/image"
import ThemeSwitcher from "./ThemeSwitcher"

function Header() {
  return (
    <header className="header">
        <nav>
        <div className="logo">
            <Link href="/"><Image src="https://i.pinimg.com/1200x/be/18/8b/be188b13b1219d11e68d0006beb12547.jpg" width={30} height={30} alt="logo"/></Link>
        </div>
        <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/about">About</Link>
        </div>

        <ThemeSwitcher/>

        </nav>
    </header>
  )
}

export default Header
