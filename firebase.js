
const firebaseConfig = {
    apiKey: "AIzaSyA_S6aN93MWyLC3h0D_1gTLwrsaxL_Cp74",
    authDomain: "project-ash-3a130.firebaseapp.com",
    databaseURL: "https://project-ash-3a130-default-rtdb.firebaseio.com",
    projectId: "project-ash-3a130",
    storageBucket: "project-ash-3a130.appspot.com",
    messagingSenderId: "473765218851",
    appId: "1:473765218851:web:514a6e3f5e14c7cf3bbf96",
    measurementId: "G-CCK75XJKKM"
  };

  // 파이어베이스 앱 초기화
  const app = firebase.initializeApp(firebaseConfig);

  // 파이어베이스 실시간 데이터베이스 생성
  const database = firebase.database();

  // 데이터 저장 실습
  function writeUserData(userId, email, nick) {

    database.ref("users/" + userId).set({
      email: email,
      nick : nick
    });
}


// 데이터 읽기 실습
function readUserData() {
  database.ref("users/").on('value', (snapshot) => {
    //실시간 데이터베이스 값 접근
    console.log(snapshot.val());

    let data = snapshot.val()
    let keys = Object.keys(data)

    console.log(Object.keys(data));
    console.log(data["ansh0827"]);
    console.log(data[keys[0]]);

    const result = document.getElementById("result");

    //데이터베이스 웹 페이지 출력
    result.innerText = `${data[keys[0]].email} / ${data[keys[0]].nick}`;





    // 입력창에 적어서 전체 조회, 특정 계정 조회
    // 1. 전체 조회 >> 테이블 태그 or 목록 태그를 활용해서 출력 / 반복문 사용

    let array = []
      for (i=0; i<keys.length; i++){
        array[i] = `${data[keys[i]].email} / ${data[keys[i]].nick} <br> `
      }

      result.innerHTML = array



    // 2. 특정 조회 >> id값 입력받은 후 해당 사용자의 email, nick 출력

    let array2 = []
    const btn2 = document.getElementById("btn2")
    const input = document.getElementById("input")

      btn2.addEventListener("click",() => {
        let inputResult = input.innerText
        if (inputResult === keys[i]){
          alert("완성")
        }
      })

      result.innerHTML = array

// array[i] = `${data[keys[i]].email} / ${data[keys[i]].nick}`

  })
}
    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const id = document.getElementsByName("id");
    const email = document.getElementsByName("email");
    const nick = document.getElementsByName("nick");

    const btn = document.getElementsByName("btn");




    const readBtn = document.getElementById("readBtn")
    readBtn.addEventListener("click", () => {
      readUserData();
    });







    btn[0].addEventListener("click",(event) => {
        event.preventDefault();
        console.log(id[0].value);
        console.log(email[0].value);
        console.log(nick[0].value);

        writeUserData(id[0].value, email[0].value, nick[0].value);
    });




    
    // const id = document.f.id
    // const email = document.f.email
    // const nick = document.f.nick

    // const btn = document.f.btn

    // btn.addEventListener("click",(event) => {
    //     event.preventDefault();
    //     console.log(id.value);
    //     console.log(email.value);
    //     console.log(nick.value);
    // })

