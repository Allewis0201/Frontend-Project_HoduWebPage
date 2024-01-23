let scrollOn = document.querySelector("#scrollButton");
let imageList = document.querySelector("#div-infiniteScroll");
let pageToFetch = 1;

let scroll = false;

// 페이지 리로드 될 시 무한 스크롤 설정 값을 false로 설정합니다
window.addEventListener("beforeunload",()=>{
    scroll = false;
})

// 버튼 누를 시 무한 스크롤 설정 값을 true로 설정합니다
scrollOn.addEventListener('click',()=> {
    scroll = true;
    if(scroll===true)
    {
        makeImages();
    }
})

// 설정 값이 true일 때 스크롤을 하면 이미지를 불러옵니다
window.addEventListener("scroll",() =>{

    if(scroll===true) {
        if (window.innerHeight + document.documentElement.scrollTop >= document.querySelector("#div-infiniteScroll").offsetHeight) {
            makeImages(pageToFetch += 1);
        }
    }
})

// 이미지를 불러와 HTML 요소에 삽입합니다.
async function makeImages(pageNum){
    try {
        const response = await fetch(`https://cataas.com/api/cats?limit=1&skip=${pageNum}`);
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const datas = await response.json();
        makeImageList(datas);

    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }

}

//이미지를 HTML 요소에 삽입합니다
function makeImageList(datas)
{
    datas.forEach((item) => {
        imageList.insertAdjacentHTML('beforeend',`<img src = "https://cataas.com/cat/${item._id}" class = "img-list" alt = '불러온 고양이 사진들'></li>`);
    });
}


