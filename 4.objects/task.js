function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
    }

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks) {
        this.marks.push(marks);
    }
    }
  

Student.prototype.getAverage = function () {
  let count;
  if (this.marks) {
    count = this.marks.reduce(((el, num) => el + num), 0)
    return avg = count / this.marks.length;
  } else {
    return 0
  }
}

Student.prototype.exclude = function (reason) {
delete this.subject
delete this.marks
this.exclude = reason;
}
