/*

Assignment 20

1. Run the function "getVideoInfo" passing in the object
     "videoInfo"

2. Destructure the argument into the function "getVideoInfo"
     below creating the local variables "title" and "year"

3. console.log() the result of the function

*/

const videoInfo = {
     encoding: 'h264',
     format: 'mp4',
     duration: 5940,
     keywords: ['documentary', 'music', 'biography', 'coltrane'],
     title: 'Chasing Trane',
     channel_id: '3f903189',
     year: 2016,
};

function getVideoInfo() {
     return `${title}, ${year}`;
}

console.log();
