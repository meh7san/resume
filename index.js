function getTotalExperience(){
    var startDate = new Date("2016-04");

    var dateDiff = Date.now() - startDate
    
    var totalExp = new Date(dateDiff);

    return Math.abs(totalExp.getFullYear() - 1970 );
}

document.querySelector(".experience").innerText = getTotalExperience();