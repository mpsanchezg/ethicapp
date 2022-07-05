import { users } from '../mock/users';


const verifyUser = (email: string, password: string) => {
  const user = users.find((user) => {
    if (user.email == email && user.password == password)
      return user;
  });

  if (user) {
    return { email: user.email, role: user.role }
  }

  return null;
}

export default verifyUser;
