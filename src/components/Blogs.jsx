import React, { useContext } from 'react'
import { AppContext } from './Context/AppContext'

const Blogs = () => {
    const { post, loading } = useContext(AppContext)
    console.log(post)
    return (
        <div className='flex items-center justify-center flex-col '>
            {
                loading ?
                    (
                        <div className='w-full flex items-center justify-center'>
                            <span className=' text-xl font-bold'>Loading...</span>
                        </div>
                    )

                    :

                    (
                        post.length === 0 ?
                            (
                                <div className='w-full'>
                                    <p className='text-2xl font-bold'>No Post Found</p>
                                </div>
                            )

                            :

                            (
                                post.map((post) => (
                                    <div key={post.id} className='mb-5 w-[700px] space-y-3 border border-b p-4 shadow-md'>
                                        <p className='font-bold text-md text-xl'>{post.title}</p>
                                        <p className='text-md'>
                                            By <span className='underline font-semibold'>{post.author}</span> on <span>{post.category}</span>
                                        </p>
                                        <p>On <span>{post.date}</span></p>
                                        <p className='text-justify'>{post.content}</p>
                                        <div>
                                            {
                                                post.tags.map((tag, index) => {
                                                    return <span className='mr-2 text-blue-800 underline' key={index}>{`#${tag}`}</span>
                                                })
                                            }
                                        </div>
                                    </div>
                                ))
                            )
                    )
            }
        </div>
    )
}

export default Blogs
