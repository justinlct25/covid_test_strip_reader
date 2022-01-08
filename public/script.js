import cv from "/opencv.js";
// import { cv } from './opencv.js';


//video
if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
}

// 一些浏览器部分支持 mediaDevices。我们不能直接给对象设置 getUserMedia
// 因为这样可能会覆盖已有的属性。这里我们只会在没有getUserMedia属性的时候添加它。
if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function(constraints) {

        // 首先，如果有getUserMedia的话，就获得它
        var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
        if (!getUserMedia) {
            return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
        }

        // 否则，为老的navigator.getUserMedia方法包裹一个Promise
        return new Promise(function(resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject);
        });
    }
}


var video = document.getElementById('video');
//var snap = document.getElementById('snap');
var canvas = document.getElementById('canvas');
var canvas_opencv = document.getElementById('canvas_opencv')
var ctx = canvas.getContext('2d');
var ctx_opencv = canvas_opencv.getContext('2d')
var imageData;

//後置攝像頭
navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            facingMode: "environment"
        }
    })
    .then(function(stream) {
        // 旧的浏览器可能没有srcObject
        if ("srcObject" in video) {
            video.srcObject = stream;
        } else {
            // 防止在新的浏览器里使用它，应为它已经不再支持了
            video.src = window.URL.createObjectURL(stream);
        }
        video.onloadedmetadata = function(e) {
            video.play();

            function processVideo() {
                let src = new cv.Mat(video.height, video.width, cv.CV_8UC4)
                let dst = new cv.Mat(video.height, video.width, cv.CV_8UC1)
                let cap = new cv.VideoCapture(video)
                const FPS = 30
                    //opencv video processing
                try {
                    let begin = Date.now()
                    cap.read(src)
                    cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY)
                    cv.imshow("canvas", dst)
                    let delay = 1000 / FPS - (Date.now() - begin)
                    setTimeout(processVideo, delay)
                } catch (err) {
                    console.error(err)
                }
            }
            setTimeout(processVideo, 0)
            getVideoFrame()
            ctx.drawImage(video, 0, 0, 750, 560);

        };
    })
    .catch(function(err) {
        console.log(err.name + ": " + err.message);
    });

//get video frame
function getVideoFrame() {
    ctx.drawImage(video, 0, 0, 750, 560);
    ctx_opencv.drawImage(video, 0, 0, 750, 560);
    imageData = ctx.getImageData(0, 0, 750, 560);
    //console.log("getVideoFrame");
}