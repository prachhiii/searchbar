function getData() {
    var user=document.getElementById("loginid").value;
    console.log(user);
    if(user==""){
        alert("Please enter a GitHub ID");
    }
    else{
        fetch(`https://api.github.com/users/${user}`)
        .then(response => response.json())
        .then(data => {
            if(data.message=="Not Found"){
                alert("GitHub ID not found! Try Again");
            }
            else{
                var avatarUrl = data.avatar_url;
                var name = data.name;
                var createdAt = data.created_at;
                var login = data.login;
                var id = data.id;
                var repos = data.public_repos;
                var followers = data.followers;
                var following = data.following;
                var location = data.location;
                var twitter = data.twitter_username;
                var company = data.company;

                const imgElements = document.getElementsByClassName('uavatar');
                for (let i = 0; i < imgElements.length; i++) {
                    imgElements[i].src = avatarUrl;
                }
                document.getElementById("uid").innerHTML=id;
                document.getElementById("uname").innerHTML=name;
                document.getElementById("date").innerHTML=createdAt;
                document.getElementById("gitrepo").innerHTML=repos;
                document.getElementById("gitfoller").innerHTML=followers;
                document.getElementById("gitfollow").innerHTML=following;
                if(location!=null)
                {
                    document.getElementById("gitlocation").innerHTML=location;
                }
                else
                {
                    document.getElementById("gitlocation").innerHTML="not available";
                }
                var tw=document.getElementById("gittwitter");
                if(twitter!=null)
                {
                    tw.innerHTML=twitter;
                    tw.href="https://twitter.com/"+twitter;
                }
                else
                {
                    twitter="#";
                    tw.innerHTML="not available";
                    tw.href="https://twitter.com/"+twitter;
                }
                var gt=document.getElementById("gitprofile");
                gt.innerHTML=login;
                gt.href="https://github.com/"+login;
                if(company!=null)
                {
                    document.getElementById("gitwork").innerHTML=company;
                }
                else
                {
                    document.getElementById("gitwork").innerHTML="not available";
                }
            }
        })
        .catch(error => { 
            console.log("Server Error! Try Again");
        });
    }
  }