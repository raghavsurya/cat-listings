import React from 'react'
import createAxiosInstance from './axios.config';
import { CatType } from '../types/Cats';
import { Favourite } from '../types/Favourite';

const axiosInstance = createAxiosInstance();
const limit = 10000;

const getCats = async () => {
  const finalResponse = await axiosInstance.get('/images?limit=30').then((res) => {
    return res.data;
  }).then(async (data) => {
    return await getFavourites(data);
  }).then(async (favouritesData) => {
    return await getVotes(favouritesData)
  }).catch((err) => {
      console.error(err)
      return new Error(err.message);
  }) 
  return finalResponse;
  };
  
const getFavourites = async(catsResponse: CatType[]) => {
    const favouritesResponse = await axiosInstance.get('/favourites?limit=10000');
    let catsWithFavourites: CatType[] = []
    catsResponse.map((item: CatType) => {
      const predicateQuery = favouritesResponse.data.filter((favouriteItem: Favourite) => favouriteItem.image_id == item.id)
      if (predicateQuery.length > 0) {
        catsWithFavourites.push(Object.assign({}, item, { isFavourite: true , favouriteId: predicateQuery[0].id}));
      } else {
        catsWithFavourites.push(Object.assign({}, item, { isFavourite: false }));
      }
    })
    return catsWithFavourites;
}

const getVotes = async(catsWithFavourites: CatType[]) => {
  const votesResponse = await axiosInstance.get('/votes?limit=10000');
  console.log(votesResponse)
    let catsWithFavouritesAndVotes: CatType[] = []
    catsWithFavourites.map((item: CatType) => {
      const upvoteItems = votesResponse.data.filter((voteItem: any) => voteItem.image_id == item.id && voteItem.value === 1)
      const downvoteItems = votesResponse.data.filter((voteItem: any) => voteItem.image_id == item.id && voteItem.value === 0)
      const upvoteItemsCount = upvoteItems.length > 0 ? upvoteItems.length : 0;
      const downvoteItemsCount = downvoteItems.length > 0 ? downvoteItems.length : 0;
      const totalVoteCount = upvoteItemsCount - downvoteItemsCount;
      catsWithFavouritesAndVotes.push(Object.assign({}, item, { votes: totalVoteCount, upvotes: upvoteItemsCount, downvotes: downvoteItemsCount}));
    })
    return catsWithFavouritesAndVotes;
 
}

export default getCats;