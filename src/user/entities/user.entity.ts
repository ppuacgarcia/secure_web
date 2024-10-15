import {
    BeforeInsert,
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import * as bcrypt from 'bcrypt';
  import { ApiProperty } from '@nestjs/swagger';
  
@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty(
        {
            description: 'Id unico de usuario'
        }
    )
    id: string;
    @Column({ type: 'varchar', length: 60 })
    @ApiProperty({
        description: 'Nombre del empleado',
    })
    name: string;

    @Column({ type: 'varchar', length: 60 })
    @ApiProperty({
        description: 'Apellido del empleado',
    })
    lastname: string;
    @Column({ type: 'varchar' })
    @ApiProperty({
        description: 'Contraseña de acceso para el usuario',
    })
    password: string;
    @BeforeInsert()
    async hashPassword() {
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(this.password, saltOrRounds);
      this.password = hash;
    }

}
