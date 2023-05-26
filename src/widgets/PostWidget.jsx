


import { TbCertificate } from 'react-icons/tb';
import { CgGames } from 'react-icons/cg';


const PostWidget = () => {
    return (
    <div className="flex w-z h-32 mt-d bg-white rounded-xl border-slate-950 shadow-xxl">
        <div>
        <div className="flex">
            <div className="flex ml-6 mt-6 mb-3 w-10 h-10 bg-cover rounded-none bg-profilePic"></div>    
          <input className="flex w-pw h-9 mt-6 ml-5 pl-4 border-solid font-normal text-base bg-pw2 placeholder-primary rounded-md" placeholder='What would you like to talk? ' />
        </div>
        <div className="flex">
            <div className="flex ml-7 mt-4">
                <TbCertificate className="flex w-6 h-6" />
                <div className="flex text-sm font-medium ml-2 mt-0.5">Post a Certificate</div>
            </div>
            <div className="flex mt-4 ml-80">
                <CgGames className="flex w-6 h-6" />
                <div className="flex text-sm font-medium ml-2 mt-0.5">Create a Games</div>
            </div>
        </div>
        </div>
    </div>
    );
}

export default PostWidget;