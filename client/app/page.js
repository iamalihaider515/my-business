// "use client";
// import { useEffect, useState } from "react";
// import { getPosts } from "../services/api";
// import CreatePost from "../components/CreatePost";

// export default function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     getPosts().then(res => setPosts(res));
//   }, []);

//   return (
//     <div className="max-w-2xl mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-4">Feed</h1>
//           <CreatePost />
//       {posts.map(post => (
//         <div key={post._id} className="bg-white p-4 mb-3 rounded shadow" >
//           <button
//   onClick={async () => {
//     const token = localStorage.getItem("token");

//     await fetch(`http://localhost:5000/api/posts/like/${post._id}`, {
//       method: "PUT",
//       headers: {
//         Authorization: token,
//       },
//     });

//     location.reload(); // refresh page
//   }}
//   className="text-blue-500 mt-2"
// >
//   Like
// </button>
//           <h2 className="font-semibold">{post.user?.name}</h2>
//           <p>{post.content}</p>
//           <p className="text-sm text-gray-500">
//             Likes: {post.likes.length}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { getPosts } from "../services/api";
import CreatePost from "../components/CreatePost";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto p-4">
        
        <h1 className="text-3xl font-bold mb-6 text-center">
          DevHub 🚀
        </h1>

        <CreatePost />

        {posts.map(post => (
          <div key={post._id} className="bg-white p-4 mb-4 rounded-xl shadow">
            <h2 className="font-semibold text-lg">
              {post.user?.name}
            </h2>

            <p className="mt-2">{post.content}</p>

            <div className="flex justify-between mt-3">
              <span className="text-gray-500">
                ❤️ {post.likes.length}
              </span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}