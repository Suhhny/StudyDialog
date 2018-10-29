

상태관리
---------------


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
res.status(500).json({ success: false, error: 1 })
// error번호 1번, 500상태 발생 => error catching

res.status(200).json({ success: true, list })
// error 없음, list json 전송
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~