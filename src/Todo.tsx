import { FC } from "react";
import { TodoType } from "./types/todo";

// Omit:不要なものを記載、Pick:必要なものを記載
export const Todo: FC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark} ${title}(ユーザー:${userId})`}</p>;
};
