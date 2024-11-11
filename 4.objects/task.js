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
        this.marks = marks
    } else {
        delete this.marks;
    }
    }
  

Student.prototype.getAverage = function () {
  if (this.marks) {
    this.marks.reduce(((el, num) => el + num), 0)
  } else {
    return 0
  }
}

Student.prototype.exclude = function (reason) {
delete this.subject
delete this.marks
this.exclude = reason;
}
