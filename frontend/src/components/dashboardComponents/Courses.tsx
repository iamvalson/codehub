import Icon from "../custom-ui/Icon";

type CourseProps = {
  icon: string;
  title: string;
  desc: string;
  lastVisited: Date;
  url: string;
};

const coursesData: CourseProps[] = [
  {
    icon: "api",
    title: "Rest API Design",
    desc: "Learn how to design scalable and efficient REST APIs.",
    lastVisited: new Date("2024-06-01"),
    url: "/courses/rest-api-design",
  },
  {
    icon: "database",
    title: "Modern Frontend Development",
    desc: "Master the latest frontend technologies and frameworks.",
    lastVisited: new Date("2024-05-28"),
    url: "/courses/frontend-development",
  },
  {
    icon: "cognition",
    title: "DevOps Fundamentals",
    desc: "Understand the core principles and practices of DevOps.",
    lastVisited: new Date("2024-05-20"),
    url: "/courses/devops-fundamentals",
  },
  {
    icon: "cloud",
    title: "Cloud Computing with AWS",
    desc: "Get hands-on experience with AWS cloud services and architecture.",
    lastVisited: new Date("2024-05-15"),
    url: "/courses/aws-cloud-computing",
  },
];

const lengthOfCourses = coursesData.length;
let displayCourses: CourseProps[] = [];

if (lengthOfCourses > 3) {
  displayCourses = coursesData.slice(0, 3);
}

const getRelativeTime = (date: Date) => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);
  const diffWeek = Math.floor(diffDay / 7);
  const diffMonth = Math.floor(diffDay / 30);

  if (diffMonth > 0) return `${diffMonth}m`;
  if (diffWeek > 0) return `${diffWeek}w`;
  if (diffDay > 0) return `${diffDay}d`;
  if (diffHour > 0) return `${diffHour}h`;
  if (diffMin > 0) return `${diffMin}min`;
  return "now";
};

const Courses = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-6">
      {displayCourses.map((course, idx) => (
        <a
          href={course.url}
          key={idx}
          className="bg-course-card-background p-6.25 rounded-lg flex flex-col justify-between h-60 w-80"
        >
          <div className="bg-codehub-primary/20 w-10 h-10 flex items-center justify-center rounded">
            <Icon
              name={course.icon}
              size={24}
              className="text-[24px] xl:text-[28px] text-codehub-primary"
            />
          </div>

          <h3 className="text-white font-display text-[18px] font-bold">
            {course.title}
          </h3>
          <p className="font-display text-[14px] leading-5 text-slate-400 line-clamp-2">
            {course.desc}
          </p>
          <div className="flex flex-row items-center justify-between">
            <span className="text-[12px] font-display leading-4 text-gray-400">
              Last visited: {getRelativeTime(course.lastVisited)}
            </span>
            <Icon name="arrow_right_alt" className="text-codehub-primary" />
          </div>
        </a>
      ))}
    </div>
  );
};
export default Courses;
