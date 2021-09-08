function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if (this.marks) {
    this.marks.push(mark);
  } else {
    this.marks = [mark];
  }
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    this.marks.push(...marks);
  } else {
    this.marks = [...marks];
  }
};

Student.prototype.getAverage = function () {
  if (!this.marks) {
    return 0;
  }
  const sum = this.marks.reduce((acc, element) => acc + element, 0);
  return sum / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
};
