export class UserType {
  _id?: string;
  login?: string;
  avatar_url?: string;
  url?: string;
}

export class CreateUserDto {
  login?: string;
  id?: number;
  avatar_url?: string;
  url?: string;
}
