export function getHeapSortAnimations(array) {
    const animations = [];
    HeapSort(array, animations);
    return animations;
  }

  function HeapSort(mainArray, animations) {
    buildMaxHeap(mainArray, animations);
    let end = mainArray.length - 1;
    while (end > 0) {
    animations.push([false,0,end]);
    animations.push([false,0,end]);
    animations.push([true,0,end,mainArray[end],mainArray[0]]);
      let temp = mainArray[end];
      mainArray[end] = mainArray[0];
      mainArray[0] = temp;
      siftDown(mainArray, 0, end, animations);
      end--;
    }
    return mainArray;
  }
  
  function buildMaxHeap(mainArray, animations) {
    let currentIndex = Math.floor(mainArray.length / 2);
    while (currentIndex >= 0) {
      siftDown(mainArray, currentIndex, mainArray.length, animations);
      currentIndex--;
    }
  }
  
  function siftDown(mainArray, start, end, animations) {
    if (start >= Math.floor(end / 2)) {
      return;
    }
    let left = start * 2 + 1,
        right = start * 2 + 2 < end ? start * 2 + 2 : null,
        swap;
    if (right) {
      swap = mainArray[left] > mainArray[right] ? left : right;
    } else {
      swap = left;
    }
    if (mainArray[start] < mainArray[swap]) {
      animations.push([false,start,swap])
      animations.push([false,start,swap])
      let temp = mainArray[swap];
      mainArray[swap] = mainArray[start];
      mainArray[start] = temp;
      animations.push([true,start,swap,mainArray[start],mainArray[swap]])
      siftDown(mainArray, swap, end, animations);
    }
  }
