import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className = "flex flex-row p-4">
      <div className='basis-1/2'>
      <button className="font-ultra text-3xl" onClick={() => handleNavigation('/')}>Garuda</button>
      </div>
      <div className='flex flex-row basis-1/2 justify-end'>
        <button className = "bg-yellow-300 rounded-md px-2 py-1 mx-2 w-28" onClick={() => handleNavigation('/aboutus')}>About Us</button>
        <button className = "bg-yellow-300 rounded-md px-2 py-1 mx-2 w-28" onClick={() => handleNavigation('/events')}>Events</button>
        <button className = "bg-yellow-300 rounded-md px-2 py-1 mx-2 w-28" onClick={() => handleNavigation('/team')}>Team</button>
      </div>
    </div>
  );
}

export default NavBar