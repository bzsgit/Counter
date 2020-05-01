let i = 0
$('#increase').click(() => {
    i = i + 1; $('#counter').text(i)
})

$('#decrease').click(() => {
    if (i>0) {i = i - 1; $('#counter').text(i)} 
})