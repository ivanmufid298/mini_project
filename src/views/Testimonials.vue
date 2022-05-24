<template>
  <div>
    <Header /> <br />
    <div class="container text-center">
      <h1
        style="
          background-color: rgb(0, 110, 255);
          padding: 15px;
          color: white;
          border-radius: 15px;
        "
      >
        What People say
      </h1>
    </div>
    <div
      class="card border-0 shadow my-5"
      style="max-width: 1600px; margin: auto; width: 1600px; height: auto"
    >
      <img
        src="https://ichef.bbci.co.uk/news/976/cpsprodpb/698D/production/_112412072_gettyimages-1158282318.jpg"
        alt=""
        style="height: 500px"
      />
      <div id="todo">
        <div class="todo-list mt-5">
          <template>
            <div v-if="$apollo.queries.listTodo.error">Ups Error</div>

            <div v-else-if="$apollo.queries.listTodo">
              <ul>
                <Testimonial
                  v-for="(todo, index) in listTodo"
                  :key="index"
                  :todo="todo"
                  :index="todo.id"
                />
              </ul>
            </div>
            <div v-else class="loading" />
            <div class="todo-form mb-5">
              <input
                v-model="todoBaru"
                name="todo"
                placeholder="Add Review"
                @keyup.enter="TAMBAH_TODO(todoBaru)"
                v-if="!isSearch"
                autocomplete="off"
              />
            </div>
          </template>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
<script>
import gql from "graphql-tag";
import Testimonial from "@/components/Testimonial.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  apollo: {
    listTodo: {
      query() {
        if (this.search != "") {
          return gql`
            query ($id: Int) {
              todolist_todo(where: { id: { _eq: $id } }) {
                id
                text
                is_done
              }
            }
          `;
        } else {
          return gql`
            query {
              todolist_todo {
                id
                text
                is_done
              }
            }
          `;
        }
      },
      update: (data) => data.todolist_todo,
      variables() {
        if (this.search != "") {
          return {
            id: parseInt(this.search),
          };
        }
      },
      subscribeToMore: {
        document: gql(`
                subscription {
                  todolist_todo {
                    id
                    text
                    is_done
                  }
                }
          `),
        updateQuery: (prev, { subscriptionData }) => {
          return {
            todolist_todo: subscriptionData.data.todolist_todo,
          };
        },
      },
    },
  },
  data() {
    return {
      todoBaru: "",
      isSearch: false,
      search: "",
    };
  },
  components: {
    Testimonial,
    Header,
    Footer,
  },
  methods: {
    async TAMBAH_TODO(text) {
      if (this.todoBaru != "") {
        await this.$apollo.mutate({
          mutation: gql`
            mutation ($text: String) {
              insert_todolist_todo(objects: { text: $text }) {
                returning {
                  id
                }
              }
            }
          `,
          variables: {
            text,
          },
        });
        this.todoBaru = "";
      }
    },
    CHANGE_BUTTON() {
      this.isSearch = !this.isSearch;
    },
  },
};
</script>
<style scoped>
#todo {
  padding: 10px 0;
}
input {
  margin-top: 20px;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  outline: none;
  font-size: 1.3em;
  padding: 15px 0;
  text-align: center;
  width: 60%;
}
.todo-form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
button {
  margin-top: 10px;
  padding: 10px;
  background-color: rgb(180, 199, 211);
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  outline: none;
}
</style>
