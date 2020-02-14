import axios from 'axios';

export const fetchImages = async (page = 1, query = 'kitten') => {
  try {
    const data = await axios.get(
      `https://pixabay.com/api/?key=1138718-ffd3bfee4e990967f042bf805&q=${query}&image_type=photo&pretty=true&per_page=12&page=${page}`
    );
    return data.data.hits;
  } catch (error) {
		console.log(error);
		throw new Error(error);
	}
};
