<template>

  <Layout>
    <h1 class="mt-2 mb-8 text-6xl leading-10 font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-tight">{{ $page.link.name }}</h1>
    <ul>
      <li>{{ $page.link.url }}</li>
      <li>{{ $page.link.type }}</li>
      <li>{{ $page.link.cover }}</li>
    </ul>
  </Layout>

</template>

<page-query>
query ($id: ID!) {
  card(id: $id) {
    id
    name
    url
    cat
    type
    cover
    descr
    name
  }
}
</page-query>