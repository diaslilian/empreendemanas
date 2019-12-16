const { connect } = require('../models/Repository')
const patrocinadoresModel = require('../models/PatrocinadoresSchema')
const { projetosModel } = require('../models/ProjetosSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const SEGREDO2 =  'MIICXQIBAAKBgQDTViexemXb/6rArAdQ//rRDhjodIwdchzSV2VN6OQ/tFRz7z/ZrJBJkVb6j21CkBEcaWiTKyEEDdPMqf/Obg9B/VBhVqOxrTGLM7jEEHAm5UMVllxTprk+um1jUGxNg8ZefXE2CaT4BgMxSI7kLC4SP7RlK75XdoqL2CyejhA0HQIDAQABAoGBAIvNoLB9gciJVxHiO2zQCcImC0AraU1JYdubyP5DJEsoJf4TtS9wQnsIVHuoSeUQnOEose85RrwB0azAgOK0WA5hgmrPoBKao4KVCT1jyrEP7Q8DqQRglj885PBE0jwEUWrcItzFl3PT8lBrK7I9dB6FyqHAkhL8e94dkf2Ese5ZAkEA7ycBVcscKzrpteggmCoO6OacF3287QMnbsVko7p+DHV0uXdZx6F1HSR3zulHvyNSyovtf8082QjMykhI9kTaRwJBAOI5gVeMSqpB8jtEoaUgc3LcDL9Ek9umGgRP/lVh0WlTKW8+IJATKaez9ZD1bMFHYRknPfBAHSOmFNTx1plADHsCQQCYW6kmFzfi8q1iDnh1eJX3GrPm41wxQwkkMO1kwbL8DPhIEBlKbTpHTqxlTYk/5CkikPLFsONLAag2Vsbk3giRAkA/YS8MkSCGDM3JrxO+iJXvsxjbKWJnYmTdmm++Cha6dHMiWHyVANllw7Rj9W6Pw+i/PFBNFBlV2HzzoAGok9orAkB0VsQVjraC8aQALv8jmh2YEAB43qkmvwvcanjViXOI1Nm2c4z8zAxBp/sJFZUSqGplpXRJdQL2t8hGC4qrhMwu';

connect()

const getAll = (request, response) => {
  patrocinadoresModel.find((error, patrocinadores) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(patrocinadores)
  })
}


module.exports = {
  getAll
  }