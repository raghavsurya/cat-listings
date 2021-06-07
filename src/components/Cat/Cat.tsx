import React, {useState} from 'react';
import {favouriteCat, unfavouriteCat} from '../../network/favourite.service';
import {voteCat, unvoteCat} from '../../network/vote.service';
interface CatProps {
    imgSrc: string,
    imageId: string,
    isFavourite: boolean,
    favouriteId?: string,
    votes: number,
    upvotes: number,
    downvotes: number
}

const Cat: React.FC<CatProps> = ({ imgSrc, imageId, isFavourite, favouriteId, votes, upvotes, downvotes }: CatProps) => {
    console.log(isFavourite)
    const [favourite, setFavourite] = useState(isFavourite);
    const [vote, setVote] = useState(votes);
    const [upvoteCount, setUpvotes] = useState(upvotes);
    const [downvoteCount, setDownvotes] = useState(downvotes);
    const fillFavouriteSvg = favourite ? "#FF69B4": "none";
    const handleFavouriteSelection = async() => {
        const updatedFav = !favourite;
        setFavourite(!favourite);
        //Optimistic update
        if(updatedFav === true) {
            await favouriteCat(imageId);
        } else {
            console.log(favouriteId)
            console.log("Hey")
            if(favouriteId !== undefined) {
                console.log(favouriteId)
                await unfavouriteCat(favouriteId);
            }
        }
    }

    const handleVoting = async(isUpVote: boolean) => {
        //Optimistic update
        if(isUpVote === true) {
            await voteCat(imageId);
        } else {
            await unvoteCat(imageId);
        }
    }

    return (
        <div className="lg:w-1/4 w-full lg:pr-3 mt-3">
            <div className="bg-gray-100 rounded-xl relative">
                <img src={imgSrc} alt="" className="object-scale h-64 w-full" />
                
                <div className="p-6">
                    <button onClick={() => handleFavouriteSelection()} role="favourite" className="hover:bg-gray-400 ml-4 font-bold py-2 px-4 rounded inline-flex object-center place-self-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" role={fillFavouriteSvg} fill={fillFavouriteSvg} viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                    <button onClick={() => { setUpvotes(upvoteCount + 1); setVote(upvoteCount - downvoteCount); handleVoting(true) }} role="upvote"  className="hover:bg-gray-400 ml-4 font-bold py-2 px-4 rounded inline-flex object-center place-self-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#7CFC00" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <span className="ml-1">{upvoteCount}</span>
                    </button>
                    <button onClick={() => { setDownvotes(downvoteCount + 1); setVote(upvoteCount - downvoteCount); handleVoting(false)}} role="downvote" className="hover:bg-gray-400 ml-4 font-bold py-2 px-4 rounded inline-flex object-center place-self-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#EE4B2B" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
                        </svg>
                        <span className="ml-1">{downvoteCount}</span>
                    </button>

                    <div className="mt-4">
                       <div className="flex justify-left">Score: {upvoteCount - downvoteCount}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cat;