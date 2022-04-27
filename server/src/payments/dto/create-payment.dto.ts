import {Contains, IsInt, IsNumber, IsString, Length, Max, Min, Validate} from "class-validator";
import {ExpDateValidation} from "../validator/date-validator";

export class CreatePaymentDto {

    @IsInt({message: `Номер карты должен быть целым числом`})
    @Min(1000000000000000, {message: `Длина номера карты должна быть 16 цифр`})
    @Max(9999999999999999, {message: `Длина номера карты должна быть 16 цифр`})
    CardNumber: number;

    @Length(7, 7, {message: `Длина срока карты должна быть 6 цифр`})
    @IsString({message: `ExpDate должно быть строкой!`})
    @Contains('/', {message: 'ExpDate должно содержать /'})
    @Validate(ExpDateValidation)
    ExpDate: string;

    @IsInt({message: `CVV карты должен быть целым числом`})
    @Min(100)
    @Max(999)
    Cvv: number;

    @Min(1, {message: `Минимальная цена 1`})
    @IsNumber({}, {message: `Цена должно быть числой`})
    Amount: number;
}