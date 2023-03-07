<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="3">
          <ul>
            <li>
              <nuxt-link to="/home/sidebar">
                <font-awesome-icon icon="fa-solid fa-house" />
                <span>home</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/home/sidebar/profile">
                <font-awesome-icon icon="fa-solid fa-user" />
                <span>profile</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/home/sidebar/news">
                <font-awesome-icon icon="fa-solid fa-newspaper" />
                <span>news</span>
              </nuxt-link>
            </li>
          </ul>
        </b-col>
        <b-col cols="9">
          <div>
            home pages use nuxt-child
          </div>
          <nuxt-child />
        </b-col>
      </b-row>
    </b-container>


  </div>
</template>

<style scoped lang="scss">
  ul{
    li{
      padding: 5px 10px;
      background-color: var(--color-7);
      border-bottom: 1px solid var(--color-5);
      color: black;
      transition: 0.25s ease-in-out;
      cursor: pointer;
      a{
        text-decoration: none;
        width: 100% !important;
        display: block;
      }
    }
    li:hover{
      background-color: var(--color-3);
      a{
        color: var(--color-8);
        transition: 0.25s ease-in-out;
      }

    }
  }
</style>
