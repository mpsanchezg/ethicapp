class InstructionalDesign {
  id: number;
  sessionId: number;
  taskIds: Array<number>;

  addTask: Function;

  constructor(id:number, sessionId: number, taskIds: Array<number>) {
    this.id = id;
    this.sessionId = sessionId;
    this.taskIds = taskIds || [];

    this.addTask = (activityId: number) => {
      this.taskIds.push(activityId);
    }
  }
};

export default InstructionalDesign;
