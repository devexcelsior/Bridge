import Route from '@ember/routing/route';

export default class CustomersRoute extends Route {
    // log to the console when the route is activated
    activate() {
        console.log('Customers route activated');
    }

    // TO DO: setup a service layer to have granular control over the data
    model() {
        return fetch('http://localhost:3000/customers')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return data;
            });
    }





}
