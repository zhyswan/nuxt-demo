export default defineNuxtRouteMiddleware((to, from) => {
  console.log("auth middel to:", to);
  console.log("auth middel from:", from);
  // return navigateTo(to.path);
});
