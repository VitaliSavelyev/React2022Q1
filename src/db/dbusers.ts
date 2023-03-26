import {IUser} from "../interfaces/user.interface";
import {CountryEnum} from "../enums/country.enum";
import {GenderEnum} from "../enums/gender.enum";

export const users: IUser[] = [
    {
        id: "1",
        name: "Vitali",
        surname: "Savelyev",
        birthday: "12.12.2012",
        country: CountryEnum.BELARUS,
        married: true,
        gender: GenderEnum.MALE,
        photo: ''
    },
]
