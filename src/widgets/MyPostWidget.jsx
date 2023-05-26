import { BsThreeDots } from 'react-icons/bs';
import { CiStar } from 'react-icons/ci';
import { BsChat } from 'react-icons/bs';
import { AiOutlineSend } from 'react-icons/ai';

const MyPostWidget = () => {
  return (
    <div>
      {/* First Post */}
      <div className="flex flex-col w-z h-mpw bg-white rounded-xl border-slate-950 shadow-xxl">
      <div className="flex ml-6 mt-6">
          <div className="flex w-10 h-10 bg-cover rounded-md bg-miles"></div>
          <div className="flex flex-col items-start">
            <div className="flex h-4 ml-2.5 tracking-wider font-semibold text-tc">
                Miles Education
            </div>
            <div className="flex mt-2">
              <div className="flex w-1 h-1 ml-2.5 mt-2 bg-pw rounded-2xl" />
              <div className="flex w-32 h-4 ml-1.5 tracking-wider text-nc text-xs font-normal ">
                1 day ago
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-1.5">
            <button className="w-mpw2 h-8 ml-mpw3 text-black font-medium rounded bg-i">
              Boost
            </button>
            <BsThreeDots size={24} className="w-1.6 h-5 ml-5 fill-black" />
          </div>
        </div>
        <div className="h-12 mt-5">
          <p className="ml-5 text-black text-lg">
            <strong>Turn your dream</strong> of working in the US, a reality! With a 96% visa acceptance rate, <strong className="text-blue-500"> @first </strong> kind Miles of its kind l Tamil <strong className="text-blue-500"> #Startup </strong> <strong className="font-normal text-gray-800">...see more</strong>
          </p>
          <div className="flex w-z h-mpw5 mt-4 bg-cover bg-post justify-between"></div>

          <div className="flex w-full mt-4 justify-between">
            <div className="flex ml-6">
                <div className="flex w-6 h-6 bg-cover rounded-md bg-profilePic"></div>
                <div className="flex w-6 h-6 bg-cover rounded-md bg-profilePic"></div>
                <div className="flex w-6 h-6 bg-cover rounded-md bg-profilePic"></div>
                <div className="flex font-normal text-pw w-nwt h-5 ml-2.5">
                99.5K Likes
                </div>
            </div>
            <div className="flex font-normal text-pw">
                99.5K Kudos
                <strong>
                <div className="flex w-1 h-1 bg-cover rounded-2xl mt-2.5 mx-1 bg-gray-700"></div>
                </strong>
                567 views
            </div>
          </div>
            <div className="flex w-mpw5 h-0.5 mt-5 bg-cover rounded-md bg-border"></div>
            <div className="flex mt-5 ml-mpw7">
                    <CiStar size={32} className="flex" />
                <div className="flex w-8 h-5 mt-0.5 ml-1.5 font-medium text-lg text-pw">
                    like
                </div>
                <BsChat size={32} className="flex ml-36" />
                <div className="flex w-8 h-5 mt-0.5 ml-1.5 font-medium text-lg text-pw">
                    Kudos
                </div>
                <AiOutlineSend size={32} className="flex ml-36" />
                <div className="flex w-8 h-5 mt-0.5 ml-1.5 font-medium text-lg text-pw">
                    Send
                </div>
            </div>
        </div>
      </div>

      {/* Second Post */}
      <div className="flex flex-col w-z h-mpw bg-white rounded-xl border-slate-950 shadow-xxl mt-5">
      <div className="flex ml-6 mt-6">
          <div className="flex w-10 h-10 bg-cover rounded-md bg-miles"></div>
          <div className="flex flex-col items-start">
            <div className="flex h-4 ml-2.5 tracking-wider font-semibold text-tc">
                Miles Education
            </div>
            <div className="flex mt-2">
              <div className="flex w-1 h-1 ml-2.5 mt-2 bg-pw rounded-2xl" />
              <div className="flex w-32 h-4 ml-1.5 tracking-wider text-nc text-xs font-normal ">
                1 day ago
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-1.5">
            <button className="w-mpw2 h-8 ml-mpw3 text-black font-medium rounded bg-i">
              Boost
            </button>
            <BsThreeDots size={24} className="w-1.6 h-5 ml-5 fill-black" />
          </div>
        </div>
        <div className="w-mpw4 h-12 mt-5">
          <p className="ml-5 text-black text-lg">
            <strong>Turn your dream</strong> of working in the US, a reality! With a 96% visa acceptance rate, <strong className="text-blue-500"> @first </strong> kind Miles of its kind l Tamil #Startup <strong className="font-normal text-gray-800">...see more</strong>
          </p>
          <div className="flex w-z h-mpw5 mt-4 bg-cover bg-post justify-between"></div>

          <div className="flex w-full mt-4 justify-between">
            <div className="flex ml-6">
                <div className="flex w-6 h-6 bg-cover rounded-md bg-profilePic"></div>
                <div className="flex w-6 h-6 bg-cover rounded-md bg-profilePic"></div>
                <div className="flex w-6 h-6 bg-cover rounded-md bg-profilePic"></div>
                <div className="flex font-normal text-pw w-nwt h-5 ml-2.5">
                99.5K Likes
                </div>
            </div>
            <div className="flex font-normal text-pw">
                99.5K Kudos
                <strong>
                <div className="flex w-1 h-1 bg-cover rounded-2xl mt-2.5 mx-1 bg-gray-700"></div>
                </strong>
                567 views
            </div>
          </div>
            <div className="flex w-mpw5 h-0.5 mt-5 bg-cover rounded-md bg-border"></div>
            <div className="flex mt-5 ml-mpw7">
                    <CiStar size={32} className="flex" />
                <div className="flex w-8 h-5 mt-0.5 ml-1.5 font-medium text-lg text-pw">
                    like
                </div>
                <BsChat size={32} className="flex ml-36" />
                <div className="flex w-8 h-5 mt-0.5 ml-1.5 font-medium text-lg text-pw">
                    Kudos
                </div>
                <AiOutlineSend size={32} className="flex ml-36" />
                <div className="flex w-8 h-5 mt-0.5 ml-1.5 font-medium text-lg text-pw">
                    Send
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MyPostWidget;
