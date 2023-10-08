const getNameFetch = (idPost) => {
  try {
    //endpoint
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
      .then((res) => {
        /* console.log(res); */
        return res.json();
      })
      .then((post) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
          .then((res) => {
            /* console.log(res); */
            return res.json();
          })
          .then((user) => {
            document.write(
              `El post fue escrito por <b>${user.name}</b>, que vive en la calle: <b>${user.address.street}</b>. El título es <b><u>${post.title}</b></u> y dice <br><b>${post.body}</b> `
            );
          });
      });
  } catch (error) {
    console.log(error);
  }
};
getNameFetch(parseInt(prompt("Ingrese el n° de post a consultar")));
