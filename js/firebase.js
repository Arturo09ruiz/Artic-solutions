firebase.analytics().logEvent('Entrada a la pagina');


const name = document.querySelector("#name");
const email = document.querySelector("#email");
const affair = document.querySelector("#affair");
const message = document.querySelector("#message");
const btn_submit = document.querySelector("#btn-submit");
const form = document.querySelector("#form");



form.addEventListener("submit", (e) => {

    e.preventDefault();

    if (!name.value.trim()) {	
        $("#text_validation").removeClass("hidden");
      return;
    }

    if (!email.value.trim()) {
        $("#text_validation").removeClass("hidden");
      return;
    }

    if (!affair.value.trim()) {
        $("#text_validation").removeClass("hidden");
      return;
    }

    if (!message.value.trim()) {
        $("#text_validation").removeClass("hidden");
      return;
    }

  
    $("#text_validation").addClass("hidden");

    firebase
      .firestore()
      .collection(`contactanos`)
      .add({
        name: name.value,
        email: email.value,
        affair: affair.value,
        message: message.value,
      })
      .then((res) => {
        $("#modal_success").modal("show");
      })
      .catch((e) => {
        console.log(e);
        $("#modal_failed").modal("show");
      });
      name.value = "";
      email.value = "";
      affair.value = "";
      message.value = "";


  });


