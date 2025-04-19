const Navbar=()=>
    (
    <nav className="p-4 bg-grey-800 text-white flex justify-between">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex gap-4">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contacts</a></li>
        </ul>
    </nav>
)

export default  Navbar;