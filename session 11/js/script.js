

function loop(start, end, continueNum, breaknum) {
    if (start && end && breaknum && continueNum) {
        for (let i = start; i <= end; i++) {
            if (i === breaknum) break;
            if (i === continueNum) continue;
            console.log(i);
        }
    }
    else { console.log('please enter four parameters ') }

}
console.log(loop(1, 10, 5, 8))















//for (var i = 1; i <= 10; i++) {
//  if (i == 3) continue;
//if (i == 7) break


//}