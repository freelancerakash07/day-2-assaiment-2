let name = prompt(' আপনার নাম লিখেন ');
let address = prompt(' আপনার ঠিকানা লিখেন ');
let sure = prompt(' আপনার অইখানে কি বৃষ্টি হচ্ছে  যদি হয় তবে লিখেন ( হ্যাঁ ) আড় না হলে লিখেন ( না ) ');



if (sure == 'হ্যাঁ') {

  console.log(`
  আমার নাম        ঃ ${name}
  ঠিকানা           ঃ ${address}


  আমদের পক্ষ থেকে ঃ ভাই আপনাকে বৃষ্টিময় শুভেছা কারন আজ আমাদের এই খানেও বৃষ্টি হচ্ছে 😍😍😍

  `);
  alert('আপনি কি এই বৃষ্টির মদ্দে আমাদের সাথে লুডু গেম খেলবেন যদি খেলেন তবে গুগল এ গিয়ে এই লিংক পেস্ট করে দেন 👉👉 ( https://www.facebook.com/gaming/play/2264592520437327/?source=www_homepage_shortc ) 👈👈 দেকবেন আপনাকে গেম এ নিয়ে যাবে কেমন 😁😁 ');
  

} else if (sure == 'না') {

  console.log(`
  আমার নাম      ঃ ${name}
  ঠিকানা         ঃ ${address}
  

    আমদের পক্ষ থেকে ঃ ভাই আপনাকেও শুভেছা কিন্তু বৃষ্টিময় শুভেছা নয় তার কারন হোল আমাদের এই খানে বৃষ্টি হচ্ছে 😂😂😂

  `);
  alert('তবে আপনি বসে বসে এই গান টি শুন্তে পারেন 👉👉 ( https://www.youtube.com/watch?v=IE8OD5FbU-c ) 👈👈 কেমন 😂😂😂');

} else {

  console.log(`
  আপনি আগে এই বক্স গলো ফিলাপ করেন ।।
  `);
}