// import axios from "axios";

// const url = "https://newsapi.org/v2/everything";

// const config = {
//     params: {
//         q: "Technology",
//         apiKey: '826d3102ac1747d4991b30e5f6ca86db'
// }}

// let response = {};
// let error = '';

// axios.get(url, config)
//     .then(res => {
//         response = res.data;
//     })
//     .catch(err => {
//         error = err;
//     })

// export default function handler(req, res) {
//     if(req.method === 'GET')
//         if(error)
//             res.status(404).json(error);
//         else 
//             res.status(200).json(response);
// }