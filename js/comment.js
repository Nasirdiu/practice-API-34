//১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা।

/* const comment= ()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=> res.json())
    .then(data=> console.log(data))
}
comment(); */

//৩. আরেকটা সিস্টেম হবে। তুমি যে ডাটা লোড করেছো। সেটা কোন বাটনে ক্লিক করা লাগবে না। ওয়েবসাইট লোড হলেই সরাসরি ডাটা লোড হয়ে তারপর সেই ডাটা ওয়েবসাইট এ দেখাবে। চেষ্টা করবে লোড করা ডাটা এর দুইটা প্রপার্টি অবশ্যই দেখাবে।

//.2 যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে।

/* const load=()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res=> res.json())
    .then(data=> search(data[0]))
}
load();
const search=data=>{
// console.log(data);
const pTag=document.getElementById('ptag');
const p=document.createElement('p');
p.innerText=data.email;
pTag.appendChild(p);
} */

//৪. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা।

const load = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayShow(data));
};

const displayShow=dates=>{
  const ptag=document.getElementById('ptag');
  dates.forEach(load=>{
    const p=document.createElement('p');
    p.innerText=load.name;
    ptag.appendChild(p);

  })

}