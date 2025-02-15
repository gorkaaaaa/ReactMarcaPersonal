const apiKeyGiphy="NP5bKFKEXVWWXlteeJ43SpSoi77VL7VT"

export function getCount(keyword){

    return fetch(apiURL)
        .then(response=>response.json())
        .then(response=>{
            const {data}=response
            const count=data
            return count
        })
}
