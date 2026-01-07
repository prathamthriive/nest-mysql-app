import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  create(user: Partial<User>) {
    return this.userRepo.save(user);
  }

  findAll() {
    return this.userRepo.find();
  }

   // UPDATE user
  async update(id: number, data: Partial<CreateUserDto>) {
    await this.userRepo.update(id, data);
    return this.userRepo.findOneBy({ id });
  }

  // DELETE user
  async remove(id: number) {
    const result = await this.userRepo.delete(id);
    return { affected: result.affected };
  }
}
