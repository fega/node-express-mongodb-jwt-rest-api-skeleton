module.exports = {
  // process: () => {
  //   return { name: 'DEFAULT NAME' }
  // },
  questions: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the project name?',
      default: 'node-express-mongodb-skeleton'
    },
    {
      type: 'input',
      name: 'port',
      message: 'What is the default port?',
      default: 3000
    },
    {
      type: 'input',
      name: 'expiration',
      message: 'JWT token expiration (default 100 days)?',
      default: '100d'
    },
    {
      type: 'input',
      name: 'mongodbUri',
      message: 'mongodb host?',
      default: 'mongodb://localhost:27017'
    },
    {
      type: 'input',
      name: 'dbName',
      message: 'database name?',
      default: 'my-project'
    }
  ],
  end: (config, utils) => {
    utils.shell.cp('.env.example', '.env')
    utils.shell.rm('.env.example')
    utils.shell.exec('git init')

    const cmd1 = utils.chalk.yellow(`cd ${config.folder}`)
    const cmd2 = utils.chalk.yellow(`npm start`)

    return `
DONE!
next steps:

  ${cmd1}
  
  ${cmd2}`
  }
}
