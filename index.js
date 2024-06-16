import inquirer from "inquirer";
import chalk from "chalk";
class Person {
    personality;
    constructor() {
        this.personality = 'Mystery';
    }
    userInput(input) {
        if (input.includes('talk to other about myself')) {
            this.personality = 'happy';
        }
        else if (input.includes('keep quite and ask no question')) {
            this.personality = 'rude';
        }
    }
    get _personality() {
        return this.personality;
    }
}
class Main {
    async main() {
        const ans = await inquirer.prompt({
            type: "list",
            name: "choice",
            message: chalk.yellow("Tell your behaviour"),
            choices: [
                "talk to other about myself",
                "keep quite and ask no question",
                "leave me alone"
            ]
        });
        let myPerson = new Person();
        myPerson.userInput(ans.choice);
        console.log(chalk.green(`You are ${myPerson._personality}`));
    }
}
const myObject = new Main();
myObject.main();
