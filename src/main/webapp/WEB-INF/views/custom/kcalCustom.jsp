<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css"
	href="../static/css/kcalCustom.css">
<link rel="stylesheet" type="text/css" href="../static/css/footer.css">
</head>
<body>
	<c:import url="subking.jsp" charEncoding="utf-8"></c:import>
	<div class="container">
		<div class="content-1">
			
			<div>
				<strong class="addr">원하시는 칼로리를 입력해주세요.</strong> <input type="search"
					class="kcal_input">
				<button type="button" class="kcal_button">검색</button>
			</div>
		</div>
		<div class="content">
			<div class="menu_list_wrapper">
				<div class="pd_tab">
					<span>주문하기</span>
				</div>
				<div class="pd_list_wrapper">
					<ul class="list">
						<li>
							<div class="img">
								<img alt="상품이름" src="">
							</div> <strong class="tit">상품명</strong> <span class="text">재료명들</span>
							<span class="eng">가격</span> <span class="cal">칼로리</span> <input
							type="button" class="plus" value="추가"> <label
							class="counts">0</label> <input type="button" class="minus"
							value="감소">
						</li>
					</ul>
					
					<div class="buttons">
						<input type="button" value="주문하기" class="order-button"> <input
							type="button" value="장바구니 담기" class="cart-button">
					</div>
				</div>
			</div>
		</div>
	</div>

	<c:import url="footer.jsp" charEncoding="utf-8"></c:import>
</body>
	<script type="text/javascript" src="../static/js/kcalcustom.js"></script>

</html>