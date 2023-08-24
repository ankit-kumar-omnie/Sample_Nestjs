import { Body, Controller, Post, Put , Param, Delete,
     NotFoundException} from "@nestjs/common";
import { courseService } from "./course.service";
import { Get } from "@nestjs/common";
import { Course } from "src/schemas/course.schema";
import { CourseUpdateDto } from "src/course.dto/courseUpdate.dto";


@Controller('course')
export class courseController {

    constructor(private courses: courseService) { }

    @Get('/all')
    getCourse() {
        return this.courses.getCourse();
    }



    @Get(':id')
    async getData (@Param('id') id: string): Promise<Course> {
        const user = await this.courses.getData(id);
        if (!user) {
            throw new NotFoundException('User does not exist!');
        } else {
            return user;
        }
    }



    @Post()
    async createCourse(@Body() courseDto: Course) {
        return this.courses.createCourse(courseDto);
    }


    @Put(':id')
    async updateCourse( 
        @Param('id') id:string , @Body() updateData:CourseUpdateDto)
        {
            return this.courses.updateCourse(id,updateData);
        }


    @Delete(':id')
    async deleteCourse( @Param('id') id:string ) {
        return this.courses.deleteCourse(id);
        }
    

}