// function twoSum(arr, target){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1; j<arr.length;j++){
//             if(arr[i]+arr[j]===target){
//                 return[i,j]
//             }
//         }
//     }
// }
// const nums = [1, 1, 2, 3, 5]
//
// const start = new Date().getTime()
// console.log(twoSum(nums,4))
// const end = new Date().getTime()
// console.log((`Время выполнения: , ${end - start}ms`))

function twoSum(arr, target){
    const hashMap={}
    for (let i =0;i<nums.length;i++){
        let complement=target-nums[i]
        if(complement in hashMap){
            return[i,hashMap[complement]]
        }
        hashMap[nums[i]]=i;
    }
}
const nums = [1, 1, 2, 3, 5]
const start = new Date().getTime()
console.log(twoSum(nums,4))
const end = new Date().getTime()
console.log((`Время выполнения: , ${end - start}ms`))