// Modern JavaScript Features with Social Media Feed Example

// 1. Destructuring
const user = {
    name: 'Rahul',
    age: 25,
    posts: ['First post!', 'Learning JavaScript'],
    profile: {
        bio: 'Web Developer',
        location: 'India'
    }
};

// Old way
// const name = user.name;
// const age = user.age;

// Modern way - Destructuring
const { name, age, profile: { bio } } = user;
console.log(`${name} (${age}) - ${bio}`);

// 2. Spread Operator
const newPost = {
    id: 3,
    content: 'Just learned modern JavaScript!',
    likes: 0,
    comments: []
};

const updatedFeed = [...user.posts, newPost.content];
console.log('Updated Feed:', updatedFeed);

// 3. Template Literals
const postMessage = `
    🎉 New Post Alert! 🎉
    -------------------
    By: ${name}
    Content: ${newPost.content}
    Likes: ${newPost.likes}
    -------------------
    #JavaScript #WebDev
`;
console.log(postMessage);

// 4. Arrow Functions
const addLike = (post) => ({
    ...post,
    likes: post.likes + 1
});

const likedPost = addLike(newPost);
console.log('Liked Post:', likedPost);

// 5. Modern Array Methods
const posts = [
    { id: 1, content: 'Hello World!', likes: 10 },
    { id: 2, content: 'Learning React', likes: 15 },
    { id: 3, content: 'Modern JavaScript', likes: 20 }
];

// Find popular posts (more than 15 likes)
const popularPosts = posts.filter(post => post.likes > 15);
console.log('Popular Posts:', popularPosts);

// Get total likes
const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
console.log('Total Likes:', totalLikes);

// 6. Optional Chaining
const socialMedia = {
    user: {
        profile: {
            // bio: 'Web Developer'  // Commented out to demonstrate optional chaining
        }
    }
};

// Safe way to access nested properties
const userBio = socialMedia?.user?.profile?.bio ?? 'No bio available';
console.log('User Bio:', userBio); 