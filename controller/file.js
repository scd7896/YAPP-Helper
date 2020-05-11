const express = require('express');
const router = express();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/');
  },
  filename: function (req, file, cb) {
		console.log(file);
		cb(null, file.filename);
  }
})
const upload = multer({ storage: storage })
const XLSX = require("xlsx"); //엑셀파일 읽어오는 모듈
let allSheets = null;
let resultSheet = null;

/**
 * 엑셀을 체크해서 유저들의 합격 불합격 여부를 보낸다.
 * 엑셀이 들어오면 기존 엑셀파일에 덮어 씌운다.
 */
router.post("/exel/list", upload.single('exel') ,(req, res) => {
	
})


module.exports = router;