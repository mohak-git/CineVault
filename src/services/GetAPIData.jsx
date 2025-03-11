import { getMovieDataByID, getMovieDataByName } from "../Api/APIAxios";

export const getIDs = async (title) => {
  try {
    const searchQueryResponse = await getMovieDataByName(title);
    const fetchedIDs = Array(searchQueryResponse.data.Search)[0].map(
      (el) => el.imdbID
    );
    return GetAPIData(fetchedIDs);
  } catch (error) {
    console.log(error);
  }
};

const GetAPIData = async (IDsList) => {
  try {
    const fetchedFinalRes = IDsList.map(async (id) => {
      const res = await getMovieDataByID(id);
      return res.data;
    });

    const fetchedFinalData = await Promise.all(fetchedFinalRes);
    return fetchedFinalData;
  } catch (error) {
    console.log(error);
  }
};

export default GetAPIData;
