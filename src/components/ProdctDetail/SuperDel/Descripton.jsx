import React, { useState } from 'react'
import { CiStar } from "react-icons/ci";
import { useLocation } from 'react-router-dom';

const Descripton = () => {
    const {state}=useLocation()
    if(!state){
        return
        <div></div>
    }
    
      const [desc, setdesc] = useState(true);
  const [addinfo, setaddinfo] = useState(false);
  const [review, setreview] = useState(false);

  const setAdditonalfunc = () => {
    setaddinfo(true);
    setdesc(false);
        setreview(false);

  };
  const reviewfunc = () => {
    setreview(true);
    setdesc(false);
    setaddinfo(false);
  };
  const descfunc = () => {
    setdesc(true);
    setaddinfo(false);
    setreview(false);
  };
  return (
    
    <div className='p-3 sm:p-10'>


         <div className="w-full my-10 ">
        <div className="flex flex-col border-b border-gray-300 gap-5">
          <ul className="flex gap-5 text-sm sm:text-md py-5 font-semibold">
            <li
              className="hover:text-rose-500 transition cursor-pointer"
              onClick={descfunc}
            >
              Descripton
            </li>
            <li
              className="hover:text-rose-500 transition cursor-pointer"
              onClick={() => setAdditonalfunc()}
            >
              Additonal Information
            </li>
            <li
              className="hover:text-rose-500 transition cursor-pointer"
              onClick={() => reviewfunc()}
            >
              Reviews(0)
            </li>
          </ul>
        </div>
        <div className="w-full  py-3 ">
          {desc && (
            // {/* Descripton  */}
            <div>
              <p className="text-md">
                Massa a of est sit commodo convallis auctor as aliquet ready to
                ready works any more sem. Massa a of est sit commodo any
                convallis. Massa a of est sit commodo convallis auctor as
                aliquet ready to ready works any more sem. It’ Massa a of est
                sit commodo any convallis.Massa a of est sit commodo any
                convallis ready to auctor as aliquet.
              </p>
            </div>
          )}
          {addinfo && (
            // {/* Additonal INformation  */}
            <div className="w-full ">
              <div className="flex border border-gray-300  justify-between">
                <span className="w-[20%] text-center font-semibold p-3">
                  Flavour
                </span>
                <div className="w-[80%]  border-l border-gray-300 py-3 text-center ">
                  Milk,chocoleti
                </div>
              </div>
            </div>
          )}
          {review && (
            // {/* reviews  */}
            <div className="">
              <p>There are no reviews yet.</p>
              <div>
                <div className="my-5">
                  <h1 className="font-semibold text-xl font-mono">
                    Be the first to review “Choco Meal”
                  </h1>
                  <p>
                    Your email address will not be published. Required fields
                    are marked*
                  </p>
                </div>
                <div>
                  <p>Your rating *</p>
                  <div className="text-rose-500 text-xl flex "><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></div>
                </div>
                <div className="mt-5">
                  <div>
                    <label htmlFor="" className="block text-sm">
                      Your review *
                    </label>
                    <textarea
                      type="text"
                      className="border rounded-sm w-full h-20 border-gray-300 p-2 focus:outline-none focus:border-rose-400 mt-3"
                    />
                  </div>
                  <div className="flex sm:flex-row flex-col  mt-5 gap-5">
                    <div className=" w-full sm:w-1/2">
                      <label htmlFor="" className="text-sm">
                        Name *
                      </label>
                      <input
                        className="border rounded-sm w-full h-20 border-gray-300 p-2 focus:outline-none focus:border-rose-400 mt-3"
                        type="text"
                      />
                    </div>
                    <div className=" w-full sm:w-1/2">
                      <label htmlFor="">Email *</label>
                      <input
                        className="border rounded-sm w-full h-20 border-gray-300 p-2 focus:outline-none focus:border-rose-400 mt-3"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="flex mt-5 mb-10 items-center gap-2">
                    <input type="checkbox" />
                    <p>
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </p>
                  </div>
                  <div>
                    <button className="px-10 py-2 border bg-rose-500 text-white cursor-pointer rounded-sm font-semibold hover:bg-white hover:text-black transition hover:border-rose-500">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Descripton;