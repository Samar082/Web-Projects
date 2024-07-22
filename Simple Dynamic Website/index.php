<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Photography</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="CSS/style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
</head>

<body>

<?php
include('header.php');
?>


  <div id="demo" class="carousel slide" data-ride="carousel">

    <!-- Indicators -->
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>
    <!-- The slideshow -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="images/1.jpg" alt="Los Angeles" width="1100" height="400">
      </div>
      <div class="carousel-item">
        <img src="images/2.jpg" alt="Chicago" width="1100" height="400">
      </div>
      <div class="carousel-item">
        <img src="images/3.jpg" alt="New York" width="1100" height="400">
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>

  <!-- ##################### About Section Start #########################-->

  <section class="my-1">
    <div class="py-5">
      <h2 class="text-center">About Me</h2>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-12">
          <img src="images/4.jpg" alt="goatlover" class="img-fluid aboutimg">
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <h2 class="display-4">Hi, I am Samar Mahato</h2>
          <p class="py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni expedita reiciendis ratione quo omnis, aut vitae, pariatur blanditiis facere, natus sequi a temporibus eligendi velit beatae perferendis qui dignissimos! Animi, recusandae in?</p>
          <a href="about.php btn btn-success" class="btn btn-success">Wanna Know me</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ################### Our Services Section Start ################### -->

  <section class="my-1">
    <div class="py-5">
      <h2 class="text-center">Our Services</h2>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-12">
          <div class="card" style="width:400px">
            <img class="card-img-top" src="images/5.jpg" alt="Card image">
            <div class="card-body">
              <h4 class="card-title">Beautiful Mountain</h4>
              <p class="card-text">Explore the nature</p>
              <a href="#" class="btn btn-primary">See Profile</a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-12">
          <div class="card" style="width:400px">
            <img class="card-img-top" src="images/5.jpg" alt="Card image">
            <div class="card-body">
              <h4 class="card-title">Beautiful Mountain</h4>
              <p class="card-text">Explore the nature</p>
              <a href="#" class="btn btn-primary">See Profile</a>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-12">
          <div class="card" style="width:400px">
            <img class="card-img-top" src="images/5.jpg" alt="Card image">
            <div class="card-body">
              <h4 class="card-title">Beautiful Mountain</h4>
              <p class="card-text">Explore the nature</p>
              <a href="#" class="btn btn-primary">See Profile</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ########### Our Gallery Section Start ############## -->

  <section class="my-1">
    <div class="py-5">
      <h2 class="text-center">Our Gallery</h2>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-12">
          <img src="images/4.jpg" alt="goatlover" class="img-fluid galleryimg">
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          <img src="images/4.jpg" alt="goatlover" class="img-fluid galleryimg">
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          <img src="images/4.jpg" alt="goatlover" class="img-fluid galleryimg">
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          <img src="images/4.jpg" alt="goatlover" class="img-fluid galleryimg">
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          <img src="images/4.jpg" alt="goatlover" class="img-fluid galleryimg">
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          <img src="images/4.jpg" alt="goatlover" class="img-fluid galleryimg">
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          <img src="images/4.jpg" alt="goatlover" class="img-fluid galleryimg">
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          <img src="images/4.jpg" alt="goatlover" class="img-fluid galleryimg">
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          <img src="images/4.jpg" alt="goatlover" class="img-fluid galleryimg">
        </div>
      </div>
    </div>
  </section>

  <!-- ################# Contact Section Start ##################-->

  <section class="my-1">
    <div class="py-3">
      <h2 class="text-center">Contact Us</h2>
    </div>
    <div class="w-50 m-auto">
    <form action="userinfo.php" method="post">
      <div class="form-group">
        <label for="">Name</label>
        <input type="text" name="name" class="form-control" autocomplete="off">
      </div>
      <div class="form-group">
        <label for="">Email</label>
        <input type="text" name="email" class="form-control" autocomplete="off">
      </div>
      <div class="form-group">
        <label for="">Mobile</label>
        <input type="text" name="mobile" class="form-control" autocomplete="off">
      </div>
      <div class="form-group">
        <label for="">Comments</label>
        <textarea name="comments" id="" class="form-control"></textarea>
      </div>
      <button type="submit" class="btn btn-success">Submit</button>

    </form>
    </div>
  </section>

  <!-- ################# Footer Section Start ################-->

<?php
include('footer.php');
?>

  <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>