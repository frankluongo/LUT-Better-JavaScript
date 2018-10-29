class Team {
  constructor (name) {
    this.name = name;
  }

}

class HockeyTeam extends Team {
  constructor (name) {
    // Super refers back to the original class -- you have to pass an argument to super for it to work!
    super(name);
    this.type = 'Hockey';
  }
  scoreGoal () {
    console.log('Point scored!');
  }
}

class FootBallTeam extends Team {
  constructor(name) {
    super(name);
    this.type = 'Football';
  }
  touchdown () {
    console.log('Touchdown!');
  }
}

const Devils = new HockeyTeam('Devils');
const Jets = new FootBallTeam('Jets');
console.log(Devils);
console.log(Jets);
Jets.touchdown();
