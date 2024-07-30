import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { WelcomeIcon } from './icons';
const Gallary = () => {
    const slider = [
        { id: 1, img: '/gallary/1.jpg' },
        { id: 2, img: '/gallary/2.jpg' },
        { id: 3, img: '/gallary/3.jpg' },
        { id: 4, img: '/gallary/4.jpg' },
        { id: 5, img: '/gallary/5.jpg' },
        { id: 6, img: '/gallary/6.jpg' },
    ]

    return (
        <section className='p-container pb-20'>
            <div className='space-y-10'>
                <div className='flex flex-col items-center gap-3'>
                    <p className='text-center font-semibold text-3xl'>
                        Gallery
                    </p>
                    <WelcomeIcon className='w-56' />
                </div>
                <div>
                    <Marquee>
                        {slider.map((item) => (
                            <div key={item.id} className=' mx-4 '>
                                <div className=' w-80 h-96'>
                                    <Image
                                        src={item.img}
                                        alt=''
                                        className='w-full h-full object-cover'
                                        height={900}
                                        width={900}
                                    />
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

export default Gallary