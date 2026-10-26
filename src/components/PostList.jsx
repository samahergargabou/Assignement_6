import Post from './Post';

export default function PostList({ posts }) {
  return (
    <section>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </section>
  );
}