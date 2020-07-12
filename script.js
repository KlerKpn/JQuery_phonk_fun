$(function () {
    $('h1').css({'color':'red'})
});

$('#clone').click(function(){
    $('#clone_elem').clone().appendTo('.test_clone');
})

//toggle

$('.phonk').click(function(){
    $('body').css({'background': 'black', 'max-height':'1000px '})
    //$('body').css({ 'background':'url("fon.jpg")', 'background-size':'cover','background-repeat':'no-repeat', 'max-height':'1000px'})
    $('main').remove()
    $('.some_name').text('Ща будит мясо').css({'font-size':'22px', 'color':'red', 'text-transform': 'uppercase'})
    setTimeout(()=>{
        alert('READY? 4 dectop only')
        $('#bass').css({'display':'flex'})
        setTimeout(() => {
            setInterval(() => {
                plusBass()
            }, 100);
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
                    
                    }
                    while($('.bass-column').children().length >= maxRandom()){
                        minusBass()
                    }
                }, 30);
            }, 2000)
    }, 2000)
})

function plusBass(){
    $('.bass.one').first().clone().appendTo('.bass-column:first')
    $('.bass.tho').first().clone().appendTo('.bass-column:eq(1)')
}
function minusBass(){
    $('.bass.one').last().remove()
    $('.bass.tho').last().remove()
}

function maxRandom(){
    let min = 20
    let max = 50
    let rand = min + Math.random() * (max + 1 - min);
    console.log(Math.floor(rand))
    return Math.floor(rand);
}
function minRandom(){
    min = 10
    max = 30
    let rand = min + Math.random() * (max + 1 - min);
    console.log(Math.floor(rand))
    return Math.floor(rand);
}