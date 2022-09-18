export function getQuickSortAnimations(array) {
    const animations = [];
    let end = array.length
    QuickSort(array, 0, end - 1, animations);
    return animations;
}

function QuickSort(array, start, end, animations) {
    if (start >= end) {
        return;
    }
    let pivot = start,
        left = start + 1,
        right = end;
    while (right >= left) {
        if (array[right] < array[pivot] && array[left] > array[pivot]) {
        animations.push([false,left, right]);
        animations.push([false,left, right]);
        animations.push([true,left, right,array[right],array[left]]);
            let temp = array[right];
            array[right] = array[left];
            array[left] = temp;
        }
        if (array[right] >= array[pivot]) {
            right--;
        }
        if (array[left] <= array[pivot]) {
            left++;
        }
    }
    if (pivot !== right) {
        animations.push([false,pivot, right]);
        animations.push([false,pivot, right]);
        animations.push([true,pivot, right,array[right],array[pivot]]);
        let temp = array[right];
        array[right] = array[pivot];
        array[pivot] = temp;
    }
    QuickSort(array, start, right - 1, animations);
    QuickSort(array, right + 1, end, animations);
}
