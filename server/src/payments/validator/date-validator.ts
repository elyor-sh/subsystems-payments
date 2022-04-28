import {Injectable} from "@nestjs/common";
import {ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface} from "class-validator";

@ValidatorConstraint({ name: 'ExpDateValidation', async: false })
@Injectable()
export class ExpDateValidation implements ValidatorConstraintInterface {
    constructor() {}

    validate(data: string) {

        const regex = new RegExp(`^(0[1-9]|1[0-2])\\/(([0-9]{4})$)`)

        const year = +data.split('/')[1]

        if(!year){
            return false
        }

        if(year < 2022){
            return false
        }

        return regex.test(data)
    }

    defaultMessage(args: ValidationArguments) {
        return `ExpDate не валидный`;
    }
}