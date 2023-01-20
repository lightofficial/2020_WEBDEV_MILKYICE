<?php require_once "../../function/controllerUserData.php"; ?>
<!DOCTYPE html>
<html lang="en">
<style>
@media only screen and (max-width: 960px) {
   #zxc {
        width: auto;
    }
}
</style>
<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" type="image/png" href="../../img/logo5.jpg">
    <title>Super Recruit | Forgot password</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="../../css/logincss/pass.css">
</head>

<body>
    <br>
    <div class="container-fluid ">
        <div class="row   justify-content-center ">
            <div class="col-md-5 text-center">
            <img width="82%" height="230px;" id="zxc" src=" ../../img/forgotpass.png" >
            </div>
            <div class="col-md-8">
                <form action="forgotPassword.php" method="POST" autocomplete="">
                    <h2 class="text-center">Forgot Password</h2>
                    <br>
                    <p class="text-center">Enter your email, and we will send you a verification code</p>
                    <?php
                    if (count($errors) > 0) {
                    ?>
                        <div class="alert alert-danger text-center">
                            <?php
                            foreach ($errors as $error) {
                                echo $error;
                            }
                            ?>
                        </div>
                    <?php
                    }
                    ?>
                    <div class="form-group">
                        <input class="form-control" type="email" name="email" placeholder="Enter email address" required value="<?php echo $email ?>">
                    </div>
                    <div class="form-group">
                        <input class="form-control button" type="submit" name="check-email" value="Continue">
                    </div>
                    <div class="link login-link text-center">Remembered password ? <a href="../../login.php" style="color:#2f9b95">Back</a></div>
                </form>
            </div>
        </div>
    </div>
    <?php include('../copyright/copyright.php') ?>
</body>

</html>