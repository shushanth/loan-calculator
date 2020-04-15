<template>
  <div class="loan_calc">
    <BaseTitle title="Loan calculator" level="medium" type="primary"/>
    <div class="loan_calc_form">
      <div class="amount">
        <BaseInput
          type="number"
          label="Amount"
          subLabel="(10 000 to 100 000)"
          :value="loanAmount"
          :errors="loanAmountInvalid"
          :focusOut="true"
          @blur="onLoanAmountDone"
          @onUpdate="onLoanAmount"
        />
      </div>
      <div class="duration">
        <BaseInput
          type="number"
          label="duration"
          subLabel="(1 to 5 years)"
          :value="duration"
          :errors="durationInvalid"
          @onUpdate="onDuration"
        />
      </div>
      <div class="submit">
        <BaseButton
          label="OK"
          type="primary"
          size="small"
          @onClick="onFormSubmit"
          :disabled="isFormSafe"
        />
      </div>
    </div>
    <div class="loan_calc_view">
      <div class="loan_calc_view_installment">
        <BaseTitle title="monthly installment" level="small" type="primary"/>
        <p>{{monthlyInstallment}}</p>
      </div>
      <div class="loan_calc_view_interest">
        <BaseTitle title="interest" level="small" type="primary"/>
        <p>{{interest}}%</p>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';

import mutationTypes from '@/store/mutation-types';
import {
  BaseInput,
  BaseButton,
  BaseTitle,
} from '@/components/shared'

export default {
  name: 'loanCalulator',
  components: {
    BaseInput,
    BaseButton,
    BaseTitle,
  },
  /** 
   * mapGetters and mapActions can be used as and when
   * file grows with more computed properties and actions
  */
  computed: {
    loanAmount: {
      get() {
        return this.$store.state.loanAmount;
      }
    },
    duration: {
      get() {
        return this.$store.state.duration;
      }
    },
    monthlyInstallment: {
      get() {
        return this.$store.state.monthlyInstallment;
      }
    },
    interest: {
      get() {
        return this.$store.state.interest
      }
    },
    isFormSafe: {
      get() {
        return this.$store.getters.isFormSafe;
      }
    },
    loanAmountInvalid: {
      get() {
        return {
          value: this.$store.getters.loanAmountInvalid
        }
      }
    },
    durationInvalid: {
      get() {
        return {
          value: this.$store.getters.durationInvalid
        }
      }
    }
  },
  methods: {
    onLoanAmount(amount) {
      this.$store.commit(mutationTypes.updateLoanAmount, amount);
    },
    onDuration(duration) {
      this.$store.commit(mutationTypes.updateDuration, duration);
    },
    onLoanAmountDone() {
      this.$store.commit(mutationTypes.handleAmountSuffix);
    },
    onFormSubmit() {
      this.$store.dispatch('CALC_LOAN_INSTALLMENT');
    }
  }
}
</script>
<style lang="scss">
@import 'styles/base.scss';
@import 'styles/init.scss';
.loan_calc {
  @include styles-flex(column);
  width: 800px;
  height: 500px;
  border: 1px solid $styles-color-gray-light;
  border-radius: 5px;
  margin: 20px auto;
  padding: 20px;

  &_form {
    @include styles-flex(row);
    > div {
      padding-right: 20px;
    }

    .amount, .duration {
      flex: 1;
    }

    .submit {
      align-self: center;
      margin-top: 25px;
    }
  }
  &_view {
    @include styles-flex(row);
    height: 100%;
    background: $styles-color-gray-below;
    padding: 20px;  

    &_installment {
      flex: 1;
    }

    &_interest {
      flex: 1;
    }
  }
}
</style>