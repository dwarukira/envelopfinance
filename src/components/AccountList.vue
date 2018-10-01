<template>
    <div class="accounts">

        <div class="account_nav">
             <h2>ACCOUNTS</h2>
             <router-link to="/accounts/create" exact><button class="button is-primary">Add Account + </button></router-link>
        </div>

          <table class="table is-bordered  is-hoverable ">
              <thead>
                  <th>Account Name </th>
                  <th>Balance</th>
                  <th></th>
              </thead>
              <tbody>
                <tr v-for="account in accounts" :key="account.key">
                    <td>{{ account.name }}</td>
                    <td>$ {{account.balance}} </td>
                    <td>
                        <button class="button is-primary"> Edit
                        </button>
                    </td>
                </tr>
              </tbody>
          </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:"AccountList",
    computed: {
       ...mapState({
            accounts: state => state.accounts
        }),
    },
}
</script>

<style>

    table {
        width: -webkit-fill-available;
    }

    .account_nav {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
</style>
