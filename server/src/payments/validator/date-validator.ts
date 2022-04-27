import {Injectable} from "@nestjs/common";
import {ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface} from "class-validator";

@ValidatorConstraint({ name: 'ExpDateValidation', async: false })
@Injectable()
export class ExpDateValidation implements ValidatorConstraintInterface {
    constructor() {}

    validate(data: string) {
        const regex = new RegExp(`(0[1-9]|10|11|12)/20[0-9]{2}$`)
        return regex.test(data)
    }

    defaultMessage(args: ValidationArguments) {
        return `ExpDate не валидный`;
    }
}