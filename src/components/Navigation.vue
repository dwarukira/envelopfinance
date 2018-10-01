<template>
    <ul>
        <li><router-link to="/" exact="">Accounts</router-link></li>
        <li><router-link to="/budget" exact="">Budgets</router-link></li>
        <li><router-link to="/transactions" exact="">Transactions</router-link></li>
    </ul>
</template>

<script>
export default {
    name : "Navigation"
}
</script>

<style>
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        margin: 20px;
    }

    li {
        padding: 20px;
    }

    a {
        text-decoration: none;
        font-size: 1.6em;
        color: #fff;
    }
</style>
