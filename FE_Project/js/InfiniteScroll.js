let scrollOn = document.querySelector("#scrollButton");
let imageList = document.querySelector("#div-infiniteScroll");
let pageToFetch = 1;

let scroll = false;

window.addEventListener("beforeunload",()=>{
    scroll = false;
})

scrollOn.addEventListener('click',()=> {
    scroll = true;
    console.log("test");
    if(scroll===true)
    {
        fetchImages();
    }
})

async function fetchImages(pageNum){
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=10`);
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const datas = await response.json();
        console.log(datas);

        makeImageList(datas);

    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }

}

function makeImageList(datas)
{
    datas.forEach((item) => {
        imageList.innerHTML += `<img src = "${item.download_url}" class = "img-list" alt = '' ></li>`
    });
}

window.addEventListener("scroll",() =>{
    // 스크롤이 상단으로부터 얼마나 이동 했는지 알아야합니다. (뷰포트의 높이 + 스크롤의 길이)
    // 화면에 로딩된 페이지의 전체 높이를 알아야함
    // 뷰포트의 높이 + 스크롤 된 길이 + 5 ~ 10 px 여유 길이 === 화면에 로딩된 페이지의 전체 높이

    if(scroll===true) {
        if (window.innerHeight + document.documentElement.scrollTop >= document.querySelector("#div-infiniteScroll").offsetHeight) {
            fetchImages(pageToFetch += 1);
        }
    }
})
