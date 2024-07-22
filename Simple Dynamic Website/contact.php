<?php
include('header.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class="jumbotron">
        <h1>Photo can only catch the time</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    </div>
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
        
  <?php
    include('footer.php');
    ?>
</body>
</html>