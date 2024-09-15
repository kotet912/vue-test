const Counter = {
  data () {
    return {
      name: '',
      price: '',
      quantity: '',

      order: []
    }

  },
  methods: {
    addProduct (e) {
      e.preventDefault();

      this.order.push({
        id: Date.now(),
        name: this.name,
        price: Number(this.price),
        quantity: Number(this.quantity),
      })

      this.name = "";
      this.price = "";
      this.quantity = "";


    }
  },
  computed: {
    totalPrice () {
      let totalPrice = 0;
      for (const product of this.order) {
        totalPrice = +  (product.price * product.quantity);
      }
      return totalPrice;
    },
    sortOrder () {
      return this.order.sort((a, b) => b.price - a.price);
    },
  },

}
Vue.createApp(Counter).mount('#app');