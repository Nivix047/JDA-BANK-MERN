const { Schema, model, Mongoose } = require("mongoose");

const transactionSchema = new Schema({
  transaction_date: {
    type: Date,
    default: Date.now,
  },
  recipient: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  senderEndingBalance: {
    type: Number,
  },
  recipientEndingBalance: {
    type: Number,
  },
  amount: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
  },
});

const Transaction = model("Transaction", transactionSchema);

module.exports = Transaction;
