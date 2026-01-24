type BusinessType = {
    _id: string;
    name: string;
    email: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    zipcode: string;
    rating: Number;
    imageMain: string;
    imageFirst: string;
    imageSecond: string;
    imageThird: string;
    subscriptionPlan: string;
    paymentDate: Date;
    subscriptionEndDate: Date;
    autoRenew: Boolean;
    paymentProvider: string;
    paymentId: string;
    status: string
}