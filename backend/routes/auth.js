const router = require('express').Router()
const User = require('../models/User')
const CryptoJs = require('crypto-js')

router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    mobilenumber: req.body.mobilenumber,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.SEC_PASS
    ).toString(),
  })
  try {
    const saveUser = await newUser.save()
    res.status(201).json(saveUser)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })

    !user && res.status(401).json('username is invalid')

    const hashedPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.SEC_PASS
    )
    const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8)

    const userPassword = req.body.password

    originalPassword != userPassword && res.status(401).json('invalid password')

    const { password, ...others } = user._doc
    res.status(200).json({ ...others })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
