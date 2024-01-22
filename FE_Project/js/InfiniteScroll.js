let scrollOn = document.querySelector("#scrollButton");
let imageList = document.querySelector("#div-infiniteScroll");
let pageToFetch = 1;

let scroll = false;

window.addEventListener("beforeunload",()=>{
    scroll = false;
})

scrollOn.addEventListener('click',()=> {
    scroll = true;
    if(scroll===true)
    {
        makeImages();
    }
})

window.addEventListener("scroll",() =>{

    if(scroll===true) {
        if (window.innerHeight + document.documentElement.scrollTop >= document.querySelector("#div-infiniteScroll").offsetHeight) {
            makeImages(pageToFetch += 1);
        }
    }
})

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

function makeImageList(datas)
{
    datas.forEach((item) => {
        /*imageList.innerHTML += `<img src = "${item.download_url}" class = "img-list" alt = '' ></li>`*/
        imageList.insertAdjacentHTML('beforeend',`<img src = "https://cataas.com/cat/${item._id}" class = "img-list" alt = '' ></li>`)
    });
}


