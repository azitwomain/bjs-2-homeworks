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
    this.marks.push(...marks);
  }
}


Student.prototype.getAverage = function () {

  if (this.marks) {
    let sum = this.marks.reduce(((el, num) => el + num), 0)
    if (this.marks === 0 || this.marks.length === 0 ) {
      return 0
    } else {
      return sum / this.marks.length;
    }
   
  } else {
    return 0
  }
}

Student.prototype.exclude  = function (reason) {
  delete this["subject"]
  delete this["marks"]
  this.excluded  = reason;
}
