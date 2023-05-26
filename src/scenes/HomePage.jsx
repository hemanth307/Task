import CypWidget from "../widgets/CypWidget";
import ImportantWidget from "../widgets/ImpWidget";
import MyPostWidget from "../widgets/MyPostWidget";
import Notification from "../widgets/NotificationWidget";
import PostWidget from "../widgets/PostWidget";
import Request from "../widgets/RequestWidget";
import Navbar from "./Navbar";


const HomePage = () => {
    return (
      <div>
        <Navbar />
        <div className="flex mt-2 gap-5">
          <div className="flex flex-col ml-5 gap-5">
            <CypWidget />
            
              <Notification />
          </div>
          
          <div className="flex flex-col gap-5">
            <PostWidget />  
            <MyPostWidget />
          </div>
          <div className="flex flex-col gap-5">
            <ImportantWidget />
            <Request />
          </div>
          
        </div>
        
      </div>
    );
  };
  
export default HomePage;