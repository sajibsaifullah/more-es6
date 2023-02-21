class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback`);
    }
}

class Instructor extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'Web team'
    constructor(name, location) {
        super(name, location);
    }
    startDupportSession(time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }
}

class Developer extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'Web team'
    tech;
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`please develop the ${feature}`);
    }
    release(version) {
        console.log(`please release the ${version}`);
    }
}

class JobPlacement extends TeamMember {
    designation = 'Job Placement Comandos'
    team = 'Job Placement'
    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }
    developFeature(feature) {
        console.log(`please develop the ${feature}`);
    }
    release(version) {
        console.log(`please release the ${version}`);
    }
}
const alia = new Developer('Alia Bhat', 'Dhaka', 'React');
// console.log(alia);
// alia.provideFeedback();

const bipasha = new JobPlacement('Bipasha Bashu', 'kolkata', 'India');
console.log(bipasha);

// Prototypical inheritance
// prototype chain