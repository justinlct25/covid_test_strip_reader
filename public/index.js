// let detector = new cv.QRCodeDetector()
// let point1_qr = new cv.Point(0, 0)
// let point2_qr = new cv.Point(Math.round(point1_corner.y + (2.3 / 17.7) * box_size * video.videoHeight), Math.round((3.0 / 17.7) * box_size * video.videoHeight), Math.round((3.0 / 17.7) * box_size * video.videoHeight))
// let result = detector.detectAndDecode(src_qr)
// console.log(result)
// console.log(detector.detect(src_qr, point_qr))

// cv.cvtColor(src_qr, gray_qr, cv.COLOR_BGR2GRAY)
// let ksize = new cv.Size(9, 9)
// cv.GaussianBlur(gray_qr, blur_qr, ksize, 0, 0, cv.BORDER_DEFAULT)
// cv.threshold(blur_qr, thresh_qr, 0, 255, cv.THRESH_BINARY_INV + cv.THRESH_OTSU)
// let kernel = new cv.matFromArray(3, 3, cv.CV_32FC1, [1, 1, 1, 1, 1, 1, 1, 1])
// let point = new cv.Point(0, 0)
// cv.dilate(thresh_qr, dilate_qr, kernel)
// cv.findContours(dilate_qr, contours_qr, hierarchy, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE)
// console.log(contours_qr.size())

// cv.findContours(thresh_qr, contours_qr, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMP)
// cv.findContours(edg, contours, hierarchy, cv.RETR_TREE, 1);

// canny edge detection for qr
// cv.Canny(rng_qr, edg_qr, 200, 600, 3, false)
// low = new cv.Mat(hsv.rows, hsv.cols, hsv.type(), lower);
// high = new cv.Mat(hsv.rows, hsv.cols, hsv.type(), higher);
// cv.inRange(hsv, low, high, rng)
// cv.Canny(rng, edg, 200, 600, 3, false)


// // find contours
// cv.findContours(edg, contours, hierarchy, cv.RETR_TREE, 1);
// let cnt = contours.get(0);
// for (let i = 0; i < contours.size(); ++i) {
//     cv.drawContours(ctr, contours, i, color, 1, cv.LINE_8, hierarchy, 100);
// }