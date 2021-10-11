export const getUsers = () =>
  fetch('https://dummyapi.io/data/v1/post?limit=10', {
    headers: {
      'app-id': '616301612d5c2975ba6340aa',
    },
  })
    .then(response => response.json())
    .then(resData => resData.data);
