import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column()
  enabled: boolean;

  @Column({ nullable: true })
  avatar: string;
}
