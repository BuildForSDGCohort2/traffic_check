// import { Pool } from 'pg';
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { builtinModules } = require("module");
// import config from '../config';

const secret = "This is my secret Key";

// helper to hash password
const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

// Helper to compare password
const comparePassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

const isValidEmail = (email) => {
  const testEmail = /\S+@\S+\.\S+/.test(email);  
  return testEmail;
};

const generateToken = (User) => {
  const token = jwt.sign(User, secret);
  return token;
};

module.exports = { hashPassword, comparePassword, isValidEmail, generateToken };
