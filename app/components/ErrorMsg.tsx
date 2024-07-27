import React from 'react'

const ErrorMsg = ({ message }: { message: string }) => {
    return (
        <>
            {
                message &&
                <p className='text-red-500 text-sm'>
                    {message}
                </p>
            }
        </>
    )
}

export default ErrorMsg