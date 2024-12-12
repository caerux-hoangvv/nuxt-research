// Ví dụ: Nếu đứng ở trang /fruit/apple 
// và chuyển hướng đến /fruit/banana 
// thì sẽ chuyển hướng đến /fruit/pineapple
export default defineNuxtRouteMiddleware((to, from) => {
    if (from.path == '/fruit/apple' && to.path === '/fruit/banana') {
        return navigateTo('/fruit/pineapple')
    }
})