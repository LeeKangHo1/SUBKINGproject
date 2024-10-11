<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="ko">
<head>

<link rel="stylesheet" type="text/css" href="../static/css/orders.css">
<link rel="stylesheet" type="text/css" href="../static/css/footer.css">

<title>서브킹 주문 내역</title>
</head>
<body>
	<c:import url="subking.jsp" charEncoding="utf-8"></c:import>
	
	<section class="section-container"></section>

	<template id="order-template">
		<div class="container">
			<div class="image-container">
				<img
					src="../static/image/logo.jpg"
					alt="햄버거 이미지">
			</div>
			<div class="content">
				<h2>서브킹</h2>
				<p>주문날짜: 10월 2일</p>
				<p>주문 상태: 배달완료</p>
				<p>햄버거 1개 외 총 금액: 10000원</p>
				<div class="button-container">
<!-- 				<button class="same-menu">같은 메뉴 담기</button> -->
					<button class="order-details">주문 상세</button>
				</div>
			</div>
			<dialog class="order-dialog">
				<template id="menu-template">
					<div class="label-conatiner">
						<label class="menu-name">버거이름</label>
						<label class="menu-kcal">칼로리</label>
						<label class="menu-price">금액</label>
					</div>
					<ul class="ingredients-list">
						
					</ul>
					<button class="btn-copy">복사 버튼</button>
					<button class="btn-close">닫기</button>
				</template>
			</dialog>
		</div>
	</template>

	<c:import url="footer.jsp" charEncoding="utf-8"></c:import>
</body>
	<script	src="../static/js/orders.js"></script>
</html>