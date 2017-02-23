import {Supertype, supertypeClass, property} from '../../index';
import {Customer} from './Customer';
import {Account} from './Account';

@supertypeClass
export class Role extends Supertype {

    constructor (customer, account, relationship) {
        super();
        this.customer = customer;
        this.account = account;
        if (relationship)
            this.relationship = relationship;
        this.setDirty();
    };

    @property()
    relationship: string = 'primary';

    @property()
    customer: Customer;

    @property()
    account: {type: Account}
}
