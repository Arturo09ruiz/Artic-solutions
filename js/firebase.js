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
        console.log("input name vacio");
      return;
    }

    if (!email.value.trim()) {
        console.log("input email vacio");
      return;
    }

    if (!affair.value.trim()) {
        console.log("input affair vacio");
      return;
    }

    if (!message.value.trim()) {
        console.log("input message vacio");
      return;
    }

  




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
      });
      name.value = "";

  });


