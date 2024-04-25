function getTotalExperience(){
    var startDate = new Date("2016-04");

    var dateDiff = Date.now() - startDate
    
    var totalExp = new Date(dateDiff);

    return Math.abs(totalExp.getFullYear() - 1970 );
}

document.querySelector(".experience").innerText = getTotalExperience();

$('.addbar').each(function() {
    var barPercent = $(this).attr('data-percentage');
    $(this).html(`<progress class=".progressbar" value="${barPercent}" max="100"> ${barPercent} </progress>`);
});
