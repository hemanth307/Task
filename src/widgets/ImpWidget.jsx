const ImportantWidget = () => {
    return (
      <div className="flex w-iw h-ih mt-d bg-white rounded-xl border-slate-950 shadow-xxl">
        <div>
          <div className="flex font-semibold text-xl text-black mt-5 ml-ip">
            Important
          </div>
          <div className="flex flex-col mt-5 ml-ip relative">
            <div className="flex w-ipw h-iph bg-cover rounded-md bg-iitm1"></div>
            <div className="absolute top-nwt left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-nw h-nw border-white border-4 bg-cover rounded-xl bg-iitm2"></div>
          </div>
          <div className="flex flex-col">
                <div className="flex mt-12 ml-osf font-semibold tracking-wider text-black text-2xl">
                      IIT_Mumbai
                </div>
                <div className="flex w-64 h-8 text-center font-normal ml-osd tracking-wider text-black text-sm">
                    IIT_Mumbai would likes to add you as a placement partners. 
                </div>
                <div className="flex justify-between">
                    <button className="w-imp h-8 ml-14 rounded mt-6 bg-blue-500 text-white font-semibold" >
                        Accept
                    </button>
                    <button className="w-imp h-8 text-black font-semibold rounded mt-6 bg-i" >
                        Denied
                    </button>
                </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ImportantWidget;
  