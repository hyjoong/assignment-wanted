# wanted backend-preonboarding

### Required

- **README 파일**에 다음 사항들이 서술 되어야 합니다.
  1. 구현한 방법과 이유에 대한 간략한 내용
  2. 자세한 실행 방법(endpoint 호출방법)
  3. api 명세(request/response 서술 필요)
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

### 1. 구현한 방법과 이유에 대한 간략한 내용

- 게시글에는 게시글의 고유한`id`, 게시글 내용인 `text`, 게시글 작성자인 `name`을 key값으로 가지고 있습니다.

#### Board

```
{
    id: string      //  게시글의 고유한 id
    text: string    //  게시글의 내용
    name: string //  유저 이름
}
```

## 1.1 글 조회 GET (Response 200)

<hr>

#### 1.1-1전체 글 조회

#### /boards

Response

```
{
    [board,board...]
}
```

#### 1.1-2 글의 고유한 id값에 따른 글 조회

#### /boards/:id

Response

```
{
    board
}
```

#### 1.1-3 글의 작성자(name)에 따른 글 조회

#### /boards?name=:name

Response

```
{
    [board,board...]
}
```

## 1.2 글 작성 POST (Response 201)

<hr>

#### 1.2-1 글 작성

- 게시글을 작성하는데 필요한 key값은 는 게시글을 적은 사람인 `name`과 게시글 내용인 `text` 입니다.
  응답값은 게시글인 board 입니다.

#### /boards

Request

```
{
    text,
    name
}
```

Response

```
{
  board
}
```

## 1.3 글 수정 PUT (Response 201)

글을 수정하는데 요청하는 값은 내용(text) 이며 text값을 전달받아서 update한 후에 내용을 수정한 글을 응답합니다.

<hr>

#### /boards/:id

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

## 1.4 글 삭제 DELETE (Response 204)

게시글의 고유한 값인 id를 요청해서 전체 게시글에서 전달받은 id와 다른 id값을 가지고 있는 글 들로 재배열 합니다.

#### /boards/:id
