# 📚 BookListMVC
> MySQL 기반의 ASP.NET MVC 북스토어 프로젝트

![도서 리스트 화면](./img/booklist.jpg)

<br>

### Links  
[🌐 사이트 바로가기](https://github.com/tony96kimsh/BookListMVC)  

---

## 프로젝트 개요

### 💡 제작 배경
ASP.NET Core MVC와 MySQL 연동 학습을 위해 도서 리스트 관리 웹 애플리케이션을 구현했습니다. 데이터베이스에서 책 정보를 불러오고, 이를 View에 출력하는 기본적인 CRUD 기능 구현을 목표로 했습니다.

### 🛠 기술 스택
- **Frontend**: Razor View (cshtml), Bootstrap  
- **Backend**: ASP.NET Core MVC (.NET 8)  
- **Database**: MySQL  
- **ORM/연동**: MySql.Data  
- **IDE**: Visual Studio 2022

### ✨ 주요 기능
1. 도서 목록 출력 (최신순 정렬)
2. 개별 도서 정보 보기 (추가 가능)
3. 도서 등록/수정/삭제 기능 (CRUD)
4. MySQL 데이터베이스와 연동된 MVC 아키텍처 구조

---

## 프로젝트 구조

### 🖼 레이아웃 구성
- `Views/Book/Index.cshtml` : 메인 도서 리스트 페이지
- `_Layout.cshtml` : 전체 레이아웃 프레임 구성 (공통)

### 📁 폴더 구조
```
BookListMVC/
├── Controllers/
│   └── BookController.cs
├── Models/
│   └── Book.cs
├── Views/
│   └── Book/
│       └── Index.cshtml
├── appsettings.json
├── Program.cs
```

### 📜 코드 구조
- **Controller**: `BookController.cs`  
  - `Index()` 메서드에서 MySQL DB 연결 후 도서 리스트를 조회하고 View로 전달
- **Model**: `Book.cs`  
  - 도서 정보의 속성 정의 (BookId, Title, Author 등)
- **View**: `Index.cshtml`  
  - Razor 문법을 활용해 `List<Book>` 렌더링
