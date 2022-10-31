
  function createUser({ name, email, id }) {
    
    document.querySelector(".user-list").innerHTML += `
                        <div class="user-container">                      
                        <div>                       
                        <h3 class="user-name">Id : ${id}</h3>
                        <h3 class="user-name">Name : ${name}</h3>
                        <h3 class="user-name">E-mail : ${email}</h3>                        
                        </div>
                        </div>`;
                      }
  async function getUsers() {
    const data = await fetch("https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json", { method: "GET" });
    const userList = await data.json();
    console.log(userList)

    const pagination = document.querySelector(".pagination");

    const noOfPages = Math.ceil(userList.length/10);
    console.log(userList.length)
    console.log(noOfPages)


    for(let i=1;i<= noOfPages; i++) {
        const page = document.createElement("button")
        page.innerHTML = i;
        pagination.append(page);


        page.addEventListener('click',function() {           
            const pageUsers = userList.slice((i-1)*10, i*10);
            console.log(pageUsers)
            document.querySelector(".user-list").innerHTML = "";
            pageUsers.forEach((element)=>createUser(element));
            console.log(element.id)
        })
    }

    const firstTenUsers = userList.slice(0,10);
    firstTenUsers.forEach((user) => createUser(user));
  }
  getUsers();