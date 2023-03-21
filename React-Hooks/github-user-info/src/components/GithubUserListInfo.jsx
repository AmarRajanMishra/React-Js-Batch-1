import React, { useEffect, useState } from 'react'

function GithubUserListInfo() {
    const [state, setState] = useState([]);
    // const getUsers = async () => {
    //     const response = await fetch('https://api.github.com/users');

    //         setState(await response.json());

    // }


    function getInfo(){
        fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(users => {
            console.log(users)
            setState(users)
        })
    }
    // useEffect(()=>{
    //     // getUsers();
    //     getInfo();
    // },[])


  return (
    <>
    <div>
        <button onClick={getInfo}>Click Me</button>
        {
        state.map((curElem)=>{
            const {id, avatar_url, login, bio} = curElem;
            return (
                <div key={id}>
                    <img src={avatar_url} />
                    <h1>User Name : {login}</h1>
                    <p>Bio : {bio}</p>
                </div>
            )

        })
        }
    </div>
      
    </>
  )
}

export default GithubUserListInfo;
