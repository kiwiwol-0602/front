//t11.js (문자함수 연습)
'use strict'

let text1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefg';
let text2 = '      ABC      BCABC       GHI     JKLABCMN.....ABC...OPQ      ';
let text3 = '한국에 오신것을 환영합니다.';
let text4 = '010-1234-5678'

// length : 길이
// substring() : 특정위치의 문자열을 추출
// indexOF() : 문자(열)의 검색(인덱스번지 반환, 없으면 -1을 반환)
// lastIndexOf() : 문자열의 마지막에서부터 검색한다.
// includes() : 문자열 검색 (있으면 true / 없으면 false)
// concat : 문자열 결합
// trim() : 문자열의 앞 뒤의 공백을 제거
// toUpperCase() : 영문자를 모두 대문자로 변환
// toLowerCase() : 영문자를 모두 소문자로 변환
// chatAt() : 문자열을 1문자씩 추출 처리 
// charCodeAt() : 지정된 1문자의 아스키코드값을 출력한다.
// replace() : 지정된 문자열로 첫번째값민 치환한다.
// replaceAll() : 지정된 문자열로 모든 값을 찾아서 모두 치환한다.
// slice(a,b) : a번째 위치부터 b번째 위치 앞의 문자값을 추출한다.
// split(a) : a


let res = '', cnt = 0;

res += ++cnt + ":" + text1.length + "<br/>";
res += ++cnt + ":" + text2.length + "<br/>";
res += ++cnt + ":" + text3.length + "<br/>";
res += ++cnt + ":" + text1.substring(10) + "<br/>";
res += ++cnt + ":" + text1.substring(10,13) + "<br/>";
res += ++cnt + ":" + text3.substring(10) + "<br/>";
res += ++cnt + ":" + text1.indexOf('ABC') + "<br/>";
res += ++cnt + ":" + text2.indexOf('ABC') + "<br/>";
res += ++cnt + ":" + text3.indexOf('ABC') + "<br/>";
res += ++cnt + ":" + text1.lastIndexOf('ABC') + "<br/>";
res += ++cnt + ":" + text2.lastIndexOf('ABC') + "<br/>";
res += ++cnt + ":" + text3.lastIndexOf('ABC') + "<br/>";
res += ++cnt + ":" + text3.includes('KOREA') + "<br/>";
res += ++cnt + ":" + text3.includes('한국') + "<br/>";
res += ++cnt + ":" + '미국'.concat(text3.substring(2)) + "<br/>";
res += ++cnt + ":" + text1 + text2 + "<br/>";
res += ++cnt + ":" + text1 + text2.trim() + "<br/>";
res += ++cnt + ":" + text1.charAt(2) + "<br/>";
res += ++cnt + ":" + text3.charAt(2) + "<br/>";
res += ++cnt + ":" + text1.replace('ABC', 'opq') + "<br/>";
res += ++cnt + ":" + text2.replace('ABC', 'opq') + "<br/>";
res += ++cnt + ":" + text2.replaceAll('ABC', 'opq') + "<br/>";
res += ++cnt + ":" + text1.slice(5) + "<br/>";
res += ++cnt + ":" + text1.slice(5, 8) + "<br/>";
res += ++cnt + ":" + text1.slice(-2) + "<br/>"; // 뒤에서부터 값을 가져옴
res += ++cnt + ":" + text1.split('ABC')[0] + "<br/>";
res += ++cnt + ":" + text1.split('ABC')[1] + "<br/>";
res += ++cnt + ":" + text4.split('-')[0] + "<br/>";
res += ++cnt + ":" + text4.split('-')[1] + "<br/>";
res += ++cnt + ":" + text4.split('-')[2] + "<br/>";

let tels = text4.split('-');
for(let tel of tels){
  console.log(`tel : ${tel}`);
}

let title = ['지역번호', '국번호', '전화번호']

tels.forEach((tel) => console.log(`tel : ${tel}`));
tels.forEach((tel, idx) => console.log(title[idx], ":", tel));

demo.innerHTML = res;