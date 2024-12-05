<template>
    <div class="checkout">
      <h5>Odaberite način plaćanja</h5>
      <div class="payment-options">
        <div
          v-for="option in paymentOptions"
          :key="option.id"
          :class="['payment-option', { selected: selectedOption === option.id }]"
          @click="selectPayment(option.id)"
        >
          <img :src="option.icon" :alt="option.label" class="payment-icon" />
          <span>{{ option.label }}</span>
        </div>
      </div>
      <div v-if="selectedOption" class="confirmation">
        <p>Odabrali ste način plaćanja: <strong>{{ getSelectedLabel }}</strong></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        paymentOptions: [
          {
            id: "online",
            label: "Online plaćanje",
            icon: "https://via.placeholder.com/50?text=Online",
          },
          {
            id: "pouzece",
            label: "Plaćanje pouzećem",
            icon: "https://via.placeholder.com/50?text=Alt",
          },
          {
            id: "paysafe",
            label: "Paysafe",
            icon: "https://via.placeholder.com/50?text=Paysafe",
          },
        ],
        selectedOption: null,
      };
    },
    methods: {
      selectPayment(optionId) {
        this.selectedOption = optionId;
      },
    },
    computed: {
      getSelectedLabel() {
        const selected = this.paymentOptions.find(
          (option) => option.id === this.selectedOption
        );
        return selected ? selected.label : "";
      },
    },
  };
  </script>
  
  <style scoped>
  .checkout {
    text-align: center;
    margin: 20px auto;
    padding: 20px;
    max-width: 500px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .payment-options {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
  }
  
  .payment-option {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    width: 120px;
  }
  
  .payment-option img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  
  .payment-option:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .payment-option.selected {
    border-color: #00796b;
    background-color: #e0f7fa;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  .confirmation {
    margin-top: 20px;
    padding: 10px;
    border-top: 1px solid #ddd;
  }
  </style>
  