import ApolloClient, { gql } from "apollo-boost";

async function makeGQLCall() {
 const gqlUrl = "https://countries.trevorblades.com/graphql";

 const client = new ApolloClient({
  uri: gqlUrl,
 });

 const json = await client.query({
  query: gql`
   {
    country(code: "NO") {
        name
        currency
        emoji
      }
    
   }
  `,
 });
console.log (json);
//  document.body.innerHTML = (json.data.country.name);

//  document.body.innerHTML = (json.data.country.emoji);
 
//  document.body.innerHTML = (json.data.country.native);

//  for (let i = 0; i < json.length; i++) {

    document.querySelector('.results').innerHTML += `
      <div class="card">
<div class="emoji"> ${json.data.country.emoji}</div>
<h2>${json.data.country.name}</h2>
<p>${json.data.country.currency}</p>
</div>
    `;
  }
// }


makeGQLCall();
