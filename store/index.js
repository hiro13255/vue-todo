import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      // 保存するデータの配列や変数を定義する。
      todos: []
    },
    getters: {
      // データを取得する時に使用する関数？を定義する。
      getTodos: state => state.todos
    },
    mutations: {
      // stateに何か変更をする時に必要な関数を定義する。
      addTodoFormMutations(state, todo) {
        state.todos.push(todo)
      },
      deleteTodo(state, index) {
        state.todos.splice(index,1);
      }
    },
    actions: {
      // 実際に何かを行う時に使用する処理
      addTodoFormActions({commit}, todoInput) {
        commit("addTodoFormMutations", todoInput)
      },
      deleteTodo({commit}, index) {
        commit("deleteTodo", index)
      }
    }
  });
};

export default createStore;
