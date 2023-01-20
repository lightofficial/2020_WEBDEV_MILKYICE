
function updateStatus() {
    jQuery.ajax({
        url: 'views/auto/updateStatus.php',
        success: function() {}
    });
}

function getStatus() {
    jQuery.ajax({
        url: 'views/auto/getStatus.php',
        success: function(result) {
            jQuery('#usergrid').html(result);
        }
    });
}

function getStatusoff() {
    jQuery.ajax({
        url: 'views/auto/getStatusoff.php',
        success: function(result) {
            jQuery('#useroff').html(result);
        }
    });
}

function getNumber() {
    jQuery.ajax({
        url: 'views/auto/getNumber.php',
        success: function(result) {
            jQuery('#Numberuser').html(result);
        }
    });
}

function getNumberClient() {
    jQuery.ajax({
        url: 'views/auto/getNumberClient.php',
        success: function(result) {
            jQuery('#numberClient').html(result);
        }
    });
}

function getNumberJob() {
    jQuery.ajax({
        url: 'views/auto/getNumberJob.php',
        success: function(result) {
            jQuery('#numberJob').html(result);
        }
    });
}

function getNumberCan() {
    jQuery.ajax({
        url: 'views/auto/getNumberCan.php',
        success: function(result) {
            jQuery('#numberCan').html(result);
        }
    });
}

function getNoti() {
    jQuery.ajax({
        url: 'views/auto/getNoti.php',
        success: function(result) {
            jQuery('#noti').html(result);
        }
    });
}
setInterval(function() {
    getNoti();
}, 10000);
setInterval(function() {
    updateStatus();
}, 7000);
setInterval(function() {
    getStatus();
}, 10000);
setInterval(function() {
    getStatusoff();
}, 10000);
setInterval(function() {
    getNumber();
}, 10000);
setInterval(function() {
    getNumberClient();
}, 10000);
setInterval(function() {
    getNumberJob();
}, 10000);
setInterval(function() {
    getNumberCan();
}, 10000);