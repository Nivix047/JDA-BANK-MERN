const { AuthenticationError } = require("apollo-server-express");
const { User, Transaction } = require("../models");
const { signToken } = require("../utils/auth");

// The gets
const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      if (context.user) {
        return await User.find({}).select("-balance -email");
      }
      throw new AuthenticationError("Not logged in");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).populate(
          {
            path: "transactions",
            options: { sort: { transaction_date: -1 } },
          }
        );
        console.log("userData", userData);
        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
  // The put, post, delete
  Mutation: {
    addUser: async (
      parent,
      { username, email, password, firstName, lastName }
    ) => {
      const user = await User.create({
        username,
        email,
        password,
        firstName,
        lastName,
      });

      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addTransaction: async (parent, { recipient, amount, message }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        const userRecipient = await User.findOne({ username: recipient });
        const recipientBalance = userRecipient.balance;
        const userBalance = user.balance;
        const recEndBal = recipientBalance + amount;
        const userEndbal = userBalance - amount;

        const newTransaction = await Transaction.create({
          recipient: recipient,
          sender: context.user.username,
          amount: amount,
          message: message,
          senderEndingBalance: userEndbal,
          recipientEndingBalance: recEndBal,
        });
        console.log("newTransaction", newTransaction._id);
        await User.findOneAndUpdate(
          {
            username: userRecipient.username,
          },
          {
            $set: { balance: recEndBal },
            $addToSet: { transactions: { _id: newTransaction._id } },
          },
          { new: true }
        );
        await User.findOneAndUpdate(
          {
            username: user.username,
          },
          {
            $set: { balance: userEndbal },
            $addToSet: { transactions: { _id: newTransaction._id } },
          },
          { new: true }
        );
        console.log(newTransaction);
        return newTransaction;
      }
      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
