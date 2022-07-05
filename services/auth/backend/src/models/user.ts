type UserRole = 'student' | 'teacher';

export default class User {
  email: string;
  password: string;
  role: string;

  constructor(email: string, password: string, role: UserRole) {
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
