exports.internalError = (body = 'Internal Server Error') => ({
  statusCode: 500,
  body
});

exports.badRequest = (body = 'Not found') => ({
  statusCode: 404,
  body
});

exports.notFound = (body = 'Not found') => ({
  statusCode: 404,
  body
});

exports.json = (body) => ({
  statusCode: 200,
  body: JSON.stringify(body)
});
