document.getElementById("liveAlertBtn").addEventListener("click", function () {
    const trackingCode = generateTrackingCode();
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  
    function showAlert(message) {
      const alert = document.createElement("div");
      alert.className = "alert alert-success";
      alert.role = "alert";
      alert.innerText = message;
      alertPlaceholder.appendChild(alert);
  
      
    }

    /* nao alterar a função acima */
  
    function generateTrackingCode() {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let code = "";
      for (let i = 0; i < 10; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return code;
    }

    showAlert(`Seu código de rastreio é: ${trackingCode}`);
  });
  