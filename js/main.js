window.addEventListener("load",()=>{    //dom이 실행될 동안 img가 로딩이 아직 안돼서 img 높이값을 못읽음. 그래서 window.load 사용 
    //window.load는 dom에 수반되는 img나 영상자료, 소스데이터가 모두 로딩되고 나서 실행됨.
    const grid = new Isotope("section",{         //Isotope 넣고 싶은 요소의 부모요소
        itemSelector: "article",    //어떤 요소들을 UI에 맞게 넣을건지
        columWidth: "article",      //article의 넓이값지정 (자동으로 계산)
        transitionDuration: "0.5s"  //박스가 위아래로 움직이는 모션 속도
    })


    const btns = document.querySelectorAll("main ul li");

    btns.forEach((btn,index) =>{
        btn.addEventListener("click",e=>{
            e.preventDefault();

            const isOn = e.currentTarget.classList.contains("on");  //선택자의 클래스에 on이 있나 확인
            if(isOn) return;    // 있으면 true, 없으면 flase로 반환

            activation(e);
            
        })
    })

    function activation(event){
        console.log("activation called!!");     //활성화 된 버튼을 눌러도 콘솔이 찍히는걸 방지하기 위해 isOn을 사용해서 반환시킴.
        for(let btn of btns) btn.classList.remove("on");
        event.currentTarget.classList.add("on");

        const btn_a = event.currentTarget.querySelector("a");   //이벤트가 발생한 대상 선택자찾기
        const a_href = btn_a.getAttribute("href");   //href라는 속성명을 가져옴
        //console.log(a_href);

        grid.arrange({filter: a_href});
    }
});




