const AWS = require('aws-sdk')
module.exports.startSF = (event, context, callback) => {
  const stepFunctions = new AWS.StepFunctions({ endpoint: 'http://localhost:8083' })
  const stateMachineArn = "arn:aws:states:us-east-1:101010101010:stateMachine:WaitMachine"
  const params = {
    stateMachineArn
  }

  return stepFunctions.startExecution(params).promise().then(() => {
    callback(null, `Your state machine ${stateMachineArn} executed successfully`)
  }).catch(error => {
    callback(error.message);
  })
}

module.exports.hello = async event => {
  console.log('hello')
  return { foo: 1 }
}

module.exports.there = async event => {
  console.log('there')
  return { message: 'Final thing!!!', event }
}

module.exports.world = async event => {
  console.log('world')
  return { message: 'NodeJs runtime works"', event }
}