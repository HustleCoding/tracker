import CourseList from "@/components/Description";
import { useRouter } from "next/router";

function CoursesPage() {
  const router = useRouter();
  const { numberOfCourse } = router.query;

  return (
    <div>
      {numberOfCourse && <CourseList numberOfCourse={Number(numberOfCourse)} />}
    </div>
  );
}

export default CoursesPage;
