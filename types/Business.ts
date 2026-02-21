export interface Business {
    _id: string,
    name: string,
    email: string,
    phone: string,
    state: string,
    city: string,
    street: string,
    zipcode: string,
    imageMain: string,
    imageFirst: string,
    imageSecond: string,
    imageThird: string,
    autoRenew: boolean,
    paymentProvider: string,
    status: string,
    subscriptionPlan: string,
}

export interface BusinessImage{
    _id: string,
    //todo
}