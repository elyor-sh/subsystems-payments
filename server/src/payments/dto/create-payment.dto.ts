import { IsInt, IsNumber, IsString, Length} from "class-validator";

export class CreatePaymentDto {

    @IsInt({message: `Номер карты должен быть целым числом`})
    @Length(16, 16, {message: `Длина номера карты должна быть 16 цифр`})
    CardNumber: number;

    @Length(6, 6, {message: `Длина срока карты должна быть 6 цифр`})
    @IsString({message: `ExpDate должно быть строкой!`})
    ExpDate: string;

    @IsInt({message: `CVV карты должен быть целым числом`})
    @Length(3, 3, {message: `Длина CVV карты должна быть 3 цифра`})
    Cvv: number;

    @IsNumber({}, {message: `Цена должно быть числой`})
    Amount: number;
}