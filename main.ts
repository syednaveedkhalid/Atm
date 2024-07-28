#! /usr/bin/env node
import inquirer from "inquirer";

let accountBalance = 50000;
const accessCode = 87569;

// Verify PIN

const pinVerification = await inquirer.prompt({
    name: "pin",
    message: "Enter your PIN code",
    type: "number",
});

if (pinVerification.pin === accessCode) {
    console.log("PIN Accepted!");
}   else{
    console.log("Imvalid PIN code.");
}

// User selects operation

const userChoice = await inquirer.prompt([
    {
        name: "operation",
        message: "Please select an option:",
        type: "list",
        choices: ["Withdraw", "Check Balance", "Fast cash"],
    },
]);

if(userChoice.operation === "Withdraw") {}
    // Withdrawal amount

    const amountAnswer = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter the withdrawal amount:",
            type: "number",
        },
    ]);

if(amountAnswer.amount <= accountBalance) {
    accountBalance -= amountAnswer.amount;
    console.log(
        'Transaction successful. You remaining balance is $${accountBalance}'
    );
} else {
    console.log("Insufficient balance.");
}


{

} if (userChoice.operation === "Check Balance") {
    //  Check Balance Option
    console.log('Your balance is: $${accountBalance}');
} else if (userChoice.operation === "Fast Cash") {
    // Fast Cash Option
    const fastCashAns = await inquirer.prompt([
        {
            name: "fastCash",
            message: "Select gthe amount you'd like to withdraw:",
            type: "list",
            choices: [10000, 20000, 30000, 40000],
        },
    ]);
}

let accountbalance = 1000; // Example balance
let fastCashAns = { fastCash: 200 }; // Example fastCash object

if (fastCashAns.fastCash <= accountBalance) {
    accountBalance -= fastCashAns.fastCash;
    console.log(`Transaction Successful. Your remaining balance is: $${accountBalance}`);
} else {
    console.log('Transaction Failed. Insufficient balance.');
}
