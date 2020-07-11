$(function () {
    $('h1').css({'color':'red'})
});

$('#clone').click(function(){
    $('#clone_elem').clone().appendTo('.test_clone');
})

//toggle

$('.phonk').click(function(){
    $('body').css({'background': 'black', 'max-height':'1000px '})
    $('main').remove()
    $('.some_name').text('Ща будит мясо').css({'font-size':'22px', 'color':'red', 'text-transform': 'uppercase'})
    setTimeout(()=>{
        alert('READY? 4 dectop only')
        $('#bass').css({'display':'flex'})
        setTimeout(() => {
            setInterval(() => {
                plusBass()
            }, 150);
            let audio = new Audio('phonk.mp3');
            audio.play();       
        }, 400);
            setTimeout(()=>{
                setInterval(() => {
                    while($('.bass-column').children().length <= minRandom()){
                        plusBass()
                        plusBass()
                        plusBass()
                        plusBass()
                        plusBass()
                        plusBass()
                        plusBass()
                        plusBass()
                        plusBass()
                        plusBass()
                    }
                    while($('.bass-column').children().length >= maxRandom()){
                        minusBass()
                    }
                }, 30);
            }, 2000)
    }, 2000)
})

function plusBass(){
    $('.bass').first().clone().appendTo('.bass-column')
}
function minusBass(){
    $('.bass').last().remove()
}

function maxRandom(){
    let min = 10
    let max = 25
    let rand = min + Math.random() * (max + 1 - min);
    console.log(Math.floor(rand))
    return Math.floor(rand);
}
function minRandom(){
    min = 5
    max = 18
    let rand = min + Math.random() * (max + 1 - min);
    console.log(Math.floor(rand))
    return Math.floor(rand);
}