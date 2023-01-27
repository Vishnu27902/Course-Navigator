var coursePage=`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Course Navigator-C Basics</title>
    <link href="course.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <div class="topnav">
    <a>Course Navigator</a>
    <a href="#">Home</a>
    <a class="active" href="#">Course</a>
</div>
<br>
    <div id="course" class="header">
      C Programming Course For Beginners
    </div>
    <div class="card">
      <h2>Description</h2>
      <h5 id="last-edited"></h5>
      <p id="description"></p>
    </div>
    <div class="card">
      <h2>Course Details</h2>
      <table>
      <tr>
    <td>Rating : </td>
    <td id="rating"></td>
  </tr>
  <tr>
    <td>Creator :</td>
    <td id="provider"></td>
  </tr>
  <tr>
    <td>Last updated :</td>
    <td id="last-updated" ></td>
    </tr>
    <tr>
    <td>Language  :</td>
    <td id="language"></td>
    </tr>
    <tr>
    <td>Caption[CC] :</td>
    <td id="caption"></td>
    </tr>
    <tr>
    <td>Price      :</td>
    <td id="price"></td>
  </tr>
</table>
    </div> <br>
<button class="b">BUY NOW!</button>
<button class="b">ADD TO CART</button>
<button class="b">ADD TO WISHLIST</button>
<div class="card">
<h2>Overview Of This Course</h2>
<ul id="course-overview" class="list"></div></ul>
<div class="navbar">
  <a>For More Info Contact :</a>
  <a>coursenavigator@gmail.com</a>
  <a>Instagram : Course_Navigator</a>
  <div class="search-container">
			<input type="text" placeholder="Feedback" name="search">
      <button type="submit">Submit</button>
  </div>
</div>
</body>
</html>`;




// var coursePage=`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <div id="title" title="result"></div>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     Course:<div id="course"></div>
//     Provider:<div id="provider"></div>
//     description:<div id="description"></div>
// </body>
// </html>`;