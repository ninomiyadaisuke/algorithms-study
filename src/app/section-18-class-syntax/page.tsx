"use client";

export default function Page() {
  class Student1 {
    fistName: string;
    lastName: string;
    grade: number;
    constructor(fistName: string, lastName: string, year: number) {
      this.fistName = fistName;
      this.lastName = lastName;
      this.grade = year;
    }
  }

  let firstStudent = new Student1("Colt", "Steele", 3);
  let secondStudent = new Student1("Blue", "Steele", 3);

  secondStudent.grade = 4;
  // console.log(firstStudent, secondStudent);

  class Student2 {
    fistName: string;
    lastName: string;
    grade: number;
    tardies: number;
    scores: number[];
    constructor(fistName: string, lastName: string, year: number) {
      this.fistName = fistName;
      this.lastName = lastName;
      this.grade = year;
      this.tardies = 0;
      this.scores = [];
    }

    fullName() {
      return `Your full name is ${this.fistName} ${this.lastName}`;
    }

    markLate() {
      this.tardies += 1;
      if (this.tardies >= 3) {
        return "YOU ARE EXPELLED";
      }

      return `${this.fistName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score: number) {
      this.scores.push(score);
      return this.scores;
    }
    calculateAverage() {
      let avg = this.scores.reduce((a, b) => a + b) / this.scores.length;
      return avg;
    }
  }

  let firstStudent2 = new Student2("Colt", "Steele", 3);
  // console.log(firstStudent2.fullName());
  // console.log(firstStudent2.markLate());
  // console.log(firstStudent2.addScore(100));
  // console.log(firstStudent2.addScore(100));
  // console.log(firstStudent2.addScore(50));
  // console.log(firstStudent2.calculateAverage());

  class Student3 {
    fistName: string;
    lastName: string;
    constructor(fistName: string, lastName: string) {
      this.fistName = fistName;
      this.lastName = lastName;
    }
    fullName() {
      return `Your full name is ${this.fistName} ${this.lastName}`;
    }
    static enrollStudents(...students: Student3[]) {
      return "Enrolled students: " + students.map((s) => s.fullName())
    }
  }

  let firstStudent3 = new Student3("Colt", "Steele");
  let secondStudent3 = new Student3("Blue", "Steele");

  console.log(Student3.enrollStudents(firstStudent3, secondStudent3));

  return <div></div>;
}
