import React from 'react'

const Company = () => {
    return (
        <div className="py-12 px-5">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-7xl mx-auto py-4 items-center">

                {/* Left: Image */}
                <div className="">
                    <img
                        src="../about/img1.png"
                        alt="Food"
                        className="w-full h-full object-cover "
                    />
                </div>

                {/* You can add more content or layout here */}
                <div className='space-y-6'>
                    <div className='space-y-5'>
                        <h3 className="text-3xl font-semibold text-black mb-3">About Our Company</h3>
                        <p className="text-gray-600 ">
                            Massa a of est sit commodo convallis auctor as aliquet ready to ready work any more sem. Massa a of est sit commodo any convallis. to ready works at any more sem of est sit commodo any convallis.
                        </p>
                        <p className="text-gray-600">
                            Massa a of est sit commodo convallis auctor as aliquet ready to ready work more sem. Massa a of est sit commodo any convallis.
                        </p>
                    </div>

                    <button className="text-[#E9004B] border-2 border-[#E9004B] px-6 py-2 rounded-full font-semibold hover:bg-[#E9004B] hover:text-white transition duration-300">
                        See All Cities
                    </button>

                </div>
            </div>
        </div>

    )
}

export default Company