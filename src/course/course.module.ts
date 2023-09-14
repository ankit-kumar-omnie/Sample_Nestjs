import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { courseController } from "./course.controller";
import { courseService } from "./course.service";
import { Course, CourseSchema } from "src/course/schemas/course.schema";



@Module({
    imports: [MongooseModule.forFeature([{
        name: Course.name , schema: CourseSchema}])],
    controllers: [courseController],
    providers: [courseService],
})
export class courseModule { }
 