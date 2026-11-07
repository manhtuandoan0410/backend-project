export type Condition = {
    name: string;
    causes: string;
    symptoms: string;
    treatment: string;
};

export type NearbyCare = {
    name: string;
    address: string;
    phoneNumber?: string; //phone number is usually started with 0, so it has to be string
};