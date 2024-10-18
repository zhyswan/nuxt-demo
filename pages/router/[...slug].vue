<template>
    <div>
        <h1>
            所有路由参数，匹配所有路由，但优先级比较低
            [...slug]
        </h1>
        <div>
            {{ $route.params.slug }}
        </div>
    </div>
</template>