<template>

  <Layout>
    
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
  }
}
</page-query>