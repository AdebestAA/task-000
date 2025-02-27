import {  typeOption } from "@/types"
import { FaStarOfLife } from "react-icons/fa";


const institutionNames:typeOption[] = [
    {
        id:1,
        value:"WESOnline",
    },
    {
        id:2,
        value:"NameIt",
    }
] 


const areaOfInterest:typeOption[] = [
    {
        id:1,
        value:"Business and Management"
    },
    {
        id:2,
        value:"Medical organizations"
    }
]
const formcontainerDiv = "flex flex-col py-2"
const labelStyle = "flex items-center font-semibold py-[2px] "
const stylesForSelect = "px-[2px] border-borderColor rounded-sm py-[6px] border-[1px] "

const Form = () => {



  return (
    <>
    <form action="">
        {/* NAME OF INSTITUTION */}
        <div className={formcontainerDiv}>
        <label htmlFor="" className={labelStyle}>Name of institution <FaStarOfLife  className="w-[0.5rem] text-red ml-2"/></label>
        <select name="" id="" className={stylesForSelect}>
            {institutionNames.map((item,_)=>{
                return (
                    <option className=" " key={item.id} value={item.value}>{item.value}</option>
                )
            })}
        </select>
        </div>
{/* LEVEL OF JOURNEY */}
<div className={formcontainerDiv}>
<label htmlFor="" className={labelStyle}>Where are you on your journey? <FaStarOfLife  className="w-[0.5rem] text-red ml-2"/></label>
<select name="" id="" className={stylesForSelect}>
    <option value="">100</option>
    <option value="">200</option>
</select>
</div>

{/* FIELD OF STUDY AND GPA */}

<div className="flex justify-between">
    <aside className="w-[45%]">
        <label htmlFor="" className={labelStyle}>Field of Study <FaStarOfLife  className="w-[0.5rem] text-red ml-2"/></label>
        <input type="text" placeholder="chemistry" className="border-borderColor border-[1px] rounded-md w-[90%] py-[2px] px-[8px]" />
    </aside>
    <aside className="w-[45%]">
        <label htmlFor="" className={labelStyle}>GPA <FaStarOfLife  className="w-[0.5rem] text-red ml-2"/></label>
        <input type="text" placeholder="_ _ _ _ _" className="border-borderColor border-[1px] rounded-md w-[90%] py-[2px] px-[8px]" />
    </aside>
</div>
{/* AREAS OF INTEREST */}
<div className={formcontainerDiv}>
    <label htmlFor="" className={labelStyle}>What areas interest you most? <FaStarOfLife  className="w-[0.5rem] text-red ml-2"/></label>
    <select name="" id="" className={stylesForSelect}>
        {areaOfInterest.map((item,_)=>{
            return (
                <option key={item.id} value={item.value}>{item.value}</option>
            )
        })}
    </select>
</div>

{/* Footer */}
<footer className="flex justify-between items-center">
    <span className="font-bold ">Skip for now</span>
    <button className="bg-primary text-white sm:w-[222px] w-[150px] sm:h-[48px] h-[38px] rounded-lg">Continue </button>
</footer>
        </form>
    </>
  )
}

export default Form
