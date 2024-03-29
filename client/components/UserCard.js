import { BsFillPersonPlusFill, BsFillPersonCheckFill } from 'react-icons/bs'

// generates random number (0 to 9) from userId
const generateNum = (userId) => {
    var len = userId.length, i = 0, h = 0;
    while (i < len) {
        h += userId.charCodeAt(i++);
    }
    return h % 10;
};

const UserCard = (props) => {
    return (
        <div className="bg-white shadow rounded-2xl h-20 mb-4 px-4 w-full flex justify-between items-center">
            <div className="flex items-center">
                <img src={`/users/${generateNum(props.userId)}.png`} className="h-11 mr-3" />
                <div>
                    <div className="text-gray-500 text-xs font-bold">USER ID</div>
                    <div className="text-gray-500 text-sm">{props.userId}</div>
                    {
                        props?.mutualFriends &&
                        <div className="text-gray-400 text-xs">{props.mutualFriends} mutual friends</div>
                    }
                </div>
            </div>
            {
                props.degree === 1
                    ?
                    <div className="flex items-center bg-gray-400 rounded-full text-white py-1 px-2 cursor-pointer">
                        <BsFillPersonCheckFill className="h-4 w-4" />
                    </div>
                    :
                    <div className="flex items-center bg-secondary rounded-full text-white py-1 px-2 cursor-pointer hover:bg-gray-400">
                        <BsFillPersonPlusFill className="h-4 w-4" />
                    </div>
            }

        </div>
    )
}

export default UserCard;