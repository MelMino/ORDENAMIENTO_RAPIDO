function hoarePartition(arr, low, high) {
    let pivot = arr[Math.floor((low + high) / 2)];
    let i = low - 1;
    let j = high + 1;
    while (true) {
        do {
            i++;
        } while (arr[i] < pivot);
        do {
            j--;
        } while (arr[j] > pivot);
        if (i >= j) {
            return j;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pivot = hoarePartition(arr, low, high);
        quickSort(arr, low, pivot);
        quickSort(arr, pivot + 1, high);
    }
    return arr;
}

console.log(quickSort([3, 1, 4, 10, 5, 9, 2, 6, 8, 7]));
