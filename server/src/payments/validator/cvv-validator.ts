import {Injectable} from "@nestjs/common";
import {ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface} from "class-validator";

@ValidatorConstraint({ name: 'CvvValidation', async: false })
@Injectable()
export class CvvValidation implements ValidatorConstraintInterface {
    constructor() {}

    validate(data: number) {
        return data.toString().length === 3;
    }

    defaultMessage(args: ValidationArguments) {
        return `CVV не валидный`;
    }
}