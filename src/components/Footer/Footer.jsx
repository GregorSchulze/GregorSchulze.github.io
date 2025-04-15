import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer>
      <div className="">
        <ul className="flex justify-center gap-10 py-10 bg-white dark:bg-[#212124] text-black dark:text-white">
          <li>
            <a
              href="https://www.linkedin.com/in/gregor-s-8b36401a4/"
              target="_blank"
            >
              <FaLinkedin size={25} color="currentColor" />
            </a>
          </li>
          <li>
            <a href="https://github.com/GregorSchulze" target="_blank">
              <FaGithub size={25} color="currentColor" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/gregor.schulze/" target="_blank">
              <FaInstagram size={25} color="currentColor" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
