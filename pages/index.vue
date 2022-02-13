<template>
  <div class="container">
    <form @submit.prevent="addTodoFormPage(todoInput)" class="row">
      <div class="form-group col-6 offset-3">
        <h2 for="inputTodo">Todo</h2>
        <ul>
          <li v-for="(todo, index) in getTodos" :key="index">
            {{ todo }}
            <button @click="deleteTodo(index)">
              削除
            </button>
          </li>
        </ul>
        <input
          v-model="todoInput"
          type="text"
          class="form-control"
          id="inputTodo"
          placeholder="Todoを入力..."
          />
      </div>
      <button type="submit" class="col-6 offset-3 btn btn-primary btn-block">追加</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoInput: ""
    }
  },
  methods: {
    addTodoFormPage() {
      this.$store.dispatch("addTodoFormActions", this.todoInput);
      this.todoInput = "";
    },
    deleteTodo(index) {
      this.$store.dispatch("deleteTodo", index)
    }
  },
  computed: {
    getTodos() {
      return this.$store.getters.getTodos;
    }
  }
}
</script>
