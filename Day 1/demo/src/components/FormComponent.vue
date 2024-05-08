<template>
  <div class="page-container">
    <div class="animated-stars"></div>
    <div class="text-center mt-5">
      <div class="radio-input justify-content-center">
        <input
          type="radio"
          id="value-1"
          name="value-radio"
          value="value-1"
          :class="HeaderBtn"
          @click="checkValue('Form')"
        />
        <label for="value-1">Form</label>
        <input
          type="radio"
          id="value-2"
          name="value-radio"
          value="value-2"
          :class="HeaderBtn"
          @click="checkValue('Admins')"
        />
        <label for="value-2">Admin</label>
        <input
          type="radio"
          id="value-3"
          name="value-radio"
          value="value-3"
          :class="HeaderBtn"
          @click="checkValue('Users')"
        />
        <label for="value-3">User</label>
       <router-link  to="/products">
        <input
          type="radio"
          id="value-4"
          name="value-radio"
          value="value-4"
          :class="HeaderBtn"
          @click="checkValue('Products')"
        />
        <label for="value-4">Products</label>
      </router-link>
      </div>
    </div>
    <div v-if="btn === 'Admins'">
      <AdminsComponent :filterAdmins="filterAdmins" @deletingAdmin="DeleteAdmin" />
    </div>
    <div v-else-if="btn === 'Users'">
      <UsersComponent :filterUsers="filterUsers" @deletingUser="DeleteUser" />
    </div>
    <div v-else class="form-container">
      <!-- Form Structure -->
      <form class="form card" @submit.prevent="AddNew">
        <div class="card_header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
            ></path>
          </svg>
          <h1 class="form_heading">Registration</h1>
        </div>
        <div class="field">
          <label for="name">Name</label>
          <input
            class="input"
            name="name"
            type="text"
            placeholder="Enter Name"
            id="name"
            v-model.trim.lazy="formValues.name"
          />
        </div>
        <div class="field">
          <label for="age">Age</label>
          <input
            class="input"
            name="age"
            type="number"
            placeholder="Enter Age"
            id="age"
            v-model.number.lazy="formValues.age"
          />
        </div>
        <div class="field">
          <label for="role">Role</label>
          <div class="custom-select">
            <select v-model.lazy="formValues.role" name="role">
              <option disabled selected value="">Choose Role</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>
        </div>
        <div class="field">
          <button class="button" id="add" type="submit">ADD</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AdminsComponent from "./AdminsComponent.vue";
import UsersComponent from "./UsersComponent.vue";

export default {
  name: "FormComponent",
  components: {
    AdminsComponent,
    UsersComponent,
  },
  data() {
    return {
      btn: "Form",
      formDataArray: [],
      formValues: {
        name: "",
        age: "",
        role: "",
      },
    };
  },
  methods: {
    AddNew() {
      this.formDataArray.push(this.formValues);
      this.formValues = {
        name: "",
        age: "",
        role: "",
      };
    },
    checkValue(val) {
      if (val === "Form") this.btn = "Form";
      else if (val === "Admins") this.btn = "Admins";
      else if (val === "Users") this.btn = "Users";
      else this.btn = "Form";
    },
    DeleteAdmin(index) {
  this.formDataArray.forEach((elem ,i)=>{
    if(elem.name==this.filterAdmins[index].name && elem.age==this.filterAdmins[index].age && elem.role==this.filterAdmins[index].role )
  {
    this.formDataArray.splice(i , 1)
    return;
  }
  })
    },
    DeleteUser(index) {
      this.formDataArray.forEach((elem ,i)=>{
    if(elem.name==this.filterUsers[index].name && elem.age==this.filterUsers[index].age && elem.role==this.filterUsers[index].role )
  {
    this.formDataArray.splice(i , 1)
    return;
  }
  })
    },
  },
  computed: {
    filterAdmins() {
      return this.formDataArray.filter((d) => d.role === "Admin");
    },
    filterUsers() {
      return this.formDataArray.filter((d) => d.role === "User");
    },
  },
};
</script>

<style scoped>
.page-container {
  background-color: rgba(0, 0, 0, 0.9);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.radio-input {
  display: flex;
  flex-direction: row;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  color: rgb(172, 36, 36);
  font-weight: 600;
}

.radio-input input[type="radio"] {
  display: none;
}

.radio-input label {
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin-right: 12px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.radio-input label:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.radio-input label:before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid white;
  transition: all 0.3s ease-in-out;
}

.radio-input input[type="radio"]:checked + label:before {
  background-color: white;
  top: 0;
}

.radio-input input[type="radio"]:checked + label {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border-color: white;
  animation: radio-translate 0.5s ease-in-out;
}

@keyframes radio-translate {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateX(0);
  }
}

.form {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.card_header {
  display: flex;
  align-items: center;
}

.card svg {
  color: white;
  margin-bottom: 20px;
  margin-right: 5px;
}

.form_heading {
  padding-bottom: 20px;
  font-size: 21px;
  color: white;
}

.field {
  padding-bottom: 10px;
}

.input,
.custom-select select,
.button {
  border: none;
  border-radius: 5px;
  background-color: rgba(35, 6, 68, 0.1);
  padding: 10px;
  width: 100%;
  color: rgb(15, 10, 10);
  transition: background-color 0.3s ease;
}

.input:focus,
.custom-select select:focus,
.button:focus {
  outline: none;
}

.input::placeholder,
.custom-select select::placeholder,
.button::placeholder {
  color: white;
}

.input:hover,
.custom-select select:hover,
.button:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.custom-select select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M7 10l5 5 5-5H7z' fill='currentColor'/%3E%3C/svg%3E");
  background-position: right 10px center;
  background-repeat: no-repeat;
  padding-right: 30px;
}

.custom-select select::-ms-expand {
  display: none;
}
</style>
