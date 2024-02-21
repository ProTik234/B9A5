   function moveToSection(){
    document.getElementById('section').scrollIntoView({ behavior: 'smooth' });
   }
   
   var selectedButtons = [];
    var counterElement = document.getElementById("counter");
    var seatsElement = document.getElementById("seats");
    var clickedList = document.getElementById("clickedList");
    var totalPriceElement = document.getElementById("totalPrice");
    var availableSeats = 40;


    function applyCoupon() {
      var fixedTotalPrice = parseFloat(document.getElementById("totalPrice").innerText);
      var couponCodeInput = document.getElementById("couponCode").value;
  
      if (couponCodeInput === "NEW15") {
        var discount = fixedTotalPrice * 0.15;
        
    
      } else if (couponCodeInput === "Couple 20") {
        var discount = fixedTotalPrice * 0.20;
      } else {
        alert("Invalid coupon code. Please enter 'NEW15' or 'Couple 20'.");
        return;
      }
      var grandTotal = fixedTotalPrice - discount;
      document.getElementById("grandTotal").innerText = " BDT " + grandTotal.toFixed(2);
    }
  
    function updateCounter() {
      counterElement.textContent = " " + selectedButtons.length;
    }

    function updateSeats() {
      availableSeats = 40 - selectedButtons.length;
      seatsElement.textContent = " " + availableSeats;
    }

    function resetSelection() {
      selectedButtons.forEach(function (btn) {
        btn.classList.remove("selected");
      });
      selectedButtons = [];
      clickedList.innerHTML = "";
      updateCounter();
      updateSeats();
      updateTotalPrice();
    }

    function updateList(buttonName) {
      if (!clickedList.innerHTML.includes(buttonName)) {
        var paragraph = document.createElement("p");
        paragraph.textContent = buttonName + " Economy BDT 550";
        clickedList.appendChild(paragraph);
      }
    }

    function updateTotalPrice() {
      totalPrice = selectedButtons.length * 550;
      totalPriceElement.textContent = " " + totalPrice;
    }

    function handleClick(button) {
      if (selectedButtons.length >= 4) {
        resetSelection();
      }

      var index = selectedButtons.indexOf(button);

      if (index === -1) {
        if (selectedButtons.length < 4 && availableSeats > 0) {
          selectedButtons.push(button);
          button.classList.add("selected");
          updateList(button.textContent);
        } 
      } else {
        selectedButtons.splice(index, 1);
        button.classList.remove("selected");
        clickedList.innerHTML = clickedList.innerHTML.replace(button.textContent + " Economy BDT 550", "");
      }

      updateCounter();
      updateSeats();
      updateTotalPrice();
    
    }
    
    var buttons = document.querySelectorAll(".btn");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        handleClick(button);
      });
    });

 

  document.getElementById("numberInput").addEventListener("input", function() {
      var numberInput = document.getElementById("numberInput").value;
      var continueButton = document.getElementById("continueButton");

      if (numberInput.length === 11) {
          continueButton.removeAttribute("disabled");
      } else {
          continueButton.setAttribute("disabled", "true");
      }
  });
 
   const newContinueButton = document.getElementById('continueButton');
   const modalContainer = document.getElementById('modalContainer');
   const close = document.getElementById('close');

   newContinueButton.addEventListener('click',() => {
    modalContainer.classList.add('show');
   });

   close.addEventListener('click',() => {
    modalContainer.classList.remove('show');
   });
   
  