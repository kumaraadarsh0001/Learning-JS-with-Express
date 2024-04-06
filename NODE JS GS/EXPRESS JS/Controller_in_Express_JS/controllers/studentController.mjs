const allStudent = (req, res) => {
  res.send("All Student ");
};

const deleteStudent = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
  if (id == 10) {
    res.send("This is admin id so I can't delete this");
  } else {
    res.send(`Student deleted ${id}`);
  }
};

export { allStudent, deleteStudent };
