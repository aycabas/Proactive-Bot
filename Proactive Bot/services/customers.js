class CustomerService {

    async getLatestCustomer() {

        let result;

        try {
            const url = `${process.env.CrmUrl}:${process.env.CrmPort}/api/customers/1`;
            const response = await fetch(url, {
                method: "GET",
                headers: { Accept: "application/json" }
            })
    
            console.log (`Received customers with status code ${response.status}`);
    
            if (response.status !== 200) {
                throw `Response error ${response.status}: ${response.statusText}`;
            }
            if (response.size <= 0) {
                throw `Empty response`;
            }

            result = await response.json();
    
        }
        catch (error) {
            result = 
            {
                "id": 1,
                "firstName": `Error fetching customer data`,
                "lastName": "",
                "gender": "",
                "address": error,
                "city": "  ",
                "state": {
                    "abbreviation": "",
                    "name": ""
                },
                "orders": [],
                "latitude": 0,
                "longitude": 0
            };
        }
        
        return result;
    }
}

module.exports.CustomerService = CustomerService;