
export type RootTabParamList = {
    LoginScene: undefined;
    HomeScene: undefined;
    AddBusinessScene: undefined;
    SearchBusinessScene: undefined;
    BrowseBusinessScene: undefined;
    ViewBusinessScene: {
        businessId: string;
    };
    EditBusinessScene: { businessId: string};
    EditBusinessImageScene: { businessId: string};
};