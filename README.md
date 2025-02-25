종환 도움

post form 데이터를 받아오는 과정에서 data를 body라는 변수에 담아뒀다.

post요청을 받을 때 초기화를 시켰어야햐는데 전역변수로 처리를 해놔서 이전 데이터까지 담겨있어서 json에 데이터가 담기는 과정에서 이전 데이터가 같이 들어가는 이슈가 있었다.

삭제 로직에 대해서 설명과 이해를 도와줬다.

```
김재승
KDT-FUL-3_subject-3-4_member_4
├─ README.md
├─ example-application
│ ├─ components
│ │ ├─ api.js # 통신
│ │ ├─ readFile.js # json파일 저장
│ │ ├─ writeFile.js # json 데이터 생성
│ ├─ errPages
│ │ ├─ geterr.html # get 요청 에러 시 페이지
│ │ ├─ posterr.html # post 요청 에러 시 페이지
│ ├─ public
│ │ ├─ css
│ │ │  └─ style.css # 스타일시트
├─ app.js # 서버
├─ data.json # json 데이터 저장장소
├─ index.html # main page
└─ package.json
```

-   실행 방법
    실제 서버를 구현해서 작동시켰다.
    http://localhost:8000/

-   구현 기능 목록
    게시판 폼을 구현했다.

    리스트에 수정버튼을 클릭하면 해당 리스트를 수정할 수 있는 폼이 생성되고 수정 후 저장 버튼을 누르면 다시 게시판 폼으로 돌아간다.

    삭제버튼을 클릭 시 바로 리스트에서 삭제가 된다.

-   시행 착오

1. 서버와 클라이언트 개념에 대해서 이해도가 부족했었다.

2. 수정 로직을 만드는 과정에서 json파일을 다시 만들지 않고 data.json에서 해당 index를 가지고 있는 데이터를 수정하려는 과정에서 서버변수를 클라이언트에서 사용하려고 접근했었는데 계속해서 실패하였다.
   그 과정에서 리스트에 있는 수정 버튼에 index를 가져와서 json 데이터와 맞춰주면서 해결하였다.

3. 삭제 로직에 대해서 이해하는데 어려움이 있었는데 해당 데이터를 가져와서 filter를 사용하여 index와 맞지 않는 데이터만 가져와서 덮어쓰는 방식으로 기능 구현을 했다.

-   수정 로직에 대한 이해

    새로운 객체에 수정된 input의 value값을 저장 시키고 해당 index에 맞는 json 데이터와 바꿔치기한다음 요청된 서버에 보내주어 다시 json파일에 저장 시킨다.

-   삭제 로직에 대한 이해

    내가 선택한 리스트에 index번호를 가져와서 그 번호만 filter로 찾아주고 그것만 빼고 다시 json파일로 저장 시킨다.

아직까지 서버와 클라이언트에 대한 개념이 잘 잡히지 않는데,, 더 노력해야겠다.
