import React from 'react'
import UserCard from './UserCard'

const FirstDegree = (props) => {

    const { firstDegree } = props;

    return (
        <div className="py-6 bg-gray-50 rounded-3xl col-span-1">
            <div className="px-6 flex justify-between items-center text-gray-500 font-semibold">
                1st Degree Friends
                <div className="text-gray-400">({firstDegree.length})</div>
            </div>
            <div className="mt-6 mb-2 h-box px-6 overflow-y-scroll">
                {
                    firstDegree?.map((friend, index) => {
                        return (
                            <UserCard key={index} userId={friend} degree={1} />
                        )
                    }
                    )
                }
                {
                    firstDegree.length == 0 &&
                    <div className="flex flex-col justify-center self-center text-gray-500 font-semibold h-full text-center">
                        Get 1st degree connections using any of the implementations!
                    </div>
                }
            </div>
        </div>
    )
}

export default FirstDegree
