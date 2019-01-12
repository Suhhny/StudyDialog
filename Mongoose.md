Mongoose
===================


```
{ _id: { $lt: req.query.id }}   // { 찾는필드: { $lt: less than req.body.. }}
```

```
.sort({ _id: "1" })   // 오름차순 정렬

eg. { vote_total: -1, _id: -1 }
```

```
.limit()   // 출력할 데이터 제한
```
