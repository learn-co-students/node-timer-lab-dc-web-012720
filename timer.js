const argv = process.argv
let time
function contains(value, search) {
    return (value || '').indexOf(search) > -1;
}

if (contains(argv[2], 'min')) {
    time = parseInt(argv[2]) * 60
} else {
    time = parseInt(argv[2])
}
setTimeout(() => {
    time = time - 1
    console.log(`Left: ${time}s`)
}, 1000);