import axios from 'axios'
import data from './data.json'

const loadPosts = async () => {
        let response = await axios.get(`https://www.instagram.com/splitconfort/?__a=1`, {
        responseType: "json",
        headers: {
            'Content-Type': 'application/json'
          }
    })

    if(!response.data){
        response = {
            data
        }
    }

    const posts = response.data.graphql.user.edge_owner_to_timeline_media.edges//[0].node.display_url

    let postsInfo = []

    //console.log(posts[0].node)
    for (let index = 0; index < posts.length; index++) {
        if(index < 4){
            postsInfo.push(posts[index].node)
        }
        
    }

    return postsInfo
}

export default loadPosts