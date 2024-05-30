function index(req, res) {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM movie', (err, movie) => {
      if(err) {
        res.json(err);
      }
      res.render('movies/index', { movie });
    });
  });
}

function create(req, res) {

  res.render('movies/create');
}

function store(req, res) {
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query('INSERT INTO movie SET ?', [data], (err, rows) => {
      res.redirect('/movies');
    });
  });
}

function destroy(req, res) {
  const id = req.body.id;

  req.getConnection((err, conn) => {
    conn.query('DELETE FROM movie WHERE id = ?', [id], (err, rows) => {
      res.redirect('/movies');
    });
  })
}

function edit(req, res) {
  const id = req.params.id;

  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM movie WHERE id = ?', [id], (err, movie) => {
      if(err) {
        res.json(err);
      }
      res.render('movies/edit', { movie });
    });
  });
}

function update(req, res) {
  const id = req.params.id;
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query('UPDATE movie SET ? WHERE id = ?', [data, id], (err, rows) => {
      res.redirect('/movies');
    });
  });
}


module.exports = {
  index: index,
  create: create,
  store: store,
  destroy: destroy,
  edit: edit,
  update: update,
}