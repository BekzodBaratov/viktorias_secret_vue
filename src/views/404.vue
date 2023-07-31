<template>
  <div class="containerrr">
    <span class="left">404</span><br />
    <div class="pulse"></div>
    <i class="fas fa-heart"></i>
    <span class="right">Are you lost? <RouterLink to="/" class="link">go back</RouterLink></span>
  </div>
</template>

<style scoped>
:root {
  --purple: #ab6fbc;
  --lightpurple: #cd99db;
  --pink: #f4b0cc;
}

.containerrr {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 100vh;
  flex-direction: column;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

.left {
  font-size: 200px;
  color: #ab6fbc;
  text-shadow: 1px 1px 10px rgba(#cd99db, 1);
  animation: 1.2s ease-out 0s 1 slideInFromLeft;
  margin-bottom: 70px;
}

.right {
  animation: 1.2s ease-out 0s 1 slideInFromRight;
  color: #ab6fbc;
}

@keyframes grow {
  0%,
  100% {
    transform: scale(1);
    color: #f4b0cc;
  }
  10% {
    color: #f4b0cc;
  }
  30% {
    transform: scale(1.2);
    color: #cd99db;
  }
}

.fa-heart {
  margin-top: 5px;
  margin-bottom: 5px;
  color: #f4b0cc;
  font-size: 50px;
  top: 200px;
  animation: grow 1s ease infinite;
}
</style>
