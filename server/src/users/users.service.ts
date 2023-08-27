import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './user.entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.create(createUserDto);
  }

  async findEnabled(enabled: boolean) {
    const r = await this.userRepository.find({ where: { enabled } });
    return r;
  }

  async findAll() {
    return await this.userRepository.findAndCount();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update({ id }, updateUserDto);
  }

  async remove(id: number) {
    const foundUsers: UserEntity[] = await this.userRepository.find({
      where: { id },
    });
    return await this.userRepository.remove(foundUsers);
  }

  async init(): Promise<(UserDto & UserEntity)[]> {
    await this.userRepository.delete({});

    const users: UserDto[] = [];
    users.push({
      email: 'johndoe@test.mail',
      enabled: true,
      name: 'John',
      surname: 'Doe',
    });
    users.push({
      email: 'tomwaits@test.mail',
      enabled: false,
      name: 'Tom',
      surname: 'Waits',
    });
    users.push({
      email: 'charlesleclerc@test.mail',
      enabled: true,
      name: 'Charles',
      surname: 'Leclerc',
    });

    return await this.userRepository.save(users);
  }
}
