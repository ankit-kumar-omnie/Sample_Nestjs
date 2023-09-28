import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type SignupDocument = Signup & Document


@Schema({timestamps: true})
export class Signup {

    @Prop({required: true, unique: true})
    firstname: string;

    @Prop()
    lastname: string;

    @Prop({required:true})
    password: string;

    @Prop()
    email: string;

    @Prop({unique: true})
    mobile_number: number;
}


export const SignupSchema = SchemaFactory.createForClass(Signup)