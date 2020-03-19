let client = (req, res) => {
  res.status(404).send('<h1>PAGE NOT FOUND 404<h1>');
};

let server = (err, req, res, next) => {
  res.status(500).send('<h1> Internal Error 500!</h1>', err);
};

module.exports = { client, server };
