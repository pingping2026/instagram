const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }]
    
    

// 获取页面元素（修复拼写错误）
let postPhoto = document.getElementById("photo")
let posterEl = document.getElementById("poster")
let nameEl = document.getElementById("name")
let locationEl = document.getElementById("location")
let likeEl = document.getElementById("like")
let commenterEl = document.getElementById("commenter")
let commentEl = document.getElementById("comment") 

let currentPostIndex = 0

function renderPost() {
    const currentPost = posts[currentPostIndex]
    
    postPhoto.src = currentPost.post
    posterEl.src = currentPost.avatar
    nameEl.textContent = currentPost.name
    locationEl.textContent = currentPost.location
    likeEl.textContent = currentPost.likes + " likes"
    commenterEl.textContent = currentPost.username
    commentEl.textContent = currentPost.comment
}

postPhoto.addEventListener("click", function() {
    currentPostIndex = (currentPostIndex + 1) % posts.length
    renderPost()
})

renderPost()