function changeTab(index) {
    // Reset all tabs and tab content to inactive state
    let tabs = document.querySelectorAll(".tab");
    let tabContents = document.querySelectorAll(".tab-data");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
      tabContents[i].classList.remove("active");
    }

    // Activate the clicked tab and its content
    tabs[index].classList.add("active");
    tabContents[index].classList.add("active");
  }