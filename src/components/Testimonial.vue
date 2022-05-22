<template>
  <li class="todo">
    <div class="content">
      <h5 v-if="!isEdit && !todo.is_done">{{ todo.text }}</h5>
      <h5 v-if="!isEdit && todo.is_done" class="is-completed">
        {{ todo.text }}
      </h5>
      <input
        v-if="isEdit"
        v-model="editTodo"
        @keyup.enter="EDIT_TODO_VALUE(index, editTodo)"
      />
    </div>
    <div class="content text-right">
      <button
        class="btn btn-outline-primary"
        @click="changeIsEdit"
        style="margin-right: 20px"
      >
        Edit
      </button>
      <button class="btn btn-outline-danger" @click="DELETE_TODO(index)">
        Delete
      </button>
    </div>
  </li>
</template>

<script>
import gql from "graphql-tag";
export default {
  props: {
    todo: Object,
    index: Number,
  },
  data() {
    return {
      editTodo: "",
      isEdit: false,
    };
  },
  created() {
    this.changeEdit();
  },
  methods: {
    changeEdit() {
      this.editTodo = this.todo.text;
    },
    changeIsEdit() {
      this.isEdit = !this.isEdit;
      this.changeEdit();
    },
    async EDIT_TODO_VALUE(index, value) {
      await this.$apollo.mutate({
        mutation: gql`
          mutation ($value: String, $index: Int) {
            update_todolist_todo(
              where: { id: { _eq: $index } }
              _set: { text: $value }
            ) {
              returning {
                id
              }
            }
          }
        `,
        variables: {
          index,
          value,
        },
      });
      this.changeIsEdit();
    },
    async EDIT_DONE(index, value) {
      await this.$apollo.mutate({
        mutation: gql`
          mutation ($value: Boolean, $index: Int) {
            update_todolist_todo(
              where: { id: { _eq: $index } }
              _set: { is_done: $value }
            ) {
              returning {
                id
              }
            }
          }
        `,
        variables: {
          index,
          value,
        },
      });
      if (this.isEdit) {
        this.changeIsEdit();
      }
    },
    async DELETE_TODO(id) {
      await this.$apollo.mutate({
        mutation: gql`
          mutation ($id: Int) {
            delete_todolist_todo(where: { id: { _eq: $id } }) {
              returning {
                id
              }
            }
          }
        `,
        variables: {
          id,
        },
      });
    },
  },
};
</script>

<style scoped>
.todo {
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
h5 {
  margin-left: 10px;
  padding: 0px;
  color: rgb(0, 110, 255);
}
li {
  list-style-type: none;
  width: 70%;
  margin: auto;
  padding: 15px 0;
  background-color: rgb(250, 250, 250);
  border-radius: 10px;
}
.content {
  flex: 1;
  margin-right: 10px;
}
.content > i {
  margin: 0 6px;
}
.content > input {
  font-size: 1em;
  border-style: hidden;
  padding: 5px 0;
  text-align: center;
  border-radius: 5px;
}
</style>
