import React, { useContext } from 'react'
import { AppContext } from './Context/AppContext'

const Pagination = () => {
    const { page, totalpages, pageHandal } = useContext(AppContext)
    return (
        <div className='w-full bottom-0 m-0 p-0 fixed bg-slate-50 shadow-lg flex items-center justify-center h-[40px] mb-1'>
            <div className='flex items-center justify-between w-[48%]'>
                <div className='space-x-5'>
                    {
                        page > 1 && <button className='bg-[#DFF5FF] px-2 shadow-lg font-semibold rounded-sm' onClick={() => pageHandal(page - 1)}>Previous</button>
                    }
                    {
                        page < totalpages && <button className='bg-[#DFF5FF] px-2 shadow-lg font-semibold rounded-sm' onClick={() => pageHandal(page + 1)}>Next</button>
                    }
                </div>
                <p>
                    page {page} of {totalpages}
                </p>
            </div>
        </div >
    )
}

export default Pagination
