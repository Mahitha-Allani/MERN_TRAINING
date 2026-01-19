/*
ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
*/
let transactions = [
    { id: 1, type: "credit", amount: 5000 },
    { id: 2, type: "debit", amount: 2000 },
    { id: 3, type: "credit", amount: 10000 },
    { id: 4, type: "debit", amount: 3000 }
];
// 1. filter() all credit transactions
let creditTransactions = transactions.filter(txn => txn.type === "credit");
console.log("Credit Transactions:", creditTransactions);
// 2. map() to extract only transaction amounts
let transactionAmounts = transactions.map(txn => txn.amount);
console.log("Transaction Amounts:", transactionAmounts);
// 3. reduce() to calculate final account balance
let finalBalance = transactions.reduce((balance, txn) => {
    return txn.type === "credit" ? balance + txn.amount : balance - txn.amount;
}, 0);
console.log("Final Account Balance:", finalBalance);
// 4. find() the first debit transaction
let firstDebitTransaction = transactions.find(txn => txn.type === "debit");
console.log("First Debit Transaction:", firstDebitTransaction);
// 5. findIndex() of transaction with amount 10000
let indexOf10000Txn = transactions.findIndex(txn => txn.amount === 10000);
console.log("Index of Transaction with Amount 10000:", indexOf10000Txn);

