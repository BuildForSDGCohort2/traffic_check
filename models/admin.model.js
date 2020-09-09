const mongoose = require('mongoose');
<<<<<<< HEAD
const uuid4 = require('uuidv4');
const uniqueValidator = require('mongoose-unique-validator');
=======
const uuid = require("uuid-mongodb");
const mUUID4 = uuid.v4();
>>>>>>> reportAccident

const schema = mongoose.Schema;


const adminSchema = new schema(
  {
    uid: {
      type: String,
<<<<<<< HEAD
      default: uuid4(),
=======
      default: mUUID4,
>>>>>>> reportAccident
      unique: true
    },
    first_name: {
      type: String,
      required: true,
      unique: false
    },
    last_name: {
      type: String,
      required: true,
      unique: false
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    is_admin: {
      type: Boolean,
      required: false,
      default: false
    },
    reset_password_token: {
      type: String
    },
    reset_password_expires: {
      type: Date
    },
    verify_token: {
      type: String
    },
    is_verified: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
);

adminSchema.methods.isPasswordValid = (password, savedPassword) => {
  const compare = bcrypt.compareSync(password, savedPassword);
  return compare;
};

<<<<<<< HEAD
adminSchema.plugin(uniqueValidator);
=======
//adminSchema.plugin(uniqueValidator);
>>>>>>> reportAccident
const userModel = mongoose.model('admin', adminSchema, 'admin');

module.exports = userModel;