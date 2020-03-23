const validatePassword = (valid) => {

  const complexityCheck = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-+])/
  if (valid.length >= 8) {
    let isValid = complexityCheck.test(valid)
    return isValid
   
  } else {
    return false
  }
}

module.exports = validatePassword
 