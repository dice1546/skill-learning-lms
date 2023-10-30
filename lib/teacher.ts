export const isTeacher = (userId?: string | null) => {
  return userId === process.env.NEXT_PUBLIC_TEACHER_ID || process.env.NEXT_PUBLIC_TEACHER_ID_1 || process.env.NEXT_PUBLIC_TEACHER_ID_2;
}