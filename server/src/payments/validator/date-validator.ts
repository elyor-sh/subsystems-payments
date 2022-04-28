import {Injectable} from "@nestjs/common";
import {ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface} from "class-validator";

@ValidatorConstraint({ name: 'ExpDateValidation', async: false })
@Injectable()
export class ExpDateValidation implements ValidatorConstraintInterface {
    constructor() {}

    validate(data: string) {
        console.log(data)
        const regex = new RegExp(`^(0[1-9]|1[0-2])\\/(([2-9]{4})$)`)
        return regex.test(data)
    }

    defaultMessage(args: ValidationArguments) {
        return `ExpDate не валидный`;
    }
}