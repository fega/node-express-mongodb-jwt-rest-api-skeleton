module.exports = {
  // process: () => {
  //   return { name: 'DEFAULT NAME' }
  // },
  questions: () => [
    {
      type: 'input',
      name: 'name',
      message: '¿What is the project name?',
      default: 'node-express-mongodb-skeleton'
    }
  ]
}
