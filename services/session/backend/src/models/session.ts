type SessionState = 'uninitialized' |
                     'open' |
                     'waiting' |
                     'starting' |
                     'in-progress' |
                     'finished';

class Session {
  id: number;
  title: string;
  description: string;
  state: SessionState;
  teacherEmail: string;
  studentEmails: Array<string>;
  stateHistory: Array<SessionState>

  addStudents: Function;
  changeState: Function;

  constructor(id: number, title: string, description: string, teacherEmail: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.state = 'uninitialized';
    this.teacherEmail = teacherEmail;
    this.studentEmails = []
    this.stateHistory = [this.state]

    this.addStudents = (email: string) => {
      this.studentEmails.push(email);
    }

    this.changeState = (newState: SessionState) => {
      this.state = newState;
      this.stateHistory.push(newState);
    }
  };
}

export { Session };
