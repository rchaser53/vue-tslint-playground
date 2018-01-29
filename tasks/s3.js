const fs = require('fs')
const AWS = require('aws-sdk')

const s3 = new AWS.S3()
const params = {
  Bucket: 'rchaser53-test-build',
  Key: 'test-build.zip',
  Body: fs.readFileSync("./build/fake.zip")
}

s3.putObject(params, (err) => {
  if (err) {
    throw new Error(err)
  }
  console.log('update succeed!')
})
