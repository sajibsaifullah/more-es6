// syntectic sugar
class Instructor{
    name;
    designation = 'Web Course Instructor'
    team = 'Web team'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startDupportSession(time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }
}
const aamir = new Instructor('aamir', 'mumbai');
console.log(aamir);
aamir.startDupportSession('9.00');
aamir.createQuiz(60);