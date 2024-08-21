function generateNumber() {
  const min = Math.ceil(document.querySelector("#entre").value);
  const max = Math.ceil(document.querySelector("#e").value);
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  const screenResult = document.querySelector(".resultScreen")

  screenResult.innerHTML = result


  console.log(result);
}

function showVideo(){
    const mainVideo = document.querySelector(".main-video");
          mainVideo.style.visibile = visibile;



}