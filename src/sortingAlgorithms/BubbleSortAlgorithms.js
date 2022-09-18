export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    BubbleSort(array, animations);
    return animations;
  }

  function BubbleSort(mainArray, animations){
    console.log("array",mainArray)
    for(var i = 0; i < mainArray.length; i++){
     
        for(var j = 0; j < ( mainArray.length - i -1 ); j++){
            if(mainArray[j] > mainArray[j+1]){
                animations.push([false,j, j+1]);
                animations.push([false,j, j+1]);
                var temp = mainArray[j]
                mainArray[j] = mainArray[j + 1]
                mainArray[j+1] = temp
                animations.push([true,j,j+1,mainArray[j],mainArray[j+1]]);
                
            }
        }
    }
   }