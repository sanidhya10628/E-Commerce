import React from 'react'
import Link from 'next/link';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
const canceled = () => {
    return (
        <div className='cancel-wrapper'>
            <div className='cancel'>
                <p className='icon'>
                    <BsFillExclamationTriangleFill />
                </p>
                <h2>Transaction Failed</h2>

                <Link href="/">
                    <button type='button' width="300px" className='btn'>Back to Home Page</button>
                </Link>
            </div>
        </div>
    )
}

export default canceled