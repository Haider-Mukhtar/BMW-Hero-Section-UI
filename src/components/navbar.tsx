import BMWLogo from "../assets/img/bmw-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed z-[50] top-0 w-full left-0 px-16">
      <div className='bg-amber-20 h-18 flex flex-row items-center justify-between'>
        <div className='flex flex-row gap-2 items-center group'>
          <img
            className='aspect-square h-12 transition-transform duration-500 hover:rotate-360'
            src={BMWLogo}
            alt='BMW Logo'
          />
          <p className='text-white text-3xl font-medium absolute left-14 top-9 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-16 transition-all duration-500 pointer-events-none whitespace-nowrap'>
            BMW
          </p>
        </div>
        <div className='flex flex-row items-center gap-10 text-white text-lg font-medium'>
          <p>Models</p>
          <p>M Series</p>
          <p>Electric Future</p>
          <p>Digital Journey</p>
          <p>Contact</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;