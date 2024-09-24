import { IsNotEmpty, IsString, IsNumber, IsBoolean, isNumber } from 'class-validator';

export class CreateRawMaterialDto {

    @IsString()
    readonly materialName: string;

    @IsString()
    readonly materialCode: string;

    @IsString()
    readonly category: string;
    
    @IsNumber()
    readonly unitOfMeasure: string;

    @IsNumber() 
    readonly reorderLevel: number;
    
    @IsString()
    readonly description?: string;
    
    @IsBoolean()
    readonly hasVariants: boolean;

}
