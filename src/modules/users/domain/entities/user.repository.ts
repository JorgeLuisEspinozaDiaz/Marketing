import { User } from "./user.entity";

export interface UserRepository {
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<User>;
}
