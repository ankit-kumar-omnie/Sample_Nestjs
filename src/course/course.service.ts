import { Injectable, Param } from "@nestjs/common";
import {Course, CourseDocument} from '../schemas/course.schema';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";


@Injectable({ })
export class courseService { 

    constructor(@InjectModel('user') 
    private readonly userModel: Model<CourseDocument>)
    {}

    // function to create a new entry in DB

     async createCourse(user: Course): Promise<Course>{
        const newCourse = new this.userModel(user)
        return newCourse.save()
     }


     // function to receive data from DB.

     async getCourse() {
        return this.userModel.find({})
        .then((user) => {return user})
        .catch((err) => {console.log(err)})
     }
     

     // function to fetch data by id
   async getData(id: string): Promise<Course> {
      return this.userModel.findOne({ id })
      
   }

     
     // function to update a data entry in DB.
     async updateCourse(id,data): Promise<Course> {
        return this.userModel.findByIdAndUpdate(id,data,{new:true})
     }


     //function to delete an entry in DB.
     async deleteCourse(id){
        return this.userModel.findByIdAndDelete(id)
     }

}