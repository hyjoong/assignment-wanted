# wanted backend-preonboarding

### Required

- **README 파일**에 다음 사항들이 서술 되어야 합니다.
  - 구현한 방법과 이유에 대한 간략한 내용
  - 자세한 실행 방법(endpoint 호출방법)
  - api 명세(request/response 서술 필요)
- **JavaScript 또는 Python 언어**를 사용해야 하며, Framework 선택은 자유 사항입니다.

### Assignment

다음 사항들을 충족하는 **게시판 CRUD API**를 구현해주세요.

- 글 작성, 글 확인, 글 목록 확인, 글 수정, 글 삭제가 되는 API
  - Delete과 Update는 해당 유저의 글만 가능
    - 즉, 유저 생성, 인가, 인증 기능도 필요
  - Read는 pagination 구현 필수
- 데이터베이스는 in-memory database로 구현
  - 리뷰어가 Database를 따로 설치할 필요 없이 실행하고 확인할 수 있어야 합니다.
  - 예) sqlite3
- Unit Test 구현시 가산점이 있습니다.

다음 사항들을 충족하는 **게시판 CRUD API**를 구현해주세요.

- 글 작성, 글 확인, 글 목록 확인, 글 수정, 글 삭제가 되는 API
  - Delete과 Update는 해당 유저의 글만 가능
    - 즉, 유저 생성, 인가, 인증 기능도 필요
  - Read는 pagination 구현 필수
- 데이터베이스는 in-memory database로 구현
  - 리뷰어가 Database를 따로 설치할 필요 없이 실행하고 확인할 수 있어야 합니다.
  - 예) sqlite3
- Unit Test 구현시 가산점이 있습니다.

#### Rest API 

Board

```
{
    id: string      //  게시글의 고유한 id
    text: string    //  게시글의 내용
    name: string //  유저 이름
}
```

#### GET (Response 200)

- /boards

```
{
    [board,board...]
}
```

- /boards?name=:name

```
{
    [board,board...]
}
```

- /boards/:id

```
{
    board
}
```

#### POST (Response 201)

- /boards

Request

```
{
    text,
    name
}
```

Response
{
board
}

#### PUT // 게시글 수정

- /boards/:id

Request

```
{
    text
}

```

Response

```
{
    board
}
```

#### DELETE

- /boards/:id
