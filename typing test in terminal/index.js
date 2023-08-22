// index.js
import readline from "readline";
import words from "./words.js";
import chalk from "chalk";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
};

const typingTest = async () => {
    let correctCount = 0;
    let incorrectCount = 0;

    console.log("Welcome to the typing test!");
    console.log("You have 60 seconds to type as many words as you can.");
    console.log("Press Enter to start...");

    await waitForEnterKey();

    const startTime = Date.now();
    const endTime = startTime + 60000; // 60 seconds

    while (Date.now() < endTime) {
        const wordToType = getRandomWord();
        const typedWord = await getTypedWord(wordToType);

        if (typedWord === wordToType) {
            correctCount++;
            console.log(chalk.green("Correct!"));
        } else {
            incorrectCount++;
            console.log(chalk.red("Incorrect. The correct word was:", wordToType));
        }
    }

    const totalTime = (Date.now() - startTime) / 1000;
    const accuracy = (correctCount / (correctCount + incorrectCount)) * 100;

    console.log("\nTyping test complete!");
    console.log("Total time: ", totalTime.toFixed(2), "seconds");
    console.log("Correct words: ", correctCount);
    console.log("Incorrect words: ", incorrectCount);
    console.log("Accuracy: ", accuracy.toFixed(2), "%");

    rl.question("Do you want to play again? (yes/no): ", answer => {
        if (answer.toLowerCase() === "yes") {
            typingTest();
        } else {
            console.log("Thank you for playing!");
            rl.close();
        }
    });
};

const waitForEnterKey = () => {
    return new Promise(resolve => {
        rl.once("line", () => {
            resolve();
        });
    });
};

const getTypedWord = (wordToType) => {
    return new Promise(resolve => {
        rl.question(`Type this word: ${chalk.green(wordToType)}\nYour typing: `, typedWord => {
            resolve(typedWord.trim());
        });
    });
};

typingTest();