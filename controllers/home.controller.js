const db = require("../utils/db");

exports.getAllMarkers = async (req, res) => {
  try {
    const sql = `SELECT id,name,category, 
  JSON_OBJECT('latitude', latitude, 'longitude', longitude) AS location 
  from restaurants`;

    const [result] = await db.execute(sql);
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "서버 오류가 발생했습니다." });
  }
};
