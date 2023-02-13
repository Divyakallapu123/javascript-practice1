
      function getData() {
        fetch("https://reqres.in/api/users?page=2")
          .then(r => {
            return r.json();
          })
          .then(json => {
           
            const h = json.data
              .map(function(item) {
                 return `${item.first_name }  ${item.last_name}     email: ${item.email}  <br>`
                // return  item.first_name + " " + item.last_name + " " +"email:" + item.email + "<br>";
              })
              .join(" ");
           
            document.querySelector("#details").innerHTML = h;
          })
          .catch(error => {
            console.log(error);
          });
      }
      
      getData();