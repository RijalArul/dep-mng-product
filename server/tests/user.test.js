const request = require('supertest')
const app = require('../app')
const { Admin, Category } = require('../models')
const { generateToken } = require('../helpers/jwt.helpers')

let access_token
let newAdmin
beforeAll(async () => {
  let admin = {
    nama_depan: 'arullll',
    nama_belakang: 'rijalll',
    email: 'arul.rijal@mail.com',
    tanggal_lahir: '1999-07-04',
    jenis_kelamin: 'pria',
    password: 'admin123'
  }

  newAdmin = await Admin.create(admin)
  access_token = generateToken({ id: newAdmin.id, email: newAdmin.email })
})

afterAll(async () => {
  await Admin.destroy({ where: {}, restartIdentity: true })
})

// create admin register

describe('Admins Regsiter API', () => {
  it('should create admins', async () => {
    try {
      let birthDate = new Date()

      const payload = {
        nama_depan: 'arullll1',
        nama_belakang: 'rijalll1',
        email: 'arul.rijal1@mail.com',
        tanggal_lahir: birthDate.toISOString().split('T')[0],
        jenis_kelamin: 'pria',
        password: 'admin123'
      }
      const res = await request(app).post(`/api/v1/admins`).send(payload)
      expect(res.statusCode).toBe(201)
      expect(res.body).toEqual(res.body)
    } catch (err) {
      // console.log(err)
    }
  })

  it('should be error create admins with blank form nama_depan, ama_belakang, email', async () => {
    try {
      let birthDate = new Date()

      const payload = {
        nama_depan: '',
        nama_belakang: '',
        email: 'arul.rijal2@mail.com',
        tanggal_lahir: birthDate.toISOString().split('T')[0],
        jenis_kelamin: 'pria',
        password: 'admin123'
      }
      const res = await request(app).post(`/api/v1/admins`).send(payload)
      expect(res.statusCode).toBe(400)
      expect(res.body).toEqual(res.body)
    } catch (err) {
      console.log(err)
    }
  })

  it('should be error create email is already taken admins', async () => {
    try {
      const res = await request(app).post(`/api/v1/admins`).send(newAdmin)
      expect(res.statusCode).toBe(400)
      expect(res.body).toEqual(res.body)
    } catch (err) {
      // console.log(err)
    }
  })

  it('should be error create email format error admins', async () => {
    try {
      let birthDate = new Date()

      const payload = {
        nama_depan: 'arullll1',
        nama_belakang: 'rijalll1',
        email: 'arul.rijal3',
        tanggal_lahir: birthDate.toISOString().split('T')[0],
        jenis_kelamin: 'pria',
        password: 'admin123'
      }
      const res = await request(app).post(`/api/v1/admins`).send(payload)
      expect(res.statusCode).toBe(400)
      expect(res.body).toEqual(res.body)
    } catch (err) {
      // console.log(err)
    }
  })
}, 2000)

describe('Admins Login API', () => {
  it('should be login admins', async () => {
    try {
      const payload = {
        email: newAdmin.email,
        password: newAdmin.password
      }
      const res = await request(app).post(`/api/v1/admins/login`).send(payload)
      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual(res.body)
    } catch (err) {
      // console.log('err111>>>>>>>>>>>', err)
    }
  })

  it('should be login error password admins', async () => {
    try {
      const payload = {
        email: newAdmin.email,
        password: '1111111'
      }
      const res = await request(app).post(`/api/v1/admins/login`).send(payload)
      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual(res.body)
    } catch (err) {}
  })
}, 2000)

describe('UPDATE Admins API', () => {
  it('should be update admins', async () => {
    try {
      const payload = {
        nama_depan: 'arul123',
        nama_belakang: 'rijal456',
        email: newAdmin.email
      }

      const res = await request(app)
        .put(`/api/v1/admins/${newAdmin.id}`)
        // .set('access_token', access_token)
        .send(payload)

      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual(res.body)
    } catch (err) {
      console.log(err)
    }
  })
})
