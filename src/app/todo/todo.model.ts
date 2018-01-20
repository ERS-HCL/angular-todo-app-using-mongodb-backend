export interface ITodo {
    _id?: string;
    desc: string;
    priority: string;
    isCompleted?: boolean;
    lastUpdate: Date;
}