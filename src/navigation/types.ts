export type AuthStackParamList = {
    Login: undefined,
    Register: undefined,
};

export type BottomTabParamList = {
    Feed: undefined,
    Search: undefined,
    Notifications: undefined,
};

export type DrawerParamList = {
    Home: undefined,
    Profile: undefined,
    Settings: undefined,
};

export type FeedStackParamList = {
    Home: undefined,
    Search: undefined,
    Details: {
        id: number; 
        name: string
    }
}