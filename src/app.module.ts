import { Module } from '@nestjs/common';
import { courseModule } from './course/course.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [MongooseModule.forRootAsync({

    imports: [ConfigModule],

    useFactory: (configService: ConfigService) => ({
      uri: configService.get("DB_CON_KEY")
    }),

    inject: [ConfigService]

  }),
    ConfigModule.forRoot({isGlobal : true,
     envFilePath: ".env"}), courseModule, UserModule, AuthModule]
  
})
export class AppModule {}
