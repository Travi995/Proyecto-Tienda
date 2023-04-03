const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')

class Server {
  constructor (arg) {
    this.__port = arg
    this.app = express()
    this.middleares()
    this.upDB()
    this.routes()
    this.run()
  }

  middleares () {
    // cors
    this.app.use(cors())

    // Lectura y parseo del Body
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))

    // File Upload
    this.app.use(fileUpload({
      useTempFiles: true,
      tempFileDir: '/temp/'
    }))
    // Protocolos de seguridad
    
    // Directorio publico
    this.app.use(express.static('public'))
  }

  async upDB () {
    
  }

  routes () {
    // Rutas post
    this.app.use('', require('../routes/get'))
    // Rutas get
    this.app.use('', require('../routes/post'))
    // Rutas API
    this.app.use('/api', require('../routes/api'))
  }

  run () {
    this.app.listen(this.__port, () => {
      console.log(`Server running on port ${this.__port}`)
    })
  }
}

module.exports = Server
