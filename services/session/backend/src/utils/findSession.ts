import { sessions } from "../mock/sessions"

const findSessionById = (id: number) => {
  return sessions[id];
}

export { findSessionById };