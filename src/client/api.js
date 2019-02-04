export default {

  gets(url) {
    return {
      getForm: async (id) =>{
        const response = await fetch(`/api/${url}/${id}`);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
      }
    }
  }
}
