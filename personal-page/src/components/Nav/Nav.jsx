export function Nav() {
  return (
    <nav className="bg-white dark:bg-[#212124] text-black dark:text-white">
      <div className="flex py-10 ">
        <a href="#work" className="font-bold">
          Portfolio.
        </a>
        <div className="flex gap-x-4 md:gap-x-8 ml-auto items-center">
          <a href="#about" className="text-sm/6 ">
            About
          </a>
          <a href="#work" className="text-sm/6 ">
            Work
          </a>

          {/* <!-- <a href="#contact" className="text-sm/6 text-gray-900">Contact</a> --> */}
        </div>
      </div>
    </nav>
  );
}
