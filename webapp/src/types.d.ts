export interface ITag {
    id: number;
    name: string;
}

export interface IPhoto {
    id: number;
    owner: number;
    file: string;
    description: string;
}

export interface IOwner {
    id: number;
    is_superuser: boolean;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_staff: boolean;
    is_active: boolean;

}
export interface ICampGroundDetail {
    id: number;
    name: string;
    address: string;
    price: number;
    tags: ITag[];
    photos: IPhoto[];
    owner: IOwner;
    check_in: string;
    check_out: string;
    ratings: number;
    description: string;
    created_at: string;
    updated_at: string;
    pet_friendly: boolean;
    ev_friendly: boolean;
}

export interface IUploadCampGroundVariables {
    name: string;
    address: string;
    description: string;
    price: number;
    files: FileList;
    check_in: string;
    check_out: string;
    ratings: number;
    pet_friendly: boolean;
    ev_friendly: boolean;
    tags: number[];
}


export interface IUploadCampGroundSuccess {
    id: number;
    name: string;
    address: string;
    description: string;
    price: number;
    tags: ITag[];
    photos: IPhoto[];
    owner: IOwner
    check_in: string;
    check_out: string;
    ratings: number;
    pet_friendly: boolean;
    ev_friendly: boolean;
    created_at: string;
    updated_at: string;

}

export interface IUploadCampGroundError {
    message: string;

}


// Auth
export interface ISignUpVariable {
    email: string;
    password1: string;
    password2: string;
    username: string;
}

export interface ISignUpForm {
    email: string;
    password1: string;
    password2: string;
    username: string;
}

export interface ISignUpSuccess {
    email: string;
    password1: string;
    password2: string;
    username: string;
}