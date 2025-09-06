export interface ApplicationFormData {
    fullName: string;
    phoneNumber: string;
    city: string; // default = Casablanca, pre-filled
    vehicleType: 'moto' | 'voiture' | 'vélo';
    availability: 'full-time' | 'part-time';
}

export interface Language {
    code: string;
    name: string;
}

export interface FAQ {
    question: string;
    answer: string;
}