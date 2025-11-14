const courses = [
  {
    title: "Biology",
    instructor: "Prof. Maria Dela Cruz",
    duration: 40,
    enrollment: 30,
    students: ["Ana", "Jose", "Mark", "Ella"]
  },
  {
    title: "Marine Biology",
    instructor: "Prof. Juan Santos",
    duration: 50,
    enrollment: 25,
    students: ["Carlo", "Liza", "Ramon"]
  },
  {
    title: "Chemistry",
    instructor: "Prof. Elena Reyes",
    duration: 35,
    enrollment: 28,
    students: ["Paulo", "Grace", "Nina"]
  },
  {
    title: "Mathematics",
    instructor: "Prof. Roberto Tan",
    duration: 45,
    enrollment: 40,
    students: ["Kevin", "Angela", "Francis"]
  },
  {
    title: "Environmental Science",
    instructor: "Prof. Lorna Garcia",
    duration: 30,
    enrollment: 20,
    students: ["Rosa", "Miguel", "Tony"]
  },
  {
    title: "Information Technology",
    instructor: "Prof. Carlo Villanueva",
    duration: 60,
    enrollment: 50,
    students: ["Jade Francine Atencio", "Bam", "Joey", "Sam"]
  }
];

function calculateTotalEnrollment(courses) {
  return courses.reduce((sum, course) => sum + course.enrollment, 0);
}

function filterByInstructor(courses, instructor) {
  return courses.filter(course => course.instructor === instructor);
}

function findLongestCourse(courses) {
  return courses.reduce((longest, course) =>
    course.duration > longest.duration ? course : longest, courses[0]
  );
}

function groupByDuration(courses) {
  const groups = { short: [], medium: [], long: [] };
  courses.forEach(course => {
    if (course.duration <= 30) groups.short.push(course);
    else if (course.duration <= 45) groups.medium.push(course);
    else groups.long.push(course);
  });
  return groups;
}

async function fetchNewCourseData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        title: "Physics",
        instructor: "Prof. Manuel Ramos",
        duration: 55,
        enrollment: 35,
        students: ["Alex", "Bryan", "Sofia"]
      });
    }, 2000);
  });
}

console.log("Total Enrollment:", calculateTotalEnrollment(courses));
console.log("Filter by Prof. Juan Santos:", filterByInstructor(courses, "Prof. Juan Santos"));
console.log("Longest Course:", findLongestCourse(courses));
console.log("Grouped by Duration:", groupByDuration(courses));

fetchNewCourseData().then(newCourse => {
  console.log("Fetched New Course:", newCourse);
  courses.push(newCourse);
  console.log("Updated Courses:", courses);
});
