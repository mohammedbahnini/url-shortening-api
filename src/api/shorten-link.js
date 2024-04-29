import axios from "axios";


const api_url = "https://api.tinyurl.com/create?api_token=FTY9BFVWAvYSs78dubi71GzwuqtwK6H0Y3gDfp2v1oOXcC143IE6YH1oCC4a";

export default async function getShortUrl(url) {
  try {
    const response = await axios.post(api_url  , { url });

    //console.log(response.data.data.tiny_url);
    return { 
      status: true, 
      url : response.data.data.url ,
      shortenUrl :  response.data.data.tiny_url
    };
  } 
  catch (error) {
    console.log(error);
    return { 
      status : false , 
      error , 
      message : 'An error occured while processing the link'
    }
  }
}