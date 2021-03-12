import axios from 'axios'; 


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses', 
    headers: {
        Authorization: 
        'Bearer E9t-_T7I6uaTX21F-eIn_Ixh-CbaNqt7sE2AOdsZPkbsbzojSy0MKO759zUFqPeqjt5ESI_e00Hm6JcYnLw2jY6RgoTYsQYtxCkehvjgnRVTddRMSxwZAIAi09s_YHYx'
    }
})