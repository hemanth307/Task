

const CypWidget = () => {
    return (
    <div className="flex mt-20 w-x h-80 bg-white rounded-xl border-slate-950 shadow-xxl">
        <div>
        <div className="flex text-lg pt-8 pl-5 font-semibold">
            Complete your Profile
        </div>
        <div className="flex pl-5 pt-6">
          <div className="w-8 h-8 bg-yellow-300 rounded-2xl mr-4" />
          <div className="mr-4 flex w-0.5 h-9 bg-yellow-300 rotate-90" />
          <div className="w-8 h-8 bg-yellow-300 rounded-2xl" />
          <div className="ml-4 flex w-0.5 h-9 bg-gray-300 rotate-90" />
          <div className="ml-4 w-8 h-8 bg-gray-300 rounded-2xl" />
          <div className="ml-4 lex w-0.5 h-9 bg-gray-300 rotate-90" />
          <div className="ml-4 w-8 h-8 bg-gray-300 rounded-2xl" />
          <div className="ml-4 lex w-0.5 h-9 bg-gray-300 rotate-90" />
          <div className="ml-4 w-8 h-8 bg-gray-300 rounded-2xl" />
          <div className="flex ml-9 font-bold text-2xl "> 40% </div>
        </div>
        <div className="flex text-lg pt-8 pl-5 font-semibold">
            Tap to add your About Info ( 2/5 was Completed)
        </div>
        <div className="flex text-lg pt-2 pl-5 mr-12">
            You can see more relevant search results, feed updates, and profile views by building your profile.
        </div>
        <div className="flex w-80 h-8 rounded-xl ml-16 mt-6 bg-blue-500 justify-center text-white font-semibold">
            <button >
                Complete your profile
            </button>
        </div>
        </div>
    </div>
    );
}

export default CypWidget;