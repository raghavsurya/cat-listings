import React from 'react';

export type CatType = {
    id: string,
    url: string,
    subId: string,
    favouriteId?: string,
    createdAt: string,
    originalFilename: string,
    isFavourite: boolean,
    votes: number,
    upvotes: number,
    downvotes: number
}
export type CatsType = {
    data: CatType[] | undefined
}

