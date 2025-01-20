<p align="center">
	<img src="https://github.com/user-attachments/assets/86846a95-bc23-4335-a3a3-ce00c4e424d0" alt="subking logo">
</p>
 <h2 align="center">
	 SUBKING PROJECT 
 </h2>
<div align="center">
    커스텀 햄버거 판매 웹페이지
</div>

## <프로젝트 개요>
- 햄버거의 속재료를 고객이 원하는 재료만으로 만든 커스텀 햄버거 판매 웹페이지
---
- ### Customize Your Burger!
- 2024.10.01 ~ 10.14
- Collaborators
	- [송승현](https://github.com/seunghyeon22)
	- [서동찬](https://github.com/Seodongchann)
	- [박주용](https://github.com/cfyle)
---
 <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openJDK&logoColor=white" alt="Java" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/JSP-323330?style=for-the-badge&logo=java&logoColor=white" alt="JSP" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipse&logoColor=white" alt="Eclipse" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white" alt="Maven" style="zoom: 1.5;" />  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/MyBatis-1565C0?style=for-the-badge&logo=mybatis&logoColor=white" alt="MyBatis" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/Apache_Tomcat-F8DC75?style=for-the-badge&logo=apache-tomcat&logoColor=black" alt="Apache Tomcat" style="zoom: 1.5;" />
 
![languages](https://github.com/user-attachments/assets/c31baa30-ae31-401c-b28b-a330a3f0547d)

---
## 목차

### 1. 담당 업무
- 메인 화면
- 칼로리 맞춤 버거 추천
	- 알고리즘 구현
- 회원의 주문 목록 조회
- 회원 관련 기능
	- 주소 API 적용
### 2. 팀 공동 작업 (프로젝트 설계)
- 필요한 기능 정리
- 버거 재료 주문 진행 방식
- 테이블 설계
- ERD (엔티티 관계 다이어그램)
- 와이어프레임
### 3. 그 외 기능
- 재료 선택 흐름
- 장바구니
- 결제
- 매출 확인(관리자 전용)
---
## 1. 담당 업무
- ### 1) 메인 화면

	![서브킹 메인 화면](https://github.com/user-attachments/assets/e5adb73a-a7aa-498f-b249-801f3a970c63)
	- fotor ai로 이미지 안의 텍스트 수정
	- 상단의 관리자 메뉴는 관리자 id로 로그인할 경우에만 노출
- ### 2) 칼로리 맞춤 버거 추천

	![칼로리 맞춤 버거](https://github.com/user-attachments/assets/d8ab3a52-c5f5-493b-b2b5-3d65815f1c79)
- #### 열량에 맞춘 햄버거 조합 추천 알고리즘 제작 중 겪은 어려움
	- 초기 알고리즘
	    - 재료 목록에서 빵, 야채, 패티, 소스, 치즈 순으로 1개씩 랜덤 선택 후 남은 열량에 맞춰 재료를 랜덤으로 추가
	- 웹 페이지 실행 테스트 중 과한 연산 시간으로 인한 서버 과부하 확인
	- 남은 열량에 따라 패티, 치즈, 소스, 야채를 차례로 추가하는 새로운 알고리즘 구현
	- 추가로 입력받는 열량 숫자에 제한(700kcal~1500kcal), 추천하는 햄버거 조합 개수도 10개로 제한
	-> 얻는 결과 : 서버 부하 감소 및 웹 페이지 정상 작동을 확인
- ### 3) 회원의 주문 목록 조회
	
	![회원 주문 이력](https://github.com/user-attachments/assets/3b3bdfc9-bc9f-4917-ac0d-23e3f95f532c)

	![주문 상세 내역](https://github.com/user-attachments/assets/c86596f7-9ca8-4ce2-aa0f-00c7fc822066)
- #### 이전에 주문한 햄버거 조합을 새 장바구니에 담는 기능 구현
	- 유저정보, 주문이력, 햄버거 조합, 장바구니 테이블 등 관계가 구성된 여러 테이블 조작 필요
	- 각 테이블간 관계에 따라 외래키를 설정하여 참조 무결성 구성
	- 각 정보에 집중한 database 지속성 repository 객체 구현
	- 위 객체를 제어 및 조작하여 서비스 로직에 따라 종합된 정보를 구성하는 service 객체 구성
	- 필요한 정보만을 담은 DTO 객체로 정보 전송
	-> 얻는 결과 : 각 주제의 복잡함을 해결한 결과 시스템이 유연하고 확장 가능

- ### 4) 회원 관련 기능
	
	![회원가입1](https://github.com/user-attachments/assets/ae296e76-b7fe-46a0-928c-8562e46cc962)
	![회원가입2](https://github.com/user-attachments/assets/88ece3d1-b458-4a75-bb27-12ac2bf583c5)
	- 회원 가입 기능
	- JavaScript를 활용, 비동기 통신을 구현하여 실시간으로 유효값을 체크하고 경고문 출력

	![도로명주소 API](https://github.com/user-attachments/assets/994eab69-a7ca-458c-8327-dc5ae42b5305)
- #### 주소 API 적용
	- 주소 설정 시 정확성 향상과 입력 시간 절약을 위해 사용자에게 익숙한 외부 웹 api를 사용
	- 주소기반산업지원서비스 홈페이지에서 승인키를 신청
	- 가이드로 제시된 소스 코드를 활용, 회원가입 주소 입력란과 주문 시 배달 주소 입력란에 팝업으로 도로명 주소 검색 기능을 구현

	![로그인](https://github.com/user-attachments/assets/6328c9c2-603e-41e4-af1c-b3e03e013e41)

	![비밀번호 찾기](https://github.com/user-attachments/assets/1e38a2f1-90b7-423e-bf36-afaad8a686da)

	![비밀번호 재설정](https://github.com/user-attachments/assets/4493cd06-3417-4bc4-a7f0-fbf5d0c31e8b)
- #### 비밀번호 암호화 및 비밀번호 찾기 기능 구현
	- 암호화 해시 함수인 bcrypt의 자바용 구현체(라이브러리)를 활용, 비밀번호를 암호화한 후 db에 저장하는 기능 구현
	- 비밀번호 찾기 기능 구현 중 문제 발생
	    - 암호화 해시 함수의 특성상 암호화된 비밀번호와 사용자가 입력한 비밀번호 사이 비교 가능, 암호화된 비밀번호의 복호화는 불가능
	- 비밀번호 찾기 기능 대신 비밀번호 재설정 기능으로 재구현

## 2. 팀 공동 작업 (프로젝트 설계)

- ### 필요한 기능 정리
	
	![서브킹 필요 기능 모음](https://github.com/user-attachments/assets/525f8d07-52b8-41cb-8419-60cd4808f5b7)
		
- ### 버거 재료 주문 진행 방식
		
	![커스텀 버거 주문 흐름도](https://github.com/user-attachments/assets/3e2e2230-60dd-4fe5-b589-692e245bb9d7)

- ### 테이블 설계
 		
	![테이블 작성](https://github.com/user-attachments/assets/93538a2f-8c2e-49e2-8d75-d9d6f2c9e1ba)

- ### ERD (엔티티 관계 다이어그램)
		
	![ERD Entity Relationship Diagram](https://github.com/user-attachments/assets/91971e53-a6a1-4316-940f-96834ff87133)

- ### 와이어프레임
		
	![서브킹 와이어 프레임](https://github.com/user-attachments/assets/348bfde9-a407-4338-98b3-035c753d4ec6)

---
## 3. 그 외 기능
- ### 재료 선택 흐름

	![커스텀 주문](https://github.com/user-attachments/assets/d9d8f4c1-14ca-47f1-97a4-16034b0fe888)

	- 빵 -> 야채 -> 패티 -> 소스 -> 치즈 순으로 선택

- ### 장바구니

	![장바구니](https://github.com/user-attachments/assets/c4bf550e-6669-4c8c-be88-f346504fc01b)

	- 배달지역 변경 가능


- ### 결제
	
	![결제하기](https://github.com/user-attachments/assets/135c5b49-8987-4791-903d-f2314b238f2e)

	- 카카오 결제 API를 활용

- ### 매출 확인(관리자 전용)

	![서브킹 매출 확인](https://github.com/user-attachments/assets/0fef9cf5-cb62-4d07-a063-5dce4a16d0a4)
	- 관리자 아이디로 로그인할 경우 볼 수 있는 매출 기록

---
## Authors
- 이강호
- 깃허브 닉네임: LeeKangHo1
- [깃허브 프로필 링크](https://github.com/LeeKangHo1)
