// Array to store student data
let studentsData = [
    {section: 'UP', name: 'Alphonse George', class: 6, division: 'B', hoursAwarded: 54, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Christeena Sunny', class: 7, division: 'A', hoursAwarded: 43, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Adithya Rubesh', class: 7, division: 'A', hoursAwarded: 38, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Malavika Maneesh', class: 6, division: 'B', hoursAwarded: 30, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Mirone Tom Jojo', class: 6, division: 'B', hoursAwarded: 29, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Ganga Manjush', class: 8, division: 'A', hoursAwarded: 28, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Ashna Elizabeth Sojan', class: 7, division: 'A', hoursAwarded: 27, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Surya Raju', class: 7, division: 'A', hoursAwarded: 26, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Sharon Sabu', class: 8, division: 'A', hoursAwarded: 24, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Kesia Mariam Riju', class: 7, division: 'A', hoursAwarded: 23, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Joben Charly', class: 8, division: 'B', hoursAwarded: 23, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Amal Sojan', class: 8, division: 'B', hoursAwarded: 22, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Ayona Siby', class: 7, division: 'A', hoursAwarded: 21, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Miliya Johnson', class: 7, division: 'A', hoursAwarded: 21, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Elvin Joshy', class: 8, division: 'B', hoursAwarded: 21, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Vyshnavi Pradeesh', class: 7, division: 'A', hoursAwarded: 20, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Alen Joseph', class: 8, division: 'A', hoursAwarded: 20, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Adithya Santhosh', class: 8, division: 'B', hoursAwarded: 20, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Kalyani Santhosh', class: 8, division: 'B', hoursAwarded: 20, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Sradha Sasi', class: 8, division: 'B', hoursAwarded: 20, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Jebin Samuvel', class: 8, division: 'A', hoursAwarded: 19, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Madhav P Biju', class: 8, division: 'A', hoursAwarded: 19, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Devayani Rajesh', class: 8, division: 'B', hoursAwarded: 18, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Giya Gilmon', class: 7, division: 'A', hoursAwarded: 17, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Abhijith P R', class: 8, division: 'A', hoursAwarded: 17, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Liya Linson', class: 9, division: 'A', hoursAwarded: 17, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Mareena Biju', class: 9, division: 'A', hoursAwarded: 17, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Akhila K Sajeev', class: 9, division: 'B', hoursAwarded: 16, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Delna K Joseph', class: 9, division: 'B', hoursAwarded: 16, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Annamol Sanju', class: 7, division: 'B', hoursAwarded: 15, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Ayana P Jose', class: 9, division: 'B', hoursAwarded: 14, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Adithya M Biju', class: 6, division: 'A', hoursAwarded: 13, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Adarsh Madhu', class: 8, division: 'B', hoursAwarded: 13, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Maria Biju', class: 6, division: 'B', hoursAwarded: 12, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Dayana Jitto', class: 7, division: 'A', hoursAwarded: 12, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Alwin Vijay', class: 8, division: 'A', hoursAwarded: 12, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Alka Thomas', class: 9, division: 'B', hoursAwarded: 12, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Jyothika Shibu', class: 6, division: 'A', hoursAwarded: 11, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Rosemary Santhosh', class: 8, division: 'C', hoursAwarded: 11, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Andriya Sebastian', class: 6, division: 'A', hoursAwarded: 10, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Jewel Jineesh', class: 6, division: 'A', hoursAwarded: 10, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Haripriya M P', class: 8, division: 'B', hoursAwarded: 10, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Anna Mariya Prasanth', class: 9, division: 'B', hoursAwarded: 10, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Gopika Santhosh', class: 9, division: 'B', hoursAwarded: 10, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Abhijith Ullas', class: 6, division: 'A', hoursAwarded: 9, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Abhikrishna Manoj', class: 6, division: 'A', hoursAwarded: 9, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Akshara V S', class: 6, division: 'A', hoursAwarded: 9, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Abhishekh Rajesh', class: 8, division: 'A', hoursAwarded: 9, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Arya Sunil', class: 7, division: 'A', hoursAwarded: 8, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Aswin Suresh', class: 6, division: 'A', hoursAwarded: 7, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Ameesha Anish', class: 8, division: 'B', hoursAwarded: 7, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Rupika A R', class: 8, division: 'B', hoursAwarded: 7, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Architha Anil', class: 7, division: 'A', hoursAwarded: 6, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Akshaya K R', class: 8, division: 'C', hoursAwarded: 6, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Archana Unni', class: 8, division: 'B', hoursAwarded: 5, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Ashik Raj', class: 7, division: 'A', hoursAwarded: 4, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Anupriya Saji', class: 8, division: 'C', hoursAwarded: 3, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Dona Jessy Stanley', class: 8, division: 'A', hoursAwarded: 2, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Manish Manoj', class: 8, division: 'C', hoursAwarded: 2, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Aaron Siby', class: 5, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Abel B', class: 5, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Abiya B', class: 5, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Akshay Pradeep', class: 5, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Amalya M Alex', class: 5, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Anit Vijay', class: 5, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Annu George', class: 5, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Ashna Raj', class: 5, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Devanandha C S', class: 5, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Gauri Chandra Maju', class: 5, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Jovan Saji', class: 5, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Leena Mariya Jiji', class: 5, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Navneeth Saji', class: 5, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Noel Jobin', class: 5, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Philjo Rajesh', class: 5, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Pius J Joseph', class: 5, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Shradha Sreemoj', class: 5, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Albin Tomy', class: 5, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Angeliza Jomon', class: 5, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Emmanuel Jose', class: 5, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Karthika Kannan', class: 5, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Nibin Babu', class: 5, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Abhidev Ullas', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Abhinav Sajeev N', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Aradhya P S', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Ashima Satheesh', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Athulya Rajesh', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Devanandha Pradeep', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Goutham Krishna Joby', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Gowrikishna K B', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Jeswin Benny', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Joel Tomson', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Jovan Joe Jinu', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Maria Jaimon', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Maximus V S', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Merin Biju', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Minnu Suby', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Navaneetha Prakash', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Nuel Nithin', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Tania Maria Tony', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Vasudev Pradeesh', class: 6, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Abhinandh Santhosh', class: 6, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Albeena Sijo', class: 7, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Alphonse Dominic Joseph', class: 7, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Alphonse Jomichan', class: 7, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Anna Maria Roy', class: 7, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Bellamol Shibu', class: 7, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Jeena Shaji', class: 7, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Joshua Saji', class: 7, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Kiran Reneesh', class: 7, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Adwaith Kishore', class: 7, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Aswin P S', class: 7, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Deepak Rajeev', class: 7, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'UP', name: 'Martin Pious', class: 7, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Aadithyaram K Vincent', class: 8, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Angelina Binu', class: 8, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Devika K R', class: 8, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Karthika Sajeev', class: 8, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Syamini Maneesh', class: 8, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Ajith Binu', class: 8, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Ajo K J', class: 8, division: 'C', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Nikhitha Toney', class: 8, division: 'C', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Samuel Jacob', class: 8, division: 'C', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Abhinav K S', class: 9, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Abin Tomy', class: 9, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Anax Prince', class: 9, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Arsha Ajayan', class: 9, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Arush Satheesh', class: 9, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Don Jitto', class: 9, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Emmanuel Robin', class: 9, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Milan Johnson', class: 9, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Naveen Manoj', class: 9, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Suryakesav P Anil', class: 9, division: 'A', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Arya Raju', class: 10, division: 'A 2', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Belwin Francis', class: 10, division: 'A 2', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Benjamin Tom Joseph', class: 10, division: 'A 2', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Gayathri Prakash', class: 10, division: 'A 2', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Jibin Joy', class: 10, division: 'A 2', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Kavya Shaiju', class: 10, division: 'A 2', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Niya M Bijoy', class: 10, division: 'A 2', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Sreelakshmi Shaji', class: 10, division: 'A 2', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Ajay Manoj', class: 10, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Amrutha P S', class: 10, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Anandhu Shaji ', class: 10, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Angel Maria Sony', class: 10, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Anu Michael', class: 10, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Christin Jiji', class: 10, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Don Sebastian C A', class: 10, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Minnu Joseph', class: 10, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Naveen K V', class: 10, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0},
{section: 'HS', name: 'Vishnu Ullas', class: 10, division: 'B', hoursAwarded: 0, rank: 0, originalRank: 0, previousRank: 0, lastUpdate: '0', changeInRank: 0}
];

document.addEventListener('DOMContentLoaded', function () {
    updateTables();
});

function updateTables() {
    // Sort studentsData by hoursAwarded in descending order
    studentsData.sort((a, b) => b.hoursAwarded - a.hoursAwarded);

    // Update HS Section table
    updateTable('hsTable', studentsData.filter(student => student.section === 'HS'));

    // Update UP Section table
    updateTable('upTable', studentsData.filter(student => student.section === 'UP'));
}

function updateTable(tableId, data) {
    const table = document.getElementById(tableId);
    // Clear existing table content
    table.innerHTML = '';

    // Add headers
    const headers = ['Rank', 'Name', 'Class', 'Hours Awarded', 'Status'];
    const headerRow = table.insertRow();
    headers.forEach(header => {
        const th = document.createElement('th');
        th.innerHTML = header;
        headerRow.appendChild(th);
    });

    // Add data rows
    data.forEach((student, index) => {
        student.rank = index + 1; // Assign rank
        const row = table.insertRow();
        const rankCell = row.insertCell();
        rankCell.innerHTML = student.originalRank || student.rank; // Display original rank if available

        const nameCell = row.insertCell();
        nameCell.innerHTML = student.name;
        if (student.hoursAwarded >= 40) {
            // Add tick mark icon for qualified students
            nameCell.innerHTML += ' <i class="fas fa-check-circle text-success"></i>';
        }

        row.insertCell().innerHTML = student.class;
        row.insertCell().innerHTML = student.hoursAwarded;

        const statusCell = row.insertCell();
        statusCell.innerHTML = student.hoursAwarded >= 40 ? 'Qualified' : 'Not Qualified';
        
        // Add different background color to the first 5 cells
        if (index < 5) {
            [rankCell, nameCell, row.cells[2], row.cells[3], row.cells[4], statusCell].forEach(cell => {
                cell.classList.add('highlighted-cell');
            });
        }
    });
}


    