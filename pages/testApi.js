const axios = require('axios');

const testApi = () => {
    const onClickHandler = () => {
        axios.get('/api/hello')
        .then((res) => {
            console.log(res.data.name);
        })
    }

    return (
        <div>
            <h2>Making requests</h2>
            <button onClick={onClickHandler}>Clickme</button>
        </div>
    )
}

export default testApi;
