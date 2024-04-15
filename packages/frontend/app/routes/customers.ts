import Route from '@ember/routing/route';

export default class CustomersRoute extends Route {
    // log to the console when the route is activated
    activate() {
        console.log('Customers route activated');
    }

    // TO DO: setup a service layer to have granular control over the data
    // import Service from '@ember/service';
    // import { inject as service } from '@ember/service';

    // export default class CustomersService extends Service {
    //   customers = null;

    //   async loadCustomers() {
    //     if (!this.customers) {
    //       const response = await fetch('/api/customers');
    //       const data = await response.json();
    //       this.customers = data;
    //     }

    //     return this.customers;
    //   }
    // }
    //
    //  also setup .env config for the API URL
    //
    // import Route from '@ember/routing/route';
    // import { inject as service } from '@ember/service';
    // import CustomersService from 'your-app/services/customers';

    // export default class CustomersRoute extends Route {
    //   @service customersService: CustomersService;

    //   model() {
    //     return this.customersService.loadCustomers();
    //   }
    // }
    model() {
        return fetch('http://localhost:3000/api/customers')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return data;
            });
    }





}
