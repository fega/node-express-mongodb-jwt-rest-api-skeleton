module.exports = {
  // process: () => {
  //   return { name: 'DEFAULT NAME' }
  // },
  questions: [
    {
      type: 'input',
      name: 'name',
      message: '¿What is the project name?',
      default: 'node-express-mongodb-skeleton'
    }
  ],
  end: config => `
DONE!
next steps:

  cd ${config.folder}
  
  npm start`
}
