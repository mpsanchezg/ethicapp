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
  stateHistory: Array<SessionState>;
  workflowId: string;
  workflowTasks: any;

  addStudents: Function;
  changeState: Function;
  setWorkflowId: Function;
  addWorkflowTasks: Function;

  constructor(id: number, title: string, description: string, teacherEmail: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.state = 'uninitialized';
    this.teacherEmail = teacherEmail;
    this.studentEmails = [];
    this.stateHistory = [this.state];
    this.workflowId = '';
    this.workflowTasks = {}

    this.addStudents = (email: string) => {
      this.studentEmails.push(email);
    };

    this.changeState = (newState: SessionState) => {
      this.state = newState;
      this.stateHistory.push(newState);
    };

    this.setWorkflowId = (wfId: string) => {
      this.workflowId = wfId;
    };

    this.addWorkflowTasks = (tasks: Array<any>) => {
      tasks.map((task: any) => {
        this.workflowTasks[task.referenceTaskName] = task.taskId;
      })
    }
  };
}

export { Session };
