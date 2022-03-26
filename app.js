const firstPersonImageElement = document.getElementById("firstImage");
const secondPersonImageElement = document.getElementById("secondImage");

const firstNameElement = document.getElementById("firstName");
const secondNameElement = document.getElementById("secondName");

const firstUserNameElement = document.getElementById("firstUserName");
const secondUserNameElement = document.getElementById("secondUserName");

const firstDescriptionElement = document.getElementById("firstDescription");
const secondDescriptionElement = document.getElementById("secondDescription");

const firstTotalReposElement = document.getElementById("firstTotalRepos");
const secondTotalReposElement = document.getElementById("secondTotalRepos");

const firstTotalCommitsElement = document.getElementById("firstTotalCommits");
const secondTotalCommitsElement = document.getElementById("secondTotalCommits");

const firstFollowersElement = document.getElementById("firstFollowers");
const secondFollowersElement = document.getElementById("secondFollowers");

const firstFollowingElement = document.getElementById("firstFollowing");
const secondFollowingElement = document.getElementById("secondFollowing");

const firstTotalStarsElement = document.getElementById("firstTotalStars");
const secondTotalStarsElement = document.getElementById("secondTotalStars");

let firstFollowers;
let secondFollowers;
let firstFollowing;
let secondFollowing;
let firstTotalRepos;
let secondTotalRepos;

function getDataFirst() {
  fetch("https://api.github.com/users/javonn13")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      firstPersonImageElement.setAttribute("src", res.avatar_url);
      firstNameElement.innerText = res.name;
      firstUserNameElement.innerText = "@" + res.login;
      firstDescriptionElement.innerText = res.bio;
      firstFollowers = res.followers;
      firstFollowersElement.innerText = res.followers;
      firstFollowing = res.following;
      firstFollowingElement.innerText = res.following;
      firstTotalRepos = res.public_repos;
      firstTotalReposElement.innerText = res.public_repos;
    });
}

function getDataSecond() {
  fetch("https://api.github.com/users/edib")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      secondPersonImageElement.setAttribute("src", res.avatar_url);
      secondNameElement.innerText = res.name;
      secondUserNameElement.innerText = "@" + res.login;
      secondDescriptionElement.innerText = res.bio;
      secondFollowers = res.followers;
      if (firstFollowers > secondFollowers) {
        firstFollowersElement.classList.add("winner");
        secondFollowersElement.classList.add("looser");
      } else {
        firstFollowersElement.classList.add("looser");
        secondFollowersElement.classList.add("winner");
      }
      secondFollowersElement.innerText = res.followers;
      secondFollowing = res.following;

      if (firstFollowing > secondFollowing) {
        firstFollowingElement.classList.add("winner");
        secondFollowingElement.classList.add("looser");
      } else {
        firstFollowingElement.classList.add("looser");
        secondFollowingElement.classList.add("winner");
      }
      secondFollowingElement.innerText = res.following;
      secondTotalRepos = res.public_repos;

      if (firstTotalRepos > secondTotalRepos) {
        firstTotalReposElement.classList.add("winner");
        secondTotalReposElement.classList.add("looser");
      } else {
        firstTotalReposElement.classList.add("looser");
        secondTotalReposElement.classList.add("winner");
      }
      secondTotalReposElement.innerText = res.public_repos;
    });
}

function compareBoth() {
  if (firstFollowers > secondFollowers) {
    firstFollowersElement.classList.add("winner");
  }
}

getDataFirst();
getDataSecond();
// compareBoth();
