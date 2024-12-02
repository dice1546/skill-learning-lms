import { auth } from "@clerk/nextjs/server";

const teacherIds = [process.env.NEXT_PUBLIC_TEACHER_ID_1];

export const isTeacher = () => {
  const { userId } = auth();
  
  if (!userId) {
    return false;
  }
  
  return teacherIds.indexOf(userId) !== -1;
};