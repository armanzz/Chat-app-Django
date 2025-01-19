
const AWS = require('aws-sdk');

exports.handler = async (event) => {
  try {
    // Replace with the bucket name
    const bucketName = 'INSERT S3 BUCKET HERE';

    // Create an S3 client
    const s3 = new AWS.S3();

    const { fileName, fileContent } = event;

    if (!fileName || !fileContent) {
      throw new Error('Missing "fileName" or "fileContent" in the event object.');
    }

    // Convert base64 content to a buffer
    const fileBuffer = Buffer.from(fileContent, 'base64');

    // Prepare upload parameters
    const params = {
      Bucket: bucketName,
      Key: fileName,
      Body: fileBuffer,
    };

    // Upload the file to S3
    await s3.putObject(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `File "${fileName}" successfully uploaded to "${bucketName}".`
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: error.message || 'Could not upload file to S3',
      }),
    };
  }
};
