/* eslint-disable prettier/prettier */
import {  IsString} from 'class-validator';


export class CreateUnitDto {

    @IsString()
    readonly unitOfMeasure: string;
}