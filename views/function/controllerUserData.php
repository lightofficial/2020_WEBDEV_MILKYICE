<?php
session_start();
require_once "connection.php";
$email = "";
$name = "";
$errors = array();
function getIpAddress()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ipAddr = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARD_FOR'])) {
        $ipAddr = $_SERVER['HTTP_X_FORWARD_FOR'];
    } else {
        $ipAddr = $_SERVER['REMOTE_ADDR'];
    }
    return $ipAddr;
}
//if user signup button
if (isset($_POST['signup'])) {
    $name = mysqli_real_escape_string($con, $_POST['name']); 
    $nickname= mysqli_real_escape_string($con, $_POST['nickname']); 
    $tel = mysqli_real_escape_string($con, $_POST['num']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $password = mysqli_real_escape_string($con, $_POST['password']);
    $cpassword = mysqli_real_escape_string($con, $_POST['cpassword']);
    if ($password !== $cpassword) {
        $errors['password'] = "Confirm password not matched!";
    }
    $email_check = "SELECT * FROM usertable WHERE email = '$email'";
    $res = mysqli_query($con, $email_check);
    if (mysqli_num_rows($res) > 0) {
        $errors['email'] = "Email that you have entered is already exist!";
    }
    if (count($errors) === 0) {
        $encpass = password_hash($password, PASSWORD_BCRYPT);
        $code = rand(999999, 111111);
        $status = "notverified";
        $insert_data = "INSERT INTO usertable (name,nickname,phoneNumber, email, password, code, status)
                        values('$name','$nickname','$tel', '$email', '$encpass', '$code', '$status')";
        $data_check = mysqli_query($con, $insert_data);

        if ($data_check) {
            $subject = "Please verify your email with Super Recruit";
            $message = "Hi!

Thank you for registration on Super Recruit.

Please kindly verify your email registration by entering the following verification on the application

Verification Code: $code

If you have trouble in verification,contact : xxxxxxxxxxxxxxxxx

Thank you
Super Recruit ";
            $sender = "From: superrecruit123@gmail.com";
            if (mail($email, $subject, $message, $sender)) {

                $_SESSION['email'] = $email;
                $_SESSION['password'] = $password;
                header('location: verification.php');
                exit();
            } else {
                $errors['otp-error'] = "Failed while sending code!";
            }
        } else {
            $errors['db-error'] = "Failed while inserting data into database!";
        }
    }
}
//if user click verification code submit button
if (isset($_POST['check'])) {

    $otp_code = mysqli_real_escape_string($con, $_POST['otp']);
    $check_code = "SELECT * FROM usertable WHERE code = $otp_code";
    $code_res = mysqli_query($con, $check_code);
    if (mysqli_num_rows($code_res) > 0) {
        $fetch_data = mysqli_fetch_assoc($code_res);
        $fetch_code = $fetch_data['code'];
        $email = $fetch_data['email'];
        $code = 0;
        $status = 'verified';
        $update_otp = "UPDATE usertable SET code = $code, status = '$status' , userStatus='1' WHERE code = $fetch_code";
        $update_res = mysqli_query($con, $update_otp);
        if ($update_res) {
            $ww = "select name from usertable where email = '$email'";
            $ww1 = mysqli_query($con,$ww);
            $ww2 = mysqli_fetch_assoc($ww1);
            date_default_timezone_set("Asia/Bangkok");
            $time = date("Y-m-d H:i:s");
           $message ="login now";
            $q = "INSERT INTO message(title,mess,time) 
            VALUES( '$ww2[name]','$message','$time')";
            $c = mysqli_query($con, $q);
            $_SESSION['name'] = $name;
            $_SESSION['email'] = $email;
            header('location: ../../jobAdmin.php');
            exit();
        } else {
            $errors['otp-error'] = "Failed while updating code!";
        }
    } else {
        $errors['otp-error'] = "You've entered incorrect code!";
    }
}

//if user click login button
if (isset($_POST['login'])) {
    $time = time() - 30;
    $ip_address = getIpAddress();
    $query = mysqli_query($con, "SELECT count(*) as total_count FROM loginlogs WHERE TryTime > $time AND IpAddress = '$ip_address' ");
    $check_login_row = mysqli_fetch_assoc($query);
    $total_count = $check_login_row['total_count'];

    $email = mysqli_real_escape_string($con, $_POST['email']);
    $password = mysqli_real_escape_string($con, $_POST['password']);
    $check_email = "SELECT * FROM usertable WHERE email = '$email'";
    $res = mysqli_query($con, $check_email);
    if ($total_count == 3) {
        $errors['email'] = "Please login after 30s ";
    } else if (mysqli_num_rows($res) > 0 && $total_count != 3) {
        $fetch = mysqli_fetch_assoc($res);
        $fetch_pass = $fetch['password'];
        if (password_verify($password, $fetch_pass)) {
            $_SESSION['email'] = $email;
            $status = $fetch['status'];
            if ($status == 'verified') {
                if ($fetch['userStatus'] == 2||($email=='superrecruit123@gmail.com'&&$password='asd@123')) {
                    $ww = "select name from usertable where email = '$email'";
                    $ww1 = mysqli_query($con,$ww);
                    $ww2 = mysqli_fetch_assoc($ww1);
                    date_default_timezone_set("Asia/Bangkok");
                    $time = date("Y-m-d H:i:s");
                   $message ="login now";
                    $q = "INSERT INTO message(title,mess,time) 
                    VALUES( '$ww2[name]','$message','$time')";
                    $c = mysqli_query($con, $q);
                    $_SESSION['email'] = $email;
                    $_SESSION['password'] = $password;
                    mysqli_query($con, "DELETE FROM loginlogs WHERE IpAddress = '$ip_address' ");

                    header('location: home.php');
                } else {
                    $ww = "select name from usertable where email = '$email'";
                    $ww1 = mysqli_query($con,$ww);
                    $ww2 = mysqli_fetch_assoc($ww1);
                    date_default_timezone_set("Asia/Bangkok");
                    $time = date("Y-m-d H:i:s");
                   
                    $q = "INSERT INTO message(title,mess,time) 
                    VALUES( '$ww2[name]','login now','$time')";
                    $c = mysqli_query($con, $q);
                    $_SESSION['email'] = $email;
                    $_SESSION['password'] = $password;
                    mysqli_query($con, "DELETE FROM loginlogs WHERE IpAddress = '$ip_address' ");

                    header('location: jobAdmin.php');
                }
            } else {
                $info = " you haven't still verify your email - $email";
                $_SESSION['info'] = $info;
                header('location: views/register/verification.php');
            }
        } else {
            $total_count++;
            $rem_attm = 3 - $total_count;

            if ($rem_attm == 0) {
                $errors['email'] = " Please login after 30s";
            } else {
                $errors['email'] = "$rem_attm attemps remaining";
            }
            $try_time = time();
            mysqli_query($con, "INSERT INTO loginlogs(IpAddress, TryTime) VALUES('$ip_address', '$try_time')");
        }
    } else {

        $errors['email'] = "you're not yet a member! ";
    }
}

//if user click continue button in forgot password form
if (isset($_POST['check-email'])) {
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $check_email = "SELECT * FROM usertable WHERE email='$email'";
    $run_sql = mysqli_query($con, $check_email);
    if (mysqli_num_rows($run_sql) > 0) {

        $code = rand(999999, 111111);
        $insert_code = "UPDATE usertable SET code = $code WHERE email = '$email'";
        $run_query =  mysqli_query($con, $insert_code);
        if ($run_query) {

            $link = "<a href='http://localhost/super29/views/register/resetPassword.php'>Link</a>";
            $subject = "Super Recruit Account Password Reset";
            $message = " Hi! <br><br>
We have just received a password reset request. <br><br>
Please click  <a href='http://localhost/super29/views/register/resetPassword.php'>this link</a> to verify your password reset code: $code 
<br><br>
Thank you and sorry for any inconveniences.<br>
Super Recruit
             ";
            $headers  = 'MIME-Version: 1.0' . "\r\n";
            $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
            $headers .= "From: superrecruit123@gmail.com";
            if (mail($email, $subject, $message, $headers)) {

                $_SESSION['email'] = $email;
                header('location: resetPassword.php');
                exit();
            } else {
                $errors['otp-error'] = "Failed while sending code!";
            }
        } else {
            $errors['db-error'] = "Something went wrong!";
        }
    } else {
        $errors['email'] = "This email address does not exist!";
    }
}

//if user click check reset otp button
if (isset($_POST['check-reset-otp'])) {

    $otp_code = mysqli_real_escape_string($con, $_POST['otp']);
    $check_code = "SELECT * FROM usertable WHERE code = $otp_code";
    $code_res = mysqli_query($con, $check_code);
    if (mysqli_num_rows($code_res) > 0) {
        $fetch_data = mysqli_fetch_assoc($code_res);
        $email = $fetch_data['email'];
        $_SESSION['email'] = $email;

        header('location: changePassword.php');
        exit();
    } else {
        $errors['otp-error'] = "You've entered incorrect code!";
    }
}

//if user click change password button0
if (isset($_POST['change-password'])) {

    $password = mysqli_real_escape_string($con, $_POST['password']);
    $cpassword = mysqli_real_escape_string($con, $_POST['cpassword']);
    if ($password !== $cpassword) {
        $errors['password'] = "Confirm password not matched!";
    } else {
        $code = 0;
        $email = $_SESSION['email']; //getting this email using session
        $encpass = password_hash($password, PASSWORD_BCRYPT);
        $update_pass = "UPDATE usertable SET code = $code, password = '$encpass' WHERE email = '$email'";
        $run_query = mysqli_query($con, $update_pass);
        if ($run_query) {
            $_SESSION['status'] = "Password reset successful";
            $_SESSION['status_code'] = "success";
            header('location: ../../login.php');
        } else {
            $errors['db-error'] = "Failed to change your password!";
        }
    }
}

//if login now button click
if (isset($_POST['login-now'])) {
    header('Location: login.php');
}

?><script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>