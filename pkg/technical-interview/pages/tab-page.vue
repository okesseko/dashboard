<script lang="ts">
import Vue from 'vue';
import Tabbed from '@shell/components/Tabbed/index.vue';
import Tab from '@shell/components/Tabbed/Tab.vue';

interface Data {
  counter: number; currentTime: string; newTimeStatus: string; uploadedFile: string, palindromesResult: string;
}

interface UpdateCurrentTimeFormElements extends HTMLFormControlsCollection {
  hours: HTMLInputElement;
  minutes: HTMLInputElement;
  seconds: HTMLInputElement;
}

interface PalindromeCheckFormElements extends HTMLFormControlsCollection {
  palindrome: HTMLInputElement;
}

// Data, Methods, Computed, Props
export default Vue.extend<Data, any, any, any>({
  components: {
    Tabbed,
    Tab,
  },

  layout: 'plain',

  data() {
    return {
      counter: 0, currentTime: '', newTimeStatus: '', uploadedFile: '', palindromesResult: ''
    };
  },

  computed: {
    formattedTime() {
      if (!this.currentTime) {
        return '';
      }

      const year = this.currentTime.getFullYear();
      const month = this.currentTime.getMonth() + 1;
      const date = this.currentTime.getDate();
      const hour = this.currentTime.getHours();
      const minute = this.currentTime.getMinutes();

      return `${ year }/${ month }/${ date } ${ hour }:${ minute }`;
    }
  },

  methods: {
    increaseCounter() {
      this.counter++;
    },
    onSubmitUpdateCurrentTime(e: Event) {
      const newDate = new Date(this.currentTime);
      const elements = (e.target as HTMLFormElement).elements as UpdateCurrentTimeFormElements;

      newDate.setHours(newDate.getHours() + Number(elements.hours.value || 0));
      newDate.setMinutes(newDate.getMinutes() + Number(elements.minutes.value || 0));
      newDate.setSeconds(newDate.getSeconds() + Number(elements.seconds.value || 0));

      if (newDate > this.currentTime) {
        this.newTimeStatus = 'after';
      } else if (newDate < this.currentTime) {
        this.newTimeStatus = 'before';
      } else {
        this.newTimeStatus = 'same';
      }

      this.currentTime = newDate;
    },

    uploadFile(inputEvent: Event) {
      const files = (inputEvent.target as HTMLInputElement).files;

      if (!files || !files.length) {
        return;
      }
      const fileReader = new FileReader();

      fileReader.onload = (fileEvent) => {
        if (typeof fileEvent.target !== 'string') {
          return;
        }

        const result = JSON.parse((fileEvent.target as { result: string }).result);

        this.uploadedFile = result;
      };

      fileReader.readAsText(files.item(0) as File);
    },
    onSwitchKeyAndValueClick() {
      if (this.uploadedFile) {
        this.uploadedFile = this.switchKeyAndValue(this.uploadedFile);
      }
    },
    switchKeyAndValue(obj: Object) {
      const newObj: { [key: string]: any; } = {};

      Object.entries(obj).forEach(([key, value]) => {
        if (Array.isArray(value) || typeof value === 'function') {
          newObj[key] = value;
        } else if (typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean') {
          newObj[value.toString()] = key;
        } else if (typeof value === 'object' && !value) {
          newObj['null'] = key;
        } else if (typeof value === 'object') {
          if (Object.keys(value).length === 0) {
            newObj[key] = value;
          } else {
            newObj[key] = this.switchKeyAndValue(value);
          }
        }
      });

      return newObj;
    },
    onSubmitPalindromeCheck(e: Event) {
      const inputValue = ((e.target as HTMLFormElement).elements as PalindromeCheckFormElements).palindrome.value;

      if (!inputValue) {
        return;
      }
      const palindromes = inputValue.split(',');

      this.palindromesResult = palindromes.map(this.palindromeCheck).join(',');
    },
    palindromeCheck(palindrome: string) {
      const str = palindrome.toLowerCase().replace(/\s/g, '');
      const reverseStr = str.split('').reverse().join();

      return str === reverseStr;
    }
  },

  mounted() {
    if (!this.currentTime) {
      this.currentTime = new Date();
    }
  },

});
</script>

<template>
  <div>
    <div>
      <h1>{{ t('interview.tabPage.title') }}</h1>
    </div>
    <div>
      <Tabbed>
        <Tab
          name="Tab 1"
          :weight="4"
        >
          <p> counter: {{ counter }}</p>
          <button @click="increaseCounter">
            increase counter
          </button>
        </Tab>
        <Tab
          name="Tab 2"
          :weight="3"
        >
          <p> current time {{ formattedTime }}</p>
          <p v-if="newTimeStatus">
            new date is {{ newTimeStatus }} the current time
          </p>
          <form
            name="updateTime"
            @submit.prevent="onSubmitUpdateCurrentTime"
          >
            <label>hours</label>
            <input
              id="hours"
              type="number"
              name="hours"
            >
            <label>minutes</label>
            <input
              id="minutes"
              type="number"
              name="minutes"
            >
            <label>seconds</label>
            <input
              id="seconds"
              type="number"
              name="seconds"
            >
            <button type="submit">
              update current time
            </button>
          </form>
        </Tab>
        <Tab
          name="Tab 3"
          :weight="2"
        >
          <input
            type="file"
            value="uploadedFile"
            accept="application/JSON"
            @change="uploadFile"
          >
          <div v-if="uploadedFile">
            <pre>{{ uploadedFile }}</pre>
            <button @click="onSwitchKeyAndValueClick">
              switch key and value
            </button>
          </div>
        </Tab>
        <Tab
          name="Tab 4"
          :weight="1"
        >
          <form
            name="palindromeCheck"
            @submit.prevent="onSubmitPalindromeCheck"
          >
            <label>type palindrome separated by ","</label>
            <input
              type="text"
              name="palindrome"
              placeholder="test,aba,cc11cc"
            >
            <button type="submit">
              check is palindrome or not
            </button>
            <p>result: {{ palindromesResult }}</p>
          </form>
        </Tab>
      </Tabbed>
    </div>
  </div>
</template>
