sessionStorage.setItem("address", "부산광역시 부산진구 부전동 266-2 4층");


let arr = [];

let allPrice = 0;

loadData();

function loadData() {

	loadCartData().then((cartArr) => {
		console.log(cartArr);
		for (let i = 0; i < cartArr.length; i++) {
			arr.push(cartArr[i]);
		}
		loadmenu();
		addressLoad();
	})
}

function loadCartData() {
	let url = "/240930subKingProject/api/v1/cart";
	return fetch(url)
		.then((resp) => resp.json());
}
function addressLoad() {
	let address = document.querySelector(".addr");
	address.innerText = "배달 지역 :  			" + sessionStorage.getItem("address");

}


function loadmenu() {
	const list = document.querySelector(".list");
	let texttr = ``;
	for (let i = 0; i < arr.length; i++) {
		texttr += `
		<li>
									<div class="img">
										<img alt="상품이미지" src="">
									</div>
									<div class="texts">
										<dl>
										<dd><strong class="tit">${arr[i].menu_name}</strong></dd>
										<dd class ="info"><span>상품정보</span></dd>
										<dd><span>칼로리 :${arr[i].menu_all_kcal}kcal</span></dd>
										<dd><span>가격 : ${arr[i].menu_price}원</span></dd>
										</dl>
										<input type="hidden" class ="menu_id" value="${arr[i].menu_id}">
										<input type="hidden" class ="cart_id"  value="${arr[i].cart_id}">
										<input type="checkbox" class="check">
									</div>
								</li>		
		
		`;

	}
	list.innerHTML = texttr;
	checka();
	menuInfo();

}

function menuInfo() {
	let Info = document.querySelectorAll(".info");
	let menuId = document.querySelectorAll(".menu_id");
	let url = "/240930subKingProject/api/v1/menu"
	for (let i = 0; i < menuId.length; i++) {
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(menuId[i].value)
		}).then((resp) => resp.json())
			.then((dataArr) => {
				let arr = [];
				let sp = ``;
				for (let i = 0; i < dataArr.length; i++) {
					arr.push(dataArr[i]);
					sp += `<span>${arr[i].ig_name}: ${arr[i].custom_count} </span>`;

				}
				Info[i].innerHTML = sp;
			})
	}
}



const IMP = window.IMP;
IMP.init('imp50777305'); // 본인 가맹점 식별코드로 변경


function requestPay() {
	checka();
	IMP.request_pay({
		pg: 'kakaopay', // PG사 선택 (예: KG이니시스)
		pay_method: 'card', // 결제 수단 (예: 카드)
		merchant_uid: 'merchant_' + new Date().getTime(), // 고유한 주문번호 생성
		name: '결제테스트', // 상품명
		amount: allPrice, // 결제 금액
		buyer_email: 'iamport@siot.do', // 구매자 이메일
		buyer_name: '테스트', // 구매자 이름
		buyer_tel: '010-1234-1234', // 구매자 전화번호
		buyer_addr: '부산광역시 진구 부전동' // 구매자 주소
		// ... 기타 필요한 파라미터 추가
	}, function(rsp) {
		if (rsp.success) {
			// 결제 성공 처리
			console.log('결제 성공:', rsp);
			let checkigno = [];
			let checked = document.querySelectorAll(".check");
			let menuId = document.querySelectorAll(".menu_id");
			let user_id = sessionStorage.getItem("user_id");
			for (let i = 0; i < checked.length; i++) {
				if (checked[i].checked) {
					checkigno.push(menuId[i].value);
				}
			}
			let data = {
				menu_ids: checkigno,
				price: allPrice
			};
			let url = "/240930subKingProject/api/v1/orders"
			fetch((url), {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data)
			}).then((resp) => resp.json());

			let urls = "/240930subKingProject/api/v1/cart"
			fetch((urls), {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(checkigno)
			}).then((resp) => resp.json());

						window.location.href = "http://localhost:8080/240930subKingProject/custom/custom";

		} else {
			// 결제 실패 처리
			console.log('결제 실패:', rsp);
			alert("주문이 완료되지 않았습니다.")
		}
	});
}
function checka() {
	let priceLbl = document.querySelector(".CartallPrice");
	let checked = document.querySelectorAll(".check");
	for (let i = 0; i < checked.length; i++) {
		checked[i].addEventListener("click", function() {
			allPrice = 0;
			for (let j = 0; j < checked.length; j++) {
				if (checked[j].checked) {
					allPrice += arr[j].menu_price;
				}
			}
			console.log(allPrice);
			priceLbl.innerText = "주문 금액 : " + allPrice + "원";
		})

	}

}










//
//const axios = require('axios');
//
//const getAccessToken = () => {
//    try {
//        const response =  axios.post('https://api.iamport.kr/users/getToken', {
//            imp_key: '1363852651607640',
//            imp_secret: 'fb493bdc58fe01c79e12934fa674ec55371a7788e4f165c48087eaa33b6804361c7d5094515b4a0d',
//        });
//        const { access_token } = response.data.response;
//        console.log('Access Token:', access_token);
//        return access_token;
//    } catch (error) {
//        console.error('Error getting access token:', error.message);
//    }
//};
//
//// 호출 예시
//const accessToken = getAccessToken();