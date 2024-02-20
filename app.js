    var selectedButtons = [];
    var counterElement = document.getElementById("counter");
    var seatsElement = document.getElementById("seats");
    var clickedList = document.getElementById("clickedList");
    var totalPriceElement = document.getElementById("totalPrice");
    var availableSeats = 40;

    function updateCounter() {
      counterElement.textContent = selectedButtons.length;
    }

    function updateSeats() {
      availableSeats = 40 - selectedButtons.length;
      seatsElement.textContent = availableSeats;
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
        paragraph.textContent = buttonName + " Economy";
        clickedList.appendChild(paragraph);
      }
    }

    function updateTotalPrice() {
      var totalPrice = selectedButtons.length * 550;
      totalPriceElement.textContent = totalPrice;
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
        clickedList.innerHTML = clickedList.innerHTML.replace(button.textContent + " Economy", "");
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

    var fixedTotalPrice = parseFloat(document.getElementById("totalPrice").innerText);
  
    function applyCoupon() {
    var couponCodeInput = document.getElementById("couponCode").value;

    if (couponCodeInput === "new15") {
      var discount = fixedTotalPrice * 0.15;
    } else if (couponCodeInput === "new20") {
      var discount = fixedTotalPrice * 0.20;
    } else {
      alert("Invalid coupon code. Please enter 'new15' or 'new20'.");
      return;
    }
    var grandTotal = fixedTotalPrice - discount;
    document.getElementById("grandTotal").innerHTML = grandTotal.toFixed(2);
  }

  