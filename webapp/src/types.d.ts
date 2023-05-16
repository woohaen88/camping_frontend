
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
    print: number;
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
