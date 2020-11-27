<template>
<nav>
      <div class="nav-container">
        <div id="logo">
          <router-link to="/">
            <img src="/assets/img/wish-logo-800.png" alt="logo" />
          </router-link>
        </div>
        <ul id="icons">
          <li>
            <router-link to="/user-settings">
              <i class="fas fa-user"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/wish-list">
              <i class="fas fa-heart"></i>
            </router-link>
            <span id="nav-notif"></span>
          </li>
          <li>
            <router-link to="/shopping-cart">
              <i class="fas fa-shopping-cart"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
import './header.css'

export default {
  name: 'Header'
}
</script>