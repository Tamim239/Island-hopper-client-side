import logo from '../assets/logo.png';

export const Nav = () => {
  return (
    <nav className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
            <img src={logo} alt="" className='size-10'/>
            <h1>Island Hopper</h1>
        </div>
        <ul className="flex items-center gap-5">
            <li>Home</li>
            <li>All Tourists Spot</li>
            <li>Add Tourists Spot</li>
            <li>My List</li>
        </ul>
        <div className='space-x-3'>
            <button className="btn">Login</button>
            <button className="btn">Register</button>
        </div>
    </nav>
  )
}
