import React from 'react';

import {
    useQuery,
  } from 'react-query'

import getCats from '../../network/getCats.service';
import { CatType } from '../../types/Cats';
import Cat from '../Cat/Cat';


function Cats() {
    // Queries
    const { isLoading, data} = useQuery(['data'], getCats)
  
    if (isLoading) {
        return <span>Loading...</span>
      }
      if (data instanceof Error) {
        return <span>Error: {data && data.message}</span>
      }
      if(typeof data === 'undefined' || (data instanceof Array && data?.length === 0)) {
        return (
            <div className="relative bg-gray-300 h-24 w-full self-auto opacity-20 opacity-80">
            <div className="absolute inset-0 text-center shadow-lg font-extrabold justify-self-center">No cats found</div>
          </div>
      )
      }
    return (
        <div className="container mx-auto flex flex-wrap items-start my-16 justify-center">
            {data?.map(cat => (
                <Cat key={cat.id} 
                imgSrc={cat.url} 
                imageId={cat.id} 
                isFavourite={cat.isFavourite} 
                favouriteId={cat.favouriteId}
                votes={cat.votes}
                upvotes={cat.upvotes}
                downvotes={cat.downvotes}
                />
            ))}
            
        </div>
    );
}

export default React.memo(Cats);
