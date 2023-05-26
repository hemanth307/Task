
import { AiTwotoneHome } from 'react-icons/ai';
import { TbCertificate } from 'react-icons/tb';
import { CgGames } from 'react-icons/cg';
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { GrNotification } from 'react-icons/gr';
import { MdOutlineCreateNewFolder } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className="flex absolute bg-white shadow-3xl w-screen z-50">
      <div className="flex h-16">
        <div className="flex items-center ml-12 mr-8">
          <div className="w-10 h-10 bg-blue-500 rounded-md" />
        </div>
        <div className="relative flex caret-gray-100 rounded-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <AiOutlineSearch size={20} className="text-gray-500" />
          </div>
          <input className="w-96 h-9 border-solid my-3 pl-11 bg-my-gray rounded-md" placeholder='Search MeNem'></input>
        </div>
        <div className="flex">
          <div className="flex flex-col items-center">
            <AiTwotoneHome className="w-6 h-6 ml-24 mr-24 mt-1.5" />
            <div className="text-sm font-semibold">Home</div>
          </div>
          <div className="flex flex-col items-center">
            <TbCertificate className="w-6 h-6 mt-1.5" />
            <div className="text-sm font-semibold">Certificate</div>
          </div>
          <div className="flex flex-col items-center">
            <CgGames className="w-6 h-6 ml-24 mt-1.5" />
            <div className="text-sm font-semibold ml-24">Games</div>
          </div>
          <div className="flex flex-col items-center">
            <BsChatDots className="w-7 h-6 ml-24 mt-1.5" />
            <div className="text-sm font-semibold ml-24 ">Chat</div>
          </div>
          <div className="flex flex-col items-center">
            <GrNotification className="w-5 h-6 mt-1.5 ml-24" />
            <div className="text-sm font-semibold ml-24">Notification</div>
          </div>
        </div>
        <div className="flex ml-20 mr-8 mt-2.5 mb-4 w-0.5 h-10 top-2 bg-black rounded-md" />
        <div className='flex flex-col items-center'>
          <MdOutlineCreateNewFolder className="w-6 h-6 ml-20 mt-1.5" />
          <div className="text-sm font-semibold ml-20 mt-1.5">Create</div>
        </div>
        <div className="flex ml-20 mt-2 mb-3 w-10 h-10 bg-cover rounded-md bg-profilePic"></div>
      </div>
    </div>
  );
};

export default Navbar;
