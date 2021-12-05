import { GraphI } from "./types";

let courses = [
  [1, 4],
  [2, 4],
  [3, 1, 2],
];

function buildGraph(courses: number[][]) {
  let graph: GraphI = {};

  for (let edge of courses) {
    const [course, prereq] = edge.map(String);

    if (course in graph) graph[course].push(prereq);
    if (!(course in graph)) graph[course] = [prereq];
    if (!(prereq in graph)) graph[prereq] = [];
  }
  return graph;
}

function canFinish(numCourses: number, prerequisites: number[][]) {
  if (numCourses === 1) return true;

  let prereqs = buildGraph(prerequisites);
  let totalCourses = Object.keys(prereqs).length;
  let completed = new Set<string>();
  let eligibleCourseExists = true;

  while (eligibleCourseExists) {
    eligibleCourseExists = false;

    for (let course in prereqs) {
      let everyPreqHasBeenMet = prereqs[course].every((pre) =>
        completed.has(pre)
      );
      if (!completed.has(course) && everyPreqHasBeenMet) {
        completed.add(course);
        eligibleCourseExists = true;
      }
    }
  }
  return completed.size === totalCourses;
}

let courses2 = [
  [0, 1],
  [1, 0],
];
console.log(canFinish(4, courses));
