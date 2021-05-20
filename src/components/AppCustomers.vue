<template>
    <div>
        <h1>App Customers</h1>
        <ul v-for="(customer,index) in customers" :key="index">
            <li>Name: {{customer.firstName}}, Email: {{customer.email}}</li>
            <button @click="$delete(customers, index)">Delete Customer</button>
        </ul>
        
    </div>
    
    <!--  Zadatak 2
●Postaviti niz customer-a u `data()` komponente `AppCustomers`
●Implementirati listanje kupaca
●Implementirati brisanje kupaca iz liste
●Komitovati urađeno -->
</template>

<script>
export default {
    data() {
        return {
            customers: [{
                firstName: 'Marko',
                email: 'Marko@test.com'
            }, {
                firstName: 'Jovan',
                email: 'Jovan@test.com'
            }, {
                firstName: 'Milos',
                email: 'Milos@test.com'
            }, {
                firstName: 'Matija',
                email: 'Matija@test.com'
            }, {
                firstName: 'Borivoje',
                email: 'Borivoje@test.com'
            }]
        }
    }
}
</script>

<style scoped>

</style>

