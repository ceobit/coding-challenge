import { API_URL } from './constants';
import { ConversionRate } from '@coding-challenge/contract';

const fetchRate = async (): Promise<ConversionRate | null> => {
  try {
    const result = await fetch(API_URL);
    return await result.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default fetchRate;
