
const BASE_URL = "https://api.websitecarbon.com/site?url=";

export const CarbonAPI = (url) => {
    
    
    return(

        fetch(`${BASE_URL}${url}`)
            .then((response) => {
                if(!response) {
                    throw new Error("La petición no es correcta")
                }
                return response.json()
            })
    )
}
