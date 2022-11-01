import { Injectable } from '@nestjs/common';
import { UserType } from './types';

@Injectable()
export class UsersService {
  private readonly users: UserType[] = [
    {
      id: 1,
      name: 'Said-Muhammad',
      username: 'shuverida',
      password: '12345a',
    },
    { id: 2, name: 'Ramzan', username: 'raf', password: 'raf' },
  ];

  async findOne(username: string): Promise<UserType | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
