const Event = require('../Models/Event');
const User = require('../Models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getAllEvents = async (req, res) => {
  try{
    const event = await Event.find();
    res.status(200).json(event);
  } catch(error) {
    res.status(500).json({ message: 'server Error', error: error.message});
  }
};


const getEventBYId = async (req, res)=>{
  try{
    const event = await Event.findById(req.params.id);
    if(!event) {
      return res.status(404).json({message: 'Event not found'});
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({message: 'server Error', error: error.message});
  }
};

const Login = async (req, res) =>{
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(!user) {
      return res.status(404).json({message: 'Invalid credentials'});
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if(!isPasswordCorrect) {
      return res.status(404).json({message: 'Invalid credentials'});
    }

    const token = jwt.Login({userId: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'});
    res.status(200).json({
      message: 'Login successful',
      token,
      user:{
        id: user._id,
        email: user.email,
        username: user.username
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message})
  }
}

const signup = async (req, res) =>{
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if(existingUser) {
      return res.status(400).json({message: 'Email already exists'});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    const token = jwt.sign({userId: savedUser._id}, process.env.JWT_SECRET, {expiresIn: '1h'});

    res.status(201).json({
      message: 'user created successfully',
      token,
      user: {
        id: savedUser._id,
        email: savedUser.email,
        username: savedUser.username
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message})
  }
}


const createEvent = async (req, res) =>{
  try{
    const { title, Date, location, availableSeats, description } = req.body;

    const newEvent = new Event({
      title,
      Date,
      location,
      availableSeats,
      description
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch(error) {
    res.status(500).json({message: 'Error creating event', error: error.message});
  }
};


const updateEvent = async (req, res) => {
  const { id } = req.params
  

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      req.body,
      {new: true, runValidators: true}
    );

    if(!updatedEvent) {
      res.status(404).json({message: 'Event not found'});
    }

    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).json({message: 'Error updating event', error: error.message})
  }
};

module.exports= {
  getAllEvents,
  getEventBYId,
  createEvent,
  Login,
  signup,
  updateEvent
}