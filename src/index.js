exports.min = function min(array) {
    if (array == undefined || array == 0) {
        return 0;
    } else {
        let d = array.length;
        let i;
        for (i = 1; i < d; i++) {
            if (array[i - 1] < array[i]) {
                array[i] = array[i - 1];
            }
        }
        return array[array.length - 1];
    }
};

exports.max = function max(array) {
  if (array == undefined || array == 0) {
    return 0;
} else {
    let d = array.length;
    let i;
    for (i = 1; i < d; i++) {
        if (array[i - 1] > array[i]) {
            array[i] = array[i - 1];
        }
    }
    return array[array.length - 1];
  }
};

exports.avg = function avg(array) {
  if (array == undefined || array == 0) {
    return 0;
} else {
    let d = array.length;
    let i;
    for (i = 1; i < d; i++) {
        array[i] = array[i] + array[i - 1];
    }
    let s = array[array.length - 1] / d;
    return s;
  }
};
