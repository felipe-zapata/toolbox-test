process.env.PORT = 3001
process.env.NODE_ENV = 'test'

const chai = require('chai')
const asssert = require('chai').assert
const expect = require('chai').expect
const chaiHttp = require('chai-http')
const index = require('../src/index')
const utils = require('../src/utils/utils')
const should = chai.should()

chai.use(chaiHttp)

describe('Files', () => {
  describe('/GET /files/data', () => {
    it('it should GET all the files and data', (done) => {
      chai.request(index)
        .get('/files/data')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.forEach(file => {
            file.should.have.property('file')
            file.should.have.property('lines')
            file.lines.forEach(line => {
              line.should.have.property('text')
              line.should.have.property('number')
              line.should.have.property('hex')
            })
          })
          done()
        })
    })
  })
  describe('Parsed content from files', () => {
    it('it should parse the files in a proper way', (done) => {
      const file = 'file,text,number,hex\nfile1,text1,1,0x1\nfile2,text2,2'
      const expected = {
        file: 'file1',
        lines: [
          {
            text: 'text1',
            number: '1',
            hex: '0x1'
          }
        ]
      }
      expect(utils.extractFileData('file1', file)).to.deep.equal(expected);
      const expected2 = {
        file: 'file2',
        lines: []
      }
      expect(utils.extractFileData('file2', '')).to.deep.equal(expected2);
      expect(utils.extractFileData('file2', undefined)).to.deep.equal(expected2);
      done()
    })
    it('it should verify content on files', (done) => {
      asssert.lengthOf(utils.extractFileNames({ files: ['file1', 'file2'] }), 2)
      asssert.lengthOf(utils.extractFileNames({}), 0)
      done()
    })
  })
})
