class CustomerService {

    async getLatestCustomer() {

        let result = 
        {
            "id": 1,
            "firstName": "XERRORTed",
            "lastName": "James",
            "profileImage": "https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg",
            "gender": "male",
            "address": "1234 Anywhere St.",
            "city": " Phoenix ",
            "state": {
                "abbreviation": "AZ",
                "name": "Arizona"
            },
            "orders": [
                { "productName": "Basketball", "itemCost": 7.99 },
                { "productName": "Shoes", "itemCost": 199.99 }
            ],
            "latitude": 33.299,
            "longitude": -111.963
        };

        const url = `${process.env.CrmUrl}:${process.env.CrmPort}/api/customers/1`;
        const response = await fetch(url, {
            method: "GET",
            headers: { Accept: "application/json" }
        })

        console.log (`Received customers with status code ${response.status}`);

        if (response.status === 200) {
            const json = await response.json();
            result = json;
        }
        

        return result;
    }
}

module.exports.CustomerService = CustomerService;