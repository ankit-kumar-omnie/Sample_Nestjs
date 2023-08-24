import { Module } from '@nestjs/common';
import { courseModule } from './course/course.module';


@Module({
  imports: [courseModule]
  
})
export class AppModule {}
