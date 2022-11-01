import { Injectable } from '@nestjs/common';
import { UserType } from './types';

@Injectable()
export class UsersService {
  private readonly users: UserType[] = [
    { id: 1, name: 'shuverida', username: 'ShuVeriDa', password: 'shuverida' },
    { id: 2, name: 'raf', username: 'Raf', password: 'raf' },
  ];

  async findOne(username: string): Promise<UserType | undefined> {
    return this.users.find((user) => user.name === username);
  }
}
