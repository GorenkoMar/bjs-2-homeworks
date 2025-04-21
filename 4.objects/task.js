function Student(name, gender, age) {

    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student1 = new Student("Vasya", "male", 25);
let student2 = new Student("Anna", "female", 32);
let student3 = new Student("Alex", "male", 33);

Student.prototype.setSubject = function (subjectName) {

    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {

    if (this.hasOwnProperty("marks")) {                  
        this.marks.push(...marksToAdd);
    }
}

Student.prototype.getAverage = function () {

    if (!(this.hasOwnProperty("marks") && this.marks.length > 0)) {   
        return 0;
    }
    return this.average = this.marks.reduce((acc, mark, i, arr) => {   
        if (i < arr.length - 1) {
            return acc + mark;
        } else {
            return (acc + mark) / arr.length;
        }
    }, 0);
    
}

Student.prototype.exclude = function (reason) {

    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}