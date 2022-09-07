import axios from "axios"



export const getLocation = () => {
  let country_name;
  axios.get('https://ipapi.co/json/') 
  .then((res)=>{
    country_name = res.data.country_name
  })
  .catch((err)=> console.log(err))
  return country_name
}
