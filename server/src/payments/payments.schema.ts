import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PaymentsDocument = Payments & Document;

@Schema()
export class Payments {
    @Prop({type: Number, isRequired: true})
    CardNumber: number;

    @Prop({type: String, isRequired: true})
    ExpDate: string;

    @Prop({type: Number, isRequired: true})
    Cvv: number;

    @Prop({type: Number, isRequired: true})
    Amount: number;
}

export const PaymentsSchema = SchemaFactory.createForClass(Payments);