import pool from "../configs/connectDB";
let getHomepage = async (req, res) => {
  const [rows, fields] = await pool.execute("SELECT * FROM users ");
  return res.render("index.ejs", { dataUser: rows });
};

let getDetail = async (req, res) => {
  let id = req.params.id;
  let [user] = await pool.execute(`select * from users where id = ?`, [id]);
  return res.send(JSON.stringify(user));
};

let createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;

  await pool.execute(
    "insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );

  return res.redirect("/");
};
let deleteUser = async (req, res) => {
  let userId = req.body.userId;
  await pool.execute("delete from users where id = ?", [userId]);
  return res.redirect("/");
};

let editPage = async (req, res) => {
  let id = req.params.id;
  let [user] = await pool.execute(`select * from users where id = ?`, [id]);
  // return res.send(JSON.stringify(user));

  return res.render("up.ejs", { dataUser: user[0] });
};
let updateUser = async (req, res) => {
  let { firstName, lastName, email, address, id } = req.body;
  await pool.execute(
    "update  users set firstName = ?, lastName = ?, email = ?, address = ?  where id = ?",
    [firstName, lastName, email, address, id]
  );

  return res.redirect("/");
};
module.exports = {
  getHomepage,
  getDetail,
  createNewUser,
  deleteUser,
  editPage,
  updateUser,
};
