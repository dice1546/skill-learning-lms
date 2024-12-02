import { isTeacher } from "@/lib/teacher";
import { redirect } from "next/navigation";

const TeacherLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  if (!isTeacher()) {
    return redirect("/");
  }

  return <>{children}</>
}
 
export default TeacherLayout;

