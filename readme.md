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
- 햄버거의 속재료를 고객이 원하는 재료만으로 만든 햄버거 판매 웹페이지
---
- ### Customize Your Burger!
- 2024.10.01 ~ 10.14
- Collaborators
	- [송승현](https://github.com/seunghyeon22)
	- [서동찬](https://github.com/Seodongchann)
	- [박주용](https://github.com/cfyle)
---
 <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/JSP-323330?style=for-the-badge&logo=java&logoColor=white" alt="JSP" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipse&logoColor=white" alt="Eclipse" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white" alt="Maven" style="zoom: 1.5;" />  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/MyBatis-1565C0?style=for-the-badge&logo=mybatis&logoColor=white" alt="MyBatis" style="zoom: 1.5;" /> <img src="https://img.shields.io/badge/Apache_Tomcat-F8DC75?style=for-the-badge&logo=apache-tomcat&logoColor=black" alt="Apache Tomcat" style="zoom: 1.5;" />

---
## 목차
## 1. 프로젝트 설계([이동](#1-프로젝트-설계-단계))
- 필요한 기능 정리
- 버거 재료 주문 진행 방식
- 업무 분배
- 테이블 설계
- ERD(엔티티 관계 다이어그램)
- 와이어프레임
## 2. Program 주요 기능([이동](#2-Program-주요-기능))
- 커스텀 주문
- 장바구니
- 결제
- 매출 확인(관리자 전용)
## 3. 담당 업무([이동](#3-담당-업무))
- 메인 화면
- 회원의 주문 목록 조회
- 회원가입
- 로그인, 비밀번호 찾기(재설정)
---
## 1. 프로젝트 설계 단계
- ### 필요한 기능 정리
	
	![서브킹 필요 기능 모음](https://github.com/user-attachments/assets/525f8d07-52b8-41cb-8419-60cd4808f5b7)
		
- ### 버거 재료 주문 진행 방식
		
	![커스텀 버거 주문 흐름도](https://github.com/user-attachments/assets/3e2e2230-60dd-4fe5-b589-692e245bb9d7)
	- 커스텀 버거: 빵 -> 야채 -> 패티 -> 소스 -> 치즈 순으로 선택

- ### 업무 분배
		
	![work distribution](https://github.com/user-attachments/assets/3ad1f4d0-b195-4e79-b423-32c6de7a3035)

- ### 테이블 설계
 		
	![테이블 작성](https://github.com/user-attachments/assets/93538a2f-8c2e-49e2-8d75-d9d6f2c9e1ba)

- ### ERD(엔티티 관계 다이어그램)
		
	![ERD Entity Relationship Diagram](https://github.com/user-attachments/assets/91971e53-a6a1-4316-940f-96834ff87133)

- ### 와이어프레임
		
	![서브킹 와이어 프레임](https://github.com/user-attachments/assets/348bfde9-a407-4338-98b3-035c753d4ec6)

---
## 2. Program 주요 기능
- ### 커스텀 주문

	![빵 주문하기](https://github.com/user-attachments/assets/e4657ce8-fb77-4cfb-b862-2c3c13beca13)

	- 빵 -> 야채 -> 패티 -> 소스 -> 치즈 순으로 선택

- ### 장바구니

	![장바구니](https://github.com/user-attachments/assets/5f47838e-77b5-4651-8340-d28100d98c3d)

	- 배달지역 변경 가능
	- 주소기반산업지원서비스 홈페이지에서 제공하는 주소 API 활용
	![도로명주소 API](https://github.com/user-attachments/assets/033875ca-c003-4577-a5b3-3b4a66e11230)


- ### 결제
	
	![결제하기](https://github.com/user-attachments/assets/a5a695c3-7c90-42d7-9f35-79f56550d79a)

	- 카카오 결제 API를 활용

- ### 매출 확인(관리자 전용)

	![서브킹 매출 확인](https://github.com/user-attachments/assets/0fef9cf5-cb62-4d07-a063-5dce4a16d0a4)
	- 관리자 아이디로 로그인할 경우 볼 수 있는 매출 기록

---
## 3. 담당 업무
- ### 메인 화면

	![서브킹 메인 화면](https://github.com/user-attachments/assets/e5adb73a-a7aa-498f-b249-801f3a970c63)
	- fotor ai로 이미지 안의 텍스트 수정
	- 상단의 관리자 메뉴는 관리자 id로 로그인할 경우에만 노출

- ### 회원의 주문 목록 조회
	
	![회원 주문 이력](https://github.com/user-attachments/assets/3b3bdfc9-bc9f-4917-ac0d-23e3f95f532c)

	
	![주문 상세 내역](https://github.com/user-attachments/assets/c86596f7-9ca8-4ce2-aa0f-00c7fc822066)
	- 장바구니에 담기 누르면 장바구니에 담아준다.

- ### 회원가입
	
	![회원가입1](https://github.com/user-attachments/assets/ae296e76-b7fe-46a0-928c-8562e46cc962)
	![회원가입2](https://github.com/user-attachments/assets/88ece3d1-b458-4a75-bb27-12ac2bf583c5)
	- 실시간으로 유효값을 체크하고 경고문 출력

- ### 로그인, 비밀번호 찾기(재설정)

	![로그인](https://github.com/user-attachments/assets/6328c9c2-603e-41e4-af1c-b3e03e013e41)

	![비밀번호 찾기](https://github.com/user-attachments/assets/1e38a2f1-90b7-423e-bf36-afaad8a686da)

	![비밀번호 재설정](https://github.com/user-attachments/assets/4493cd06-3417-4bc4-a7f0-fbf5d0c31e8b)

	- 로그인, 로그아웃, 아이디 찾기, 비밀번호 찾기 **기능** 구현 


