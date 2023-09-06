
const BASE_URL = "https://api.websitecarbon.com/site?url=";

export const CarbonAPI = (url) => {

    console.log(encodeURIComponent(url))
    return(

        fetch(`${BASE_URL}${encodeURIComponent(url)}`)
            .then((response) => {
                if(!response || !response.ok) {
                    throw new Error("La petición no es correcta")
                }
                return response.json()
            })
            .catch((err)=>{
                console.log(err);
                return null;
            })
    )
}
