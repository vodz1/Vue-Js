<template>
    <div class="container col-8 col-md-6" style="margin-top: 100px">
      <table class="table table-bordered text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody v-if="filterUsers.length !== 0">
          <tr v-for="(user, index) in filterUsers" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.role }}</td>
            <td>
              <button class="btn btn-warning" @click="$emit('deletingUser', index)">
                Del
              </button>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td :class="emptyRowStyle" colspan="4">No Data in User Table</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default (await import("vue")).defineComponent({
    name: "UsersComponent",
    emits:['deletingUser'],
    props: ["filterUsers"],
    data() {
      return {
        emptyRowStyle: "emptyRow",
      };
    },
  });
  </script>
  
  <style scoped>
  .table {
    font-family: Avenir, Helvetica, Arial, sans-serif, Poppins;
    background: #000; /* Set background color to black */
    border: 1px solid rgb(144, 201, 12);
    box-shadow: 10px 10px 64px 0px rgba(180, 180, 207, 0.75);
    border-radius: 7px;
    color: #fff; /* Set default text color to white */
  }
  
  th {
    color: #fff;
    font-size: larger;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add text shadow */
  }
  
  td {
    color: #fff; /* Set text color */
  }
  
  tr:first-child {
    background-color: #000; /* Set background color for first row */
    color: #fff; /* Set text color for first row */
  }
  
  .emptyRow {
    color: #171b18;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  
  button {
    border: none;
    color: #000; /* Set button text color to black */
    width: 60px;
    height: 30px;
  }
  </style>
  