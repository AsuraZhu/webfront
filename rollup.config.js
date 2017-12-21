import json from 'rollup-plugin-json';

// const xhr = new XMLHttpRequest();
// xhr.open();
// xhr.onreadystatechange = function() {
//     if(xhr.readyState === xhr.DONE) {
//         alert(xhr.readyState);
//         console.log(xhr.statusText)
//     }
// }
export default {
    input: 'src/main.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    },
    plugins: [ json() ]
}