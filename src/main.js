$(document).ready(function(){
    let isActive = false
    $('#hamburger').click(function(){
        $('#nav').toggleClass('active-nav-list')
        $('#header').toggleClass('active-header')
        $('#logo').toggleClass('active-header-img')
        $('#hamburger').toggleClass('active-header-img active-hamburger')
        if(!isActive){
            $('#hamburger img').attr('src', '../images/icon-close.svg')
            isActive = true
        }else if (isActive){
            $('#hamburger img').attr('src', '../images/icon-hamburger.svg')
            isActive = false
        }
        
    })
})