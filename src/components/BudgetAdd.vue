<template>
    <div>
        <form v-on:submit.prevent="addBudget(date, price)">
             <label for="month" class="label">Month</label>
            <p class="control has-icon has-addons">
                <datepicker name="month" input-class="input" format="MMMM yyyy" v-model="date"></datepicker>
                <span class="icon">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                </span>
                <button class="button is-primary">Submit</button>
            </p>
            <span class="help" v-if="!editing">To add budget items you must first save the budget.</span>
        </form>
    </div>
</template>
<script>

import Datepicker from 'vuejs-datepicker';
export default {
    name:"BudgetAdd",
    components: {
        Datepicker
    },
    data() {
        return {
            date: new Date(),
            price:""
        }
    },
   
}
</script>

<style>

</style>
