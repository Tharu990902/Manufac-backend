/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './Auth.service';
import {  UserSchema } from '../authentication/schemas/User.schemas'
import { AuthController } from './Auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory : (config: ConfigService) =>{
        return{
          secret: config.get<string>('JWT_SECRET'),
          signOptions: { expiresIn: config.get<string | number >('JWT_EXPIRE')

          },
        }
      }
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]) ],
  controllers: [AuthController],
  providers: [AuthService],
  
})
export class AuthModule {}
