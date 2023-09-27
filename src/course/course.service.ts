import { Injectable } from "@nestjs/common";
import { Course, CourseDocument } from '../course/schemas/course.schema';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";



@Injectable({})
export class courseService {

   constructor(@InjectModel(Course.name)
   private readonly courseModel: Model<CourseDocument>) { }

   // function to create a new entry in DB

    createCourse(course: Course): Promise<Course> {
      const newCourse = new this.courseModel(course)
      return newCourse.save()
   }


   // function to receive all data from DB.

    getCourses() : Promise < Course[] > {
         return this.courseModel.find().exec();
      }

   // function to receive data by Id.

    getCourseById(id):  Promise<Course> {
      return this.courseModel.findById(id);
   }



   // function to update a data entry in DB.
    updateCourse(id, data): Promise<Course> {
      return this.courseModel.findByIdAndUpdate(id, data, { new: true })
   }


   //function to delete an entry in DB.
    deleteCourse(id):  Promise<Course> {
      return this.courseModel.findByIdAndDelete(id)
   }

}