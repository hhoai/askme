const items = document.querySelector(".clicked");
const newFile = document.querySelector(".new-file");
const newDepartment = document.querySelector(".new-department");

const handleDepartmentClicked = () => {
  items.classList.add("active");
  newFile.classList.remove("isDisplay");
  newDepartment.classList.add("isDisplay");
}

const handleBackBtn = () => {
  items.classList.remove("active");
  newFile.classList.add("isDisplay");
  newDepartment.classList.remove("isDisplay");
}


console.log(items);
