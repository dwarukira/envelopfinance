<template>
    <div>
        <div class="account_nav">
            <h2>BUDGETS</h2>
            <router-link to="/create"><button class="button is-primary">Add Budget + </button></router-link>
        </div>

        <table class="table is-bordered  is-hoverable ">
            <thead>
                <th>Budget month</th>
                <th>Budgeted</th>
                <th>Spent</th>
                <th>Income</th>
                <th>Balance</th>
                <th></th>
            </thead>
            <tbody>
                <tr>
                    <td>September 2018</td>
                    <td>$ 1000</td>
                    <td>$ 1000</td>
                    <td>$ 1000</td>
                    <td>$ 1000</td>
                    <td>
                        <button class="button is-primary">Edit
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>September 2018</td>
                    <td>$ 1000</td>
                    <td>$ 1000</td>
                    <td>$ 1000</td>
                    <td>$ 1000</td>
                    <td>
                        <button class="button is-primary">Edit
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'BudgetList',
}
</script>

<style>

</style>
