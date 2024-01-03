export const getGifs= async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9fNLWDsmskFKmsDUiSVtBDzI1bOiw2j3&q=${category}`
    const respone = await fetch(url);
    const {data} = await respone.json();
    const gifs = data.map(img => ({
      id: img.id,
      title:img.title,
      url: img.images.downsized_medium.url
    }))
    console.log(gifs);
    return gifs;
    
  }