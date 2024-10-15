import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MinLength(1)
    @MaxLength(60)
    name: string;
    
    @IsString()
    @MinLength(1)
    @MaxLength(60)
    lastname: string;

    @IsString()
    password: string;    

}
