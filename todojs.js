// A basic Todo App where the datas are store on localStorage

//firstly getting the button element and finding out the length of localStorage to know whether data are present or not
//then adding the click event listner;
//when the button is clicked, it gets the value from the input field and if it not empty ("")then it is saved on localStorage
//the length of the local storage is incremented first and stored as a key along with the data of the user provided as value
//then the page is refreshed automatically
let btn = document.getElementById("button");
let number = localStorage.length;
btn.addEventListener("click", () => {
  let re = document.getElementById("text").value;
  if (re != "") {
    number++;
    localStorage.setItem(number, re);
    location.reload();
  }
});

let fx = () => {
  const value = localStorage.length - 1;
  //using forloop to display the datas
  for (i = 0; i <= value; i++) {
    let key = localStorage.key(i);
    //getting the class element and dynamically inserting HTML into it
    let element = document.getElementsByClassName("contents")[0];
    let htmlcontents = ` <div class='lists${i}'>${localStorage.getItem(
      key
    )} <div class='collections${key}'>
    <button class='button${i}' id=${i} value='delete'>Delete</button> 
    <div>`;

    element.insertAdjacentHTML("afterbegin", htmlcontents);
    //now getting that inserted HTML (which we inserted above) and adding the necessary css
    let as = document.getElementsByClassName(`lists${i}`)[0];
    let collections = document.getElementsByClassName(`collections${key}`)[0];
    collections.style.display = "inline-block";
    collections.style.position = "absolute";
    collections.style.right = "30px";
    //again getting the buttons(which we inserted above) to insert listeners
    //when clicked will remove the items from the localStorage
    let butn = document.getElementsByClassName(`button${i}`);
    Array.from(butn).forEach((element) => {
      element.addEventListener("click", () => {
        localStorage.removeItem(key);
        location.reload();
      });
      //adding neceaary css to the 'delete' button
      element.style.backgroundColor = "black";
      element.style.color = "white";
      element.style.border = "1px solid white";
      element.style.borderRadius = "5px";
    });
    //adding necessary css to the data that is being displayed as todo list
    as.style.backgroundColor = "black";
    as.style.color = "white";
    as.style.border = "1px solid white";
    as.style.borderRadius = "7px";
    as.style.marginTop = "20px";
    as.style.marginRight = "20px";
    as.style.padding = "7px";
  }
};

//this function has all the necessary logics and implementation of the app
fx();
