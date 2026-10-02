import React from 'react'
import { BellIcon } from './icons'
import clsx from 'clsx'

const Notification = ({ mode }: { mode: string }) => {
    return (
        <div>
            <button>
                <BellIcon className={clsx('size-5',
                    { 'fill-black': mode == "dark" },
                    { 'fill-white': mode != "dark" }
                )} />
            </button>
        </div>
    )
}

export default Notification