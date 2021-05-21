<template>
  <b-container fluid="md">
    <b-card align-v="center">
      <h1>App Customers</h1>
      <div v-for="(customer, index) in customers" :key="index">
        Name: {{ customer.name }}, Email: {{ customer.email }}, 
        <button @click="$delete(customers, index)">Delete Customer</button></div>
    </b-card>
    <b-card>
    <form v-on:submit.prevent="addCustomer">
      <input v-model="newCustomer.Name" type="text" placeholder="Name">
      <input v-model="newCustomer.Email" type="email" placeholder="Email">
      <button type="submit">Add customer</button>
    </form>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
        newCustomer: {
            Name: "",
            Email: "",
        },
        customers: [
        {
          id: 1,
          name: "Marko",
          email: "Marko@test.com",
        },
        {
          id: 2,
          name: "Jovan",
          email: "Jovan@test.com",
        },
        {
          id: 3,
          name: "Milos",
          email: "Milos@test.com",
        },
        {
          id: 4,
          name: "Matija",
          email: "Matija@test.com",
        },
        {
          id: 5,
          name: "Borivoje",
          email: "Borivoje@test.com",
        },
      ],
    };
  },
  methods: {
      addCustomer(){
          const lastItem = this.customers[this.customers.length - 1];
          const newCust = {
              id: lastItem.id + 1,
              name: this.newCustomer.Name,
              email: this.newCustomer.Email,
          };
          this.customers.push(newCust);
          this.newCustomer.Name = "";
          this.newCustomer.Email = "";
      }
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

