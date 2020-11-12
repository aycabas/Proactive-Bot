class CustomerService {

    getLatestCustomer() {
        return {
            "id": 1,
            "firstName": "Ted",
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
    }
}

module.exports.CustomerService = CustomerService;