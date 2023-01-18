// Applying the concept of variable naming ✔
// https://efficient-sloth-d85.notion.site/Desafio-Nomea-o-de-vari-veis-0a8484a8cdc743558d6677910590a874

const UserList = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getUserCategory(req, res) {
  const usernameOnGithub = String(req.query.username)

  if (!usernameOnGithub) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const githubUserData = await fetch(`https://api.github.com/users/${usernameOnGithub}`);

  if (githubUserData.status === 404) {
    return res.status(400).json({
      message: `User with username "${usernameOnGithub}" not found`
    })
  }

  const githubUserDataFormattedInObject = await githubUserData.json()

  const userListOrdered = UserList.sort((userA, userB) =>  userA.followers - userB.followers); 

  const UserCategory = userListOrdered.find(user => githubUserDataFormattedInObject.followers > user.followers)

  const userWithHighestMinimumFollowers = {
    usernameOnGithub,
    category: UserCategory?.title
  }

  return userWithHighestMinimumFollowers
}

getUserCategory({ query: {
  username: 'josepholiveira'
}}, {})