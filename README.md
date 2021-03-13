### custom-hook-fetch-data

Custom hook using [Axios](https://github.com/axios/axios) to get and post method.

[Demo](https://dnio9.csb.app/) 
<em>CodeSandBox</em>



---------
##### Custom hook component `useAxiosData.js`

#####  import it using following.
`import useAxiosData from "./useAxiosData";`

##### Response Example
> ##### On get: 
> returns array of object containing `id` and `city` from mock server.

> ##### On post: 
> send array of object containing `city` to mock server.

---------------------------

###### Customize return Data

Edit `useAxiosData.js` custom hook component accourding to your need.

```
export default function useAxiosData(url) {
  const [addresses, setAddresses] = useState([]);
  //.... add different state here
  // for example. error, isloading, response status
  
  ... do stuff
  
  
  //return { ...data }
}
```
