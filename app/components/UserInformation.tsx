'use client'
import React from 'react'
import { useProfileData } from '../profile/profileContext/profileAppContext'
import { useAppContext } from '../context/appContext';

const UserInformation = () => {
    const profileData = useProfileData();
    const context = useAppContext();
    console.log(profileData.userData);

    return (
        <div className='space-y-5'>
            <div>
                <span className='b font-medium'>Name</span> :{" "} <span>{profileData?.userData?.name ? profileData?.userData?.name : '~'}</span>
            </div>
            {
                profileData?.userData?.phone ?
                    <div>
                        <span className='b font-medium'>Phone</span> :{" "} <span>{profileData?.userData?.phone}</span>
                    </div>
                    : <div>
                        <span className='b font-medium'>Phone</span> :{" "} <span>{context?.user?.phoneNumber ? context?.user?.phoneNumber : '~'}</span>
                    </div>
            }
            {profileData?.userData?.type &&
                <div>
                    <span className='b font-medium'>Type </span> :{" "}
                    <span>
                        {profileData?.userData?.type ? profileData?.userData?.type : '~'}
                    </span>
                </div>
            }
            {profileData?.userData?.email &&
                <div>
                    <span className='b font-medium'>Email </span> :{" "}
                    <span>
                        {profileData?.userData?.email ? profileData?.userData?.email : '~'}
                    </span>
                </div>
            }
            {profileData?.userData?.address &&
                <div>
                    <span className='b font-medium'>Address </span> :{" "}
                    <span>
                        {profileData?.userData?.address ? profileData?.userData?.address : '~'}
                    </span>
                </div>
            }
            {profileData?.userData?.city &&
                <div>
                    <span className='b font-medium'>City </span> :{" "}
                    <span>
                        {profileData?.userData?.city ? profileData?.userData?.city : '~'}
                    </span>
                </div>
            }
        </div >
    )
}

export default UserInformation