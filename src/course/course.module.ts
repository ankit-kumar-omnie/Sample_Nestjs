import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import config from '../config/connect.key';
import { courseController } from "./course.controller";
import { courseService } from "./course.service";
import { CourseSchema } from "src/schemas/course.schema";



@Module({
    imports: [MongooseModule.forRoot(config.mongoURI),
        MongooseModule.forFeature([{name:'user',schema:CourseSchema}])],
    controllers: [courseController],
    providers: [courseService],
})
export class courseModule { }