import { Module } from '@nestjs/common';
import { courseModule } from './course/course.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [MongooseModule.forRootAsync({

    imports: [ConfigModule],

    useFactory: (configService: ConfigService) => ({
      uri: configService.get("DB_CON_KEY")
    }),

    inject: [ConfigService]

  }),
    ConfigModule.forRoot({isGlobal : true,
     envFilePath: ".env"}), courseModule]
  
})
export class AppModule {}
