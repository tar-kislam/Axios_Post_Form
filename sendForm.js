//* Axios Post Forms
function leadForm(a) {
    var data = {
        name: $('#username').val(),
        mail: $('#email').val(),
        phone: $('#phone').val(),
        ref:a
    }
    axios.post("YOUR API IS HERE",data,{
        headers:{
            "token": "YOUR TOKEN IS HERE"
        }
    }).then(a => {
        Swal.fire("Success", "Your application has been received by us","success");
    })
}



