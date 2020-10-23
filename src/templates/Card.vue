<template>

  <Layout>

  </Layout>

</template>

<page-query>
query ($id: ID!) {
  card(id: $id) {
    id
    name
    url
    cat
    cover
    descr
  }
}
</page-query>