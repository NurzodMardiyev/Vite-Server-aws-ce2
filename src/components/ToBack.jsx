import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function ToBack({ link, title }) {
  return (
    <div>
      <div className="flex justify-between items-center dark:text-white">
        <Link
          to={link}
          className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white text-[23px] mb-3 dark:bg-[#232e3e] dark:text-white"
        >
          <IoIosArrowBack />
        </Link>
        <h1 className="text-[18px] italic font-medium">{title}</h1>
        <div className="w-[50px]"></div>
      </div>
    </div>
  );
}
