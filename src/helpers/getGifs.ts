import fetch from "node-fetch";

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=7wWTxuScqyBc2kWsUE5cJ03d1HIoezUT&q=${category}&limit=10`;
  const { data } = (await (await fetch(url)).json()) as GifsResult;

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
