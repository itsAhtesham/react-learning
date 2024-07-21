import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import appwriteAuthService from "../appwrite/auth";
import { Query } from "appwrite";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteAuthService
      .getCurrentUser()
      .then((user) => {
        return appwriteService.getAllPost([Query.equal("userId", user.$id)]);
      })
      .then((posts) => {
        if (posts) setPosts(posts.documents);
      });
  }, [setPosts]);
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
