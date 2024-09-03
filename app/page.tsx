import Image from "next/image";

export default function Home() {
  return (
    <>

      <main className="w-full flex flex-col gap-y-6 sm:gap-y-8 bg-[#fcfbfe] p-4 lg:p-6 mb-12">

        <div className="flex flex-col w-full gap-y-1.5">
          <h1 className="font-bold text-xl text-[#201E1E]">Welcome Susan,</h1>
          <p className=" AeonikRegular text-sm text-[#344054]">Get ready to complete your research processes on Zadwax</p>
        </div>

        <div className="w-full bg-display1 px-6 py-10 flex flex-col gap-y-1.5 rounded-xl">
          <p className="text-xs font-medium text-[#101828]">Welcome to the cool kids club</p>
          <h1 className="w-[90%] font-medium text-sm sm:text-xl text-[#4A24A1]">The new way designers revolutionize their work. See how others are using Zadwax to accelerate their design process.</h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">

          {/* box 2 */}
          <div className="w-full sm:w-1/2 flex flex-col gap-y-3.5 p-3 rounded-xl border border-[#EAECF0]">

            {/* heading */}
            <div className="flex items-center justify-center pb-4 border-b border-[#EAECF0]">

              <div className="flex flex-col w-full">
                <h1 className="font-bold text-[#201E1E]">Getting Started</h1>
                <p className=" AeonikRegular text-xs text-[#344054]">Three simple steps to launch your first project</p>
              </div>

              <button aria-expanded="true" aria-controls="sidebar" className="w-fit bg-[#6832E3] rounded-lg cursor-pointer focus-none">
                <p className=" AeonikRegular text-sm text-[#FFFFFF] whitespace-nowrap px-3 py-2">Create project</p>
              </button>

            </div>

            <div className="flex flex-col w-full">
              <h1 className="text-[13px] font-semibold text-[#344054]">Step 1: Create your project</h1>
              <p className=" AeonikRegular text-xs text-[#667085]">Give your project a name, add a description and your goals.</p>
            </div>

            <div className="flex flex-col w-full">
              <h1 className="text-[13px] font-semibold text-[#344054]">Step 2: Invite your teammates</h1>
              <p className=" AeonikRegular text-xs text-[#667085]">Research is better together, Invite your colleagues.</p>
            </div>

            <div className="flex flex-col w-full">
              <h1 className="text-[13px] font-semibold text-[#344054]">Step 3: Setup your research process</h1>
              <p className=" AeonikRegular text-xs text-[#667085]">Add the processes that are specific to this project.</p>
            </div>



          </div>


          <div className="w-full sm:w-1/2 flex flex-col gap-y-3.5 p-3 rounded-xl border border-[#EAECF0]">

            {/* heading */}
            <div className="flex items-center justify-center pb-4 border-b border-[#EAECF0]">

              <div className="flex flex-col w-full">
                <h1 className="font-bold text-[#201E1E]">Research Tips and Tricks</h1>
                <p className=" AeonikRegular text-xs text-[#344054]">Three simple steps to launch your first project</p>
              </div>

            </div>

            <div className="flex flex-col w-full">
              <h1 className="text-[13px] font-semibold text-[#344054]">Don’t start from scratch, use a template</h1>
              <p className=" AeonikRegular text-xs text-[#667085]">Begin with field-tested frameworks adaptable to your research.</p>
            </div>

            <div className="flex flex-col w-full">
              <h1 className="text-[13px] font-semibold text-[#344054]">Add steps and set milestones</h1>
              <p className=" AeonikRegular text-xs text-[#667085]">Define key stages and monitor progress from hypothesis to conclusion.</p>
            </div>

            <div className="flex flex-col w-full">
              <h1 className="text-[13px] font-semibold text-[#344054]">Track changes in your documents over time.</h1>
              <p className=" AeonikRegular text-xs text-[#667085]">Capture every revision to ensure data integrity and transparency.</p>
            </div>



          </div>


        </div>

        <div className="w-full flex flex-col gap-y-4">
          <h1 className="font-bold text-[#201E1E]">Resources for you</h1>

          <div className="w-full flex flex-col gap-y-4 gap-x-6 sm:flex-row">

            {/* resource 1 */}
            <div className="flex flex-col gap-y-6 w-full  sm:w-[25%] rounded-lg">

              <Image
                className="w-full relative"
                src="/resources.svg"
                width={0}
                height={0}
                alt="profile image"
                priority
              />

              <div className="flex flex-col gap-y-1 w-full">
                <h1 className="text-[14px] font-semibold text-[#344054]">Academic literature review</h1>
                <p className=" AeonikRegular text-[11px] text-[#667085]">Organize your sources and synthesize information effectively.</p>
              </div>

            </div>

            {/* resource 2 */}
            <div className="flex flex-col gap-y-6 w-full  sm:w-[25%] rounded-lg">

              <Image
                className="w-full relative"
                src="/resources.svg"
                width={0}
                height={0}
                alt="profile image"
                priority
              />

              <div className="flex flex-col gap-y-1 w-full">
                <h1 className="text-[14px] font-semibold text-[#344054]">Data analysis templates</h1>
                <p className=" AeonikRegular text-[11px] text-[#667085]">Streamline patient data collection and analysis for medical research.</p>
              </div>

            </div>

            {/* resource 3 */}
            <div className="flex flex-col gap-y-6 w-full  sm:w-[25%] rounded-lg">

              <Image
                className="w-full relative"
                src="/resources.svg"
                width={0}
                height={0}
                alt="profile image"
                priority
              />

              <div className="flex flex-col gap-y-1 w-full">
                <h1 className="text-[14px] font-semibold text-[#344054]">UX Heuristic template.</h1>
                <p className=" AeonikRegular text-[11px] text-[#667085]">Assess your interface against established usability principles.</p>
              </div>

            </div>

            {/* resource 4 */}
            <div className="flex flex-col gap-y-6 w-full  sm:w-[25%] rounded-lg">

              <Image
                className="w-full relative"
                src="/resources.svg"
                width={0}
                height={0}
                alt="profile image"
                priority
              />

              <div className="flex flex-col gap-y-1 w-full">
                <h1 className="text-[14px] font-semibold text-[#344054]">Affinity mapping template</h1>
                <p className=" AeonikRegular text-[11px] text-[#667085]">Assess your interface against established usability principles.</p>
              </div>

            </div>


          </div>



        </div>

        

      
      </main>
    
    </>
    
  );
}
