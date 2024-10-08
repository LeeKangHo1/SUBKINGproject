/**
 * orders 자바스크립트 작성 예정
 */

window.addEventListener("load", onload);

const url = "/240930subKingProject/api/v1/orders"


let dialog;
let container;

function onload(e) {
	console.log("페이지가 로드되었습니다.");
	container = document.querySelector(".section-container");

	loadOrdersData()
		.then((ordersArr) => {
			ordersArr.map((orders) => {
				return createOrders(orders);
			}).forEach((elem) => {
				container.append(elem);
			})
		})
}
// menu_id (custom_menu_id)에 맞는 재료 이름과 숫자 목록을 불러와서 json 배열로 반환
function loadIgListData(menu_id) {
	const igUrl = "/240930subKingProject/api/v1/ingredients/";
	return fetch(igUrl + menu_id, { method: "put" })
		.then((resp) => resp.json())
}

// orders 테이블 데이터 get으로 가져와서 json 배열로 반환
function loadOrdersData() {
	return fetch(url, { method: "get" })
		.then((resp) => resp.json())
}

// orderId에 맞는 json 정보를 parsing해서 menu 객체배열(menuArr)로 반환
function loadMenuData(orderId) {
	const menuUrl = "/240930subKingProject/api/v1/menu/"

	return fetch(menuUrl + orderId, { method: "get" })
		.then((resp) => resp.json())
}

// orders를 1개의 카드 모양으로 만든다.
function createOrders(orders) {
	console.log("카드가 생성되었습니다.");

	let template = document.getElementById('order-template');
	let clone = document.importNode(template.content, true);

	let milliseconds = orders.order_date;
	let date = parseDateToString(milliseconds);

	clone.querySelector(".content > p:nth-child(2)").innerText = "주문일시: " + date;
	clone.querySelector(".content > p:nth-child(3)").innerText = "주문상태: " + orders.order_state;
	clone.querySelector(".content > p:nth-child(4)").innerText = "총 가격: " + orders.order_price + "원";

	let btnOrderDetail = clone.querySelector(".order-details");
	dialog = clone.querySelector(".order-dialog");


	// 주문 상세 버튼에 dialog를 출력하는 이벤트 설정
	btnOrderDetail.addEventListener("click", (e) => {
		dialog.showModal();
	});

	let orderId = orders.order_menu_id;

	loadMenuData(orderId)
		.then((menuArr) => {
				createBtnClose();
			menuArr.map((menus) => {
				
				return createMenus(menus);
			}).forEach((elem) => {
				dialog.append(elem);
			})
		})
	return clone;
}

function createBtnClose() {
	let btnClose = document.createElement('button');
	btnClose.type = "button";
	btnClose.className = "btn-close";
	btnClose.innerText = "닫기";
	btnClose.addEventListener("click", (e) => {
		dialog.close();
	})

	dialog.appendChild(btnClose);
}

function createMenus(menus) {

	let menuTemplate = document.getElementById('menu-template');
	let menuClone = document.importNode(menuTemplate.content, true);
	let igList = menuClone.querySelector(".ingredients-list");

	menuClone.querySelector(".menu-name").innerText = "버거 이름: " + menus.menu_name;
	menuClone.querySelector(".menu-kcal").innerText = "칼로리: " + menus.menu_all_kcal;
	menuClone.querySelector(".menu-price").innerText = "가격: " + menus.menu_price + "원";

	loadIgListData(menus.menu_id)
		.then((igArr) => {
			igArr.forEach((elem) => {
				let igName = document.createElement('li');
				igName.textContent = elem.ig_name + ": " + elem.custom_count + "개";

				igList.appendChild(igName);
			})
		});
	return menuClone;
}

function parseDateToString(milliseconds) {
	let date = new Date(milliseconds);

	// 년, 월, 일, 시각 추출
	let year = date.getFullYear();
	let month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
	let day = date.getDate();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let dateString = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`;

	return dateString;
}